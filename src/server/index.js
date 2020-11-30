const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const port = (process.env.NODE_ENV !== 'production')
  ? 3000
  : (process.env.PORT || 8080)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev: true, dir: 'src' })
const handle = app.getRequestHandler()

const { createProxyMiddleware } = require('http-proxy-middleware')
const Routers = require('./routers')

const apiPaths = {
  '/api': {
    target: 'http://localhost:1337',
    pathRewrite: {
      '^/api': '/api'
    },
    changeOrigin: true
  },
  '/uploads': {
    target: 'http://localhost:1337',
    pathRewrite: {
      '^/uploads': '/uploads'
    },
    changeOrigin: true
  }
}

app.prepare().then(() => {
  const server = express()

  // proxy
  if (dev) {
    server.use('/api', createProxyMiddleware(apiPaths['/api']))
    server.use('/uploads', createProxyMiddleware(apiPaths['/uploads']))
  }

  server.use(bodyParser.urlencoded({ extended: false }))
  server.use(bodyParser.json())

  for (const i in Routers.routers.defined) {
    server.get(Routers.routers.defined[i].path, (req, res) => {
      return app.render(req, res, Routers.routers.defined[i].component, {
        ...req.query,
        ...req.params
      })
    })
  }
  /* 404. */
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})