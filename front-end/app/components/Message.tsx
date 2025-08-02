import Image from "next/image";
import head from "../../public/head.jpeg";

const Message = () => {
  return (
    <div>
      <div className="  w-[97%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
        <div className="bg-[#edf0f2] shadow-md p-6 rounded-md inset-shadow-sm">
          <h1 className="text-xl md:text-2xl font-bold mb-4 text-green-700 text-center">
            প্রধান শিক্ষকের বার্তা
          </h1>

          <div className="flex flex-col items-center justify-center  gap-6">
            <div className="min-w-[170px] min-h-[170px] relative rounded-full overflow-hidden border border-gray-300">
              <Image
                src={head}
                alt="Head teacher"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <p className="text-justify text-[14px] md:text-[16px] leading-relaxed">
                শিক্ষা শুধু ডিগ্রি অর্জনের মাধ্যম নয়, বরং একজন মানুষকে আদর্শ ও
                আলোকিত করে গড়ে তোলার পথ। আমরা বছিরননেছা উচ্চ বিদ্যালয় সবসময়
                চেষ্টা করি শিক্ষার্থীদের এমনভাবে গড়ে তুলতে, যেন তারা ভবিষ্যতে
                শুধু ভালো ফলাফল করেই না, একজন সৎ, দায়িত্বশীল ও
                প্রযুক্তিজ্ঞান-সম্পন্ন নাগরিক হিসেবেও গড়ে উঠতে পারে। <br />{" "}
                <br /> আমাদের মূল লক্ষ্য হলো মানসম্মত ও সময়োপযোগী শিক্ষার
                পাশাপাশি শিক্ষার্থীদের তথ্যপ্রযুক্তিতে দক্ষ করে গড়ে তোলা, তাদের
                মধ্যে শৃঙ্খলা, সততা ও নৈতিক মূল্যবোধের চর্চা নিশ্চিত করা, এবং
                একটি নিরাপদ, সুস্থ ও উৎসাহব্যঞ্জক শিক্ষাব্যবস্থা গড়ে তোলা। আমি
                বিশ্বাস করি, শিক্ষক, অভিভাবক ও শিক্ষার্থীদের সম্মিলিত চেষ্টায়
                আমরা এই লক্ষ্য অর্জনে সফল হবো এবং সমাজের জন্য গড়ে তুলতে পারবো
                একঝাঁক আলোকিত মানুষ।
              </p>
            </div>
          </div>

          <div className="mt-6 text-right text-sm">
            <p className="font-bold">ধন্যবাদান্তে</p>
            <p>কাজী রফিকুল ইসলাম</p>
            <p>প্রধান শিক্ষক, বছিরননেছা উচ্চ বিদ্যালয়</p>
          </div>
        </div>

        <div className="bg-[#edf0f2] p-5 rounded-md shadow-md inset-shadow-sm">
          <h1 className="text-xl md:text-2xl font-bold mb-4 text-[#353683] text-center">
            জরুরী নাম্বার সমূহ
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Message;
