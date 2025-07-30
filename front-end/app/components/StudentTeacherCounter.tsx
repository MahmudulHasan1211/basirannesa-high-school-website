'use client';

import { useEffect, useState } from "react";

export default function StudentTeacherCounter()
{
    const [scount, setCount] = useState(0);
    const smaxCount = 150;
    const [tcount, setTcount] = useState(0);
    const tmaxCount = 150;
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev < smaxCount) return prev + 1;
          clearInterval(interval);
          return smaxCount;
        });
      }, 50); // count speed in milliseconds
  
      return () => clearInterval(interval); // cleanup
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
          setTcount((prev) => {
            if (prev < tmaxCount) return prev + 1;
            clearInterval(interval);
            return tmaxCount;
          });
        }, 50); // count speed in milliseconds
    
        return () => clearInterval(interval); // cleanup
      }, []);

    return <div className="w-full bg-[#353683] text-white">
        <div className="w-60% flex justify-center md:gap-50 gap-35 items-center p-8">
        <div className="text-center">
            <h1 className="text-xl md:text-3xl">Student</h1>
            <p className="mt-5 text-[18px] md:text-xl">{scount}</p>
        </div>
        <div className="text-center">
            <h1 className="text-xl md:text-3xl">Teacher</h1>
            <p className="mt-5 text-[18px] md:text-xl">{tcount}</p>
        </div>
        </div>
    </div>
}