import { GithubIcon } from '~/Icons'
import { Link } from '.'

export const Collaborators = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="sticky top-12">
      <div className="pt-8 scale-90 bg-jerma-deep-blue z-10 flex items-center gap-2 sticky top-8 pb-2">
        <h2 className="text-2xl mx-2 text-jerma-pink font-semibold text-center md:text-left">
          Collaborators
        </h2>
        <div className="bg-jerma-pink flex-grow h-px" />
      </div>
      <div className="mx-2 -mt-6 scale-90">
        {children}
        <Link
          href="https://github.com/JermaSites"
          className="flex items-center w-full text-center text-jerma-pink no-underline mt-8 md:mt-4 font-semibold justify-end scale-110 -translate-x-8 md:translate-x-0  md:scale-100 hover:underline"
        >
          <p className="mt-[2px] mr-2">Join us</p>
          <GithubIcon />
        </Link>
      </div>
    </div>
  )
}
