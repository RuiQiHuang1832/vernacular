import { PiArrowsLeftRightFill } from "react-icons/pi";
import classNames from "classnames";


export type aboutType = {
    header: React.ReactNode;
    information: React.ReactNode;
    headerSide: 'right' | 'left',
}

const iconStyle = classNames("d-none d-lg-inline")
const importantWord = classNames("text-info")
const doubleArrowIconColor = 'white'

export const AboutData: aboutType[] = [
    { header: <>Who Are We <PiArrowsLeftRightFill color={doubleArrowIconColor} className={iconStyle}></PiArrowsLeftRightFill></>, 
      information:( <>
      <p>We are a team of <span className={importantWord}>passionate</span> media enthusiasts, tech aficionados, and organization enthusiasts. Our journey began with a simple question: How can we make managing and exploring media collections an effortless and enjoyable experience?</p>The <span className={importantWord}>answer</span> led us to create this innovative web app, designed to simplify the way you catalog and engage with your favorite movies and TV shows.
      </>),
      headerSide: 'right',
   },
   { header: <><PiArrowsLeftRightFill className={iconStyle} color={doubleArrowIconColor}></PiArrowsLeftRightFill> What We Do</>, 
      information: (
         <><p>At our <span className={importantWord}>core</span>, we&apos;re all about transforming chaos into clarity.</p> <p>Our web app provides a sleek and intuitive platform that empowers you to catalog your media collection in an organized and personalized manner.</p> Whether you&apos;re a devoted film buff or a casual viewer, our tools make it easy to curate playlists, rate your favorites, and discover new content tailored to your unique preferences.</>),
      headerSide: 'left',
   },
   { header: <>Our Mission <PiArrowsLeftRightFill className={iconStyle} color={doubleArrowIconColor}></PiArrowsLeftRightFill></>, 
      information: (<>Our mission is to <span className={importantWord}>revolutionize</span> the way you interact with your media library. We&apos;re committed to bringing order to the vast landscape of entertainment options. With a focus on simplicity, customization, and user experience, we aim to <span className={importantWord}>redefine</span> how you engage with your multimedia treasures.</>),
      headerSide: 'right',
   },
   { header: <><PiArrowsLeftRightFill className={iconStyle} color={doubleArrowIconColor}></PiArrowsLeftRightFill> Our Impact</>, 
      information: (<><p>We take <span className={importantWord}>pride</span> in the impact we&apos;re making on the way you manage your media. By offering a seamless platform for media cataloging, we&apos;re helping you reclaim your time and rediscover the joy of entertainment.</p> Our users have reported <span className={importantWord}>increased satisfaction</span> in exploring their collections, finding hidden gems, and enjoying a more personalized entertainment experience.</>),
      headerSide: 'left',
   },
   { header: <>Join Us On The Journey <PiArrowsLeftRightFill className={iconStyle} color={doubleArrowIconColor}></PiArrowsLeftRightFill></>, 
   information: (<><p>We&apos;re on a journey to <span className={importantWord}>redefine media cataloging</span>, and we invite you to be a part of it. Join our community of media enthusiasts and start curating your digital media haven today. </p>Together, we&apos;re shaping the future of how you connect with your favorite movies and TV shows. The most appealing aspect? It will consistently be available for <span className={importantWord}>FREE</span>!</>),
   headerSide: 'right',
  },
  ]