import { PostType } from '~/models'

export const CreditsBtn = ({ post }: { post: PostType }) => {
  return (
    post.authors.some((author) => author.description) && (
      <>
        <br />
        <button
          onClick={(e) => {
            e.stopPropagation()
          }}
          tabIndex={0}
          className="peer special-button focus:opacity-0 float-right"
        >
          show credits
        </button>{' '}
      </>
    )
  )
}
