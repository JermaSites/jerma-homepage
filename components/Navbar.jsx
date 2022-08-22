import Link from 'next/link';
import _ from 'lodash';
import React from 'react';
import { goTo } from '../pages/index';




export const Navbar = ({ content }) => <nav className='block w-full text-jerma-light-blue text-center  py-4 bg-jerma-deep-blue sticky top-0 border-b border-jerma-pink z-30'>
  <div className='relative flex justify-between max-w-7xl items-center mx-4 xl:mx-auto'>
    <div className='select-none transition-opacity duration-300 absolute left-0 mb-6'>
      {/* <Image src="/jerma-logo.png" alt="" width={150} height={90} /> */}
    </div>
    <div className='space-x-8 hidden md:block ml-auto'>
      {content && content?.sections?.map(section => <Link key={'menu-' + section.title} href="#"><a onClick={goTo}>{_.lowerCase(section.title)}</a></Link>
      )}
    </div>
    <button onClick={() => goTo('top')} className='md:hidden absolute text-jerma-light-blue'><ArrowUp/></button>
    <div className='md:hidden block ml-auto'>

      <div tabIndex={0} className='transition-color duration-500 peer cursor-pointer relative text-jerma-light-blue focus:text-jerma-pink'>
        <JermaTeethLogo />
      </div>
      <div className='fixed -right-4 -top-4 transition-transform duration-300  peer-focus:translate-x-0 translate-x-full flex flex-col items-center  border border-jerma-pink pt-[61px]'>
        {content && content?.sections?.map(section => <Link key={'mobile-menu-' + section.title} href="#"><a className='block min-w-max bg-jerma-deep-blue hover:bg-jerma-light-blue hover:text-jerma-deep-blue w-full py-4 px-16 text-center even:brightness-90' onClick={goTo}>{_.lowerCase(section.title)}</a></Link>
        )}
      </div>
    </div>
  </div>
</nav>;


const ArrowUp = () => <svg fill='currentColor' xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M15.083 23.792q-1.25 0-1.729-1.125-.479-1.125.396-2l5-5.042q.292-.292.604-.396.313-.104.688-.104.375 0 .687.104.313.104.604.396l5 5.042q.875.875.396 2t-1.687 1.125Z"/></svg>

const JermaTeethLogo = () => {
  return (
  <svg fill="currentColor" id="teeth-menu" xmlns="http://www.w3.org/2000/svg" width='31' height='23' viewBox="0 0 31.872 23.968">
    <path d="M-875.242,1259.793c-.478-1.753.478-3.028,3.347-3.666s3.665,7.49,2.709,7.809S-874.763,1261.546-875.242,1259.793Z" transform="translate(875.359 -1250.157)" />
    <path d="M.117,3.7C-.361,1.948.6.673,3.464.036s3.665,7.49,2.709,7.809S.6,5.454.117,3.7Z" transform="matrix(-0.985, -0.174, 0.174, -0.985, 30.505, 20.727)" />
    <path d="M-875.242,1259.793c-.478-1.753.478-3.028,3.347-3.666s3.665,7.49,2.709,7.809S-874.763,1261.546-875.242,1259.793Z" transform="translate(882.359 -1254.092)" />
    <path d="M.117,3.7C-.361,1.948.6.673,3.464.036s3.665,7.49,2.709,7.809S.6,5.454.117,3.7Z" transform="matrix(-0.985, -0.174, 0.174, -0.985, 22.928, 23.387)" />
    <path d="M-875.242,1259.793c-.478-1.753.478-3.028,3.347-3.666s3.665,7.49,2.709,7.809S-874.763,1261.546-875.242,1259.793Z" transform="translate(890.359 -1256.092)" />
    <path d="M.117,3.7C-.361,1.948.6.673,3.464.036s3.665,7.49,2.709,7.809S.6,5.454.117,3.7Z" transform="matrix(-0.985, -0.174, 0.174, -0.985, 14.703, 23.968)" />
  </svg>)
}