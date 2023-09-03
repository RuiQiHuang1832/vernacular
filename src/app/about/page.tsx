import { aboutMetadata } from "@/global/metadata";
import { Metadata } from "next";

export const metadata: Metadata = aboutMetadata;

export default function About() {
    return (
      <div className="text-white">
        <h1>Hello, About!</h1>
        <p>This is a functional About.</p>
      </div>
    );
  }

