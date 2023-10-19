export type ContentType = {
  donate: string
  sections: Array<SectionType>
}

export type SectionType = {
  title: string
  posts: Array<PostType>
}

export type PostType = {
  title: string
  description: string
  authors: Array<AuthorType>
  url: string
  urlName?: string
}

export type AuthorType = {
  project_count?: number
  name: string
  url?: string
  avatar?: string
  description?: string
  compoundSentence?: string
  targets?: Array<string>
  urls?: Array<string>
}
