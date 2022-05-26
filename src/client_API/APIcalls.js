import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchAirports = (setState) => {
    const data = axios.get('airports.json')
    .then(response => {
      console.log(response.data);
      setState(response.data);
    })
}

export const fetchFlightFootprints = (from, to, passengers, flightClass, setFetchResults) => {
  const response = fetch("https://beta3.api.climatiq.io/travel/flights", {
    body: JSON.stringify({
      "legs": [
        {
          "from": `${from}`,
          "to": `${to}`,
          "passengers": parseInt(passengers),
          "class": `${flightClass}`
        },
      ]
    }),
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    method: 'POST',
  })
  .then((response) => response.json())
  .then(result => {
    setFetchResults(result);
    console.log(result);
  });
}; 

