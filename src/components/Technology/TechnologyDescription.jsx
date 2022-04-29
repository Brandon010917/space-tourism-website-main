const styles =
  "text-gray font-barlow text-[15px] leading-[25px] md:text-[16px] md:leading-[28px] lg:text-[18px] lg:leading-[32px]";

const TechnologyDescription = ({ description }) => {
  return <p className={styles}>{description}</p>;
};

export default TechnologyDescription;
