import { useState, useEffect } from 'react';
import "../styles.css";

function GetThingsToDo() {
  const [boredJSONData, setboredJSONData] = useState({
    activity: null,
    type: null,
    participants: null,
    price: null,
    link: null,
    key: null,
    accessibility: null
  });

  const [typeInput, setTypeInput] = useState("");
  const [activity, setActivity] = useState(null);

  const endpoint = "https://www.boredapi.com/api/activity?type=";

  useEffect(() => {
    setActivity(boredJSONData.activity);
  }, [boredJSONData])

  function handleGetActivity() {
    fetch(endpoint + typeInput)
      .then(response => response.json())
        .then(jsonData => setboredJSONData(jsonData))
          .catch(error => console.error(error));
  }

  function changeSelection(selection) {
    setTypeInput(selection.target.value);
  }

  return (
    <div className="card-2">
      <h1 className="card-title">
        Are you bored? Look Below!
      </h1>
      <div className='card-statement'>
        {<div className='card-description'></div> && <p className='card-description'>{activity == null ? "Activity will appear here." : activity}</p>}
      </div>
      <select className="card-large-button" onChange={changeSelection} value={typeInput}>
          <option value="">random</option> 
          <option value="education">learning</option> 
          <option value="recreational">for fun</option> 
          <option value="social">with people</option> 
          <option value="diy">do it yourself</option> 
          <option value="charity">charity</option> 
          <option value="cooking">cooking</option> 
          <option value="relaxation">relaxing time</option> 
          <option value="music">music</option> 
          <option value="busywork">if you're really bored</option> 
      </select>
      <button className="card-large-button" onClick={() => {handleGetActivity()}}>Get an activity</button>
    </div>
  )
}

export default GetThingsToDo;
