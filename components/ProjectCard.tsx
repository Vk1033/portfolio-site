"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { projectsData } from "@/lib/data";
import { buttonVariants } from "./ui/button";
import { cn } from "./../lib/utils";
import Link from "next/link";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];

const ProjectCard = ({ title, description, tags, url, imageUrl }: ProjectProps) => {
  return (
    <Link className="flex group/card" href={url} target="_blank">
      <Card className="relative dark:bg-white/10 dark:hover:bg-white/20">
        <CardHeader className="sm:max-w-[50%]">
          <CardTitle className="link-hover w-fit text-xl">{title}</CardTitle>
          <CardDescription className="">{description}</CardDescription>
        </CardHeader>
        <CardContent className="absolute top-9 -right-10 text-4xl w-[25rem]  ">
          <Image src={imageUrl} alt={title} className="rounded-lg scale-110 shadow-2xl group-hover/card:scale-125 transition" />
        </CardContent>
        <CardFooter className="gap-2 flex flex-wrap max-w-[50%]">
          {tags.map((tag) => (
            <span key={tag} className={cn(buttonVariants({ variant: "secondary" }), "rounded-full text-xs")}>
              {tag}
            </span>
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProjectCard;
