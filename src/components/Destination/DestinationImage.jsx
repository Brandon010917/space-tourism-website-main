const DestinationImage = ({ name, image }) => {
  return (
    <div className="max-w-[170px] max-h-[170px] mx-auto mt-8 mb-[26px] md:max-w-[300px] md:max-h-[300px] md:mb-[53px] lg:max-w-[445px] lg:max-h-[445px] lg:mr-0 ">
      <img src={image} alt={`Image ${name}`} loading="lazy" />
    </div>
  );
};

export default DestinationImage;
