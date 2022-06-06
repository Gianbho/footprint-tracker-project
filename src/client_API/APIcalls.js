import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchAirports = (setState) => {
    axios.get('airports.json')
    .then(response => {
      setState(response.data);
    })
}

export const fetchFlightFootprints = (from, to, passengers, flightClass) => 
  fetch("https://beta3.api.climatiq.io/travel/flights", {
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
  .then((response) => response.json());

 

