import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import _ from 'lodash'

import React from 'react';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';
import { Navbar } from '../components/Navbar'

const htmlFrom = (htmlString) => {
  const cleanHtmlString = DOMPurify.sanitize(htmlString,
    { USE_PROFILES: { html: true } });
  const html = parse(cleanHtmlString);
  return html;
}

export const goTo = (e) => {
  if (e == 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  e.preventDefault();
  let element = document.querySelector('#' + _.kebabCase(e.target.innerText));
  let topOffset = 15;
  let elementPosition = element.getBoundingClientRect().top;
  let offsetPosition = elementPosition + window.pageYOffset - topOffset;
  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
}

const addHTTP = link => link?.includes('http') ? link : 'https://' + link

const Link = props => {
  return <a {...props} href={addHTTP(props.href)} target="_blank" rel="noopener noreferrer" />
}

export default function Home() {
  const jermaLogo = useRef()

  const [content, setContent] = useState(null);
  const [allAuthors, setAllAuthors] = useState(null)

  useEffect(() => {
    fetch("/content.json")
      .then(raw => raw.json())
      .then(data => {
        setContent(data)
      })
  }, [])

  useEffect(() => {
    if (!content) return
    setAllAuthors(getAllAuthorsInfo(content))
  }, [content])

  return (
    <div className='relative min-h-screen max-w-full'>
      <Head>
        <title>Jerma Sites</title>
        <meta name="description" content="We make jerma sites for people to enjoy (or hate) of varying quality." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar content={content} />
      <main className='pb-40'>
        <span className='opacity-0 opacity-1' />
        <div className='bg-jerma-pink text-jerma-deep-blue text-center py-4'>📣 You can contribute on <Link href='https://github.com/JermaSites' className='font-bold'>Github!</Link></div>


        <div className='flex m-auto max-w-7xl flex-col md:flex-row-reverse'>
          <div className='max-w-xs mx-auto'>
            <div ref={jermaLogo} className='select-none mt-8 flex justify-center'>
              <Image src="/JermaSPIN1.gif" alt="" width={182} height={193}/>
            </div>
            <div className='text-jerma-light-blue text-center mt-8 sticky top-20'>
              <h1 className='mb-2 text-xl'>{'</> We make Jerma things.'}</h1>
              <p className='italic font-light text-lg'>We make jerma sites for people to enjoy (or hate) of varying quality. <br />
                All of our sites are open source! If you want to contribute, please do!</p>


              <div className='pt-8 sticky scale-90 top-12 bg-jerma-deep-blue z-10'>
                <h2 className='text-2xl mx-2 text-jerma-pink font-semibold pb-2 text-center md:text-left border-b-[1px] border-jerma-pink'>Collaborators</h2>
              </div>
              <div className='mx-2 -mt-6 scale-90'>
                {allAuthors?.map(author => author.avatar &&
                  <Link key={author.name + '-collaborator'} className='no-underline  hover:opacity-100 flex relative items-center py-2 border-b border-jerma-light-blue/10 m:hover:bg-slate-500/5' href={author.url}>
                  
                    {author.avatar && <div className='relative h-12 w-14 overflow-hidden rounded-full'><Image src={author.avatar} alt='' layout='fill' /></div>}
                    <p className='ml-3 text-left w-full'><span className={`${author.project_count > 5 && 'gold'}`}>{author.name}</span> <br /> <span className={`opacity-70 text-sm`}>{author.project_count} collab{author.project_count > 1 && 's'}</span></p>
                  </Link>
                )
                }
                <Link href='https://github.com/JermaSites' className='flex items-center w-full text-center text-jerma-pink no-underline mt-4 font-semibold justify-end'><p className='mt-[2px] mr-2'>Join us</p><Plus  className='fill-jerma-pink'/></Link>
              </div>
            </div>
          </div>
          <div className="w-px mx-2 bg-slate-300/10 shadow-inner"/>
          <div>
            {
              content && content.sections.map((section, i) =>
                <div key={_.kebabCase(section.title) + i} id={_.kebabCase(section.title)} className='m-auto mx-0 sm:mx-4'>

                  <div className='pt-16 sticky top-4 bg-jerma-deep-blue z-10'>
                    <h2 className='text-2xl text-jerma-pink font-semibold pb-2 text-center md:text-left border-b-[1px] border-jerma-pink'>{section.title}</h2>
                  </div>

                  {
                    section.posts.map((post, i) =>
                      <div key={`${post.title}${i}`} className='flex-wrap p-4 text-jerma-light-blue flex justify-between items-center border-b border-jerma-light-blue/50 odd:bg-black/10 last:border-b-0 py-4 sm:py-4'>
                        <div className='py-2 md:py-0'>
                          <h3 className='text-3xl font-semibold mb-2'>{post.title}</h3>
                          <p className=''>{htmlFrom(post.description)}</p>
                        </div>
                        <div className='text-right ml-auto py-2 md:py-0'>
                          {getPostAuthorNames(post)}
                          {getPostCredits(post)} <br />
                          <Link href={post.url} className='text-jerma-pink' >{post.urlName || post.url}</Link>
                          <CreditsModal post={post} />
                        </div>
                      </div>)
                  }
                </div>
              )
            }
          </div>


        </div>

      </main>

      <footer className='bg-jerma-bright-blue text-jerma-deep-blue text-center py-4 absolute bottom-0 w-full'>
        Made by Viewers like you ❤️ <Link href={content?.donate}>Donate if you want</Link> ❤️
      </footer>
    </div>
  )
}

const getAllAuthorsInfo = ( content ) => {
  let Authors = [];

  content?.sections?.forEach(section => section.posts.forEach(post => post.authors.forEach(author => {
    const id = Authors.map(x => x.name).indexOf(author.name)

    const clone = id >= 0

    if (author.name == 'team') return

    if (clone) Authors[id].project_count += 1

    if (clone || !author.url) return

    author.project_count = 1

    if (author.url.includes('github'))
      author.avatar = addHTTP(author.url + '.png')
    
    Authors.push(author)
  })))

  return Authors;

}

const Plus = () => {
  return <svg fill='currentColor' xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M13.95 16h2.1v-2.95H19v-2.1h-2.95V8h-2.1v2.95H11v2.1h2.95ZM6 20.5q-2.725-.95-4.362-3.288Q0 14.875 0 12q0-2.875 1.638-5.213Q3.275 4.45 6 3.5V6q-1.725.875-2.725 2.475t-1 3.525q0 1.9 1 3.512Q4.275 17.125 6 18Zm9 .5q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.925-2.85Q6 13.875 6 12t.713-3.513q.712-1.637 1.925-2.85 1.212-1.212 2.85-1.925Q13.125 3 15 3t3.513.712q1.637.713 2.85 1.925 1.212 1.213 1.925 2.85Q24 10.125 24 12t-.712 3.512q-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q16.875 21 15 21Zm0-9Zm0 6.725q2.8 0 4.763-1.963Q21.725 14.8 21.725 12t-1.962-4.763Q17.8 5.275 15 5.275t-4.762 1.962Q8.275 9.2 8.275 12t1.963 4.762Q12.2 18.725 15 18.725Z"/></svg>
}

const CreditsModal = ({ post }) => {
  return (
    <div className='appear-animation opacity-0 justify-center items-center fixed w-screen h-screen top-0 left-0 z-50 text-jerma-light-blue scale-75 -translate-x-full peer-focus:translate-x-0 peer-focus:opacity-100 peer-focus:scale-100 flex pt-8 flex-col bg-black/20'>
      <div className='w-fit h-fit bg-jerma-deep-blue overflow-y-auto max-h-full p-4 rounded-md border border-jerma-light-blue text-left m-6'>
        <h1 className='text-3xl font-light mb-8'>{post.title}</h1>
        {post.authors.map((author, i) =>
          <div key={author.name + i}>
            <h2 className='font-light text-3xl text-jerma-pink'>{author.url ? <Link href={author.url} className='no-under-link'>{author.name}</Link> : author.name}</h2>
            <p>{author.description}</p>
            <br />
            {
              author.compoundSentence &&
              <p>
                {
                  author?.targets?.map((target, i) => 
                     <>
                      {author.compoundSentence.split(target)[0]}
                      <Link className='text-jerma-pink' href={author.urls[i]}>
                        {target}
                      </Link>
                      {author.compoundSentence.split(target)[1]}
                    </>
                  )
                }
                
              </p>
            }
          </div>
        )}
      </div>
    </div>
  )
}

function getPostCredits(post) {
  return post.authors.some(author => author.description) && <><br /><button tabIndex={0} className='peer special-button focus:opacity-0'>show credits</button> </>;
}

function getPostAuthorNames(post) {
  return post.authors.filter(author => author.name).map((author, i, posts) => {
    if (i == posts.length - 1) {
      return author.url ? <Link className='font-bold text-jerma-bright-blue whitespace-nowrap' href={author.url}>{author.name}</Link> : author.name;
    }
    if (i == posts.length - 2) {
      return author.url ? <><Link className='font-bold text-jerma-bright-blue whitespace-nowrap' href={author.url}>{author.name}</Link> and </> : author.name + ' and ';
    }
    if (i < posts.length - 2) {
      return author.url ? <><Link className='font-bold text-jerma-bright-blue whitespace-nowrap' href={author.url}>{author.name}</Link>, </> : author.name + ', ';
    }
  });
}