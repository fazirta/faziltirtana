"use client";

import worksJson from "./works.json";
import { motion, useScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Works = () => {
  const works = worksJson;
  const worksContainerRef = useRef<HTMLDivElement>(null);
  const webappContainerRef = useRef<HTMLDivElement>(null);
  const [isApp, setIsApp] = useState(false);
  const { scrollXProgress } = useScroll({
    container: worksContainerRef
  });

  useEffect(() => {
    scrollXProgress.onChange((value) => {
      if (value === 0) {
        setIsApp(false);
      } else if (value === 1) {
        setIsApp(true);
      }
    });
  });

  return (
    <motion.div
      className="mx-3 max-w-sm overflow-x-hidden lg:max-w-2xl"
      variants={{
        hidden: { opacity: 0, x: 0, y: 200 },
        enter: { opacity: 1, x: 0, y: 0 }
      }}
      initial="hidden"
      animate="enter"
    >
      <div className="flex w-full flex-col items-center">
        <div className="mb-2 mt-3 flex w-full">
          <h3
            className="w-fit text-xl font-bold text-black after:float-left after:h-1 after:w-full after:rounded-sm after:bg-gray-700 dark:text-white after:dark:bg-zinc-500">
            Work
          </h3>
        </div>
        <motion.div
          ref={worksContainerRef}
          className="scrollbar flex w-full snap-x snap-mandatory overflow-x-auto"
        >
          <motion.div
            ref={webappContainerRef}
            className="grid h-fit min-w-full snap-center gap-8 lg:grid-cols-2 lg:gap-4"
          >
            {works
              .map((work, i) => (
                <WorkCard
                  key={i}
                  href={work.href}
                  imgSrc={work.imgSrc}
                  title={work.title}
                  description={work.description}
                />
              ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

interface workCardProps {
  href: string;
  imgSrc: string;
  title: string;
  description: string;
}

const WorkCard = ({
  imgSrc,
  title,
  description,
  href
}: workCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <motion.a
      draggable={false}
      whileHover={"hover"}
      className="group rounded-md p-4 hover:bg-white/10 hover:backdrop-blur-md hover:shadow-lg"
      target="_blank"
      href={href}
    >
      <div>
        <div className="flex p-4 justify-start">
          <motion.img
            variants={{
              hover: {
                scale: 1.05
              }
            }}
            className="rounded-md"
            src={imgSrc}
            alt="img"
            draggable={false}
          />
        </div>
      </div>
      <div className="mt-5 flex flex-col p-4">
        <motion.h1
          variants={{ hover: { scale: 1.05 } }}
          className="text-3xl font-bold dark:text-white"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={{ hover: { scale: 1.05 } }}
          className="dark:text-white"
        >
          {description}
        </motion.p>
      </div>
    </motion.a>
  );
};

export default Works;
