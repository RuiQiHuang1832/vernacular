import styles from "@/styles/community-styles/Community.module.css";
import PaginatedItems from "@/components/PaginatedItems";
import horizon from "@/assets/images/horizon.png"
import Image from "next/image";
import { FaDatabase,FaDownload  } from "react-icons/fa";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { useSearchParams } from "next/navigation";
import { Tab } from "../hooks/useTabs";
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
        data.map((e: DataItem,i) => {
          return (
            <div key={i} style={{borderRadius:0}} className="card bg-transparent text-white border border-white mt-3">
              <figure className="mb-0">
              <Image priority={true} src={horizon.src} width={500} height={560} quality={100} alt="iag" className={`${styles["object-fit"]}`}  ></Image>
            </figure>
            <div style={{fontSize:"13px", maxHeight:"250px", minHeight:"250px"}} className="card-body mb-2 fw-light overflow-hidden ">
                <h5 style={{fontSize:"16px"}} className="card-title mt-3">{e.title}</h5>
                <div className="info">
                <div className="text-danger">Movies</div>
                <div>Uploaded: 01 Apr 2024 |</div>
                <div>Last Update: 01 Apr 2024 |</div>
                <div>Author : Nukem | Uploader: <span>Nukem</span></div>
                </div>
                <p className={`card-text pt-3 ${styles["multiline-ellipsis"]}`}>{e.body}</p>
              </div>
              <div style={{columnGap:"12px", fontSize: "13px" }} className="d-flex border-top border-white data px-3 py-1 position-relative">
              <div className={styles["fadeoff"]}></div>

                    <div className="d-flex align-items-center"><FaDatabase></FaDatabase>&nbsp;4.4 MB</div>
                    <div className="d-flex align-items-center"><BsHandThumbsUpFill></BsHandThumbsUpFill>&nbsp;244</div>
                    <div className="d-flex align-items-center"><FaDownload ></FaDownload>&nbsp;13.5k</div>
                  </div>
            </div>
          );
        })}
    </section>
  );
}

export default function CommunityGrid(props: { 
  tab: Tab, 
  pagination:boolean, 
  setLoadState:React.Dispatch<React.SetStateAction<boolean>>  }) {
  const pageParams = useSearchParams();
  const pageNumber = parseInt(pageParams.get('page') ?? '1') 
  return <PaginatedItems 
  url={`http://localhost:3001/${props.tab.id}`} 
  itemsPerPage={10}
  setLoad={props.setLoadState}
  showPages={props.pagination} 
  currentPage={pageNumber} 
  displayFunction={displayData}></PaginatedItems>;
}

