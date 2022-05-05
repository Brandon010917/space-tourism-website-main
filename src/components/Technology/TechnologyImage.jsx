const TechnologyImage = ({ name, images }) => {
  return (
    <div className="mt-8 mb-[34px] md:mt-[60px] md:mb-0 flex justify-center lg:min-w-[45%] lg:max-w[46%] lg:mt-[26px]">
      <picture class="illustration">
        <source media="(min-width: 1024px)" srcset={images.portrait} />
        <img
          src={images.landscape}
          alt={`Image ${name}`}
          loading="lazy"
          className="min-w-[100vw] h-auto md:max-h-[572px] lg:min-w-0 lg:max-w-[515px] lg:max-h-[527px]"
        />
      </picture>
    </div>
  );
};

export default TechnologyImage;
