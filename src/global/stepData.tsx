import step1 from "@/assets/images/home/step_1.png";
import step2 from "@/assets/images/home/step_2.png";
import step3 from "@/assets/images/home/step_3.png";
import { StaticImageData } from 'next/image';
import { HiOutlineLightBulb } from "react-icons/hi";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { PiBook } from "react-icons/pi";
import { IconType } from "react-icons";
export type stepDataType = {
    id: string;
    title: string;
    description: string;
    source:StaticImageData
  };
  export type toolDataType = {
    title: string;
    description: string;
    source:IconType
  };


export const stepData:stepDataType[] = [
    {
        id:"step 1",
        title:"Select Media Type",
        description:"Users choose the type of media they want to review, such as movies, TV shows, or music.",
        source:step1
    },
    {
        id:"step 2",
        title:"Choose Specific Title",
        description:"After selecting the media type, users pick a specific title (up to 10) within that category.",
        source:step2
    },
    {
        id:"step 3",
        title:"Rate and Review",
        description:"Users review the selected media, providing a star rating (1-5) and written feedback.",
        source:step3
    },
]

export const toolData:toolDataType[] = [
    {
        title:"SMART RECOMMENDATIONS",
        description:"Receive personalized media recommendations based on your reviews and search history.",
        source:HiOutlineLightBulb
    },
    {
        title:"COMMUNITY INSIGHTS",
        description:"Engage with community insights and trending reviews to discover what's popular and worth your time.",
        source:HiOutlineChatBubbleLeftRight
    },
    {
        title:"CURATED COLLECTIONS",
        description:"Explore curated collections created by experts and enthusiasts, perfect for finding hidden gems.",
        source:PiBook
    },
]
