
import { viewMetadata } from "@/global/metadata";
import { Metadata } from "next";

export const metadata: Metadata = viewMetadata;


export default function View() {
    return (
      <div className="text-white">
        <h1>Hello, VIew!</h1>
        <p>This is a functional component.</p>
      </div>
    );
  }
  