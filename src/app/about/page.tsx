import HeaderWithInfo from "@/components/HeaderWithInfo";
import { aboutMetadata } from "@/global/metadata";
import { Metadata } from "next";
import { AboutData } from "@/global/aboutData";
import { mapObjectToComponent } from "@/helpers/mapObjectToComponent";
import classNames from "classnames";
import Image from "next/image";
import { presidentList, President } from "@/global/teamData";
import Button from "@/components/Button";

export const metadata: Metadata = aboutMetadata;

export default function About() {
  const headingStyle: string = classNames("py-5 mb-5 section-heading");
  return (
    <div className="container text-white text-center">
      <h1 className={headingStyle}>About Us</h1>
      {mapObjectToComponent(AboutData, HeaderWithInfo)}
      <h1 className={headingStyle}>Meet the Team</h1>
      <div className="row row-cols-3 justify-content-center">
        {presidentList.map((president: President, index: number) => (
          <div className="col-12 col-sm-6 col-md-4 mb-5" key={index}>
            <Image style={{ borderRadius: "50%" }} src={president.src} alt={president.alt} width={200} height={200}></Image>
            <h5 className="pt-3">{president.name}</h5>
            <p className="text-secondary">{president.title}</p>
          </div>
        ))}
      </div>
      <Button color="btn btn-outline-warning" href="/contact-us" text="Let's chat!" width={"auto"}></Button>
    </div>
  );
}
