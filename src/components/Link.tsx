import { addHTTP } from '~/utils'

export const Link = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      {...props}
      href={addHTTP(props.href!)}
      target="_blank"
      rel="noopener noreferrer"
    />
  )
}
