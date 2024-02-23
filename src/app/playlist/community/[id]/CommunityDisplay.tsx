"use client";
import style from "@/styles/Community.module.css";
import PaginatedItems from "@/components/PaginatedItems";

type DataItem = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function displayData(data: DataItem[]) {
  return (
    <section className={style["grid"]}>
      {data &&
        data.map((e: DataItem) => {
          return (
            <div key={e.id} className="card">
              <div className="card-body">
                <h5 className="card-title">{e.title}</h5>
                <p className="card-text">{e.body}</p>
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

