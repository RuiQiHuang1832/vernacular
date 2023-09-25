import franklinD from "@/assets/images/team/franklin.jpg";
import thomasJefferson from "@/assets/images/team/jefferson.jpg";
import abrahamLincoln from "@/assets/images/team/lincoln.jpg";
import theodoreRoosevelt from "@/assets/images/team/roosevelt.jpg";
import georgeWashington from "@/assets/images/team/washington.jpg";
import johnKennedy from "@/assets/images/team/jfk.jpg";

import { StaticImageData } from "next/image"

export interface President {
  name: string;
  title: string;
  src: StaticImageData
  alt: string
}
 export const presidentList: President[] = [
    { name: "Franklin D. Roosevelt", title: "CEO", src: franklinD, alt: "Franklin D. Roosevelt" },
    { name: "Thomas Jefferson", title: "VP, Growth & Development", src: thomasJefferson, alt: "Thomas Jefferson" },
    { name: "Abraham Lincoln", title: "VP, Finance & Operations", src: abrahamLincoln, alt: "Abraham Lincoln" },
    { name: "Theodore Roosevelt", title: "VP, Sales & Marketing", src: theodoreRoosevelt, alt: "Theodore Roosevelt" },
    { name: "George Washington", title: "Creative Director", src: georgeWashington, alt: "George Washington" },
    { name: "John F. Kennedy", title: "VP, Growth & Development", src: johnKennedy, alt: "John F. Kennedy" }
  ];