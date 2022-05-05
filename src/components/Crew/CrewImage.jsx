const CrewImage = ({ name, image }) => {
  return (
    <div className="mt-8 md:mt-0 flex justify-center lg:sticky lg:right-0 lg:top-[198px]">
      <img
        src={image}
        alt={`Image ${name}`}
        className="max-w-[327px] max-h-[223px] md:max-w-[456.37px] md:max-h-[572px] md:translate-y-10 lg:max-w-[568.07px] lg:max-h-[712px] lg:translate-y-0"
      />
    </div>
  );
};

export default CrewImage;
