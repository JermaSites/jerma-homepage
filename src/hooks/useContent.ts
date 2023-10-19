import { useEffect, useState } from 'react'
import { ContentType } from '~/models'

export const useContent = () => {
  const [content, setContent] = useState<ContentType | null>(null)
  useEffect(() => {
    fetch('/content.json')
      .then((raw) => raw.json())
      .then((data) => {
        setContent(data)
      })
  }, [])
  return { content }
}
