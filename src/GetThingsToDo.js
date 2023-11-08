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

  const [priceInput, setPriceInput] = useState(0);
  const [activity, setActivity] = useState(null);
  const [type, setType] = useState(null);

  const endpoint = "https://www.boredapi.com/api/activity/?price=";

  useEffect(() => {
    setActivity(boredJSONData.activity);
  }, [boredJSONData])

  function handleGetActivity() {
    fetch(endpoint + priceInput)
      .then(response => response.json())
        .then(jsonData => setboredJSONData(jsonData))
          .catch(error => console.error(error));
  }

  function changePrice(priceText) {
    setPriceInput(priceText.target.value);
  }

  return (
    <>
      {activity && <p>{activity}</p>}
      <input onChange={changePrice} value={priceInput}></input>
      <button onClick={handleGetActivity}>Get an activity</button>
    </>
  )
}

export default GetThingsToDo;
