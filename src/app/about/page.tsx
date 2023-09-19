import HeaderWithInfo from "@/components/HeaderWithInfo";
import { aboutMetadata } from "@/global/metadata";
import { Metadata } from "next";
import { AboutData } from "@/global/aboutData";
import { mapObjectToComponent } from "@/helpers/mapObjectToComponent";

export const metadata: Metadata = aboutMetadata;


export default function About() {
    return (
      <div className="container text-white text-center">
        <h1 className="py-5">About Us</h1>
        {mapObjectToComponent(AboutData, HeaderWithInfo)}
      </div>
    );
  }

