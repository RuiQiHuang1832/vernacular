"use client";
import Button from "@/components/Button";
import style from "@/styles/Playlist.module.css";
import { useState } from "react";
import classNames from "classnames";
import Toast, { toastify } from "@/components/Toast";
import { handleCategoryDelete, handleCategoryAdd, handleReviewDelete, handleReviewAdd, Review } from "./events";
import { RiDeleteBinFill } from "react-icons/ri";

const MAX_REVIEWS = 10;

const categories = ["Movies", "Shows", "Mods", "Games", "Anime", "Books", "Articles", "Technology", "Stocks", "Miscellaneous"];

export default function Playlist() {
  const [review, setReview] = useState<Review[]>([]);
  const [reviewCount, setReviewCount] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  const onReviewAdd = () => {
    if (review.length >= MAX_REVIEWS) {
      return toastify();
    }
    handleReviewAdd(setReview, review, setReviewCount, inputStyle);
  };

  const onReviewDelete = (e: React.MouseEvent<HTMLButtonElement>, key: number) => {
    handleReviewDelete(e, key, setReview, setReviewCount);
  };

  const onCategoryAdd = (e: React.MouseEvent<HTMLDivElement>) => {
    handleCategoryAdd(e, selectedCategory, setSelectedCategory);
  };

  const onCategoryDelete = (e: React.MouseEvent<HTMLSpanElement>) => {
    handleCategoryDelete(e, selectedCategory, setSelectedCategory);
  };

  const categoryStyle = classNames(`border rounded-pill border-2 p-1 mb-1 ${style["category"]}`);
  const inputStyle = classNames(`form-control ${style["transparent_input"]} border-3`);

  return (
    <form>
      <div className="row">
        <div className="col-8">
          <h4>Create a New Playlist</h4>
          <div className="mb-3">
            <label className="form-label text-success">Playlist Title</label>
            <input type="name" className={inputStyle} />
          </div>
          <div className="mb-3">
            <label className="form-label text-success">Description</label>
            <textarea className={inputStyle} placeholder="Write a brief description..." rows={5}></textarea>
          </div>
        </div>

        <div className="col-4">
          <h5>Categories and Tags</h5>
          <div className="d-flex flex-wrap p-3 border-top border-3">
            {categories.map((item, i) => (
              <div key={i} onClick={onCategoryAdd} className={`${categoryStyle} ${selectedCategory.includes(item) ? style["strikethrough-text"] : ""}`}>
                {item}
              </div>
            ))}
          </div>
          <hr></hr>
          <div className="border border-0 grid p-3 d-flex flex-wrap" onClick={onCategoryDelete}>
            <span className="opacity-50">{selectedCategory.length == 0 ? "Please choose categories for your playlist" : ""}</span>
            {selectedCategory.map((item, i) => (
              <span key={i} className={`${categoryStyle} border-success`}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {review.map((reviewItem, i) => (
        <div key={reviewItem.id} className="row">
          <div className="d-flex justify-content-between">
            <div>{i + 1}.</div>
            <button type="button" onClick={(e) => onReviewDelete(e, reviewItem.id)} className="btn btn-danger d-flex align-items-center p-2">
              <RiDeleteBinFill/>
            </button>
          </div>
          {reviewItem.content}
        </div>
      ))}

      <div>
        <button className="btn btn-light" type="button" onClick={onReviewAdd}>
          Add a Review ({reviewCount}/{MAX_REVIEWS})
        </button>
      </div>
      <Toast />
      <Button color="btn-success" href="/login" text="Submit" width="auto"></Button>
    </form>
  );
}
