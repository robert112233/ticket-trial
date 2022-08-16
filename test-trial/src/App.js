import "./App.css";
import { useState, useEffect } from "react";
import { Header } from "./Components/Header";
import { fetchEndpoint } from "./api";
import ItemCard from "./Components/ItemCard";
import EventCollection from "./Components/EventCollection";
import { NavButtons } from "./Components/NavButtons";

function App() {
  const [items, setItem] = useState([]);
  const [options, setOptions] = useState("attractions");

  console.log(items);

  useEffect(() => {
    fetchEndpoint(options).then((results) => {
      setItem(results);
    });
  }, [options]);

  return (
    <div className="App">
      <Header />
      <NavButtons setOptions={setOptions} />
      <ul className="results-section">
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.name}
              {item.url}
            </li>
          );
        })}
      </ul>
      {/* <ItemCard /> */}
      {/* <EventCollection /> */}
    </div>
  );
}

export default App;
