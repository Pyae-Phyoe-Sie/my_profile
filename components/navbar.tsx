"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { getCount, updateCount } from '@/services/CountService'

const fetcher = (url: string) => getCount().then((res) => res)

export default function Navbar() {
    const [mobileMenu, setMobileMenu] = useState<boolean>(false)
    const pathname = usePathname()
    const [downloadCounts, setDownloadCounts] = useState<number>(0)

    const { data } = useSWR<number>("/", fetcher);

    useEffect(() => {
      setDownloadCounts(data!)
    }, [data])

    const count = async () => {
      await updateCount(downloadCounts + 1)
      setDownloadCounts(downloadCounts + 1)
    }
    
    return <nav className="bg-gray-800">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          
          <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"
            onClick={() => setMobileMenu(!mobileMenu)}>
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>
            
            {!mobileMenu ? <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            :
            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>}
          </button>
        </div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              <Link href="/" className={pathname === '/' ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'}>Introduction</Link>
              <Link href="/resume" className={pathname === '/resume' ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'}>
                Resume
              </Link>
              <Link href="/projects" className={pathname === '/projects' ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'}>
                Projects
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <a className='text-white bg-green-600 rounded p-2 flex' href='/PyaePhyoeSie.zip' onClick={count}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z" clipRule="evenodd" />
            </svg>
            <label className='ml-1 cursor-pointer'>Download Resume</label>
            <div className='ml-1'>{downloadCounts}</div>
          </a>
        {/* <label className='text-white'>Pyae Phyoe Sie</label> */}

        {/* <!-- Profile dropdown --> */}
        <div className="relative ml-3">
          <div>
            <img className="h-8 w-8 rounded-full" src="/profile.jpg" alt="" />
          </div>
        </div>
      </div>
      </div>
    </div>
  
    {/* Mobile menu, show/hide based on menu state. */}
    {mobileMenu && <div className="sm:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2">
        <Link href="/" className={pathname === '/' ? 'bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'}>Introduction</Link>
        <Link href="/resume" className={pathname === '/resume' ? 'bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'}>
          Resume
        </Link>
        <Link href="/projects" className={pathname === '/projects' ? 'bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'}>
          Projects
        </Link>
      </div>
    </div>}
  </nav>;  
}