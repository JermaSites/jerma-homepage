import { useEffect, useState } from 'react'
import { AuthorType, ContentType } from '~/models'
import { getAllAuthorsInfo } from '~/utils'

export const useAllAuthors = (content: ContentType | null) => {
  const [allAuthors, setAllAuthors] = useState<AuthorType[] | null>(null)

  useEffect(() => {
    if (!content) return
    setAllAuthors(getAllAuthorsInfo(content))
  }, [content])

  return { allAuthors }
}
