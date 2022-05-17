import axios from "axios";

export const fetchAirports = (setState) => {
    const data = axios.get('airports.json')
    .then(response => {
      console.log(response.data);
      setState(response.data);
    })
}