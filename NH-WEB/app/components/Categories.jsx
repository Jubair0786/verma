"use client";

import Link from "next/link";
import Slider from "react-slick";
import { useRef } from "react";

export default function Categories({ categories }) {
  const sliderRef = useRef(null); // Reference to the Slider for controlling navigation

  const categorySettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const videoSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable arrows for better autoplay experience
  };

  if (!categories || categories.length === 0) {
    return null; // Return null if no categories
  }

  const handleVideoEnd = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Move to the next slide
    }
  };

  return (
    <div className="overflow-hidden md:p-10 p-5">
      {/* Categories Section */}
      <div className="flex justify-center w-full">
        <h1 className="text-lg font-semibold shadow-sm text-black">
          Shop By Category
        </h1>
      </div>
      <Slider {...categorySettings}>
        {(categories?.length <= 2
          ? [...categories, ...categories, ...categories]
          : categories
        )?.map((category, index) => (
          <Link href={`/categories/${category?.id}`} key={category?.id || index}>
            <div className="px-2">
              <div className="flex flex-col gap-2 items-center justify-center text-red-600">
                <div className="md:h-45 md:w-45 h-45 w-45 rounded-full bg-green-500 md:p-4 p-1 border overflow-hidden">
                  <img
                    src={category?.imageURL}
                    alt={category?.name || "Category image"}
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <h1 className="font-semibold text-black">{category?.name}</h1>
              </div>
            </div>
          </Link>
        ))}
      </Slider>

      {/* Video Slider Section */}
      <div className="mt-10">
        <h2 className="text-center text-lg font-semibold text-black mb-5">
          Featured Videos
        </h2>
        <div className="flex justify-center">
          <div className="w-full md:w-3/4 lg:w-2/3 md:p-1 p-1 border overflow-hidden bg-green-400 rounded-lg">
            <Slider {...videoSettings} ref={sliderRef}>
              {["video1.mp4", "video2.mp4", "video3.mp4"].map((video, index) => (
                <div key={index} className="px-4">
                  <video
                    className="w-full h-auto rounded-lg object-cover"
                    controls
                    autoPlay
                    muted
                    loop={false} // Ensure looping is off for `onEnded` to trigger
                    onEnded={handleVideoEnd} // Handle video end
                  >
                    <source src={`/videos/${video}`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
