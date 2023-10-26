import { searchMetadata } from "@/global/metadata";
import { Metadata } from "next";
import { MdSearch } from "react-icons/md";
import { HiArrowLongRight } from "react-icons/hi2";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import Input from "@/components/Input";
import Button from "@/components/Button";
import style from "@/styles/SearchPage.module.css";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = searchMetadata;

export default function Search() {
  return (
    <div className="text-white container-md mt-5">
      <SectionHeading section={"Search"}></SectionHeading>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-12">
          <Input icon={MdSearch} text={"Search"}></Input>
          <h3 className={`text-white mb-2 fw-light ${style["advanced-search"]} d-inline`} data-bs-toggle="collapse" data-bs-target="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Advanced Search <HiArrowLongRight />
          </h3>
          <div className="collapse mt-2" id="collapseExample">
            <form className="bg-transparent p-4 border rounded border-2">
              <div>
                <select className="form-select mb-3 bg-transparent text-white">
                  <option selected>Most Popular</option>
                  <option value="Hot">Hot 🔥</option>
                  <option value="New">New ✨</option>
                  <option value="Rising">Rising 📈</option>
                </select>
                <div className="mb-3 ">
                  <label className="form-label">Author</label>
                  <input type="email" className="form-control bg-transparent text-white" />
                </div>
                <div>
                  <label className="form-label">Contains the words</label>
                  <input type="email" className="form-control bg-transparent text-white" />
                </div>
              </div>
            </form>
          </div>

          <div className="text-center">
            <Button type="submit" color="btn-outline-success" text="Search" width={"auto"}></Button>
          </div>
          <div className="mt-5">
            <BiSolidQuoteAltLeft size="5em"></BiSolidQuoteAltLeft>
            <p className="fs-3">Associate with men of good quality if you esteem your own reputation; for it is better to be alone than in bad company.</p>
            <p className="text-warning">George Washington</p>
            <p>Creative Director</p>
          </div>
        </div>
      </div>
    </div>
  );
}
