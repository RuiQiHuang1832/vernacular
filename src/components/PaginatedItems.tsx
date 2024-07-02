'use client'
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type PageChangeEvent = {
    selected: number; // The selected page number
  };

type PaginatedItemsProps<T> = {
    url:string
    itemsPerPage: number;
    currentPage: number;
    displayFunction: (data: T[]) => JSX.Element; // Define the prop type for displayFunction
  };

function removePageNumberFromPath(path:string) {
    const lastIndex = path.lastIndexOf('/');
    if (lastIndex !== -1) {
      // Use slice to remove the last part of the path ("/1" in this case)
      return path.slice(0, lastIndex);
    }
    // If there is no "/", return the original path
    return path;
  }

  
export default function PaginatedItems<T>({itemsPerPage, currentPage, displayFunction, url}: PaginatedItemsProps<T>) {
  const dataLength = 100;
  const router = useRouter()
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true);
  const startItem = (currentPage - 1) * itemsPerPage; // Calculate the start item based on the page
  const endItem = startItem + itemsPerPage;  
  const pageCount = Math.ceil(dataLength / itemsPerPage);

  useEffect(() => {
    fetch(url + `?_start=${startItem}&_end=${endItem}`)
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
  },[url, startItem, endItem])
   
    const handlePageClick = (event: PageChangeEvent) => {
      router.push(`${removePageNumberFromPath(window.location.pathname)}/${event.selected + 1}`)
    };

    if (isLoading) {
      return <div className="spinner">Loading...</div>;
    }
  
    if (error) {
      return <div className="error">Error fetching data. Unexpected error or Out of range</div>;
    }
    
    return (
      <>
      {displayFunction(data)}
        <ReactPaginate
         previousLabel="&laquo;"
         nextLabel="&raquo;"
         breakLabel="..."
         breakClassName="page-item"
         breakLinkClassName="page-link"
         pageCount={pageCount}
         pageRangeDisplayed={4}
         marginPagesDisplayed={5}
         onPageChange={handlePageClick}
         containerClassName="pagination justify-content-center fs-4 mt-5 "
         pageLinkClassName="page-link shadow-none paginatedLink paginatedItems "
         previousClassName="page-item mx-1 "
         previousLinkClassName="page-link paginatedLink paginatedItems shadow-none"
         nextClassName="page-item mx-1"
         nextLinkClassName="page-link paginatedLink paginatedItems shadow-none"
         activeClassName="page-item active"
         activeLinkClassName="page-item bg-white text-dark"
         initialPage={currentPage - 1}
         pageClassName="mx-1"
         disabledClassName=""
        />
      </>
    );
  }


