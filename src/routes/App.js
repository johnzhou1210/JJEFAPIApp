import JikanComponent from "../components/JikanComponent";
import GetThingsToDo from "../components/GetThingsToDo";
import CatImage from "../components/CatImage";
import PokeComponent from "../components/PokeComponent";
import "../styles.css";



export default function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>JJEF having fun with API calls</h1>
      </div>
      <div className="body">
        <JikanComponent />
        <GetThingsToDo />
        <PokeComponent />
        <CatImage />
      </div>
    </div>
  );
}
