import { useState, useEffect } from 'react';

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

  const [typeInput, setTypeInput] = useState(0);
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
    <>
      {activity && <p>{activity}</p>}
      <select onChange={changeSelection} value={typeInput}>
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
      <button onClick={() => {handleGetActivity()}}>Get an activity</button>
    </>
  )
}

export default GetThingsToDo;
