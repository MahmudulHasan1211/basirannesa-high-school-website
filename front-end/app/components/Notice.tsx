'use client';
import Link from "next/link";

export default function Notice() {
  return (
    <>
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .scrolling-text {
          display: inline-flex;
          white-space: nowrap;
          animation: scroll-left 25s linear infinite;
        }
      `}</style>

      <div className="border-t-[3px] border-[#a44a77]" />

      <div className="flex bg-[#353683] text-white items-center h-[40px] overflow-hidden">
        {/* Left side - Label */}
        <div className="flex items-center justify-center w-[150px] min-w-[120px] gap-2 px-3 text-sm font-semibold border-r border-white">
          <i className="fa fa-bell-o text-yellow-400" aria-hidden="true"></i>
          Notice
        </div>

        {/* Right side - Scrolling Text */}
        <div className="flex-1 overflow-hidden">
          <div className="scrolling-text gap-8 px-4 text-sm">
            {/* Duplicate content for seamless scroll */}
            {[1, 2].map((i) => (
              <div key={i} className="flex gap-8">
                <Link
                  href="https://nmpc-ac-bd.s3.us-east-2.amazonaws.com/2025/notice/1743922694-12345.pdf"
                  target="_blank"
                  className="flex items-center gap-1 text-white hover:underline"
                >
                  <i className="fa fa-bell-o text-yellow-400" aria-hidden="true" />
                  নিয়োগ পরীক্ষা-২০২৫ এ অংশগ্রহণকারীদের জন্য নির্দেশাবলী
                </Link>
                <Link
                  href="https://nmpc-ac-bd.s3.us-east-2.amazonaws.com/2025/notice/1743916469-CamScanner%2004-06-2025%2010.48.pdf"
                  target="_blank"
                  className="flex items-center gap-1 text-white hover:underline"
                >
                  <i className="fa fa-bell-o text-yellow-400" aria-hidden="true" />
                  আসন বিন্যাস
                </Link>
                <Link
                  href="https://nmpc-ac-bd.s3.us-east-2.amazonaws.com/2025/notice/1741613335-333.pdf"
                  target="_blank"
                  className="flex items-center gap-1 text-white hover:underline"
                >
                  <i className="fa fa-bell-o text-yellow-400" aria-hidden="true" />
                  বিজ্ঞপ্তির সংশোধনী
                </Link>
                <Link
                  href="https://nmpc-ac-bd.s3.us-east-2.amazonaws.com/2025/notice/1741612447-222.pdf"
                  target="_blank"
                  className="flex items-center gap-1 text-white hover:underline"
                >
                  <i className="fa fa-bell-o text-yellow-400" aria-hidden="true" />
                  নিয়োগ বিজ্ঞপ্তি - ২০২৫
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
