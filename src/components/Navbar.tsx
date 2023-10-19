import { ChevronUpIcon, JermaTeethIcon } from '~/Icons'
import { ContentType, SectionType } from '~/models'
import { goTo, lowerCase } from '~/utils'

export const Navbar = ({
  content,
  rave,
}: {
  content: ContentType | null
  rave: boolean
}) => (
  <nav className="block w-full text-jerma-light-blue text-center  py-4 bg-jerma-deep-blue sticky top-0 border-b border-jerma-light-blue/20 z-30">
    <div className="relative flex justify-center max-w-7xl items-center mx-4 xl:mx-auto ">
      <span className="md:relative md:mr-0 mr-4 absolute select-none text-xl flex items-center gap-2 -z-10">
        {!rave ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mb-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.867 19.125h.008v.008h-.008v-.008z"
            />
          </svg>
        ) : (
          <></>
        )}
        Jer{rave ? ',' : 'm'}a{rave ? '...' : ' Sites'}
      </span>
      <div className="space-x-8 hidden md:block ml-auto">
        {content &&
          content?.sections?.map((section: SectionType) => (
            <button
              className="hover:underline decoration-2 text-jerma-pink"
              key={'menu-' + section.title}
              onClick={goTo}
            >
              {lowerCase(section.title)}
            </button>
          ))}
      </div>
      <button
        onClick={() => goTo('top')}
        className="md:hidden -my-2 text-jerma-light-blue"
      >
        <ChevronUpIcon />
      </button>
      <div className="md:hidden block ml-auto">
        <div
          tabIndex={0}
          className="transition-color duration-500 peer cursor-pointer relative text-jerma-light-blue z-20 focus:text-jerma-pink"
        >
          <JermaTeethIcon />
        </div>
        <div className="fixed -right-4 -top-4 transition-transform duration-300  peer-focus:translate-x-0 translate-x-full flex flex-col items-center  border border-jerma-pink pt-[61px] z-10 bg-jerma-deep-blue">
          {content &&
            content?.sections?.map((section: SectionType) => (
              <button
                key={'mobile-menu-' + section.title}
                className="block min-w-max bg-jerma-deep-blue hover:bg-jerma-light-blue hover:text-jerma-deep-blue w-full py-4 px-16 text-center even:brightness-90"
                onClick={goTo}
              >
                {lowerCase(section.title)}
              </button>
            ))}
        </div>
      </div>
    </div>
  </nav>
)
