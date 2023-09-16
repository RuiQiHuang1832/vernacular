import image_1 from "@/assets/images/illustration-data-1.png";
import image_2 from "@/assets/images/illustration-data-2.png";
import image_3 from "@/assets/images/illustration-data-3.png";
import image_avocado from "@/assets/images/illustration-avocado.png";
import Button from "@/components/Button";

export interface SectionType {
    id: string;
    header: React.ReactNode;
    paragraph: React.ReactNode;
    imageSrc: string;
    imageWidth: number;
    imageHeight: number;
    direction: 'flex-md-row' | 'flex-md-row-reverse';
    learnMore: string;
  }

const highlightColor: string = "text-success";
export const sections: SectionType[] = [
    {
      id: "anchor-1",
      header: (
        <>
          Discover <span className={highlightColor}>Seamless</span> Multimedia Management
        </>
      ),
      paragraph: (
        <>
          Experience the Power of Streamlined Multimedia Management. Our innovative web app empowers you to effortlessly organize, curate, and enjoy your favorite media. Whether it&apos;s movies, TV shows, or other content, our platform provides a seamless and intuitive solution.
        </>
      ),
      imageSrc: image_1.src,
      imageWidth: 400,
      imageHeight: 280,
      direction: "flex-md-row-reverse" as const,
      learnMore: "Learn more about seamless multimedia management",
    },
    {
      id: "anchor-2",
      header: (
        <>
          <span className={highlightColor}>Simplify</span> Your Multimedia Lifestyle
        </>
      ),
      paragraph: (
        <>
          Say Goodbye to Chaos. Our web app transforms multimedia management into a hassle-free experience. Easily create and customize playlists, rate and review your media, and discover new content that resonates with your unique preferences.
        </>
      ),
      imageSrc: image_2.src,
      imageWidth: 350,
      imageHeight: 350,
      direction: "flex-md-row" as const,
      learnMore: "Learn more about our customizable playlist",
    },
    {
      id: "anchor-3",
      header: (
        <>
          Elevate Your <span className={highlightColor}>Media Collection</span> 
        </>
      ),
      paragraph: (
        <>
          Take Your Media Collection to New Heights. Unlock the potential of personalized playlists that reflect your taste. With our platform, you&apos;re not just consuming content – you&apos;re curating a tailored entertainment experience.
        </>
      ),
      imageSrc: image_3.src,
      imageWidth: 400,
      imageHeight: 250,
      direction: "flex-md-row-reverse" as const,
      learnMore: "Learn more about Vernacular's solutions",
    },
    {
      id: "anchor-4",
      header: (
        <>
          Ready to upgrade your <span className={highlightColor}>multimedia management?</span>
        </>
      ),
      paragraph: (
        <>
                       
                        <Button color="btn-success" href="/login" text="SIGN UP FOR FREE" width={"16em"}></Button>
                        <Button color="btn-outline-success" href="/login" text="LEARN MORE" width={"16em"}></Button>
                     

        </>
      ),
      imageSrc: image_avocado.src,
      imageWidth: 403,
      imageHeight: 380,
      direction: "flex-md-row" as const,
      learnMore: "",
    },
  ];