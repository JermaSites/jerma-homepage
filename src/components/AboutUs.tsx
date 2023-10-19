import { DevIcon } from '~/Icons'

export const AboutUs = ({
  children,
  rave,
  title,
}: {
  children: React.ReactNode
  rave: boolean
  title: string
}) => {
  return (
    <>
      <h1
        className={`mt-8 mb-2 text-xl flex justify-center ${
          !rave ? '' : 'animate-rainbow-text'
        }`}
      >
        <span className="flex items-center gap-2 text-center mx-auto">
          <DevIcon />
          {title}
        </span>
      </h1>
      <p className="italic text-jerma-light-blue/75">{children}</p>
    </>
  )
}
