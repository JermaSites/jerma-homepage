import DOMPurify from 'dompurify'
import parse from 'html-react-parser'

export const htmlFrom = (htmlString: string) => {
  const cleanHtmlString = DOMPurify.sanitize(htmlString, {
    USE_PROFILES: { html: true },
  })
  const html = parse(cleanHtmlString)
  return html
}
