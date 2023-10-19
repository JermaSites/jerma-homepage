import { kebabCase } from '.'

export const goTo = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent> | 'top'
) => {
  if (e == 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  e.preventDefault()
  const element = document.querySelector(
    '#' + kebabCase(e.currentTarget.innerText)
  )
  element!.scrollIntoView({ behavior: 'smooth' })
}
