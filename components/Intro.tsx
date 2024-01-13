"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon, OpenInNewWindowIcon, PinBottomIcon } from "@radix-ui/react-icons";

const Intro = () => {
  return (
    <section id="home" className="my-32 self-start">
      <h1 className="text-center flex flex-col justify-start items-start">
        <span className="font-bold text-6xl pb-2 justify-start">{"Hello,I'm Vansh."}</span>
        <span className="font-bold text-5xl pb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          {"I'm a full-stack developer."}
        </span>

        <span className="text-2xl text-gray-400">I enjoy building sites & apps. My focus is React (Next.js).</span>
      </h1>
      <div className="flex justify-start mt-4 space-x-4 ">
        <Button className="rounded-full hover:bg-gray-300  hover:scale-110 transition" asChild>
          <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=kinkarvansh@gmail.com" target="_blank">
            Contact me here &nbsp; <OpenInNewWindowIcon className="h-full w-full" />
          </Link>
        </Button>
        <Button className="rounded-full  hover:scale-110 transition" variant={"outline"} asChild>
          <Link href="/public/CV.pdf" download>
            Download CV &nbsp;
            <PinBottomIcon className="h-full w-full" />
          </Link>
        </Button>
        <Button className="rounded-full hover:scale-110 transition" variant={"outline"} size={"icon"} asChild>
          <Link href="https://github.com/Vk1033" target="_blank">
            <GitHubLogoIcon className="h-full w-full p-1.5" />
          </Link>
        </Button>
        <Button className="rounded-full hover:scale-110 transition" variant={"outline"} size={"icon"} asChild>
          <Link href="https://linkdin.com" target="_blank">
            <LinkedInLogoIcon className="h-full w-full p-1.5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Intro;
