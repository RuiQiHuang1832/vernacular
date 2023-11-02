import franklinD from "@/assets/images/team/franklin.jpg";
import thomasJefferson from "@/assets/images/team/jefferson.jpg";
import abrahamLincoln from "@/assets/images/team/lincoln.jpg";
import theodoreRoosevelt from "@/assets/images/team/roosevelt.jpg";
import georgeWashington from "@/assets/images/team/washington.jpg";
import johnKennedy from "@/assets/images/team/jfk.jpg";

import absCapital from "@/assets/images/absCapital.png"
import telegraphHill from "@/assets/images/telegraphHill.png"
import newfundLogo from "@/assets/images/newfundLogo.png"
import blossomLogo from "@/assets/images/blossomLogo.png"
import soundImage from "@/assets/images/soundImage.png"
import markCubanLogo from "@/assets/images/markCubanLogo.png"

import { StaticImageData } from "next/image"

export interface President {
  name: string;
  title: string;
  src: StaticImageData
  alt: string
  description: string
}
 export const presidentList: President[] = [
    { name: "Franklin D. Roosevelt", title: "CEO", src: franklinD, alt: "Franklin D. Roosevelt", description: "Franklin is our visionary leader, guiding Vernacular with a steady hand. His strategic thinking and unwavering commitment drive our success." },
    { name: "Thomas Jefferson", title: "VP, Growth & Development", src: thomasJefferson, alt: "Thomas Jefferson", description: "As our VP of Growth & Development, Thomas is a true innovator. He explores new horizons and cultivates opportunities, ensuring Vernacular's continued growth." },
    { name: "Abraham Lincoln", title: "VP, Finance & Operations", src: abrahamLincoln, alt: "Abraham Lincoln", description: "Abraham, our financial maestro, keeps Vernacular's operations running smoothly. With an eye for detail and fiscal responsibility, he is the bedrock of our organization." },
    { name: "Theodore Roosevelt", title: "VP, Sales & Marketing", src: theodoreRoosevelt, alt: "Theodore Roosevelt", description: "Theodore's charismatic leadership powers our sales and marketing endeavors. He fearlessly forges new markets and engages customers, driving Vernacular's reach and impact." },
    { name: "George Washington", title: "Creative Director", src: georgeWashington, alt: "George Washington", description: "George, our creative luminary, brings artistry and vision to Vernacular's projects. His creative genius shapes our brand and ensures our work stands out." },
    { name: "John F. Kennedy", title: "VP, Growth & Development", src: johnKennedy, alt: "John F. Kennedy", description: "John, a dynamic force in our growth team, navigates Vernacular toward new heights. His dedication to expansion and development is unmatched, driving our future success." }
  ];


  export interface Investors {
    name: string;
    src: StaticImageData
  }

  export const investorsList: Investors[] = [
    {name: "ABS Capital Partners", src: absCapital},
    {name: "Sound Ventures", src: soundImage},
    {name: "Blossom Street Ventures", src: blossomLogo},
    {name: "Newfund Capital",src: newfundLogo},
    {name: "Mark Cuban Companies",src: markCubanLogo},
    {name: "Telegraph Hill Capital",src: telegraphHill}
  ]
