import { PostType } from '~/models'
import { Link } from '.'

export const PostAuthors = ({ post }: { post: PostType }) => {
  return post.authors
    .filter((author) => author.name)
    .map((author, i, posts) => {
      if (i == posts.length - 1) {
        return author.url ? (
          <Link
            key={`${author.name}-${i}`}
            className="font-bold text-jerma-bright-blue whitespace-nowrap md:text-sm hover:underline"
            href={author.url}
          >
            {author.name}
          </Link>
        ) : (
          author.name
        )
      }
      if (i == posts.length - 2) {
        return author.url ? (
          <span key={`${author.name}-${i}`}>
            <Link
              className="font-bold text-jerma-bright-blue whitespace-nowrap md:text-sm hover:underline"
              href={author.url}
            >
              {author.name}
            </Link>{' '}
            <span className="text-sm">and</span>{' '}
          </span>
        ) : (
          author.name + ' and '
        )
      }
      if (i < posts.length - 2) {
        return author.url ? (
          <span key={`${author.name}-${i}`}>
            <Link
              className="font-bold text-jerma-bright-blue whitespace-nowrap md:text-sm hover:underline"
              href={author.url}
            >
              {author.name}
            </Link>
            ,{' '}
          </span>
        ) : (
          <span key={`${author.name}-${i}`}>{author.name + ', '}</span>
        )
      }
    })
}
