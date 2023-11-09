import JikanComponent from "./JikanComponent";

import GetThingsToDo from "./GetThingsToDo";
import CatImage from "./CatImage"

import PokeComponent from "./PokeComponent"
import './styles.css'

export default function App() {
  return (
    <div className="App">
      <div className="header"><h1>JJEF having fun with API calls</h1></div>
      <div className="body">
		    <JikanComponent />
        <GetThingsToDo />
        <CatImage/>
      </div>
    </div>
  );
}


