// Components
import TechnologyItem from "./TechnologyItem";

const TechnologyItems = ({ technologies }) => {
  return (
    <ul className="flex justify-center items-center gap-4 mb-[26px] md:mb-[44px] lg:justify-start lg:flex-col lg:mb-0 lg:gap-8">
      {technologies.length > 0 &&
        technologies.map((technology, i) => (
          <TechnologyItem
            key={technology.name}
            name={technology.name}
            index={i}
          />
        ))}
    </ul>
  );
};

export default TechnologyItems;
