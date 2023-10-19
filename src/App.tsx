import { CollabsSkeleton } from './components/Skeletons/CollabsSkeleton'
import { PostsSkeleton } from './components/Skeletons/PostsSkeleton'
import {
  AboutUs,
  CalloutHeader,
  Collaborator,
  Collaborators,
  Footer,
  JermaSpin,
  Link,
  Navbar,
  Post,
  Section,
} from './components'
import { useAllAuthors, useClickCount, useContent } from './hooks'

export default function Home() {
  const { clickCount, setClickCount } = useClickCount(15)
  const { content } = useContent()
  const { allAuthors } = useAllAuthors(content)

  const rave = clickCount >= 10

  return (
    <div className="relative min-h-screen max-w-full">
      <Navbar rave={rave} content={content} />
      <main className="pb-40">
        <CalloutHeader>
          You can contribute on{' '}
          <Link
            href="https://github.com/JermaSites"
            className="font-bold text-jerma-pink hover:underline"
          >
            Github!
          </Link>
        </CalloutHeader>
        <div className="flex m-auto max-w-7xl flex-col md:flex-row-reverse">
          <div className="max-w-xs mx-auto text-jerma-light-blue text-center">
            <JermaSpin {...{ rave, setClickCount }} />
            <AboutUs title={'We make Jerma things.'} {...{ rave }}>
              We make jerma sites for people to enjoy (or hate) of varying
              quality. <br />
              All of our sites are open source! If you want to contribute,
              please do!
            </AboutUs>
            <Collaborators>
              {allAuthors?.map(
                (author) =>
                  author.avatar && (
                    <Collaborator key={author.name} {...{ author }} />
                  )
              ) || <CollabsSkeleton />}
            </Collaborators>
          </div>
          <div className="w-px mx-2 bg-slate-300/10 shadow-inner" />
          <div className="flex-grow">
            {content ? (
              content.sections.map((section) => (
                <Section title={section.title} key={section.title}>
                  {section.posts.map((post) => (
                    <Post key={post.url} {...{ post }} />
                  ))}
                </Section>
              ))
            ) : (
              <PostsSkeleton />
            )}
          </div>
        </div>
      </main>

      <Footer>Made by Viewers like you {'<3'}</Footer>
    </div>
  )
}
