import React, { useState } from "react";

function CatImage() {
  const [catImageUrl, setCatImageUrl] = useState(null);

  const fetchRandomCatImage = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          setCatImageUrl(data[0].url);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="card-2">
      <h2>Random Cat Image</h2>
      <button className="card-large-button" onClick={fetchRandomCatImage}>
        Get Random Cat
      </button>
      {catImageUrl && (
        <div>
          <img className="card-image" src={catImageUrl} style={{ width: "70%" }} alt="Random Cat" />
        </div>
      )}
    </div>
  );
}

export default CatImage;
