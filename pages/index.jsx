import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import _ from 'lodash'

import React from 'react';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

const htmlFrom = (htmlString) => {
  const cleanHtmlString = DOMPurify.sanitize(htmlString,
    { USE_PROFILES: { html: true } });
  const html = parse(cleanHtmlString);
  return html;
}

const goTo = (e) => {
  e.preventDefault();
  let element = document.querySelector('#' + _.kebabCase(e.target.innerText));
  let topOffset = 15;
  let elementPosition = element.getBoundingClientRect().top;
  let offsetPosition = elementPosition + window.pageYOffset - topOffset;
  window.scrollTo({ top: offsetPosition , behavior: 'smooth' });
}


export default function Home() {
  const [logoOutOfSight, setLogoOutOfSight] = useState(false)
  const jermaLogo = useRef()

  const [content, setContent] = useState(null);
  
  useEffect(() => {
    fetch("/content.json")
      .then(raw => raw.json())
      .then(data => setContent(data))
  }, [])


  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (jermaLogo?.current?.getBoundingClientRect().top < -200) {
        setLogoOutOfSight(true)
      } else {
        setLogoOutOfSight(false)
      }
    })
    
    return window.removeEventListener('scroll', () => {
      if (jermaLogo?.current?.getBoundingClientRect().top < -200) {
        setLogoOutOfSight(true)
      } else {
        setLogoOutOfSight(false)
      }
    })
  
  }, [])


  return (
    <div className='relative min-h-screen max-w-full'>
      <Head>
        <title>Jerma Sites</title>
        <meta name="description" content="We make jerma sites for people to enjoy (or hate) of varying quality." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <nav className='block w-full text-jerma-light-blue text-center  py-4 bg-jerma-deep-blue sticky top-0 border-b border-jerma-pink z-30'>
        <div className='relative flex justify-between max-w-7xl items-center mx-4 xl:mx-auto'>
          <div />
          <div className={`select-none transition-opacity duration-300 absolute left-0 mb-6 opacity-${logoOutOfSight ? '1' : '0'}`}>
            <Image src="/jerma-logo.png" alt="" width={150} height={90} />
          </div>
          <div className='space-x-8 hidden md:block'>
            {content && content.sections.map(section => 
              
            <Link key={'menu-'+section.title} href="#"><a onClick={goTo}>{_.lowerCase(section.title)}</a></Link>
              )}
            <a href='https://cash.app/$scryp'>donate</a>  ❤️
          </div>
          <div className='md:hidden block'>
            <div tabIndex={0} className='transition-color duration-500 peer cursor-pointer relative text-jerma-light-blue focus:text-jerma-pink'>
            <svg fill="currentColor" id="teeth-menu" xmlns="http://www.w3.org/2000/svg" width='31' height='23' viewBox="0 0 31.872 23.968">
              <path d="M-875.242,1259.793c-.478-1.753.478-3.028,3.347-3.666s3.665,7.49,2.709,7.809S-874.763,1261.546-875.242,1259.793Z" transform="translate(875.359 -1250.157)"/>
              <path d="M.117,3.7C-.361,1.948.6.673,3.464.036s3.665,7.49,2.709,7.809S.6,5.454.117,3.7Z" transform="matrix(-0.985, -0.174, 0.174, -0.985, 30.505, 20.727)"/>
              <path d="M-875.242,1259.793c-.478-1.753.478-3.028,3.347-3.666s3.665,7.49,2.709,7.809S-874.763,1261.546-875.242,1259.793Z" transform="translate(882.359 -1254.092)"/>
              <path d="M.117,3.7C-.361,1.948.6.673,3.464.036s3.665,7.49,2.709,7.809S.6,5.454.117,3.7Z" transform="matrix(-0.985, -0.174, 0.174, -0.985, 22.928, 23.387)"/>
              <path d="M-875.242,1259.793c-.478-1.753.478-3.028,3.347-3.666s3.665,7.49,2.709,7.809S-874.763,1261.546-875.242,1259.793Z" transform="translate(890.359 -1256.092)"/>
              <path d="M.117,3.7C-.361,1.948.6.673,3.464.036s3.665,7.49,2.709,7.809S.6,5.454.117,3.7Z" transform="matrix(-0.985, -0.174, 0.174, -0.985, 14.703, 23.968)"/>
            </svg>
            </div>
            <div className='fixed -right-4 -top-4 transition-transform duration-300  peer-focus:translate-x-0 translate-x-full flex flex-col items-center  border border-jerma-pink pt-[61px]'>
              {content && content.sections.map(section => 
                <Link key={'mobile-menu-'+section.title} href="#"><a className='block min-w-max bg-jerma-deep-blue hover:bg-jerma-light-blue hover:text-jerma-deep-blue w-full py-4 px-16 text-center even:brightness-90' onClick={goTo}>{ _.lowerCase(section.title) }</a></Link>
                )}
              <a href='https://cash.app/$scryp' className='block min-w-max bg-jerma-deep-blue hover:bg-jerma-light-blue hover:text-jerma-deep-blue hover:ring-[1px] ring-jerma-light-blue w-full py-4 px-16 text-center even:brightness-90'>donate ❤️</a> 
            </div>
          </div>
        </div>
      </nav>

      <main className='pb-40'>
        <span className='opacity-0 opacity-1'></span>
        <div className='bg-jerma-pink text-jerma-deep-blue text-center py-4'>📣 You can contribute on <a target="_blank" rel="noopener noreferrer" href='https://github.com/JermaSites' className='font-bold'>Github!</a></div>
        <div className='mx-4 flex items-center justify-center m-auto flex-col md:flex-row'>
          <div ref={jermaLogo} className='select-none scale-90'>
            <Image src="/jerma-logo.png" alt="" width={520} height={312} />
          </div>
          <div className='text-jerma-light-blue text-center md:ml-16 max-w-xs mt-8'>
            <h1 className='mb-2 text-2xl font-semibold'>{'</> We make Jerma things.'}</h1>
            <p className='italic font-light text-xl'>We make jerma sites for people to enjoy (or hate) of varying quality. <br />
              All of our sites are open source! If you want to contribute, please do!</p>
          </div>
        </div>

        {
          content && content.sections.map((section, i) => 
            <div key={_.kebabCase(section.title)+i} id={_.kebabCase(section.title)} className='max-w-7xl m-auto mx-0 sm:mx-4 xl:mx-auto'>

          <div className='pt-16 sticky top-4 bg-jerma-deep-blue z-10'>
            <h2 className='text-2xl text-jerma-pink font-semibold pb-2 text-center md:text-left border-b-[1px] border-jerma-pink'>{section.title}</h2>
          </div>

          {
            section.posts.map((post,i) =>
              <div key={`${post.title}${i}`} className='flex-wrap p-4 text-jerma-light-blue flex justify-between items-center border-b border-jerma-light-blue/50 m:hover:bg-slate-500/5 odd:bg-black/10 last:border-b-0 py-4 sm:py-4'>
                <div className='py-2 md:py-0'>
                  <h3 className='text-3xl font-light mb-2'>{post.title}</h3>
                  <p className=''>{htmlFrom(post.description)}</p>
                </div>
                <div className='text-right ml-auto py-2 md:py-0'>
                  {post.authors.filter(author => author.name).map((author, i, posts) => {
                    if (i == posts.length - 1) {
                      return author.url ? <a target="_blank" rel="noopener noreferrer" className='font-bold text-jerma-bright-blue whitespace-nowrap' href={author.url.includes('http') ? author.url : 'https://' + author.url}>{author.name}</a> : author.name
                    }
                    if (i == posts.length - 2) {
                      return author.url ? <><a target="_blank" rel="noopener noreferrer" className='font-bold text-jerma-bright-blue whitespace-nowrap' href={author.url.includes('http') ? author.url : 'https://' + author.url}>{author.name}</a> and </> : author.name + ' and '
                    }
                    if (i < posts.length - 2) {
                      return author.url ? <><a target="_blank" rel="noopener noreferrer" className='font-bold text-jerma-bright-blue whitespace-nowrap' href={author.url.includes('http') ? author.url : 'https://' + author.url}>{author.name}</a>, </> : author.name + ', '
                    }
                  })}
                  
                  {post.authors.some(author => author.description) && <><br /><button tabIndex={0} className='peer special-button focus:opacity-0'>show credits</button> </>
                  
          }
                  <br/><a className='text-jerma-pink tracking-wider' target="_blank" rel="noopener noreferrer" href={post.url.includes('http') ? post.url : 'https://' + post.url}>{post.urlName || post.url}</a>
                  <div className='appear-animation opacity-0 justify-center items-center fixed w-screen h-screen top-0 left-0 z-50 text-jerma-light-blue scale-75 -translate-x-full peer-focus:translate-x-0 
                  peer-focus:opacity-100 peer-focus:scale-100 flex pt-8 flex-col bg-gray-800/40'>
                    <div className='w-fit h-fit bg-jerma-deep-blue overflow-y-auto max-h-full p-4 rounded-md border border-jerma-light-blue text-left m-6'>
                      <h1 className='text-3xl font-light mb-8'>{post.title}</h1>
                      {post.authors.map((author, i) => 
                        <div key={author.name + i}>
                          <h2 className='font-light text-3xl text-jerma-pink'>{author.url ? <a className='no-under-link' target="_blank" rel="noopener noreferrer" href={author.url.includes('http') ? author.url : 'https://' + author.url}>{author.name}</a> : author.name}</h2>
                          <p>{author.description}</p>
                          <br />
                          {
                            author.compoundSentence &&
                              <p>
                                {
                                  author?.targets?.forEach((target, i) => {
                                    return <>
                                      {author.compoundSentence.substring(author.targets[i - 1] || 0, author.compoundSentence.indexOf(target) + 1)}
                                      <a className='text-jerma-pink' href={author.urls[i]}>
                                        {}
                                      </a>
                                    </>
                                  })
                                }
                                {author.compoundSentence.substring(author.compoundSentence.indexOf(author.targets.length - 1) || 0, author.compoundSentence.length)}
                              </p>
                          }
                        </div>
                        )}
                    </div>
                  </div>
                </div>
              </div>)
          }
          
        </div>
            ) 
        }
        
      </main>

      <footer className='bg-jerma-bright-blue text-jerma-deep-blue text-center py-4 absolute bottom-0 w-full'>
        Made by Viewers like you ❤️ <a href="https://cash.app/$scryp">Donate if you want</a> ❤️
      </footer>
    </div>
  )
}
