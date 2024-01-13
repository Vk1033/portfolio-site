import React from "react";
import { skillsData } from "@/lib/data";

type skill = (typeof skillsData)[number];

const SkillIcon = (skillName: skill) => {
  return <div></div>;
};

export default SkillIcon;
