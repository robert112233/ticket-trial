import { startTransition } from "react";

const Events = ({ items }) => {
  return (
    <ul className="results-section">
      {items.map((item) => {
        return (
          <li key={item.id}>
            <div>{item.dates.start.localDate}</div>
            <div>{item.name}</div>
            <div>{item.dates.timezone}</div>
            <div>{item.promoter.name}</div>
            <div href={item.url}>find tickets</div>
          </li>
        );
      })}
    </ul>
  );
};

export default Events;
