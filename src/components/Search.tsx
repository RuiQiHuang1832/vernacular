'use client'
import { MdSearch } from "react-icons/md";
import styles from "@/styles/Search.module.css";
import FuzzySearch from 'fuzzy-search';
import { useState } from "react";
import { PiArrowBendUpRightFill } from "react-icons/pi";
import { searchable } from "@/global/table";
export default function Search() {
  interface QueryType {
    section: string;
    link: string;
    text?: string;
    faq?: string;
    icon?:React.ReactNode;
    location:string;
  }

  const [query, setQuery] = useState<QueryType[]>([])
  const [input, setInput] = useState<string>("");

  
  const searcher = new FuzzySearch(searchable, ['section', 'link', 'desc' ,'keywords'], {
    caseSensitive: false,

  });

  const renderContent = () => {
    if (query.length == 0 && input == "") {
      return <p className={styles["subtext"]}>Find anything about our product, search our links, and more. Enter a query in the search input above, and results will be displayed as you type.</p>
    } else if (query.length == 0 && input != "") {
      return <div className={styles["subtext"]}>
        <p>Oops! We could not find any result for <span><em>{input}</em></span>.</p>
        <p><small>Try queries such as <strong className="text-success">general</strong>, <strong className="text-success">pricing</strong>, or <strong className="text-success">rules</strong> in the search bar, and explore a world of opportunities for your website.</small>    
        </p>
        </div>
    } else {
      return (
        <div style={{backgroundColor:"rgb(23,23,23)"}} className="d-flex flex-column p-3 rounded">
        {query.map((e,i) => (
          <a  
          href={`/${e.link}`} 
          key={i} 
          className={`${styles["results"]}`}> 
          <div className={styles["results-icon"]}>{e.icon}</div>
         <div >{e.section} <PiArrowBendUpRightFill></PiArrowBendUpRightFill> {e.location}</div>
         </a>))}
         </div>
         )
    }  
  }
  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    let results = searcher.search(e.target.value)
    if (e.target.value.trim() == "") {
      results = []
    }
    setInput(e.target.value)
    setQuery(results)
  }
  return (
    <div className={`${styles["search-overlay"]}`}>
      <div className="text-white container-fluid mt-5">
        <div className="row justify-content-center">
          <div className="col-md-9 col">
            <div className={`input-group mb-3`} tabIndex={0}>
              <span className={`input-group-text pe-0  ${styles["icon-container"]}`}>
                <MdSearch size="1.5em" className="text-white"></MdSearch>
              </span>
              <input type="text" onChange={handleSearch} className={`form-control ${styles["light-border-input"]} ${styles["placeholder"]} py-3 border-start-0`} placeholder="Search Vernacular.." />
            </div>
            <div style={{height:"80vh"}} className="text-center overflow-auto">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
