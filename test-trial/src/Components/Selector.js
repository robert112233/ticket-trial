import Events from "./Events";
import Attractions from "./Attractions";
import Venues from "./Venues";

const Selector = ({ options, items }) => {
  if (options === "events") {
    return <Events items={items} />;
  } else if (options === "attractions") {
    return <Attractions items={items} />;
  } else if (options === "venues") {
    return <Venues items={items} />;
  }
};

export default Selector;
