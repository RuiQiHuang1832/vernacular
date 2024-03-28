import { createMetadata } from "@/global/metadata";
import { Metadata } from "next";
import CurrentComponent from "./components/CurrentComponent";
export const metadata: Metadata = createMetadata;


export default function Create() {
  return (
    <div className="text-white mt-5">
      <CurrentComponent></CurrentComponent>
    </div>
  );
}
