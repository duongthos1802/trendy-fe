import React from 'react'
import className from 'classnames'
import { generateRoutes } from '../extensions/routes'
import Link from 'next/link'

const Title = ({ title, category, customTitleClass }) => {

  return (
    <div className={className({
      'trendy-title': true
    })}>
      <h2 className={className({
        'd-inline': true,
        'trendy-title-border': true
      }, customTitleClass)}>

        {
          category
            ? <Link href={`/${generateRoutes(category.option)}/${category.slug}`}>
              <span className='mb-0 text-color-primary-blue font-weight-bold'>{category?.name}</span>
            </Link>
            : <span className='mb-0 text-color-primary-blue font-weight-bold'>{title}</span>
        }
      </h2>
    </div>
  )
}

export default Title