import image_1 from "@/assets/images/home/illustration-data-1.png";
import image_2 from "@/assets/images/home/illustration-data-2.png";
import image_3 from "@/assets/images/home/illustration-data-3.png";
import styles from "@/styles/HeaderWithImageAndParagraph.module.css"
export interface SectionType {
    id: string;
    header: React.ReactNode;
    paragraph: React.ReactNode;
    imageSrc: string;
    imageWidth: number;
    imageHeight: number;
    direction: 'flex-lg-row' | 'flex-lg-row-reverse';
    learnMore: string;
    sectionContainerClass?:string;
  }

  const highlightColor:string = ""

export const sections: SectionType[] = [
    {
      id: "anchor-1",
      header: (
        <>
          Discover <span style={{color:highlightColor}}>Seamless</span> Multimedia Management
        </>
      ),
      paragraph: (
        <>
           Our innovative web app empowers you to effortlessly organize, curate, and enjoy your favorite media. Whether it&apos;s movies, TV shows, or other content, our platform provides a seamless and intuitive solution.
        </>
      ),
      imageSrc: image_1.src,
      imageWidth: 600,
      imageHeight: 600,
      direction: "flex-lg-row-reverse" as const,
      learnMore: "Learn more about seamless multimedia management",
      sectionContainerClass:styles[""]
    },
    {
      id: "anchor-2",
      header: (
        <>
          <span style={{color:highlightColor}}>Simplify</span> Your Multimedia Lifestyle
        </>
      ),
      paragraph: (
        <>
          Say Goodbye to Chaos. Easily create and customize playlists, rate and review your media, and discover new content that resonates with your unique preferences.
        </>
      ),
      imageSrc: image_2.src,
      imageWidth: 600,
      imageHeight: 600,
      direction: "flex-lg-row" as const,
      learnMore: "Learn more about our customizable playlist",
      sectionContainerClass:styles[""]
    },
    {
      id: "anchor-3",
      header: (
        <>
          Elevate Your <span style={{color:highlightColor}}>Media Collection</span> 
        </>
      ),
      paragraph: (
        <>
           Unlock the potential of personalized playlists that reflect your taste. With our platform, you&apos;re not just consuming content – you&apos;re curating a tailored entertainment experience.
        </>
      ),
      imageSrc: image_3.src,
      imageWidth: 600,
      imageHeight: 600,
      direction: "flex-lg-row-reverse" as const,
      learnMore: "Learn more about vern's solutions",
      sectionContainerClass:styles[""]
    }
  ];