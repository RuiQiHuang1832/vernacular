// "use client";
// import Button from "@/components/Button";
// import style from "@/styles/Playlist.module.css";
// import { useState } from "react";
// import classNames from "classnames";
// import Toast, { toastify } from "@/components/Toast";
// import { handleCategoryDelete, handleCategoryAdd, handleReviewDelete, handleReviewAdd, Review } from "./events";
// import { RiDeleteBinFill } from "react-icons/ri";

// const MAX_REVIEWS = 10;

// const categories = ["Movies", "Shows", "Mods", "Games", "Anime", "Books", "Articles", "Technology", "Stocks", "Miscellaneous"];

// export default function Playlist() {
//   const [review, setReview] = useState<Review[]>([]);
//   const [reviewCount, setReviewCount] = useState<number>(0);
//   const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

//   const onReviewAdd = () => {
//     if (review.length >= MAX_REVIEWS) {
//       return toastify();
//     }
//     handleReviewAdd(setReview, review, setReviewCount, inputStyle);
//   };

//   const onReviewDelete = (e: React.MouseEvent<HTMLButtonElement>, key: number) => {
//     handleReviewDelete(e, key, setReview, setReviewCount);
//   };

//   const onCategoryAdd = (e: React.MouseEvent<HTMLDivElement>) => {
//     handleCategoryAdd(e, selectedCategory, setSelectedCategory);
//   };

//   const onCategoryDelete = (e: React.MouseEvent<HTMLSpanElement>) => {
//     handleCategoryDelete(e, selectedCategory, setSelectedCategory);
//   };

//   const categoryStyle = classNames(` rounded-pill ms-1 p-1 mb-1 ${style["category"]} bg-success`);
//   const inputStyle = classNames(`form-control ${style["light-border-input"]} ${style["transparent_input"]} border-1`);

//   return (
//     <form>
//       <div className="row">
//         <div className="col-lg-8 col-12">
//           <h4>Create a New Playlist</h4>
//           <div className="mb-3">
//             <label className="form-label text-white">Playlist Title</label>
//             <input type="name" className={inputStyle} />
//           </div>
//           <div className="mb-3">
//             <label className="form-label text-white">Description</label>
//             <textarea className={inputStyle} rows={5}></textarea>
//           </div>
//         </div>

//         <div className="col-lg-4 col pb-5 pb-lg-0">
//           <h5>Categories & Tags</h5>
//           <div className="d-flex flex-wrap p-3 border-top border-3">
//             {categories.map((item, i) => (
//               <div key={i} onClick={onCategoryAdd} className={`${categoryStyle} ${selectedCategory.includes(item) ? style["strikethrough-text"] : ""}`}>
//                 {item}
//               </div>
//             ))}
//           </div>
//           <hr></hr>
//           <div className="border border-0 grid p-3 d-flex flex-wrap" onClick={onCategoryDelete}>
//             <span className="opacity-50">{selectedCategory.length == 0 ? "Please choose categories for your playlist" : ""}</span>
//             {selectedCategory.map((item, i) => (
//               <span key={i} className={`${categoryStyle} border-success`}>
//                 {item}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {review.map((reviewItem, i) => (
//         <div key={reviewItem.id} className="row">
//           <div className="d-flex justify-content-between">
//             <div  className={`${style["number-circle"]}`}>{i + 1}</div>
//             <button type="button" onClick={(e) => onReviewDelete(e, reviewItem.id)} className="btn btn-danger d-flex align-items-center p-2">
//               <RiDeleteBinFill/>
//             </button>
//           </div>
//           {reviewItem.content}
//         </div>
//       ))}

//       <div>
//         <button className="btn btn-light" type="button" onClick={onReviewAdd}>
//           + New Review ({reviewCount}/{MAX_REVIEWS})
//         </button>
//       </div>
//       <Toast />
//       <Button color="btn-success" href="/login" text="Submit" width="auto"></Button>
//     </form>
//   );
// }
