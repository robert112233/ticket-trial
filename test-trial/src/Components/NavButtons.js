import Button from "react-bootstrap/Button";

export const NavButtons = ({ setOptions }) => {
  const options = ["events", "attractions", "venues"];

  const handleCLick = (event) => {
    setOptions(event.target.value);
  };

  return (
    <div>
      {options.map((option) => {
        return (
          <Button
            className="option-button"
            variant="outline-secondary"
            size="sm"
            key={option}
            value={option}
            onClick={handleCLick}
          >
            {option}
          </Button>
        );
      })}
    </div>
  );
};
