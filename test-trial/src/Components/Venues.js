const Venues = ({ items }) => {
  console.log(items);
  return (
    <ul className="results-section">
      {items.map((item) => {
        return (
          <li key={item.id}>
            <div>{item.name}</div>
            <div>{item.city.name}</div>
            <div>{item.state.name}</div>
            <div>{item.url}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default Venues;
