import { PostType } from '~/models'
import { CreditsBtn, CreditsModal, Link, PostAuthors } from '.'
import { htmlFrom } from '~/utils'

export const Post = ({ post }: { post: PostType }) => {
  return (
    <div className="flex-wrap p-4 text-jerma-light-blue flex justify-between border-b border-jerma-light-blue/20 last:border-b-0 py-4 sm:py-4">
      <div className="py-2 md:py-0">
        <Link
          href={post.url}
          className="text-3xl font-semibold mb-1 block hover:underline decoration-2 w-fit"
        >
          {post.title}
        </Link>
        <p className="text-jerma-light-blue/80">{htmlFrom(post.description)}</p>
      </div>
      <div className="flex flex-col items-end justify-between ml-auto py-2 md:py-0">
        <Link
          href={post.url}
          className="font-semibold no-under-link text-jerma-pink text-2xl md:text-xl flex items-center fill-jerma-pink text-right"
        >
          <p>{post.url.split('.')[0]}</p> &nbsp;
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
          >
            <path d="M5.175 21.475q-1.125 0-1.887-.763-.763-.762-.763-1.887V5.175q0-1.125.763-1.888.762-.762 1.887-.762H12v2.65H5.175v13.65h13.65V12h2.65v6.825q0 1.125-.762 1.887-.763.763-1.888.763ZM10.15 15.7 8.3 13.85 17 5.175h-3v-2.65h7.475V10h-2.65V7Z" />
          </svg>
        </Link>
        <div className="w-fit">
          <span className="text-jerma-light-blue text-sm">by </span>
          <PostAuthors {...{ post }} />
          <CreditsBtn {...{ post }} />
          <CreditsModal {...{ post }} />
        </div>
      </div>
    </div>
  )
}
