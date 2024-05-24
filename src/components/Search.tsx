/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { MdSearch } from "react-icons/md";
import Button from "@/components/Button";
import styles from "@/styles/Search.module.css";
import FuzzySearch from 'fuzzy-search';
import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState('')
  const searchable = [{
    section: "home",
    link:"/",
    content: `Craft and curate your ultimate media collection. 
    Explore, rate, and design playlists tailored to your tastes. Explore a new dimension of media cataloging. Our intuitive web app lets yo
    effortlessly create, curate, and explore personalized playlists, transforming how you organize and enjoy your favorite content
    Experience the Power of Streamlined Multimedia Management. Our innovative web app empowers you to effortlessly organize, curate, an
    enjoy your favorite media. Whether it's movies, TV shows, or other content, our platform provides a seamless and intuitive solution. Sa
    Goodbye to Chaos. Our web app transforms multimedia management into a hassle-free experience. Easily create and customize playlists
    rate and review your media, and discover new content that resonates with your unique preferences. Take Your Media Collection to Ne
    Heights. Unlock the potential of personalized playlists that reflect your taste. With our platform, you're not just consuming content 
    you're curating a tailored entertainment experience. Users choose the type of media they want to review, such as movies, TV shows, o
    music. After selecting the media type, users pick a specific title (up to 10) within that category. Users review the selected media
    providing a star rating (1-5) and written feedback.`,
    faq: `Is there a cost associated with using vernacular? No, absolutely not! Using vernacular is completely free and will always be free! We believe in providing access to valuable resources without any financial barriers. Enjoy exploring and reviewing your favorite media titles without worrying about subscription fees or hidden charges. Can I customize my user experience on vernacular? Yes, definitely! We offer a range of customization options to tailor your experience according to your preferences. Personalize your profile, set notification preferences, and adjust viewing settings to make your time on the site truly your own. Your satisfaction and comfort are important to us, so feel free to customize away! How can I provide feedback on a specific title? It's easy! Simply select the type of media, then choose the specific title you want to review, and share your feedback, including a rating and review description. Your input helps other users make informed decisions about what to watch or listen to next. Join the conversation, contribute your insights, and become part of a vibrant community passionate about media exploration and discussion. Are there any restrictions on the types of media I can review? Not at all! You're free to review any movies, TV shows, or music titles of your choice. Whether it's the latest blockbuster, a classic TV series, or an underground indie album, we welcome all kinds of reviews. Express your thoughts and opinions on the media that resonates with you, and join a diverse community of reviewers sharing their experiences. Can I talk to a real person to get my questions answered? Absolutely! We are here to answer any questions you have both before and after you get started with vernacular. Our friendly, responsive Success Team is here to not only help you get the most out of vernacular but to offer helpful tips on how to optimize your spending process. Email us at email hello@vernacular.com to chat with one of our friendly team members. We’re happy to help in French, English, Spanish or German.`
  },
  {
    section:"settings",
    links:"/settings",
    general:`General Settings. Customize your profile to reflect your identity and preferences. Update your avatar, name, and contact details, or manage account settings such as deletion. Click on the avatar to upload a custom one from your files. Please enter your full name, or a display name you are comfortable with. Please enter the email address you want to use to log in with Vernacular. Enter a phone number to receive important service updates by SMS. What would you like people to know about you? You can change your password here. Permanently remove your Personal Account and all of its contents from the Vercel platform. This action is not reversible, so please continue with caution.`,
    billing: `View and manage your current subscription plan and access details. Choose the plan that best fits your needs to unlock premium features and enhance your experience. Discover optional features and upgrades to tailor your experience to your needs. Access additional storage to support your growing needs and projects Unlock advanced customization options to tailor your profile to your unique style and preferences Access enhanced analytics and insights into user engagement, content performance, and audience demographics to make more informed decisions and optimize your content strategy `,
    sessions: `This is a list of devices that have logged into your account. Revoke any sessions that you do not recognize. Vernacular Mobile can be used to verify your identity when signing in from a new device and as a two-factor authentication method. Learn more about authentication with Vernacular Mobile. To get started, install Vernacular Mobile for iOS or Android and sign in to your account.



    `

  }
];
   
  const searcher = new FuzzySearch(searchable, ['section', 'link', 'content.opening', 'faq'], {
    caseSensitive: false,
  });
  const handleSearch = () => {
    // setQuery(searcher.search(e.target.value))
  }
  console.log(query)
  return (
    <div className={`${styles["search-overlay"]}`}>
      <div className="text-white container mt-5">
        <div className="row justify-content-center">
          <div className="col-9">
            <div className={`input-group mb-3`} tabIndex={0}>
              <span className={`input-group-text pe-0  ${styles["icon-container"]}`}>
                <MdSearch size="1.5em" className="text-white"></MdSearch>
              </span>
              <input type="text" onChange={handleSearch} className={`form-control ${styles["light-border-input"]} ${styles["placeholder"]} py-3 border-start-0`} placeholder="Search Vernacular.." />
            </div>
            <Button bootstrapStyle="mt-3" buttonColor={{ cssColor: "black" }} radius="10px" padding="10px" width="100%" type="button">
              Search
            </Button>
            <div className="mt-5">
              <p style={{ fontWeight: "300" }} className="fs-5 text-center">
                Find anything about our product, search our links, and more. Enter a query in the search input above, and results will be displayed as you type.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
