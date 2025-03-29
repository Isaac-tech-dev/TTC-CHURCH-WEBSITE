"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
//import Main from "../../assets/old/Main2.png";
//import Main2 from "../../../public/old/Main2.png"

interface Slide {
  imageUrl: string;
}

const Hero = () => {
  const slides: Slide[] = [
    { imageUrl: "/new/One.png" },
    { imageUrl: "/new/Two.png" },
    { imageUrl: "/new/Three.png" },
    { imageUrl: "/new/Four.png" },
    { imageUrl: "/new/Five.png" },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 2500); // Change slide every 3.5 seconds

    return () => clearInterval(interval);
  }, [currentSlideIndex]);

  const goToSlide = (index: number): void => {
    setCurrentSlideIndex(index);
  };

  const goToNextSlide = (): void => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // const goToPrevSlide = (): void => {
  //   setCurrentSlideIndex((prevIndex) =>
  //     prevIndex === 0 ? slides.length - 1 : prevIndex - 1
  //   );
  // };

  return (
    <div className={`flex items-center justify-center mt-[90px]`}>
      <Image
        src={slides[currentSlideIndex].imageUrl}
        alt={`Slide ${currentSlideIndex + 1}`}
        width={1440}
        height={654}
        className={`w-full h-[50%] bg-no-repeat`}
      />
      <div
        className={`absolute flex flex-col items-center justify-center text-center text-white`}
      >
        <span
          className={`text-[#FFF] text-[16px] md:text-[32px] xl:text-[70px] font-bold`}
        >
          WELCOME TO
        </span>
        <span
          className={`text-[#FFF] text-[16px] md:text-[32px] xl:text-[70px] font-bold`}
        >
          THE TRIUMPHANT COMMUNITY
        </span>
        <span
          className={`text-[#FFF] text-[10px] md:text-[20px] xl:text-[36px] font-inter-bold`}
        >
          A family large enough to accommodate you and also small enough to
          recognize you.
        </span>

        <div
          className={`flex flex-row -ml-[20px] xl:mt-[20px] lg:mt-[30px] mt-[5px]`}
        >
          <a
            href="https://creators.spotify.com/pod/show/thetriumphantcommunity"
            target="_blank"
            rel="noopener noreferrer"
            className={`mx-3 border-2 border-[#fff] px-[20px] py-[10px] cursor-pointer rounded-[5px] hover:bg-[#F41123] hover:border-0`}
            //onClick={() => alert("Meet TTC")}
          >
            <h2
              className={`text-white text-[8px] md:text-[10px] lg:text-[20px] font-inter-semibold`}
            >
              Get Edified
            </h2>
          </a>
          <a
            href="https://www.youtube.com/@thetriumphantcommunity/streams"
            target="_blank"
            rel="noopener noreferrer"
            className={`mx-3 border-2 border-[#fff] px-[20px] py-[10px] cursor-pointer rounded-[5px] hover:bg-[#F41123] hover:border-0`}
            //onClick={() => alert("Get Edified")}
          >
            <h2 className="text-white text-[8px] md:text-[10px] lg:text-[20px] font-inter-semibold">
              Latest Sermon
            </h2>
          </a>
        </div>

        <div
          className={`flex flex-row items-center space-x-2 xl:mt-[30px] lg:mt-[30px] mt-[10px]`}
        >
          {slides.map((_slide, index) => (
            <div
              key={index}
              className={`${
                index === currentSlideIndex ? "bg-[#F40618]" : "bg-[#FFE3E5]"
              } rounded-full md:h-[10px] h-[5px] md:w-[10px] w-[5px] cursor-pointer`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
