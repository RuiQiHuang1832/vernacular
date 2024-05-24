import { createMetadata } from "@/global/metadata";
import { Metadata } from "next";
import MediaManager from "./components/MediaManager";
export const metadata: Metadata = createMetadata;


export default function Create() {
  return (
    <div className="text-white my-5">
      <MediaManager></MediaManager>
    </div>
  );
}
