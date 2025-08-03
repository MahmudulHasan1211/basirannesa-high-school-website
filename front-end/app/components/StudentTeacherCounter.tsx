'use client';

import { useEffect, useState } from "react";

export default function StudentTeacherCounter() {
    const [scount, setCount] = useState(0);
    const smaxCount = 888;
    const [tcount, setTcount] = useState(0);
    const tmaxCount = 23;


    const toBanglaNumber = (num: number): string => {
        const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        return num.toString().split('').map(d => banglaDigits[parseInt(d)]).join('');
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
            <div className="w-full flex justify-center md:gap-50 gap-8 items-center p-8">
                <div className="text-center">
                    <h1 className="text-xl md:text-3xl font-bold">মোট শিক্ষার্থী</h1>
                    <p className="mt-5 text-xl md:text-4xl font-bold">{toBanglaNumber(scount)}</p>
                </div>
                <div className="text-center">
                    <h1 className="text-xl md:text-3xl font-bold">মোট শিক্ষক</h1>
                    <p className="mt-5 text-xl md:text-4xl font-bold">{toBanglaNumber(tcount)}</p>
                </div>
                 <div className="text-center">
                    <h1 className="text-xl md:text-3xl font-bold">শিক্ষার্থী-শিক্ষক অনুপাত</h1>
                    <p className="mt-5 text-xl md:text-4xl font-bold">{toBanglaNumber(tcount)}</p>
                </div>
            </div>
        </div>
    );
}
