import { PostType } from '~/models'
import { Link } from '.'

export const CreditsModal = ({ post }: { post: PostType }) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
      }}
      className="appear-animation opacity-0 justify-center items-center fixed w-screen h-screen top-0 left-0 z-50 text-jerma-light-blue scale-75 -translate-x-full peer-focus:translate-x-0 peer-focus:opacity-100 peer-focus:scale-100 flex pt-8 flex-col bg-black/20"
    >
      <div className="w-fit h-fit bg-jerma-deep-blue overflow-y-auto max-h-full p-6 rounded-xl shadow text-left m-6">
        <h1 className="text-3xl font-light mb-8">{post.title}</h1>
        <div className="h-px bg-jerma-light-blue/20 -mx-6 px-6 mb-6" />
        {post.authors.map((author, i) => (
          <div key={`${author.name}-${i}`}>
            <h2 className="font-light text-3xl text-jerma-pink">
              {author.url ? (
                <Link
                  href={author.url}
                  className="hover:underline decoration-1"
                >
                  {author.name}
                </Link>
              ) : (
                author.name
              )}
            </h2>
            <p>{author.description}</p>
            <br />
            {author.compoundSentence && (
              <p>
                {author?.targets?.map((target, i) => (
                  <span key={`${target}-${i}`}>
                    {author.compoundSentence!.split(target)[0]}
                    <Link
                      className="text-jerma-pink hover:underline"
                      href={author.urls![i]}
                    >
                      {target}
                    </Link>
                    {author.compoundSentence!.split(target)[1]}
                  </span>
                ))}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
