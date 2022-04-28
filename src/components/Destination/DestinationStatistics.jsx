const stylesText =
  "mt-8 text-gray text-[14px] leading-[17px] tracking-[2.3625px]";
const stylesStatistics =
  "mt-3 uppercase font-bellefair text-[28px] leading-[32px]";

const DestinationStatistics = ({ text, distance, travel }) => {
  return (
    <div>
      <p className={stylesText}>{text}</p>
      <p className={stylesStatistics}>{distance || travel}</p>
    </div>
  );
};

export default DestinationStatistics;
