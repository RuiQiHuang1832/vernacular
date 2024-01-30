import { useState } from "react";
import Image from "next/image";
interface MediaSelectionProps {
    selectedMedia:string | null;
}

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzZmNzgyOWIwM2U3OTNlMDBlOWIwMWE0YmMwOGFiMSIsInN1YiI6IjY1YjQyNTQ5NTc1MzBlMDE4M2Q5ZjU0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bDOJuoqg6i8xBBnyd9TuYflebJcnaNzG44ntIwqAaMw'
  }
};


export default function MediaSelection(props:MediaSelectionProps) {
  interface SearchData {
    mediaName: string;
    mediaYear: string;
  }
  const [searchData, setSearchData] = useState<SearchData>({
    mediaName:'',
    mediaYear:'',
  })

  const [addedData, setAddedData] = useState([{
    mediaName:'',
    mediaPoster: '',
    mediaYear:''
  }])

  const [poster, setPoster] = useState("/wigZBAmNrIhxp2FNGOROUAeHvdh.jpg")

  const inputFields = [
    { name: 'mediaName' },
    { name: 'mediaYear' },
    // Add more fields as needed
  ];

  const handleSearch  = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchData["mediaName"]}&include_adult=false&language=en-US&page=1&year=${searchData["mediaYear"]}`, options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      setPoster(response.results[0].poster_path)
    })
    .catch(err => console.error(err));
  }

  const handleAdd = () => {
    const newData= {
      mediaName: searchData.mediaName,
      mediaPoster:poster,
      mediaYear:searchData.mediaYear
    }
    setAddedData([...addedData,newData])
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>, fieldName:string) => {
    setSearchData({ ...searchData, [fieldName]: e.target.value });
  };

  return (
    <>
          <h1>Choose up to 10 {props.selectedMedia?.toLowerCase()} to review.</h1>
          <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Search</span>
  {inputFields.map((field) => (
          <input
            key={field.name}
            onChange={(e) => handleChange(e, field.name)}
            value={searchData[field.name as keyof SearchData]}
            type="text"
            className="form-control"
          />
        ))}
  <button onClick={handleSearch} className="btn btn-success">Search</button>
</div>
<button onClick={handleAdd} className="btn btn-success">Add</button>
{addedData.map((e, i) => (
  <>
  <h5>{e.mediaName} released on {e.mediaYear}</h5>
  <Image key={i} alt="movie pic" width="250" height="350" src={`https://image.tmdb.org/t/p/original${e.mediaPoster}`}></Image>
  </>
))}
  <Image alt="movie pic" width="250" height="350" src={`https://image.tmdb.org/t/p/original${poster}`}></Image>



    </>
  )
}
