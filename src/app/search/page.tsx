import { searchMetadata } from "@/global/metadata";
import { Metadata } from "next";

export const metadata: Metadata = searchMetadata;



export default function Search() {
    return (
      <div className="text-white">
        <h1>Hello, Search!</h1>
        <p>This is a functional Search.</p>
      </div>
    );
  }
  