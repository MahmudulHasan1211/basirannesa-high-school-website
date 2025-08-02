'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/df7ogazj2/image/upload/v1753549875/WhatsApp_Image_2025-07-26_at_11.07.57_PM_vnsrx2.jpg',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/df7ogazj2/image/upload/v1753547887/WhatsApp_Image_2025-07-26_at_10.35.34_PM_2_penmwm.jpg',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/df7ogazj2/image/upload/v1753547887/WhatsApp_Image_2025-07-26_at_10.35.35_PM_hlpabf.jpg',
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/df7ogazj2/image/upload/v1753547887/WhatsApp_Image_2025-07-26_at_10.35.34_PM_zusytb.jpg',
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const goTo = (index: number) => setCurrent(index);

  return (
    <div className="w-full h-auto flex justify-center items-center py-6 md:py-2">
      <div className="relative w-[90vw] md:w-[1000px] h-[350px] md:h-[600px] overflow-hidden rounded-lg shadow-lg">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100 z-10' : 'opacity-30 z-0'
            }`}
            style={{
              transform: index === current ? 'translateX(0)' : 'translateX(100%)',
              transition: 'opacity 1s ease, transform 1s ease',
            }}
          >
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover rounded-lg"
              priority={index === current}
            />

            {/* Gradient overlay */}
            <div
              className="absolute inset-0 rounded-lg pointer-events-none bg-gradient-to-br from-black/25 to-black/12"
            />
          </div>
        ))}

        {/* Navigation Arrows */}
        <div className="absolute left-2 right-2 top-1/2 flex justify-between transform -translate-y-1/2 z-20 px-2">
          <button
            onClick={prev}
            className="bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-800 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-md"
            aria-label="Previous slide"
          >
            ❮
          </button>
          <button
            onClick={next}
            className="bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-800 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-md"
            aria-label="Next slide"
          >
            ❯
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                index === current ? 'bg-white' : 'bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
