"use client";
import Button from "@/components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
// const MAX_REVIEWS = 10;

export default function CreateForm() {
  const [review, setReview] = useState<React.ReactElement[]>([]);
//   const [inputValue, setInputValue] = useState(""); // State for input value
//   const [radioValue, setRadioValue] = useState("");
  const handleClick = () => {
    // if (review.length > MAX_REVIEWS) {

    // }
    const uniqueId = Date.now();
    const newReview = (
      <>
        <div>#&nbsp;{review.length}</div>
        <div className="col">
          <label className="form-label text-success">Movie/TV Show</label>
          <input type="email" className="form-control" />
          <div className="d-flex">
            <label className="form-label text-success mt-2">Rating: </label>
            <div className="rate">
              {[5, 4, 3, 2, 1].map((value) => (
                <>
                  <input type="radio" id={`star${value}-${uniqueId}`} name={`rate-${uniqueId}`} value={value} onChange={(e) => handleRadioChange(e, review.length)} />
                  <label htmlFor={`star${value}-${uniqueId}`} title={`${value} Star`}>
                    {value} stars
                  </label>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="col">
          <label className="form-label text-success">Review</label>
          <textarea className="form-control mb-3" placeholder="write a small description" rows={5}></textarea>
        </div>
      </>
    );
    setReview([...review, newReview]);
  };

  // Event handler for input change
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setInputValue(value);
//     console.log("Input Value:", value); // Log the input value
//   };
  const notify = () =>
    toast("Maximum reviews reached", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  // Event handler for radio button change
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const value = e.target.value;
    //setRadioValue(value);
    console.log(id + " Radio Value:", value); // Log the radio button value
  };

  return (
    <form className="">
      <div className="col-8">
        <h4>Create a New Playlist</h4>
        <div className="mb-3">
          <label className="form-label text-success">Topic Title</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label text-success">Description</label>
          <textarea className="form-control" placeholder="write a small description" rows={5}></textarea>
        </div>
      </div>

      {review.map((div, index) => (
        <div key={index} className="row">
          {div}
        </div>
      ))}

      <div>
        <button className="btn btn-light" type="button" onClick={handleClick}>
          Add a Review
        </button>
        <div>
          <button type="button" onClick={notify}>
            Notify!
          </button>
          <ToastContainer />
        </div>
      </div>
      <Button color="btn-success" href="/login" text="Submit" width={"auto"}></Button>
    </form>
  );
}
