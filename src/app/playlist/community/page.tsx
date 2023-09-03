import { communityMetadata } from "@/global/metadata";
import { Metadata } from "next";

export const metadata: Metadata = communityMetadata;



export default function Community() {
    return (
      <div className="text-white">
        <h1>Hello, World!</h1>
        <p>This is a functional component.</p>
      </div>
    );
  }
  