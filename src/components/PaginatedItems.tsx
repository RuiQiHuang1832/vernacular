/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import ReactPaginate from "react-paginate";
import { useState, useEffect, MouseEventHandler, MouseEvent } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Pagination } from 'swiper/modules';

type PageChangeEvent = {
  selected: number; // The selected page number
};

type PaginatedItemsProps = {
  url: string;
  itemsPerPage: number;
  currentPage: number;
  showPages: boolean;
  displayFunction: (data: DataItem[]) => JSX.Element; // Define the prop type for displayFunction
  setLoad: React.Dispatch<React.SetStateAction<boolean>>;
};

interface DataItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface DataByTab {
  [key: string]: DataItem[]; // The keys are the tab names, and the values are arrays of DataItem
}

export default function PaginatedItems({ itemsPerPage, currentPage, displayFunction, url, showPages, setLoad }: PaginatedItemsProps) {
  const router = useRouter();
  const [totalDataLength, setTotalDataLength] = useState(0);
  const [cache, setCache] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const startItem = (currentPage - 1) * itemsPerPage; // Calculate the start item based on the page
  const endItem = startItem + itemsPerPage;
  const pageCount = Math.ceil(totalDataLength / itemsPerPage);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // + `?_start=${startItem}&_end=${endItem}`
  useEffect(() => {
    console.log("first");
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((fetchedData) => {
        console.log("second");

        if (fetchedData.length === 0) {
          setError(true);
        } else {
          setCache(fetchedData); // Store the full data set
          setTotalDataLength(fetchedData.length);
        }
        setIsLoading(false);
        setLoad(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(true);
        console.error(error);
      });
  }, [url]); // Fetch only when the URL changes

  // Slice the data when the pagination (currentPage) changes
  useEffect(() => {
    if (cache.length > 0) {
      const slicedData = cache.slice(startItem, endItem);
      setPaginatedData(slicedData); // Update the displayed data based on current pagination
    }
  }, [startItem, endItem, currentPage, cache]); // Slice data when pagination changes

  const pageChange = (page:string) => {
    const params = new URLSearchParams(searchParams.toString()); // Clone current params
    params.set("page", page); // Set the new page number
    router.push(`${pathname}?${params}`); // Update the URL
  }

  const handlePageClick = (event: PageChangeEvent) => {
    pageChange((event.selected + 1).toString())
  };

  const handleJump = (e: MouseEvent<HTMLUListElement>) => {
    if (e.target instanceof HTMLAnchorElement) {
      e.preventDefault(); // Prevent default navigation
      const page = e.target.getAttribute('data-page') ?? "1";
      pageChange(page)
    }
  }

  const Pagination = () => {
    return (<div className="mt-5">
      <div className="mb-2">Pages</div>
      {
        <div className="d-flex">
          <ReactPaginate
            forcePage={currentPage - 1}
            previousLabel="&laquo;"
            nextLabel="&raquo;"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link-break page-link mx-1"
            pageCount={pageCount}
            pageRangeDisplayed={4}
            marginPagesDisplayed={1}
            onPageChange={handlePageClick}
            disableInitialCallback={true}
            containerClassName="pagination justify-content-start fs-4"
            pageLinkClassName="page-link shadow-none paginatedLink paginatedItems "
            previousClassName="page-item me-1"
            previousLinkClassName="page-link paginatedLink paginatedItems shadow-none general-nav"
            nextClassName="page-item ms-1"
            nextLinkClassName="page-link paginatedLink paginatedItems shadow-none general-nav"
            activeClassName="page-item active"
            activeLinkClassName="page-item bg-white text-dark border-0"
            initialPage={currentPage - 1}
            pageClassName="mx-1"
            disabledClassName="paginate-disabled"
          />
          {pageCount > 1 && (
            <div className="ms-3 jump ">
              <div className="dropdown">
                <button className={`btn btn-dark dropdown-toggle border border-white`} type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ height: "40px" }}>
                  Jump
                </button>
                <ul onClick={(e) => handleJump(e)} style={{ maxHeight: "250px", overflow: "scroll", overflowX: "hidden", maxWidth: "100px", borderRadius: 0 }} className="dropdown-menu border-0">
                  {Array.from({ length: pageCount }, (e, i) => (
                    <li key={i+1}>
                      <a className="dropdown-item" href="#" data-page={i + 1}>
                        {i+1}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      }
    </div> )
  }

  if (isLoading) {
    return <div className="spinner">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error fetching data. Unexpected error or Out of range</div>;
  }

  return (
    <>
      {showPages && <Pagination></Pagination>}
      {showPages && ( <div>
<div style={{background:"rgb(14 15 16)"}} className="p-2">
  Found {totalDataLength} results.
</div>
</div>) }
    
      {displayFunction(paginatedData)}
      {showPages && <Pagination></Pagination>}
    </>
  );
}
