import { createMetadata } from "@/global/metadata";
import { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Playlist from "./Playlist";

export const metadata: Metadata = createMetadata;

export default function Create() {
  return (
    <div className="text-white container mt-5">
      <SectionHeading section="New Playlist"></SectionHeading>
      <Playlist></Playlist>
    </div>
  );
}
