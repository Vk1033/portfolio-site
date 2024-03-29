"use client";

import { skillsData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const Skills = () => {
  return (
    <section id="skills" className="group mb-28 scroll-mt-28">
      <h2 className="font-bold text-3xl mb-8 title-bottom-line">My Skills</h2>

      <div className="flex gap-2 flex-wrap">
        {skillsData.map((skill) => (
          <div key={skill} className={cn(buttonVariants({ variant: "secondary" }), "hover:scale-110 transition")}>
            {skill}
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        <div className="bg-gray-200 mt-16 h-16 w-1 rounded-full dark:bg-opacity-20 self-center"></div>
      </div>
    </section>
  );
};

export default Skills;
