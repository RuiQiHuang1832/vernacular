import styles from "@/styles/community-styles/Community.module.css";
import PaginatedItems from "@/components/PaginatedItems";
import horizon from "@/assets/images/horizon.png";
import Image from "next/image";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { useSearchParams } from "next/navigation";
import { Tab } from "../hooks/useTabs";
import { FaRegHeart } from "react-icons/fa";
import { BsFillBookmarkCheckFill } from "react-icons/bs";

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
              <div style={{ fontSize: "13px", maxHeight: "250px", minHeight: "250px", background: "rgb(0 0 0 / 24%)", zIndex: "1" }} className="card-body fw-light overflow-hidden ">
                <h5 style={{ fontSize: "16px" }} className={`card-title mt-3 ${styles["title"]} d-flex justify-content-between align-items-center`}>
                  {e.title}
                </h5>

                <div className="info">
                  <div className="text-warning">Movies</div>
                  <div>Uploaded: 01 Apr 2024 |</div>
                  <div>Author : Nukem</div>
                </div>
                <p className={`card-text pt-3 ${styles["multiline-ellipsis"]}`}>{e.body}</p>
              </div>
              <div style={{ columnGap: "12px", fontSize: "13px", background: "rgba(0,0,0,0.74)", borderRadius: "0 0 10px 10px" }} className="d-flex data p-3 position-relative align-items-center">
                <div className={styles["fadeoff"]}></div>
                <div style={{ height: "1rem", backgroundColor: "red", width: "3px" }}></div>
                <div className="d-flex align-items-center ">
                  <BsHandThumbsUpFill color="yellow"></BsHandThumbsUpFill>&nbsp;244
                </div>
                <div className="d-flex align-items-center">
                  <BsFillBookmarkCheckFill color="#00ff30f7"></BsFillBookmarkCheckFill>&nbsp;13.5k
                </div>
              </div>
            </div>
          );
        })}
                <div className={`ms-auto heart-icon`}>
                  <svg viewBox="-27 -27 108 108" fill="black" stroke="red" width="200" height="200" role="presentation" color="currentColor"  >
                    <g  className="hearts">
                      <path className="heart heart-outline" d="M27 38.9c-.4 0-.6-.1-.8-.4L16.7 29c-1.8-1.8-2.7-3.8-2.7-6 0-4.4 3.5-8 7.9-8 1.9 0 3.7.8 5.1 2.3 1.4-1.4 3.2-2.3 5.1-2.3 4.4 0 7.9 3.6 7.9 8 0 2.6-1.5 4.6-2.7 6.1l-9.5 9.4c-.2.3-.6.4-.8.4zm-5.1-21.4c-3.1 0-5.6 2.5-5.6 5.6 0 1.9 1.1 3.3 2 4.3l8.6 8.7 8.5-8.6c1.4-1.5 2.1-3 2.1-4.4 0-3.1-2.5-5.6-5.6-5.6-1.5 0-3 1-4.1 2.5-.5.6-1.4.6-1.9 0-1-1.6-2.4-2.5-4-2.5z"></path>
                      <path className="heart heart-filled" d="M32.1 15.1c-1.9 0-3.7.8-5.1 2.3-1.4-1.4-3.2-2.3-5.1-2.3-4.4 0-7.9 3.6-7.9 8 0 2.1.9 4.2 2.7 6l9.5 9.5c.2.2.5.4.8.4.2 0 .6-.1.8-.4l9.5-9.4c1.2-1.4 2.7-3.5 2.7-6.1 0-4.4-3.5-8-7.9-8z"></path>
                    </g>
                    <g className="sparks">
                      <path className="spark" d="M27 8V0M27 46v8" stroke-width="2"></path>
                      <path className="spark" d="M41.171 12.828l5.657-5.657M12.829 12.828L7.171 7.172" stroke-width="2"></path>
                      <path className="spark" d="M46 27h8M8 27H0" stroke-width="2"></path>
                      <path className="spark" d="M41.172 41.172l5.657 5.656M12.829 41.171l-5.657 5.657" stroke-width="2"></path>
                    </g>
                  </svg>
                </div>
    </section>
  );
}

export default function CommunityGrid(props: { tab: Tab; pagination: boolean; setLoadState: React.Dispatch<React.SetStateAction<boolean>> }) {
  const pageParams = useSearchParams();
  const pageNumber = parseInt(pageParams.get("page") ?? "1");
  return <PaginatedItems url={`http://localhost:3001/${props.tab.id}`} itemsPerPage={20} setLoad={props.setLoadState} showPages={props.pagination} currentPage={pageNumber} displayFunction={displayData}></PaginatedItems>;
}
