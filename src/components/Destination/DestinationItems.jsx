// Components
import DestinationItem from "./DestinationItem";

const DestinationItems = ({ destinations }) => {
  return (
    <ul className="flex justify-center items-center gap-[26px] mb-5 lg:justify-start">
      {destinations.length > 0 &&
        destinations.map((destination) => (
          <DestinationItem key={destination.name} name={destination.name} />
        ))}
    </ul>
  );
};

export default DestinationItems;
