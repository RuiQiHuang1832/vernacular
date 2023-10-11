import HeaderWithInfo from "@/components/HeaderWithInfo";
import { aboutMetadata } from "@/global/metadata";
import { Metadata } from "next";
import { AboutData } from "@/global/aboutData";
import { mapObjectToComponent } from "@/helpers/mapObjectToComponent";
import Image from "next/image";
import { presidentList, President } from "@/global/teamData";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";


export const metadata: Metadata = aboutMetadata;

export default function About() {

  return (
    <div className="container text-white text-center mt-5">
      <SectionHeading section={"About"}></SectionHeading>
      {mapObjectToComponent(AboutData, HeaderWithInfo)}
      <SectionHeading section={"Meet the team"}></SectionHeading>
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
