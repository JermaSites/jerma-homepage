import { AuthorType } from '~/models'
import { Link } from '.'
import { MergeIcon } from '~/Icons'

export const Collaborator = ({ author }: { author: AuthorType }) => {
  return (
    <Link
      key={author.name + '-collaborator'}
      className="no-underline  hover:opacity-100 flex relative items-center py-2 border-b border-jerma-light-blue/10 m:hover:bg-slate-500/10 -mx-2 px-2"
      href={author.url}
    >
      {author.avatar && (
        <div className="relative shrink-0 h-12 w-12 overflow-hidden rounded-full">
          <img src={author.avatar} alt="" />
        </div>
      )}
      <p className="ml-3 text-left w-full font-bold flex justify-between items-center">
        <span>{author.name}</span>
        <span
          className={`font-mono font-normal flex gap-1 items-center ${
            author.project_count! > 10 ? 'gold' : 'text-jerma-light-blue/75'
          }`}
        >
          <span className="text-2xl">
            {author.project_count! > 9
              ? author.project_count
              : '0' + author.project_count}
          </span>
          <MergeIcon />
        </span>
      </p>
    </Link>
  )
}
