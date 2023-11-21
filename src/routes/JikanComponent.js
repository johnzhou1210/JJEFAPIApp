import React from "react";
import { useState } from "react";
import "../styles.css";

export default function JikanComponent() {
  const [anime, setAnime] = useState({
    data: { title: "Anime Randomizer", synopsis: "Synopsis will appear here." },
  });
  const endpoint = "https://api.jikan.moe/v4/random/anime";

  function handleGetRandomAnime() {
    fetch(endpoint)
      .then((response) => response.json())
      .then((responseJson) => setAnime(responseJson))
      .catch((error) => console.error(error));
  }

  return (
    <div className="card">
      <button className="card-large-button2" onClick={handleGetRandomAnime}>
        <strong>Click for a random anime!</strong>
      </button>
      <div className="card-contents">
        <>
          <MALResult anime={anime} />
        </>
      </div>
    </div>
  );
}

function MALResult({ anime }) {
  console.log(anime.data?.genres);

  return (
    <>
      <div className="card-title">
        <strong>{anime.data?.title}</strong>
      </div>

      {anime.data == null ? (
        <h4>An unexpected error has occured. Please click the button again.</h4>
      ) : (
        // render image
        <div>
          <a href={anime.data?.url} target="_blank" rel="noopener noreferrer">
            {isInappropriate(anime) ? (
              <h4>
                Image removed because it is likely NSFW (Click at your own
                risk!).
              </h4>
            ) : (
              <img
                className="card-image"
                src={anime.data?.images?.jpg?.image_url}
                alt={anime.data?.images?.jpg?.image_url}
                style={{ width: "40%" }}
              ></img>
            )}
          </a>
          <div className="genres">
            <GenreList anime={anime} />
          </div>
        </div>
      )}

      <div className="card-description">
        {console.log(anime.data?.synopsis)}
        {anime.data?.synopsis == null
          ? "No synopsis provided."
          : anime.data?.synopsis}
      </div>
    </>
  );
}

function GenreList({ anime }) {
  return (
    <>
      {anime.data?.genres?.map((elem, indx) => (
        <div key={indx} className="genre-entry">
          {elem?.name}
        </div>
      ))}
      {anime.data?.explicit_genres?.map((elem, indx) => (
        <div key={indx} className="genre-entry">
          {elem?.name}
        </div>
      ))}
      {anime.data?.themes?.map((elem, indx) => (
        <div key={indx} className="genre-entry">
          {elem?.name}
        </div>
      ))}
      {anime.data?.demographics?.map((elem, indx) => (
        <div key={indx} className="genre-entry">
          {elem?.name}
        </div>
      ))}
    </>
  );
}

function isInappropriate(anime) {
  return (
    anime.data?.rating?.includes("Rx") ||
    anime.data?.rating?.includes("Hentai") ||
    anime.data?.rating?.includes("R+")
  );
}
