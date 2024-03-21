export type accordionDataType = {
    id: string;
    question: string
    answer: React.ReactNode;
  };
  

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