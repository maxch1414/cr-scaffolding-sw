"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { carouselImages } from "@/lib/carouselImages";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageCarousel() {
  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-[400px] md:h-[500px] lg:h-[600px]"
      >
        {carouselImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute bottom-8 left-8 z-20 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {image.title}
                </h3>
                <p className="text-lg opacity-90">
                  Professional scaffolding solutions for all your construction
                  needs
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
