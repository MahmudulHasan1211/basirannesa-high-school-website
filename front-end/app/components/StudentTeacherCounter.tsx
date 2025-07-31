'use client';

import { useEffect, useState } from "react";

export default function StudentTeacherCounter() {
    const [scount, setCount] = useState(0);
    const smaxCount =888;
    const [tcount, setTcount] = useState(0);
    const tmaxCount = 15;

    const toBanglaNumber = (num) => {
        const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        return num.toString().split('').map(d => banglaDigits[d]).join('');
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev < smaxCount) return prev + 1;
                clearInterval(interval);
                return smaxCount;
            });
        }, 15);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTcount((prev) => {
                if (prev < tmaxCount) return prev + 1;
                clearInterval(interval);
                return tmaxCount;
            });
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full bg-[#353683] text-white">
            <div className="w-60% flex justify-center md:gap-50 gap-35 items-center p-8">
                <div className="text-center">
                    <h1 className="text-xl md:text-3xl">মোট শিক্ষার্থী</h1>
                    <p className="mt-5 text-[18px] md:text-xl">{toBanglaNumber(scount)}</p>
                </div>
                <div className="text-center">
                    <h1 className="text-xl md:text-3xl">মোট শিক্ষক</h1>
                    <p className="mt-5 text-[18px] md:text-xl">{toBanglaNumber(tcount)}</p>
                </div>
            </div>
        </div>
    );
}
