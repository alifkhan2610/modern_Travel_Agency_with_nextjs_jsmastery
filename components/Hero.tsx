import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container border-2 padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row ">
      <div className="hero-map" />
      {/* LEFT^ */}

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          height={50}
          width={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, veniam
          quidem doloremque tenetur quasi enim tempore, dolorum totam molestiae
          et voluptatem. Laborum quo illo autem alias magni atque officia
          veniam.
        </p>
      </div>
      <div className="my-11 flex flex-wrap gap-5">
        <div className="flex flex-center gap-2">
          {Array(5)
            .fill(1)
            .map((_, index) => (
              <Image
                src="/star.svg"
                alt="star"
                key={index}
                height={24}
                width={24}
              />
            ))}
        </div>
        <p className="bold-16 lg:bold-20 text-blue-70">
          198k
          <span className="regular-16 lg:regular-20 ml-1">Excelent Review</span>
        </p>
      </div>

      <div className="flex w-full flex-col gap-3 sm:flex-row">
        <Button 
        type="button" 
        title="Download App" 
        variant="btn_green" />

        <Button
        type="button" 
        title="How we work?"
        icon="play.svg" 
        variant="btn_white_text"
        />
      </div>
      
    </section>
  );
};

export default Hero;
