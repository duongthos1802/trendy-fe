import truncate from 'html-truncate'

import parse from 'html-react-parser'

import sanitizeHtml from 'sanitize-html'
import { MAX_LENGTH_DESCRIPTION } from '../constants'

const entities = require('html-entities').AllHtmlEntities

const sanitizeHtmlOptions = {
  allowedTags: false,
  allowedAttributes: false
}

export const emojiParser = (content) => {
  if (content) {
    return content.replace(/\\u(\w\w\w\w)/g, function (a, b) {
      let codePoint = parseInt(b, 16)
      return String.fromCodePoint(codePoint)
    })
  }
  return ''
}

export const htmlParse = content => {
  if (!content || content.length === 0) {
    return null
  }
  return parse(sanitizeHtml(content, sanitizeHtmlOptions))
}

export const htmlParseContent = content => {
  const contentDecode = decodeContent(content)
  return htmlParse(contentDecode)
}

export const decodeContent = content => {
  if (!content || content.length === 0) {
    return null
  }
  return entities.decode(content)
}

export const encodeContent = content => {
  if (!content || content.length === 0) {
    return null
  }
  return entities.encode(content)
}

export const removeDuplicateBrTags = content => {
  return content
    ? content.replace(
      /<p><br \/><\/p><p><br \/><\/p><p><br \/><\/p><p><br \/><\/p><p><br \/><\/p>/gi,
      '<p><br></p>').replace(/<p><br \/><\/p><p><br \/><\/p><p><br \/><\/p><p><br \/><\/p>/gi,
        '<p><br></p>').replace(/<p><br \/><\/p><p><br \/><\/p><p><br \/><\/p>/gi, '<p><br></p>').replace(/<p><br \/><\/p><p><br \/><\/p>/gi, '<p><br></p>').replace(/<p><br \/><\/p>/gi, '<p><br></p>').replace(/<p><br><\/p><p><br><\/p><p><br><\/p><p><br><\/p><p><br><\/p>/gi,
          '<p><br></p>').replace(/<p><br><\/p><p><br><\/p><p><br><\/p><p><br><\/p>/gi,
            '<p><br></p>').replace(/<p><br><\/p><p><br><\/p><p><br><\/p>/gi, '<p><br></p>').replace(/<p><br><\/p><p><br><\/p>/gi, '<p><br></p>').replace(/<br \/><br \/><br \/><br \/><br \/>/gi, '<br>').replace(/<br \/><br \/><br \/><br \/>/gi, '<br>').replace(/<br \/><br \/><br \/>/gi, '<br>').replace(/<br \/><br \/>/gi, '<br>').replace(/<br \/>/gi, '<br>').replace(/<br><br><br><br><br>/gi, '<br>').replace(/<br><br><br><br>/gi, '<br>').replace(/<br><br><br>/gi, '<br>').replace(/<br><br>/gi, '<br>')
    : null
}

export const htmlContentWithBBCode = content => {
  return content
    ? htmlParse(
      entities.decode(emojiParser(content))
    )
    : null
}

export const stripHtmlContentWithBBCode =
  (content, characterCount, ellipsis) => {
    if (!content) return null

    const truncateHtml = truncateHtmlContent(
      content,
      characterCount,
      false,
      ellipsis
    )

    // 6. return string
    return truncateHtml ? htmlContentWithBBCode(truncateHtml) : null
  }

export const truncateHtmlContent = (
  content,
  characterCount,
  contentNeedEncode,
  ellipsis = ''
) => {
  if (!content) return null
  //decode content post
  const contentDecode = decodeContent(content)
  //get short description
  const contentWithoutXss = sanitizeHtml(
    contentDecode,
    sanitizeHtmlOptions
  )
  // 3. check if not exist content
  if (!contentWithoutXss || contentWithoutXss.length === 0) {
    return null
  }
  const truncateHtmlWithoutXss = decodeContent(contentWithoutXss)
  //remove multi br to sign br
  let truncateHtml = truncateHtmlWithoutXss
  if (characterCount) {
    truncateHtml = truncate(
      truncateHtmlWithoutXss,
      characterCount, {
      ellipsis: `...${ellipsis}`
    })
  }

  const removeMultiBr = removeDuplicateBrTags(truncateHtml)
  if (contentNeedEncode) {
    return entities.encode(removeMultiBr)
  }
  return removeMultiBr
}

export const removeAllHtmlTags = (content) => {
  const contentDecode = decodeContent(content)
  if (!contentDecode) {
    return null
  }
  return sanitizeHtml(contentDecode, {
    allowedTags: [],
    allowedAttributes: {}
  })
}


export const generateDescriptionForSeo = (description, defaultDescription) => {
  if (!description) return defaultDescription
  const contentRemoveHtml = removeAllHtmlTags(description)
  if (!contentRemoveHtml) return defaultDescription
  return truncateHtmlContent(contentRemoveHtml, MAX_LENGTH_DESCRIPTION)
}
