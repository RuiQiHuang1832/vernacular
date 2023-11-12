import  { StaticImageData } from "next/image";
import toronto from "@/assets/images/offices/toronto.png";
import vancouver from "@/assets/images/offices/vancouver.png";
import nyc from "@/assets/images/offices/nyc.png";
import style from "@/styles/Contact.module.css";

 interface officeData {
    src: StaticImageData;
    number: string;
    alt: string;
    name: string;
    email: string;
    additionalClass?: string;
  }
export const officeData: officeData[] = [
  
    {
      src: vancouver,
      number: "+1 (212) 603-9667",
      alt: "vancouver image",
      name: "Vancouver Office",
      email: "van@vernacular.com",
      
    },
    {
      src: toronto,
      number: "+1 (416) 892-6767",
      alt: "toronto image",
      name: "Toronto Office",
      email: "tor@vernacular.com",
      additionalClass: style["contactImage"],
    },
    {
      src: nyc,
      number: "+1 (604) 642-6765",
      alt: "nyc image",
      name: "New York Office",
      email: "nyc@vernacular.com",
    },
  ];