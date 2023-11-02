import { PiArrowsLeftRightFill } from "react-icons/pi";
import classNames from "classnames";
import Image from "next/image";
import aboutImage1 from "@/assets/images/about_image1.jpg";
import aboutImage2 from "@/assets/images/about_image2.jpg";
import aboutImage3 from "@/assets/images/about_image3.jpg";

export type aboutType = {
  header: React.ReactNode;
  information: React.ReactNode;
  headerSide: "right" | "left" | "top";
};

const iconStyle = classNames("d-none d-lg-inline");
const importantWord = classNames("text-success fw-bold");
const doubleArrowIconColor = "white";

export const AboutData: aboutType[] = [
  // WHO ARE WE
  {
    header: (
      <>
        Who Are We <PiArrowsLeftRightFill color={doubleArrowIconColor} className={iconStyle}></PiArrowsLeftRightFill>
      </>
    ),
    information: (
      <>
        <p>We are a team of passionate media enthusiasts, tech aficionados, and organization enthusiasts. Our journey began with a simple question: How can we make managing and exploring media collections an effortless and enjoyable experience?</p>The answer led us to create this innovative web app, designed to simplify the way you catalog and engage with your favorite movies and TV shows.
      </>
    ),
    headerSide: "right",
  },
  {
    header: (
      <figure className="figure">
        <Image src={aboutImage1} alt="Former U.S. Presidents George Washington, Abraham Lincoln, and Chester Arthur image" width={600} height={100} style={{ borderRadius: "10px" }} className={"globalObjectFit figure-img"} quality={100} />
        <figcaption style={{ fontSize: "12px" }} className="figure-caption text-white fw-light">
          (L-R) Former U.S. Presidents George Washington, Abraham Lincoln, and Chester Arthur <span className="credit">Getty Images (3)</span>
        </figcaption>
      </figure>
    ),
    information: (
      <>
        <p>At our core, we&apos;re all about transforming chaos into clarity.</p> <p>Our web app provides a sleek and intuitive platform that empowers you to catalog your media collection in an organized and personalized manner.</p> <p>Whether you&apos;re a devoted film buff or a casual viewer, our tools make it easy to curate playlists, rate your favorites, and discover new content tailored to your unique preferences. At the heart of our mission is a commitment to simplifying the media management experience. We understand that the world of entertainment is vast and ever-expanding.</p>
        <p>That&apos;s why we continuously enhance our app with smart algorithms that automatically recommend movies, TV shows, and music based on your tastes. We believe that navigating the world of media should be not just organized but also fun and serendipitous, and we&apos;re here to make that happen for you. Explore, enjoy, and let us be your guide through the exciting realm of digital entertainment.</p>
      </>
    ),
    headerSide: "left",
  },
  // Our Impact
  {
    header: (
      <>
        Our Mission <PiArrowsLeftRightFill className={iconStyle} color={doubleArrowIconColor}></PiArrowsLeftRightFill>
      </>
    ),
    information: <>Our mission is to revolutionize the way you interact with your media library. We&apos;re committed to bringing order to the vast landscape of entertainment options. With a focus on simplicity, customization, and user experience, we aim to redefine how you engage with your multimedia treasures.</>,
    headerSide: "right",
  },
  {
    header: (
      <figure className="figure">
        <Image src={aboutImage2} alt="President Franklin Roosevelt signing the banking reform bill in 1933. image" width={600} height={100} style={{ borderRadius: "10px" }} className={"globalObjectFit figure-img"} quality={100} />
        <figcaption style={{ fontSize: "12px" }} className="figure-caption text-white fw-light">
          President Franklin Roosevelt signing the banking reform bill in 1933. <span className="credit">Bettmann/Corbis</span>
        </figcaption>
      </figure>
    ),
    information: (
      <>
        <p>We take pride in the impact we&apos;re making on the way you manage your media. By offering a seamless platform for media cataloging, we&apos;re helping you reclaim your time and rediscover the joy of entertainment.</p> <p>Our users have reported increased satisfaction in exploring their collections, finding hidden gems, and enjoying a more personalized entertainment experience.</p>Furthermore, our commitment to user satisfaction goes beyond just the platform itself. We take pride in providing excellent customer support, ensuring that any questions or concerns you have are addressed
        promptly. Our dedicated team is here to assist you on your journey to a more organized and enjoyable media experience. We&apos;re thrilled to be a part of your entertainment world, helping you transform chaos into clarity, one movie, song, or show at a time.
      </>
    ),
    headerSide: "left",
  },
  // Our Impact
  {
   header: (
     <>
       Our Impact <PiArrowsLeftRightFill color={doubleArrowIconColor} className={iconStyle}></PiArrowsLeftRightFill>
     </>
   ),
   information: <>At the heart of our mission is the transformation of chaos into clarity, and this endeavor carries a profound impact on how people interact with their media collections and the wider world of entertainment. Through our innovative web app, we have left an indelible mark on the way individuals curate, enjoy, and explore the vast realm of digital entertainment.</>,
   headerSide: "right",
 },
 {
   header: (
     <figure className="figure">
       <Image src={aboutImage3} alt="Vintage print of the first twenty-one Presidents seated together in The White House." width={600} height={100} style={{ borderRadius: "10px" }} className={"globalObjectFit figure-img"} quality={100} />
       <figcaption style={{ fontSize: "12px" }} className="figure-caption text-white fw-light">
       Vintage print of the first twenty-one Presidents seated together in The White House. <span className="credit">Getty Images</span>
       </figcaption>
     </figure>
   ),
   information: (
     <>
       <ul>
         <li>
           <span className={importantWord}>Organized Bliss:</span> Our web app&apos;s sleek and intuitive platform has redefined the way media enthusiasts catalog their collections. We&apos;ve brought clarity to the previously chaotic world of media management.  Our impact is felt in the peace of mind that comes from knowing that your media is neatly cataloged and readily accessible.
         </li>
         <li>
           <span className={importantWord}>Personalized Discovery:</span> We are not just about organization; we are about personalization. Our app empowers users to curate playlists, rate their favorites, and discover new content that aligns perfectly with their tastes. Our impact can be seen in the joy of users as they stumble upon hidden gems that resonate with them, thanks to our tailored recommendations.
         </li>
         <li>
           <span className={importantWord}>Guiding Light:</span> Our impact is in being the guiding light through the exciting realm of digital entertainment. We&apos;ve become the trusted companion for devoted film buffs and casual viewers alike. We lead users to uncharted territories of entertainment they might not have discovered otherwise. Our app is not just a platform; it&apos;s a bridge to a world of endless possibilities.
         </li>
       </ul>
     </>
   ),
   headerSide: "left",
 },
  {
    header: <>Join Us On The Journey</>,
    information: (
      <>
        <p>We&apos;re on a journey to redefine media cataloging, and we invite you to be a part of it. Join our community of media enthusiasts and start curating your digital media haven today. </p>Together, we&apos;re shaping the future of how you connect with your favorite movies and TV shows. The most appealing aspect? It will consistently be available for <span>FREE</span>!
      </>
    ),
    headerSide: "top",
  },
];
