'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png'; // ✅ This is okay if you plan to use it later

const slides = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/df7ogazj2/image/upload/v1753547887/WhatsApp_Image_2025-07-26_at_10.35.34_PM_zusytb.jpg',
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
      'https://res.cloudinary.com/df7ogazj2/image/upload/v1753549875/WhatsApp_Image_2025-07-26_at_11.07.57_PM_vnsrx2.jpg',
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
    <div className="relative w-full md:h-[650px] h-[300px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={`Slide ${index + 1}`}
            fill
            className="object-fill" 
          />
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2 z-20">
        <button onClick={prev} className="btn btn-circle">❮</button>
        <button onClick={next} className="btn btn-circle">❯</button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
