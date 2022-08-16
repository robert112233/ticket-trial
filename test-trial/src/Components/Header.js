import TicketMasterLogo from "../ticketmaster-5.svg";

export const Header = () => {
  return (
    <>
      <img className="logo" src={TicketMasterLogo} alt="ticketmaster logo" />
      <p>Click the buttons to see what is happening near you!</p>
    </>
  );
};
