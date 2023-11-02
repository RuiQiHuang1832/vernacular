import { communityMetadata } from "@/global/metadata";
import { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CommunityDisplay from "./CommunityDisplay";

export const metadata: Metadata = communityMetadata;

export default function Community({params}: {params: {id: number}}) {
    return (
      <div className="text-white container mt-5">
        <SectionHeading section={"Community Playlists"}></SectionHeading>
        <CommunityDisplay params={params}></CommunityDisplay>
      </div>
    );
  }

