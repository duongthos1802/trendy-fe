import React from "react"
import { NextSeo } from "next-seo"
import {
  DEFAULT_HTTP_SITE,
  DEFAULT_IMAGE_SITE,
  DEFAULT_SITE,
} from "../constants"

const defaultSite = DEFAULT_SITE

const defaultTitle = `${DEFAULT_SITE} - Chuyên dùng cho pha chế`

const defaultDescription = ``

const defaultImage = require('../static/assets/images/default/seo.jpeg')

const GenerateSeo = ({ title, description, image, url, product, recipe }) => {
  // generate title
  const generateTitle = (title) => {
    if (!title) return defaultTitle
    return `${title} - ${defaultTitle}`
  }

  // generate description
  const generateDescription = (description) => {
    if (!description) return defaultDescription
    return description
  }

  // generate image
  const generateImage = (image) => {
    if (!image) return defaultImage
    return image
  }

  const titlePage = generateTitle(title)
  const descriptionPage = generateDescription(description)
  const imagePage = generateImage(image)

  return (
    <NextSeo
      title={titlePage}
      description={descriptionPage}
      canonical={DEFAULT_HTTP_SITE}
      openGraph={{
        url: url ? url : DEFAULT_HTTP_SITE,
        title: titlePage,
        description: descriptionPage,
        images: [
          {
            url: imagePage,
            width: 800,
            height: 600,
            alt: DEFAULT_SITE,
          },
        ],
        site_name: defaultSite,
      }}
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
      facebook={{
        appId: "3565378190189354",
      }}
    />
  )
}

export default GenerateSeo
