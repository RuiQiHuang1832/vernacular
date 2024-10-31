"use client";
import CommunityGrid from "./components/CommunityGrid";
import "@/styles/community-styles/framer-tabs.css"
import "@/styles/community-styles/community.css"
import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { Tab } from "./hooks/useTabs";
import styles from "@/styles/community-styles/Community.module.css";

// import styles from "@/styles/community-styles/Branch.module.css"

type CommunityProps = {
  pagination: boolean;
  tab: Tab
};
// when user clicks view more
export default function Branch(props: CommunityProps) {
  const [selectItems, setSelectItems] = useState("1");
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>, label:string) => {
    setSelectItems(e.target.value);
    router.push(pathname + "?" + createQueryString(label, e.target.value));
  };

  return (
    <div className="text-white my-5 mx-auto container position-relative">
     <section className={`d-flex ${styles["community-banner"]} align-items-center rounded`}>
</section>
    {!isLoading && <> <h1>{props.tab.title}</h1>
      <div style={{columnGap:"1em", position:"absolute", right:"12px", transform: "translateY(calc(50% + 6px))"}} className="d-flex justify-content-end">
        <div>
        <label className="mb-2">Time</label>
        <select  className="form-select rounded" value={selectItems}  onChange={(e) => handleChange(e,"time")}>
          <option value="0">All time</option>
          <option value="1">24 hrs</option>
          <option value="7">7 days</option>
          <option value="14">14 days</option>
          <option value="30">30 days</option>
          <option value="365">1 year</option>
        </select>
        </div>
        <div>
        <label className="mb-2">Items</label>
        <select className="form-select rounded" value={selectItems} onChange={(e) => handleChange(e,"items")}>
          <option  value="4">4 items</option>
          <option value="8">8 items</option>
          <option value="16">16 items</option>
          <option value="20">20 items</option>
        </select>
        </div>
        <div>
        <label className="mb-2">Display</label>
        <select className="form-select rounded" value={selectItems} onChange={(e) => handleChange(e,"display")}>
          <option  value="tiles">Tiles</option>
          <option value="list">List</option>
        </select>
        </div>
      </div></>} 
      <CommunityGrid tab={props.tab} pagination={props.pagination} setLoadState={setIsLoading}></CommunityGrid>
    </div>
  );
}
