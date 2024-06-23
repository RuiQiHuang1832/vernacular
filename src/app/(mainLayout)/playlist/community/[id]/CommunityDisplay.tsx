"use client";
import styles from "@/styles/Community.module.css";
import PaginatedItems from "@/components/PaginatedItems";
import horizon from "@/assets/images/horizon.png"
import Image from "next/image";
type DataItem = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function displayData(data: DataItem[]) {
  return (
    <section className={styles["grid"]}>
      {data &&
        data.map((e: DataItem) => {
          return (
            <div key={e.id} style={{borderRadius:0}} className="card bg-transparent text-white border border-white">
              <figure>
              <Image priority={true} src={horizon.src} width={500} height={560} quality={100} alt="iag" className={`${styles["object-fit"]}`} ></Image>
            </figure>
            <div  className="card-body">
                <h5 className="card-title">{e.title}</h5>
                <div className="info py-3">
                <div className="text-danger">Movies</div>
                <div>Uploaded: 01 Apr 2024 |</div>
                <div>Last Update: 01 Apr 2024 |</div>
                <div>Author : Nukem | Uploader: <span>Nukem</span></div>
                </div>
                <p className="card-text py-3">{e.body}</p>
              </div>
              <div className="data d-flex border-top border-white ">
                <div>4.4 MB</div>
                <div>244 Thumbs</div>
                <div>13.5k Downloads</div>

              </div>
            </div>
          );
        })}
    </section>
  );
}

export default function CommunityDisplay(props: { params: { id: number } }) {
  return <PaginatedItems<DataItem> 
  url={"https://jsonplaceholder.typicode.com/posts"} 
  itemsPerPage={20} 
  currentPage={props.params.id} 
  displayFunction={displayData}></PaginatedItems>;
}

