'use client'
// import { viewMetadata } from "@/global/metadata";
// import { Metadata } from "next";
import pfp from "@/assets/images/pfp.jpg";
import Image from "next/image";
import Button from "@/components/Button";
import styles from "@/styles/View.module.css";
import { useEffect, useState } from "react";

//export const metadata: Metadata = viewMetadata;
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

const BATCH_LIMIT = 8
export default function View() {
  const [data, setData] = useState<DataItem[]>([])
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true);
  const [endItem, setEndItem] = useState(BATCH_LIMIT);

  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=${endItem}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to fetch')
      }
      return res.json()
    })
    .then((data) => {
      if (data.length === 0) {
        setError(true); // Set an error state if data is empty
      } else {
        setData(data);
      }
      setIsLoading(false);
    })
    .catch((error) => {
      setIsLoading(false);
      setError(true);
      console.error(error);
    })
  },[endItem])

  if (isLoading) {
    return <div className="spinner">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error fetching data. Unexpected error or Out of range</div>;
  }

  
  const handleLoadMore = () => {
    setEndItem((prev) => prev + BATCH_LIMIT)
  }
  
  return (
    <div className="text-white container">
      <section className="d-flex flex-column align-items-center position-relative mt-5 ">
        <ul style={{ left: 0,listStyle:"none" }} className="d-flex text-center position-absolute mt-5 ms-5">
          <li className="me-5">
            <div className="text-success">22</div>
            <div>Friends</div>
          </li>
          <li className="me-5">
            <div className="text-success">10</div>
            <div>Reviews</div>
          </li>
          <li className="me-5">
            <div className="text-success">33</div>
            <div>Likes</div>
          </li>
        </ul>
        <div style={{ right: 0 }} className="d-flex text-center position-absolute mt-5 me-5">
          <div className={`${styles["button"]}`}>
            <Button color="btn-success" href="/" text="Connect" width="auto"></Button>
          </div>
          <div className={`${styles["button"]}`}>
            <Button color="btn-outline-success" href="/" text="Message" width="auto"></Button>
          </div>
        </div>
        <Image style={{ borderRadius: "9999px", transform:"translateY(-20px)" }} src={pfp} alt="pfp" width={200} height={200}></Image>
        <div className="col-8 text-center">
        <h2 className="mt-4">Jessica Jones, 27</h2>
        <h5 className="text-info">Oakland, California</h5>
        <p className="text-center mt-4">Before being named CEO in August 2011, Tim was Apple’s chief operating officer and was responsible for all of the company’s worldwide sales and operations, including end-to-end management of Apple’s supply chain, sales activities, and service and support in all markets and countries. </p>
        </div>
      </section>
      <hr/>
      <section className="text-center" >
        <h3 className="text-center my-5">My Reviews:</h3>
        {displayData(data)}
        <div className={`mt-5`}  onClick={handleLoadMore}>
          <span className={`${styles["show-more"]}`}>Show More</span>
          </div>
      </section>
    </div>
  );
}
