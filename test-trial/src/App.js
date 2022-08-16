import "./App.css";
import { useState, useEffect } from "react";
import { Header } from "./Components/Header";
import { fetchEndpoint } from "./api";
import { NavButtons } from "./Components/NavButtons";
import BackgroundImage from "./background-image.svg";
import Events from "./Components/Events";
import Attractions from "./Components/Attractions";
import Venues from "./Components/Venues";
import Selector from "./Components/Selector";

function App() {
  const [items, setItem] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    fetchEndpoint(options).then((results) => {
      setItem(results);
    });
  }, [options]);

  return (
    <div className="App">
      <Header />
      <NavButtons setOptions={setOptions} />
      <Selector items={items} options={options} />

      <div className="background-image-container">
        <img
          className="background-image"
          src={BackgroundImage}
          alt="background image"
        />
      </div>
      {/* <ItemCard /> */}
      {/* <EventCollection /> */}
    </div>
  );
}

export default App;
