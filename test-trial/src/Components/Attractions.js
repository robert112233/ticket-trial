const Attractions = ({ items }) => {
  return (
    <ul className="results-section">
      {items.map((item) => {
        return (
          <li key={item.id}>
            <div>{item.name}</div>
            <div>{item.locale}</div>
            <div>{item.classifications[0].segment.name}</div>
            <div>{item.url}</div>
          </li>
        );
      })}
    </ul>
  );
};
export default Attractions;
