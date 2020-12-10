import {
  enumType,
  DEFAULT_IMAGE_BANNER,
  DEFAULT_IMAGE_PRODUCT,
  UPLOADS_IMAGE_URL
} from '../constants'


export const getImageUrlByFilename = (
  {
    fileName,
    type,
    defaultImage = null,
    autoSize = false
  }) => {
  if (!fileName) return defaultImage
  if (checkHttpUrl(fileName)) return fileName
  return true
    ? getPreviewImage({
      fileName: fileName,
      imagePath: type,
      autoSize
    })
    : `${BANNER_IMAGE_BASE_URL}${fileName}`
}

export const getPreviewImage = (
  {
    imagePath,
    fileName
  }
) => {
  const keyName = `${imagePath}/${fileName}`
  return `${UPLOADS_IMAGE_URL}/${keyName}`
}

export const checkHttpUrl = (url) => {
  let pattern = /^((http|https|ftp):\/\/)/
  return pattern.test(url)
}

//lấy link banner
export const getBannerUrl = (url, type) => {
  return getImageUrlByFilename({
    type: type || enumType.imagePath.Banner,
    defaultImage: '',
    fileName: url
  })
}
//lấy link block
export const getBlockUrl = (url, type) => {
  return getImageUrlByFilename({
    type: type || enumType.imagePath.HtmlBlock,
    defaultImage: '',
    fileName: url
  })
}

export const getUrlImageProduct = (url, type) => {
  return getImageUrlByFilename({
    type: type || enumType.imagePath.Product,
    fileName: url,
    defaultImage: ''
  })
}

export default {
  getBannerUrl,
  getUrlImageProduct,
  getBlockUrl
}