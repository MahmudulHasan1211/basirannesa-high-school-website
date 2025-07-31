"use client";
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

      <div className="flex bg-[#353683] text-white items-center justify-start  h-[40px] overflow-hidden">
        {/* Left side - Label */}
        <div className="flex items-center md:justify-center w-[90px] md:w-[150px] min-w-[120px] gap-2 px-3 border-r border-white">
          {/* If you want to include the bell icon, uncomment the line below after setting up Font Awesome */}
          {/* <i className="far fa-bell text-yellow-400 text-xl"></i> */}

          <span className="text-2xl  text-[#FFFFFF]">নোটিশ</span>
        </div>

        {/* Right side - Scrolling Text */}
        <div className="flex-1 overflow-hidden">
          <div className="scrolling-text gap-8 px-4 text-sm">
            {/* Duplicate content for seamless scroll */}
            {[1, 2].map((i) => (
              <div key={i} className="flex gap-8">
                <Link
                  href=""
                  target="_blank"
                  className="flex items-center text-xl gap-1 text-white hover:underline"
                >
                  <i
                    className="fa fa-bell-otext-yellow-400"
                    aria-hidden="true"
                  />
                  ভর্তিসংক্রান্ত বিস্তারিত জানার জন্য স্কুল অফিসে যোগাযোগ করুন।
                </Link>
                <Link
                  href=""
                  target="_blank"
                  className="flex items-center text-xl gap-1 text-white hover:underline"
                >
                  <i
                    className="fa fa-bell-o text-yellow-400"
                    aria-hidden="true"
                  />
                  ২০২৫ শিক্ষাবর্ষের বার্ষিক পরীক্ষা শুরু হবে ডিসেম্বর মাসে।
                </Link>
                {/* <Link
                  href=""
                  target="_blank"
                  className="flex items-center gap-1 text-white hover:underline"
                >
                  <i className="fa fa-bell-o text-yellow-400" aria-hidden="true" />
                  বিজ্ঞপ্তির সংশোধনী
                </Link> */}
                <Link
                  href=""
                  target="_blank"
                  className="flex items-center text-xl gap-1 text-white hover:underline"
                >
                  <i
                    className="fa fa-bell-o text-yellow-400"
                    aria-hidden="true"
                  />
                  সকল শিক্ষার্থীকে ইউনিফর্ম পরিধান করে আসতে অনুরোধ করা যাচ্ছে।
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
