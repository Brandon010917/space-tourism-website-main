const DestinationStatistics = ({ text, distance, travel }) => {
  return (
    <div>
      <p className="mt-8 text-gray text-[14px] leading-[17px] tracking-[2.3625px]">
        {text}
      </p>
      <p className="mt-3 uppercase font-bellefair text-[28px] leading-[32px]">
        {distance || travel}
      </p>
    </div>
  );
};

export default DestinationStatistics;
