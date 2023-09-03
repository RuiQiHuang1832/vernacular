

import { createMetadata } from "@/global/metadata";
import { Metadata } from "next";

export const metadata: Metadata = createMetadata;



export default function Create() {
    return (
      <div className="text-white">
        <h1>Hello, Create!</h1>
        <p>This is a functional component.</p>
      </div>
    );
  }
  