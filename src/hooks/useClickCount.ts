import { useEffect, useState } from 'react'

export const useClickCount = (resetAt = Infinity, startAt = 0) => {
  const [clickCount, setClickCount] = useState(0)

  useEffect(() => {
    if (clickCount > resetAt) {
      setClickCount(startAt)
    }
  }, [clickCount])

  return { clickCount, setClickCount }
}
