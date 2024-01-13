"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/lib/data";

const Projects = () => {
  return (
    <section id="#projects" className="group mb-28">
      <h2 className="font-bold text-3xl mb-8 title-bottom-line">My Projects</h2>
      <div className="flex flex-col gap-4">
        {projectsData.map((project) => (
          <React.Fragment key={project.title}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
