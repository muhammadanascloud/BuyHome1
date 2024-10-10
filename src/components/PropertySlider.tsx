"use client";

import Image from "next/image";
import Slider from "react-slick";
import { CustomArrowProps } from "react-slick";

interface PropertySliderProps {
  images: string[];
  title: string;
}

export default function PropertySlider({ images }: PropertySliderProps) {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,  
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <Slider {...sliderSettings}>
        {images.map((imageFile, idx) => (
          <div key={idx} className="relative w-full h-[600px] overflow-hidden">
            <Image
              src={imageFile}
              alt={`Property image ${idx + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

function PrevArrow(props: CustomArrowProps) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} absolute z-10 top-1/2 left-2 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600 cursor-pointer`}
      onClick={onClick}
    >
      ⬅️
    </div>
  );
}

function NextArrow(props: CustomArrowProps) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} absolute z-10 top-1/2 right-2 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600 cursor-pointer`}
      onClick={onClick}
    >
      ➡️
    </div>
  );
}
