import step1 from "@/assets/images/home/step_1.png";
import step2 from "@/assets/images/home/step_2.png";
import step3 from "@/assets/images/home/step_3.png";
import { StaticImageData } from 'next/image';

export type stepDataType = {
    id: string;
    title: string;
    description: string;
    source:StaticImageData
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
