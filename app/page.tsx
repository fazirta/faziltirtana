"use client";

import Image from 'next/image'
import { motion } from 'framer-motion'
import profile from '../public/profile_pic.png'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { IconType } from 'react-icons/lib'
import { createElement } from 'react'

export default function Home() {
  return (
    <motion.div
      className="mx-3 max-w-sm  lg:max-w-2xl"
      variants={{
        hidden: { opacity: 0, x: 0, y: 200 },
        enter: { opacity: 1, x: 0, y: 0 },
      }}
      initial="hidden"
      animate="enter"
    >
      {/* Intro */}
      <div className="flex justify-between pt-4">
        <div>
          <h1 className="text-4xl font-bold  dark:text-white">Fazil Tirtana</h1>
          <p className="dark:text-white max-w-[10rem] lg:max-w-none">
            Software Engineer (Fullstack Engineer)
          </p>
        </div>
        {/* prof pic */}
        <div className="flex h-fit w-24 overflow-hidden rounded-full border-2">
          <a
            draggable={false}
            target="_blank"
            href="https://www.linkedin.com/in/faziltirtana/"
            rel="noreferrer"
          >
            <div className="group flex items-center justify-center">
              <Image
                width="92"
                height="92"
                className="rounded-full duration-200 ease-linear group-hover:blur-sm"
                src={profile.src}
                alt="prof-pic"
                draggable={false}
              />
              <FaLinkedin
                className="invisible absolute text-white opacity-0 duration-200 ease-linear group-hover:visible group-hover:opacity-100"
                size={28}
              />
            </div>
          </a>
        </div>
      </div>
      {/* About */}
      <div className="mt-4 flex flex-col">
        <h3 className="mb-2 w-fit text-xl font-bold text-black after:float-left after:h-1 after:w-full after:rounded-sm after:bg-gray-700 dark:text-white after:dark:bg-zinc-500">
          About
        </h3>
        <p className="text-justify tracking-wide dark:text-white">
          Fazil is a dedicated freshman pursuing a Bachelor's
          degree in Computer Science at the University of Indonesia. With a strong
          enthusiasm for web development, Fazil proactively seeks out opportunities
          to enhance his skill set in this field. He is committed to his academic
          journey and aspires to contribute significantly to the world of technology
          through his growing expertise in computer science and web development.
        </p>
      </div>
      {/* Bio */}
      <div className="mt-4 flex flex-col">
        <h3 className="mb-2 w-fit text-xl font-bold after:float-left after:h-1 after:w-full after:rounded-sm after:bg-gray-700 dark:text-white after:dark:bg-zinc-500">
          Bio
        </h3>
        <div className="grid grid-cols-[1fr_3fr] gap-4">
          <div className="w-fit font-bold dark:text-white">2005</div>
          <p className="dark:text-white">Born in Jakarta, Indonesia.</p>

          <div className="w-fit font-bold dark:text-white">2020</div>
          <p className="dark:text-white">
            Started studying at{' '}
            <a
              draggable={false}
              className="hover:text-sky500 inline-block origin-bottom-right indent-0 text-sky-700 duration-200 ease-linear after:float-left after:h-0.5 after:w-full after:origin-center after:scale-0 after:rounded-sm after:bg-sky-700 after:duration-200 hover:text-sky-600 hover:after:scale-100  hover:after:bg-sky-600 dark:text-teal-300 after:dark:bg-teal-300 hover:dark:text-teal-200 hover:after:dark:bg-teal-200"
              href="https://man4jkt.sch.id/"
              target="_blank"
              rel="noreferrer"
            >
              MAN 4 Jakarta
            </a>
          </p>

          <div className="w-fit font-bold dark:text-white">2023 to present</div>
          <p className="dark:text-white">
            Started studying Computer Science at{' '}
            <a
              draggable={false}
              className="hover:text-sky500 inline-block origin-bottom-right indent-0 text-sky-700 duration-200 ease-linear after:float-left after:h-0.5 after:w-full after:origin-center after:scale-0 after:rounded-sm after:bg-sky-700 after:duration-200 hover:text-sky-600 hover:after:scale-100  hover:after:bg-sky-600 dark:text-teal-300 after:dark:bg-teal-300 hover:dark:text-teal-200 hover:after:dark:bg-teal-200"
              href="https://ui.ac.id/"
              target="_blank"
              rel="noreferrer"
            >
              University of Indonesia
            </a>
          </p>
        </div>
      </div>
      {/* Hobbies */}
      <div className="mt-4 flex flex-col">
        <h3 className="mb-2 w-fit text-xl font-bold after:float-left after:h-1 after:w-full after:rounded-sm after:bg-gray-700 dark:text-white after:dark:bg-zinc-500">
          I ❤️
        </h3>
        <p className="dark:text-white">Game, code</p>
      </div>
      {/* Social media */}
      <div className="mt-4 flex flex-col">
        <h3 className="mb-2 w-fit text-xl font-bold after:float-left after:h-1 after:w-full after:rounded-sm after:bg-gray-700 dark:text-white after:dark:bg-zinc-500">
          On the web
        </h3>
        <div className="flex flex-col">
          <MediaLink
            icon={() => <FaLinkedin />}
            text="@faziltirtana"
            mediaLink="https://www.linkedin.com/in/faziltirtana/"
          />
          <MediaLink
            icon={() => <FaGithub />}
            text="@fazirta"
            mediaLink="https://github.com/fazirta"
          />
          <MediaLink
            icon={() => <FaInstagram />}
            text="@faziltirtana"
            mediaLink="https://www.instagram.com/faziltirtana/"
          />
        </div>
      </div>
    </motion.div>
  )
}

interface mediaLinkProps {
  icon: IconType
  mediaLink: string
  text: string
}

const MediaLink = ({ icon, mediaLink, text }: mediaLinkProps) => {
  return (
    <a
      draggable={false}
      target="_blank"
      href={mediaLink}
      className="group flex w-fit items-center rounded-md py-2 px-3 duration-200 ease-linear hover:bg-sky-200 hover:bg-opacity-60 dark:hover:bg-teal-200 dark:hover:bg-opacity-20"
      rel="noreferrer"
    >
      <div className="text-sky-700 duration-200 ease-linear group-hover:text-sky-600 dark:text-teal-300 dark:group-hover:text-teal-200">
        {createElement(icon)}
      </div>
      <p className="ml-2 inline-block origin-bottom-right indent-0 text-sky-700 duration-200 ease-linear after:float-left after:h-0.5 after:w-full after:origin-center after:scale-0 after:rounded-sm after:bg-sky-700 after:duration-200 group-hover:text-sky-600 group-hover:after:scale-100  group-hover:after:bg-sky-600 dark:text-teal-300 after:dark:bg-teal-300 dark:group-hover:text-teal-200 dark:group-hover:after:bg-teal-200">
        {text}
      </p>
    </a>
  )
}
