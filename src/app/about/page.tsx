
import HeaderWithInfo from "@/components/HeaderWithInfo";
import { aboutMetadata } from "@/global/metadata";
import { Metadata } from "next";
import { AboutData } from "@/global/aboutData";
import { mapObjectToComponent } from "@/helpers/mapObjectToComponent";
import Image from "next/image";
import { presidentList, President, investorsList, Investors } from "@/global/teamData";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import headerAboutImage from "@/assets/images/about/headerAboutImage.png";
import styles from "@/styles/About.module.css";
import classNames from "classnames";
import BorderDivider from "@/components/BorderDivider";

export const metadata: Metadata = aboutMetadata;



export default function About() {
  const sectionStyles = classNames("container text-center text-white")
  const bsGridStyles = classNames("row row-cols-3 justify-content-center")
  const colStyles = classNames("col-12 col-sm-6 col-md-4 mb-5")
  return (
    <>
      <section className={styles["section-bg-color"]}>
        <div className={`${sectionStyles} pt-5`}>
          <h1>
            We Are <span className="text-success">Vernacular</span>
          </h1>
          <p className="pb-5">Providing you with the most actionable playlist data.</p>
          <HeaderWithInfo
            header={<Image src={headerAboutImage} alt="about page logo" width={500} height={400} className={"globalObjectFit"} quality={100} />}
            headerSide="right"
            information={
              <>
                <p>At Vernacular, we want to solve the biggest problem in mobile: everyone is guessing.</p> <p>Publishers need to know what apps to build, how to monetize them, and where to price them. Advertisers and brands need to identify their target users, and determine where to allocate resources in order to reach them most effectively.</p>
                <p className="pb-5">Vernacular provides the most actionable mobile app insights in the industry. We aim to make this data available to as many people as possible.</p>
              </>
            }
          ></HeaderWithInfo>
          <div className={styles["bottom-wave"]}></div>
        </div>
      </section>
      <div className={`${styles["hiring-button"]} text-center`} >
        <Button color="btn btn-info" href="/careers" text="We're Hiring!" width={"auto"}></Button>
      </div>
      <section className={sectionStyles}>
        <SectionHeading section={"About"}></SectionHeading>
        {mapObjectToComponent(AboutData, HeaderWithInfo)}
        <SectionHeading section="Meet Our Leadership" on={true}></SectionHeading>
        <div className={bsGridStyles}>
          {presidentList.map((president: President, index: number) => (
            <div className={colStyles} key={index}>
              <Image style={{ borderRadius: "50%" }} src={president.src} alt={president.alt} width={200} height={200}></Image>
              <h5 className="pt-3">{president.name}</h5>
              <p className="text-secondary">{president.title}</p>
                <BorderDivider marginBottom="3rem" marginTop="0"></BorderDivider>
              <p className={"text-start fw-light col-10 mx-auto"}>{president.description}</p>
            </div>
          ))}
        </div>
        <div style={{ marginBottom: "7em" }}></div>
        <SectionHeading section="Meet Our Investors" on={true}></SectionHeading>
        <div className={bsGridStyles}>
          {investorsList.map((investor: Investors, index: number) => (
            <div className={colStyles} key={index}>
              <Image src={investor.src} alt={investor.name} width={120} height={120}></Image>
              <h5 className="pt-3">{investor.name}</h5>
            </div>
          ))}
        </div>
        <Button color="btn btn-info" href="/contact-us" text="Let's chat!" width={"auto"}></Button>
      </section>
    </>
  );
}
