import { AuthorType, ContentType } from '~/models'
import { addHTTP } from '.'

export const getAllAuthorsInfo = (content: ContentType) => {
  const Authors: Array<AuthorType> = []

  content?.sections?.forEach((section) =>
    section.posts.forEach((post) =>
      post.authors.forEach((author) => {
        const id = Authors.map((x) => x.name).indexOf(author.name)

        const clone = id >= 0

        if (author.name == 'team') return

        if (clone) Authors[id].project_count! += 1

        if (clone || !author.url) return

        author.project_count = 1

        if (author.url.includes('github'))
          author.avatar = addHTTP(author.url + '.png')

        Authors.push(author)
      })
    )
  )

  return Authors
}
