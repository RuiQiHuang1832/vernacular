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
  export type statsDataType = {
    number: string;
    description: string;
  };

  export type featuresDataType = {
    name: string;
    description: string;
  };
  export type quoteDataType = {
    name: string;
    role:string
    description: string;
  };
  export type accordionDataType = {
    id: string;
    question: string
    answer: React.ReactNode;
  };
  export type arrowDataType = {
    path:string;
    left: string
 
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

export const statsData:statsDataType[] = [
    {
        number:"+2M",
        description:"MEMBERS",
    },
    {
        number:">500",
        description:"REVIEWS CREATED",
    },
    {
        number:"60K",
        description:"DAILY VISITS",
    },
    {
        number:"~120",
        description:"REVIEWS READ DAILY",
    }
]
export const quoteData:quoteDataType[] = [
    {
        name:"ALEX JOHNSON",
        role:"Media Enthusiast",
        description:"This platform has transformed how I discover and share media. The recommendations are spot on and the community is incredibly supportive.",
      
    },
    {
        name:"TAYLOR REED",
        role:"Content Creator",
        description:"I love how easy it is to find new content and share my reviews with others. It is like having a personal media curator at my fingertips.",
    },
    {
        name:"JORDAN PARKER",
        role:"Freelance Writer",
        description:"The user interface is so intuitive. I was able to jump right into exploring and reviewing media without any hassle.",

    },
    {
        name:"SAM KIM",
        role:"Digital Marketer",
        description:"Being part of this community has enhanced my media experience. The insights and recommendations are invaluable.",

    }
]

export const featuresData:featuresDataType[] =[
    {name:"TAGS & PROPERTIES",
     description:"Efficiently categorize and display your content when and where you need it.",
    },
    {name:"TEMPLATES",
    description:"Create and reuse templates for consistent page layouts and faster content creation.",
   },
   {name:"COLLABORATIVE BOARDS",
   description:"Craft intricate story flows, trace family trees, and unravel conspiracies with our collaborative whiteboards.",
  }
]

export const arrowData:arrowDataType[] = [
    {
        path:`M183.936 34.6617C184.345 34.5971 184.624 34.2131 184.56 33.8039L183.507 27.1365C183.443 26.7273 183.059 26.448 182.65 26.5125C182.241 26.5771 181.961 26.9611 182.026 27.3703L182.961 33.2969L177.034 34.2323C176.625 34.2968 176.346 34.6808 176.41 35.09C176.475 35.4991 176.859 35.7785 177.268 35.7139L183.936 34.6617ZM1.102 28.5504C45.4253 -6.35581 123.361 -9.12798 183.378 34.5274L184.26 33.3143C123.766 -10.6887 45.0856 -7.99759 0.17394 27.372L1.102 28.5504Z`,
      left:`29%`
    },  
      {
        path:`M183.936 34.6617C184.345 34.5971 184.624 34.2131 184.56 33.8039L183.507 27.1365C183.443 26.7273 183.059 26.448 182.65 26.5125C182.241 26.5771 181.961 26.9611 182.026 27.3703L182.961 33.2969L177.034 34.2323C176.625 34.2968 176.346 34.6808 176.41 35.09C176.475 35.4991 176.859 35.7785 177.268 35.7139L183.936 34.6617ZM1.102 28.5504C45.4253 -6.35581 123.361 -9.12798 183.378 34.5274L184.26 33.3143C123.766 -10.6887 45.0856 -7.99759 0.17394 27.372L1.102 28.5504Z`,
      left:`59%`
    },
]

  

export const accordionData:accordionDataType[] = [
    {
        id:"questionOne",
        question: "Is there a cost associated with using vernacular?",
        answer: (<>  No, <strong>absolutely not!</strong> Using <em>vernacular</em> is <strong>completely free</strong> and will <strong>always be free</strong>! We believe in providing access to valuable resources without any financial barriers. Enjoy exploring and reviewing your favorite media titles without worrying about subscription fees or hidden charges.</>)
    },
    {
        id:"questionTwo",
        question: "Can I customize my user experience on vernacular?",
        answer: (<> Yes, <strong>definitely!</strong> We offer a range of customization options to tailor your experience according to your preferences. Personalize your profile, set notification preferences, and adjust viewing settings to make your time on the site truly your own. Your satisfaction and comfort are important to us, so feel free to customize away!</>)
    },
    {
        id:"questionThree",
        question: "How can I provide feedback on a specific title? ",
        answer: (<>It&apos;s easy! Simply select the type of media, then choose the specific title you want to review, and share your feedback, including a <strong>rating</strong> and <strong>review description</strong>. Your input helps other users make informed decisions about what to watch or listen to next. Join the conversation, contribute your insights, and become part of a vibrant community passionate about media exploration and discussion.</>)
    },
    {
        id:"questionFour",
        question: "Are there any restrictions on the types of media I can review?",
        answer: (<><strong>Not at all!</strong> You&apos;re free to review any movies, TV shows, or music titles of your choice. Whether it&apos;s the <em>latest blockbuster</em>, a <em>classic TV series</em>, or an <em>underground indie album</em>, we welcome all kinds of reviews. Express your thoughts and opinions on the media that resonates with you, and join a diverse community of reviewers sharing their experiences.</>)
    },
    {
        id:"questionFive",
        question: "Can I talk to a real person to get my questions answered?",
        answer: (<>Absolutely! We are here to answer any questions you have both before and after you get started with vernacular. Our friendly, responsive Success Team is here to not only help you get the most out of vernacular but to offer helpful tips on how to optimize your spending process. Email us at email hello@vernacular.com to chat with one of our friendly team members. We’re happy to help in French, English, Spanish or German.</>)
    },
]