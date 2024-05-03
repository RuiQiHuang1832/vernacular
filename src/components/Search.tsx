import { MdSearch } from "react-icons/md";
import Button from "@/components/Button";
import styles from "@/styles/Search.module.css"


export default function Search() {
  return (
    <div className={`${styles["search-overlay"]}`}>
    <div className="text-white container mt-5">
      <div className="row justify-content-center">
        <div className="col-9">
        <div className={`input-group mb-3`} tabIndex={0}>
    <span className={`input-group-text pe-0 bg-transparent ${styles["icon-container"]}`}>
      <MdSearch size="1.5em" className="text-white"></MdSearch>
    </span>
    <input type="text" className={`form-control ${styles["light-border-input"]} ${styles["placeholder"]} border-start-0`} placeholder="Search Vernacular.." /> 
  </div>
          <Button bootstrapStyle="mt-3" buttonColor={{cssColor:"black"}}  radius="10px" padding="10px" width="100%" type="button">Search</Button> 
          <div className="mt-5">
            <p style={{fontWeight:"300"}} className="fs-5 text-center">Find anything about our product, search our links, and more. Enter a query in the search input above, and results will be displayed as you type.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
