const Routers = require('./server/routers')
const router = Routers.routers.defined
export const CONFIG = {
  advertisingBudget: {
    min: 0,
    max: 999999999
  },
  inputMoney: {
    formatter: value => `₩ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    parser: value => value.replace(/₩\s?|(,*)/g, '')
  },
  inputNumber: {
    formatter: value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    parser: value => value.replace(/₩\s?|(,*)/g, '')
  },
  uploadAcceptTypes: 'image/x-png,image/gif,image/jpeg,video/mp4,video/x-m4v,video/*',
  formErrorMessages: {
    required: 'This field is required',
    minLength: 'This field has min length {min} characters',
    maxLength: 'This field has max length {max} characters',
    fileReachMaxSize: 'The size of the file must be less than {maxSize}MB in order to be uploaded',
    emailInvalid: 'Email is invalid',
    idInvalid: 'Id is invalid',
    passwordInvalid: 'Password is invalid'
  },
  maxUploadFileSize: 20,
  regex: {
    id: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{1,}$/g,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g
  },

  routers: router.defined,
  navigation: {
    creator: {
      topMenu: [
        { name: 'home-page', path: router.homepage.path, component: router.homepage.component }
      ]
    }
  }
}