import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchAirports = (setState) => {
    const data = axios.get('airports.json')
    .then(response => {
      console.log(response.data);
      setState(response.data);
    })
}

export const fetchFlightFootprints = (from, to, passengers) => {
  const response = fetch("https://beta3.api.climatiq.io/travel/flights", {
    body: JSON.stringify({
      "legs": [
        {
          "from": `${from}`,
          "to": `${to}`,
          "passengers": parseInt(passengers),
          "class": "economy"
        },
      ]
    }),
    headers: {
      Authorization: "Bearer GTGZ6PBDRA4V6VGR2YZHPGMGT3GJ",
      "Content-Type": "application/json"
    },
    method: 'POST',
  })
  .then((response) => response.json())
  .then(result => console.log(result));
}; 

