const styles =
  "text-gray font-barlow text-[15px] leading-[25px] md:text-[16px] md:leading-[28px] lg:text-[18px] lg:leading-[32px] lg:max-w-[444px]";

const CrewBio = ({ bio }) => {
  return <p className={styles}>{bio}</p>;
};

export default CrewBio;
