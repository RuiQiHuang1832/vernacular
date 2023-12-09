import { MdSearch } from "react-icons/md";
import Input from "@/components/Input";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import styles from "@/styles/Search.module.css"


export default function Search() {
  return (
    <div className={`${styles["search-overlay"]}`}>
    <div className="text-white container mt-5">
      <SectionHeading section={"Search"}></SectionHeading>
      <div className="row justify-content-center">
        <div className="col-9">
          <Input icon={MdSearch} text="Search Vernacular.."></Input>
          <div className="text-center">
            <Button type="submit" color="btn-success" text="Search" width={"auto"}></Button>
          </div>
          <div className="mt-5">
            <p className="fs-5 text-center">Find anything about our product, search our documentation, and more. Enter a query in the search input above, and results will be displayed as you type.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
