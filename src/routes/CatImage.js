import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomCatImage } from "../app/catImageSlice.js";

function CatImage() {
  const dispatch = useDispatch();
  const catImageUrl = useSelector((state) => state.catImage.catImageUrl);
  const catImageCount = useSelector((state) => state.catImage.catImageCount);

  const handleFetchRandomCatImage = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          dispatch(fetchRandomCatImage({ catImageUrl: data[0].url }));
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="card-2">
      <h2>Random Cat Image</h2>
      <button className="card-large-button" onClick={handleFetchRandomCatImage}>
        Get Random Cat
      </button>
      <p>Number of times cat pictures are shown: {catImageCount}</p>
      {catImageUrl && (
        <div>
          <img
            className="card-image"
            src={catImageUrl}
            style={{ width: "70%" }}
            alt="Random Cat"
          />
        </div>
      )}
    </div>
  );
}

export default CatImage;
