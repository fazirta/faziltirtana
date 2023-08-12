"use client";

import "../styles/globals.scss";
import { Inter } from 'next/font/google'
import SideBar from './SideBar'
import TopNav from './TopNav'
import BottomNav from './BottomNav'
import { useEffect, useState } from 'react'
import { AnimatePresence } from "framer-motion";

interface props {
  children: JSX.Element
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: props) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    window.innerWidth < 640 ? setIsMobile(true) : setIsMobile(false)
    window.addEventListener('resize', () => {
      window.innerWidth < 640 ? setIsMobile(true) : setIsMobile(false)
    })
  })

  return (
    <html lang="en">
      <head>
        <title>Fazil Tirtana</title>
      </head>
      <body className={inter.className}>
        <div className='text-[#2e3033] dark:text-[#ffffff] min-h-screen before:dark:bg-black/80 bgMesh relative before:content-[""] before:-z-999 before:absolute before:w-full before:h-full before:bg-[#ffffff86] before:backdrop-blur-md'>

          {isMobile ? <div></div> : <SideBar />}

          <div className="flex w-full flex-col">
            <div className="flex flex-col">
              {!isMobile ? <TopNav /> : <div></div>}
              <div className="scrollbar h-[calc(100vh-4.5rem)] overflow-auto pb-[72px] sm:h-screen sm:pb-0 sm:pt-[4.5rem]">
                <div className="mt-16 flex justify-center">
                </div>
                <div className="relative">
                  <AnimatePresence initial={true}>
                    <div className="mb-4 flex w-full justify-center">
                      {children}
                    </div>
                  </AnimatePresence>
                </div>
              </div>
              {isMobile ? <BottomNav /> : <div></div>}
            </div>
          </div>

        </div>
      </body>
    </html>
  )
}
