
import { communityMetadata } from "@/global/metadata";
import { Metadata } from "next";
import { dataTabs } from "@/global/tabs";

import Branch from "./Branch";


export const metadata: Metadata = communityMetadata;

export default function Community({ params }: { params: { slug: string} }) {
  const matchingObject = dataTabs.tabs.find(tab => tab.slug === params.slug) ??  dataTabs.tabs[2]
  return (
      <Branch tab={matchingObject} pagination={true}></Branch>
  );
}
