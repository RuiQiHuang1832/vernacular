import style from "@/styles/Playlist.module.css";

export type Review = {
  id: number;
  content: React.ReactElement;
};

//Category
export const handleCategoryDelete = (e: React.MouseEvent<HTMLSpanElement>, selectedCategory: string[], setSelectedCategory: React.Dispatch<React.SetStateAction<string[]>>) => {
  const clickedTag = (e.target as HTMLSpanElement).textContent;
  const removeCategory = selectedCategory.filter((selected: string) => selected !== clickedTag);
  setSelectedCategory(removeCategory);
};

export const handleCategoryAdd = (e: React.MouseEvent<HTMLDivElement>, selectedCategory: string[], setSelectedCategory: React.Dispatch<React.SetStateAction<string[]>>) => {
  const selectedValue = (e.target as HTMLDivElement).textContent;
  if (selectedValue) {
    const newSelectedCategory = new Set(selectedCategory);
    newSelectedCategory.add(selectedValue);
    setSelectedCategory(Array.from(newSelectedCategory));
  }
};
//Rating
export const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
  const value = e.target.value;
  //setRadioValue(value);
  console.log(id + " Radio Value:", value); // Log the radio button value
};

//Review
export const handleReviewDelete = (e: React.MouseEvent<HTMLButtonElement>, key: number, setReview: React.Dispatch<React.SetStateAction<Review[]>>, setReviewCount:React.Dispatch<React.SetStateAction<number>>) => {
  setReview((prev) => {
    const newReview = prev.filter((review) => review.id !== key);
    return newReview;
  });
  setReviewCount((prev) => prev - 1);
};

export const handleReviewAdd = (setReview:React.Dispatch<React.SetStateAction<Review[]>>, review:Review[], setReviewCount:React.Dispatch<React.SetStateAction<number>>, inputStyle:string) => {
  const uniqueId = Date.now();
  const newReview = {
    id: uniqueId,
    content: (
      <>
        <div className="col">
          <label className="form-label text-success">Media Name</label>
          <input type="name" className={inputStyle} />
          <div className="d-flex">
            <label className="form-label text-success mt-2">Rating: </label>
            <div className={style["rate"]}>
              {[5, 4, 3, 2, 1].map((value) => (
                <>
                  <input type="radio" id={`star${value}-${uniqueId}`} name={`rate-${uniqueId}`} value={value} onChange={(e) => handleRatingChange(e, uniqueId)} />
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
          <textarea className={`${inputStyle} mb-3`} placeholder="What did you think of this?" rows={5}></textarea>
        </div>
      </>
    ),
  };

  setReview([...review, newReview]);
  setReviewCount((prev) => prev + 1);
};
