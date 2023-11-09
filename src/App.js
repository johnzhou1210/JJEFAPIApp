import JikanComponent from "./JikanComponent";
import PokeComponent from "./PokeComponent"
import './styles.css'

export default function App() {
  return (
    <div className="App">
      <div className="header"><h1>JJEF having fun with API calls</h1></div>
      <div className="body">
		<JikanComponent />
    <PokeComponent />
      </div>
    </div>
  );
}


