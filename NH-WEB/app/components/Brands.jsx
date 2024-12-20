"use client";

import Slider from "react-slick";

export default function Brands({ brands }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
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
          initialSlide: 3,
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

  if (brands.length === 0) {
    return null;
  }

  return (
    <div
  className="overflow-hidden md:p-10 p-5"
  
>
      <Slider {...settings}>
        {(brands?.length <= 2
          ? [...brands, ...brands, ...brands] // This duplicates brands to fill the slider if there are <= 2 brands
          : brands
        )?.map((brand, index) => {
          return (
            <div key={brand.id || index} className="px-2"> {/* Added key prop */}
              <div className="flex flex-col gap-2 items-center justify-center ">
                <div className="h-20 rounded-lg bg-green-600 md:p-1 p-1 border overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={brand?.imageURL}
                    alt={brand?.name || "Brand image"} // Added alt text
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
