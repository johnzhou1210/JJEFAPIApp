import JikanComponent from "./JikanComponent";
import GetThingsToDo from "./GetThingsToDo";
import CatImage from "./CatImage";
import PokeComponent from "./PokeComponent";

import "../styles.css";
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="sidebar-entry">
          <Link to={"AnimeRandomizer"}>Anime Randomizer</Link>
        </div>
        <div className="sidebar-entry">
          <Link to={"BoredCompanion"}>Bored Companion</Link>
        </div>
        <div className="sidebar-entry">
          <Link to={"PokemonRandomizer"}>Pokemon Randomizer (#1-152)</Link>
        </div>
        <div className="sidebar-entry">
          <Link to={"CatImageRandomizer"}>Cat Picture Randomizer</Link>
        </div>
      </div>
      <div className="page-content">
        <div className="header">
          <h1>JJEF having fun with API calls</h1>
        </div>
        <div className="info">
          <Outlet />
          <div className="card-3">
            We can add some functionality involving redux here
          </div>
          
        </div>
      </div>
    </div>
  );
}
