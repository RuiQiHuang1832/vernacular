import step1 from "@/assets/images/home/step_1.png";
import step2 from "@/assets/images/home/step_2.png";
import step3 from "@/assets/images/home/step_3.png";
import { StaticImageData } from 'next/image';
import { HiOutlineLightBulb } from "react-icons/hi";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { PiBook } from "react-icons/pi";
import { IconType } from "react-icons";
import review from "@/assets/images/home/review.png";
import discover from "@/assets/images/home/discover.png";
import collaborate from "@/assets/images/home/collaborate.png";
import alex_johnson from "@/assets/images/alex_johnson.jpg";
import sam_kim from "@/assets/images/sam_kim.jpg";
import taylor_reed from "@/assets/images/taylor_reed.jpg";
import jordan_parker from "@/assets/images/jordan_parker.jpg";

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
    source:StaticImageData;

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

  export type imageDataType = {
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

export const imageData:imageDataType[] = [
    {
        title:"REVIEWS",
        description:"Effortlessly write content without distractions or limitations.",
        source:review
    },  
    {
        title:"DISCOVER",
        description:"Explore new media recommendations tailored to your interests, seamlessly linking to reviews and ratings.",
        source:discover
    },  
    {
        title:"COLLABORATE",
        description:"Easily connect with other users to discuss and recommend media using versatile forums and chat features.",
        source:collaborate
    }
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
        name:"Alex Johnson",
        role:"Advisor at Synergy Studios",
        description:"This platform has transformed how I discover and share media. The recommendations are spot on and the community is incredibly supportive.",
        source: alex_johnson,
      
    },
    {
        name:"Taylor Reed",
        role:"Chief Content Strategist at Inspire Media",
        description:"I love how easy it is to find new content and share my reviews with others. It is like having a personal media curator at my fingertips!",
        source: taylor_reed,
    },
    {
        name:"Jordan Parker",
        role:"Senior Editor at WriteWorks Inc.",
        description:"The user interface is so intuitive. I was able to jump right into exploring and reviewing media without any hassle.",
        source: jordan_parker
    },
    {
        name:"Sam Kim",
        role:"Marketing Director at BrandFlow Solutions",
        description:"Being part of this community has enhanced my media experience. The insights and recommendations are invaluable!",
        source: sam_kim
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
        id: "questionOne",
        question: "Is there a cost associated with using vern?",
        answer: (
            <>
                <p><strong>No, absolutely not!</strong> Using <em>vern</em> is completely free and will <strong>always be free!</strong></p>
                <ul>
                    <li className="mb-2"><mark>No subscription fees</mark></li>
                    <li className="mb-2"><mark>No hidden charges</mark></li>
                    <li className="mb-2"><mark>Enjoy access to valuable resources without financial barriers</mark></li>
                </ul>
                <p>Feel free to explore, review, and share your thoughts on your favorite media titles with zero cost involved!</p>
            </>
        )
    },
    {
        id: "questionTwo",
        question: "Can I customize my user experience on vern?",
        answer: (
            <>
                <p><strong>Yes, definitely!</strong> We offer a range of customization options to make your experience truly your own:</p>
                <ul>
                    <li><strong>Personalize your profile:</strong> Choose an avatar, write a bio, and stand out!</li>
                    <li><strong>Set notification preferences:</strong> Decide what updates matter most to you.</li>
                    <li><strong>Adjust viewing settings:</strong> Create the perfect browsing environment.</li>
                </ul>
                <p>Your comfort and satisfaction are our top priorities. Customize away and enjoy a tailored experience!</p>
            </>
        )
    },
    {
        id: "questionThree",
        question: "How can I provide feedback on a specific title?",
        answer: (
            <>
                <p><strong>It’s easy and fun!</strong> Share your thoughts and ratings with just a few steps:</p>
                <ol>
                    <li>Select the type of media (e.g., movie, TV show, or music).</li>
                    <li>Choose the specific title you want to review.</li>
                    <li>Provide your feedback, including a <strong>rating</strong> and <strong>review description</strong>.</li>
                </ol>
                <p>Your insights help others discover amazing media. Join the community and make your voice heard!</p>
            </>
        )
    },
    {
        id: "questionFour",
        question: "Are there any restrictions on what I can review?",
        answer: (
            <>
                <p><strong>Not at all!</strong> Feel free to review:</p>
                <ul>
                    <li>The <em>latest blockbusters</em></li>
                    <li>Timeless <em>classic TV shows</em></li>
                    <li>Hidden gems like an <em>underground indie album</em></li>
                </ul>
                <p>We welcome all kinds of reviews—express your thoughts on the media that resonates with you and connect with a diverse community of reviewers.</p>
            </>
        )
    },
    {
        id: "questionFive",
        question: "Can I talk to a real person?",
        answer: (
            <>
                <p><strong>Absolutely!</strong> Our Success Team is here for you:</p>
                <ul>
                    <li>Have questions? We’re happy to help before and after you get started.</li>
                    <li>Need tips? We’ll help you optimize your experience.</li>
                </ul>
                <p>Email us at <a href="mailto:hello@vern.com">hello@vern.com</a> to connect with our friendly team. We’re happy to assist you in <strong>French</strong>, <strong>English</strong>, <strong>Spanish</strong>, or <strong>German</strong>.</p>
            </>
        )
    },
];
