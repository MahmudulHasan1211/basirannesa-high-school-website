'use client'; // Only if using Next.js 13+ app directory

import { useEffect, useState } from 'react';

const slides = [
  {
    id: 1,
    image: 'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp',
  },
  {
    id: 2,
    image: 'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp',
  },
  {
    id: 3,
    image: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp',
  },
  {
    id: 4,
    image: 'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp',
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds

    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const goTo = (index) => setCurrent(index);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Arrows */}
      <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2 z-20">
        <button onClick={prev} className="btn btn-circle">❮</button>
        <button onClick={next} className="btn btn-circle">❯</button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
