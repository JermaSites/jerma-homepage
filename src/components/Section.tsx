import { kebabCase } from '~/utils'

export const Section = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => {
  return (
    <div id={kebabCase(title)} className="m-auto mx-0 sm:mx-4 pt-4">
      <div className="pt-16 sticky top-4 md:px-0 px-3 gap-4 items-center flex bg-jerma-deep-blue z-10 md:pb-1 pb-6">
        <h2 className="text-2xl text-jerma-pink font-semibold text-center md:text-left">
          {title}
        </h2>
        <div className="h-px flex-grow bg-jerma-pink" />
      </div>
      {children}
    </div>
  )
}
