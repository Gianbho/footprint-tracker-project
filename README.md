# My Final Front-end Project for Start2Impact
<p align="center">
  <a href="https://github.com/Gianbho/footprint-tracker-project">
  </a>

  <h3 align="center">Flight Footprint Calculator GT</h3>

  <p align="center">
    Discover the environmental impact of your flights!
  </p>
</p>

<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

## About The Project

This is a simple web app that analyzes the environmental impact datas of your flights [Climatiq.io](climatiq.io) via their free [API](climatiq.io/api-docs) and displays it.

The user can set a flight through many inputs (class, passengers number, airports and round trip or one-way).

The API fetches data and shows a footer containing results datas (CH4, CO2 & N2O emissions).

### Built With

* [React](https://reactjs.org/)
* [React-icons](https://react-icons.github.io/react-icons/)
* [Axios](https://axios-http.com/)
* [Dotenv](https://github.com/motdotla/dotenv)
* [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

To get a local copy up and running follow these simple steps.
To try the app online follow the link [FlightFootprintCalculator](https://gt-final-footprint-project.netlify.app/)

### Prerequisites

* npm

  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repository

   ```sh
   git clone https://github.com/Gianbho/footprint-tracker-project.git
   ```

2. Install NPM packages

   ```sh
   npm install
   npm i tailwindcss
   ```
   
3. Get a free API key at [Climatiq.io](climatiq.io/api-docs)

4. Create a .env file in the root folder and insert your REACT_APP_API_KEY:

   ```sh
   REACT_APP_API_KEY = 'ENTER YOUR API'
   ```
5. Open powershell window in root folder and start a local server

   ```sh
   npm start
   ```

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Gianluca Tramontano - gianluca.trm@gmail.com


## Acknowledgements

* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [Climatiq.io](https://climatiq.io/)

