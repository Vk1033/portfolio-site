"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { projectsData } from "@/lib/data";
import { buttonVariants } from "./ui/button";
import { cn } from "./../lib/utils";

type ProjectProps = (typeof projectsData)[number];

const ProjectCard = ({ title, description, tags }: ProjectProps) => {
  return (
    <div className="flex group/card ">
      <Card className="relative dark:bg-white/10 dark:hover:bg-white/20 ">
        <CardHeader className="sm:max-w-[50%]">
          <CardTitle className="link-hover w-fit">{title}</CardTitle>
          <CardDescription className="">{description}</CardDescription>
        </CardHeader>
        <CardContent className="absolute top-6 right-6 text-4xl">
          <p>Image</p>
        </CardContent>
        <CardFooter className="gap-2 flex flex-wrap max-w-[50%]">
          {tags.map((tag) => (
            <span key={tag} className={cn(buttonVariants({ variant: "secondary" }), "rounded-full text-xs")}>
              {tag}
            </span>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
