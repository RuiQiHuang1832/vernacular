import styles from "@/styles/community-styles/Community.module.css";
import PaginatedItems from "@/components/PaginatedItems";
import horizon from "@/assets/images/horizon.png";
import Image from "next/image";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { useSearchParams } from "next/navigation";
import { Tab } from "../hooks/useTabs";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import Sparks from "@/components/Sparks";
type DataItem = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function displayData(data: DataItem[]) {
  return (
    <section className={`${styles["grid"]} my-2`}>
      {data &&
        data.map((e: DataItem, i) => {
          return (
            <div key={i} style={{ borderRadius: 0 }} className={`card bg-transparent text-white mt-3 ${styles["card-review-container"]} `}>
              <figure style={{ zIndex: "2" }} className={`mb-0 ${styles["figure"]}`}>
                <Image style={{ borderRadius: "10px 10px 0 0" }} priority={true} src={horizon.src} width={500} height={560} quality={100} alt="iag" className={` ${styles["object-fit"]} `}></Image>
              </figure>
              <div style={{ fontSize: "13px", maxHeight: "250px", minHeight: "250px", background: "rgb(0 0 0 / 26%)", zIndex: "1" }} className="card-body  overflow-hidden ">
                <h5 style={{ fontSize: "16px" }} className={`card-title mt-3 ${styles["title"]} d-flex justify-content-between align-items-center`}>
                  {e.title}
                </h5>

                <div className="info">
                  <div className="text-warning">Movies</div>
                  <div>Uploaded: 01 Apr 2024</div>
                  <div>Author : Nukem</div>
                </div>
                <p className={`card-text pt-3 ${styles["multiline-ellipsis"]}`}>{e.body}</p>
              </div>
              <div style={{ columnGap: "12px", fontSize: "13px", background: "rgba(0,0,0,0.81)", borderRadius: "0 0 10px 10px" }} className="d-flex data px-3 py-1  position-relative align-items-center">
                <div className={styles["fadeoff"]}></div>
                <div style={{ height: "1rem", backgroundColor: "red", width: "3px" }}></div>
                <div className="d-flex align-items-center ">
                  <BsHandThumbsUpFill color="yellow"></BsHandThumbsUpFill>&nbsp;244
                </div>
                <div className="d-flex align-items-center">
                  <BsFillBookmarkCheckFill color="#00ff30f7"></BsFillBookmarkCheckFill>&nbsp;13.5k
                </div>
                <Sparks></Sparks>
              </div>
            </div>
          );
        })}
    </section>
  );
}

export default function CommunityGrid(props: { tab: Tab; pagination: boolean; setLoadState: React.Dispatch<React.SetStateAction<boolean>> }) {
  const pageParams = useSearchParams();
  const pageNumber = parseInt(pageParams.get("page") ?? "1");
  return <PaginatedItems url={`http://localhost:3001/${props.tab.id}`} itemsPerPage={20} setLoad={props.setLoadState} showPages={props.pagination} currentPage={pageNumber} displayFunction={displayData}></PaginatedItems>;
}
