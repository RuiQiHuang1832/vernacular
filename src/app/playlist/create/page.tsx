import { createMetadata } from "@/global/metadata";
import { Metadata } from "next";
import "@/styles/CreatePlaylist.css";
import SectionHeading from "@/components/SectionHeading";
import CreateForm from "./CreateForm";

export const metadata: Metadata = createMetadata;

export default function Create() {
  return (
    <div className="text-white container mt-5">
      <SectionHeading section="New Playlist"></SectionHeading>
      <CreateForm></CreateForm>
    </div>
  );
}
