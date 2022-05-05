// Components
import CrewItem from "./CrewItem";

const CrewItems = ({ crew }) => {
  return (
    <div className="md:mt-10 ">
      <ul className="flex justify-center items-center gap-4 mb-8 md:mb-0 lg:justify-start">
        {crew.length > 0 &&
          crew.map((crew) => <CrewItem key={crew.name} name={crew.name} />)}
      </ul>
    </div>
  );
};

export default CrewItems;
