import Image from "next/image";
import head from "../../public/head.jpeg";

export default function Teacher() {
  return (
    <div className="text-center">
      <h1 className="text-2xl p-3">সকল শিক্ষকের তথ্য</h1>
      <div className="border-t-[3px] border-[#a44a77]" />
      <div className="w-[90%] h-auto p-3 mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-7 ">
          {/*  */}
          <div className="bg-[#edf0f2] h-[500px] md:h-[350px] rounded-xl inset-shadow-sm text-center">
            <div className="w-full h-[400px] md:h-[250px] relative mx-auto overflow-hidden">
              <Image
                src={head}
                alt="Picture of the author"
                fill
                className="object-cover rounded transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className=" text-[16px] font-semibold bg-[#353683] text-white p-1 rounded-b-lg">
              প্রধান শিক্ষক(ভারপ্রাপ্ত)
            </h2>
            <p className="mt-1 font-bold">কাজী রফিকুল ইসলাম</p>
            <p>
            <a className="font-[#0000FF]" href="mailto:kazirafiq76@yahoo.com">kazirafiq76@yahoo.com</a>
            </p>
            <p>01720903001</p>

          </div>
          {/* demo start */}
          <div className="bg-[#edf0f2] h-[500px] md:h-[350px] rounded-xl inset-shadow-sm text-center">
            <div className="w-full h-[400px] md:h-[250px] relative mx-auto overflow-hidden">
              <Image
                src={head}
                alt="Picture of the author"
                fill
                className="object-cover rounded transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className=" text-[16px] font-semibold bg-[#353683] text-white p-1 rounded-b-lg">
              সিনিয়র শিক্ষক
            </h2>
            <p className="mt-1 font-bold">মোহাম্মদ নজরুল ইসলাম</p>
            <p>
            <a className="font-[#0000FF]" href="mailto:nazrulislamlawa@gmail.com">nazrulislamlawa@gmail.com</a>
            </p>
            <p>01722243486</p>
          </div>
          <div className="bg-[#edf0f2] h-[500px] md:h-[350px] rounded-xl inset-shadow-sm text-center">
            <div className="w-full h-[400px] md:h-[250px] relative mx-auto overflow-hidden">
              <Image
                src={head}
                alt="Picture of the author"
                fill
                className="object-cover rounded transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className=" text-[16px] font-semibold bg-[#353683] text-white p-1 rounded-b-lg">
              সিনিয়র শিক্ষক
            </h2>
            <p className="mt-1 font-bold">মো: মুস্তাফিজুর রহমান</p>
            <p>
              <a href="mailto:mustafijurrodia@gmail.com">mustafijurrodia@gmail.com</a>
            </p>
            <p>01813705483</p>
          </div>
          <div className="bg-[#edf0f2] h-[500px] md:h-[350px] rounded-xl inset-shadow-sm text-center">
            <div className="w-full h-[400px] md:h-[250px] relative mx-auto overflow-hidden">
              <Image
                src={head}
                alt="Picture of the author"
                fill
                className="object-cover rounded transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className=" text-[16px] font-semibold bg-[#353683] text-white p-1 rounded-b-lg">
              সিনিয়র শিক্ষক
            </h2>
            <p className="mt-1 font-bold">মীর মোহাম্মদ আহসান উল্লাহ</p>
            <p>
              <a href="mailto:ahsanullahbhs66@gmail">ahsanullahbhs66@gmail</a>
            </p>
            <p>01744272844</p>
          </div>
          <div className="bg-[#edf0f2] h-[500px] md:h-[350px] rounded-xl inset-shadow-sm text-center">
            <div className="w-full h-[400px] md:h-[250px] relative mx-auto overflow-hidden">
              <Image
                src={head}
                alt="Picture of the author"
                fill
                className="object-cover rounded transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className=" text-[16px] font-semibold bg-[#353683] text-white p-1 rounded-b-lg">
                সিনিয়র শিক্ষক
            </h2>
            <p className="mt-1 font-bold">মো: মাহমুদ মিয়া</p>
            <p>
              <a href="mailto:mahmudmia333@gmail.com">mahmudmia333@gmail.com</a>
            </p>
            <p>01726640535</p>
          </div>
          <div className="bg-[#edf0f2] h-[500px] md:h-[350px] rounded-xl inset-shadow-sm text-center">
            <div className="w-full h-[400px] md:h-[250px] relative mx-auto overflow-hidden">
              <Image
                src={head}
                alt="Picture of the author"
                fill
                className="object-cover rounded transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className=" text-[16px] font-semibold bg-[#353683] text-white p-1 rounded-b-lg">
             সিনিয়র সহকারী শিক্ষক
            </h2>
            <p className="mt-1 font-bold">মো: মজিবুর রহমান</p>
            <p>
              <a href="mailto:mojibur126@gmail.com">mojibur126@gmail.com</a>
            </p>
            <p>01840949508</p>
          </div>
          <div className="bg-[#edf0f2] h-[500px] md:h-[350px] rounded-xl inset-shadow-sm text-center">
            <div className="w-full h-[400px] md:h-[250px] relative mx-auto overflow-hidden">
              <Image
                src={head}
                alt="Picture of the author"
                fill
                className="object-cover rounded transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className=" text-[16px] font-semibold bg-[#353683] text-white p-1 rounded-b-lg">
                সিনিয়র শিক্ষক
            </h2>
            <p className="mt-1 font-bold">লাইলি আক্তার</p>
             <p>
              <a href="mailto:lailydewan1973@gmail.com">lailydewan1973@gmail.com</a>
            </p>
            <p>01718311286</p>
          </div>
          <div className="bg-[#edf0f2] h-[500px] md:h-[350px] rounded-xl inset-shadow-sm text-center">
            <div className="w-full h-[400px] md:h-[250px] relative mx-auto overflow-hidden">
              <Image
                src={head}
                alt="Picture of the author"
                fill
                className="object-cover rounded transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className=" text-[16px] font-semibold bg-[#353683] text-white p-1 rounded-b-lg">
             সিনিয়র সহকারী শিক্ষক
            </h2>
            <p className="mt-1 font-bold">শঙ্কর চক্রবর্তী</p>
            <p>
              <a href="mailto:plabon73piu@gmail.com">plabon73piu@gmail.com</a>
            </p>
            <p>01715824526</p>
          </div>
          <div className="bg-[#edf0f2] h-[500px] md:h-[350px] rounded-xl inset-shadow-sm text-center">
            <div className="w-full h-[400px] md:h-[250px] relative mx-auto overflow-hidden">
              <Image
                src={head}
                alt="Picture of the author"
                fill
                className="object-cover rounded transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className=" text-[16px] font-semibold bg-[#353683] text-white p-1 rounded-b-lg">
               সিনিয়র শিক্ষক
            </h2>
            <p className="mt-1 font-bold">ফরিদা আক্তার</p>
            <p>
              <a href="mailto:faridamukti6@gmail.com">faridamukti6@gmail.com</a>
            </p>
            <p>01726667557</p>
          </div>
          <div className="bg-[#edf0f2] h-[500px] md:h-[350px] rounded-xl inset-shadow-sm text-center">
            <div className="w-full h-[400px] md:h-[250px] relative mx-auto overflow-hidden">
              <Image
                src={head}
                alt="Picture of the author"
                fill
                className="object-cover rounded transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className=" text-[16px] font-semibold bg-[#353683] text-white p-1 rounded-b-lg">
              সিনিয়র সহকারী শিক্ষক
            </h2>
            <p className="mt-1 font-bold">মো: দেলোয়ার হোসেন দেওয়ান</p>
           <p>
              <a href="mailto:delowardewan254@gmail.com">delowardewan@gmail.com</a>
            </p>
            <p>01816271543</p>
          </div>
          <div className="bg-[#edf0f2] h-[500px] md:h-[350px] rounded-xl inset-shadow-sm text-center">
            <div className="w-full h-[400px] md:h-[250px] relative mx-auto overflow-hidden">
              <Image
                src={head}
                alt="Picture of the author"
                fill
                className="object-cover rounded transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className=" text-[16px] font-semibold bg-[#353683] text-white p-1 rounded-b-lg">
              সিনিয়র সহকারী শিক্ষক
            </h2>
            <p className="mt-1 font-bold">মো:ওমর ফারুক</p>
            <p>
              <a href="mailto:sheikhfaruq130@gmail.com">sheikhfaruq130@gmail.com</a>
            </p>
            <p>01921856445</p>
          </div>
          <div className="bg-[#edf0f2] h-[500px] md:h-[350px] rounded-xl inset-shadow-sm text-center">
            <div className="w-full h-[400px] md:h-[250px] relative mx-auto overflow-hidden">
              <Image
                src={head}
                alt="Picture of the author"
                fill
                className="object-cover rounded transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className=" text-[16px] font-semibold bg-[#353683] text-white p-1 rounded-b-lg">
                সিনিয়র সহকারী শিক্ষক
            </h2>
            <p className="mt-1 font-bold">এম. শাহজাহান</p>
            <p>
              <a href="mailto:m.shahajahan19@gmail.com">m.shahajahan19@gmail.com</a>
            </p>
            <p>01817101974</p>
          </div>
          <div className="bg-[#edf0f2] h-[500px] md:h-[350px] rounded-xl inset-shadow-sm text-center">
            <div className="w-full h-[400px] md:h-[250px] relative mx-auto overflow-hidden">
              <Image
                src={head}
                alt="Picture of the author"
                fill
                className="object-cover rounded transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className=" text-[16px] font-semibold bg-[#353683] text-white p-1 rounded-b-lg">
              সহকারী শিক্ষক
            </h2>
            <p className="mt-1 font-bold">মো: সাইদুল হাসান</p>
            <p>
              <a href="mailto:saidulhasan002@gmail.com">saidulhasan002@gmail.com</a>
            </p>
            <p>01736848788</p>
          </div>

          <div className="bg-[#edf0f2] h-[500px] md:h-[350px] rounded-xl inset-shadow-sm text-center">
            <div className="w-full h-[400px] md:h-[250px] relative mx-auto overflow-hidden">
              <Image
                src={head}
                alt="Picture of the author"
                fill
                className="object-cover rounded transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className=" text-[16px] font-semibold bg-[#353683] text-white p-1 rounded-b-lg">
             সহকারী শিক্ষিকা
            </h2>
            <p className="mt-1 font-bold">মাহমুদা পারভিন</p>
            <p>
              <a href="mailto:mahmudaparbin1979@gmail.com">mahmudaparbin1989@gmail.com</a>
            </p>
            <p>0191411525231</p>
          </div>

           <div className="bg-[#edf0f2] h-[500px] md:h-[350px] rounded-xl inset-shadow-sm text-center">
            <div className="w-full h-[400px] md:h-[250px] relative mx-auto overflow-hidden">
              <Image
                src={head}
                alt="Picture of the author"
                fill
                className="object-cover rounded transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className=" text-[16px] font-semibold bg-[#353683] text-white p-1 rounded-b-lg">
              সহকারী শিক্ষক
            </h2>
            <p className="mt-1 font-bold">জসিম উদ্দিন</p>
            <p>
              <a href="mailto:jasim2018@gmail.com">jasim2018@gmail.com</a>
            </p>
            <p>01918327863</p>
          </div>
          <div className="bg-[#edf0f2] h-[500px] md:h-[350px] rounded-xl inset-shadow-sm text-center">
            <div className="w-full h-[400px] md:h-[250px] relative mx-auto overflow-hidden">
              <Image
                src={head}
                alt="Picture of the author"
                fill
                className="object-cover rounded transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className=" text-[16px] font-semibold bg-[#353683] text-white p-1 rounded-b-lg">
              সহকারী শিক্ষক
            </h2>
            <p className="mt-1 font-bold">জহিরুল ইসলাম</p>
            <p>
              <a href="mailto:jahirulislam1993linkon@gmail.com">jahirulislam1993linkon@gmail.com</a>
            </p>
            <p>01924739786</p>
          </div>
          <div className="bg-[#edf0f2] h-[500px] md:h-[350px] rounded-xl inset-shadow-sm text-center">
            <div className="w-full h-[400px] md:h-[250px] relative mx-auto overflow-hidden">
              <Image
                src={head}
                alt="Picture of the author"
                fill
                className="object-cover rounded transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className=" text-[16px] font-semibold bg-[#353683] text-white p-1 rounded-b-lg">
              সহকারী শিক্ষক
            </h2>
            <p className="mt-1 font-bold">সাইফ আরফিন বিপুল</p>
            <p>
              <a href="mailto:mathmedia.bipul@gmail.com">mathmedia.bipul@gmail.com</a>
            </p>
            <p>01754484427</p>
          </div>
          <div className="bg-[#edf0f2] h-[500px] md:h-[350px] rounded-xl inset-shadow-sm text-center">
            <div className="w-full h-[400px] md:h-[250px] relative mx-auto overflow-hidden">
              <Image
                src={head}
                alt="Picture of the author"
                fill
                className="object-cover rounded transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className=" text-[16px] font-semibold bg-[#353683] text-white p-1 rounded-b-lg">
             সহকারী শিক্ষক
            </h2>
            <p className="mt-1 font-bold">তানজিলা আফরোজ</p>
            <p>
              <a href="mailto:tanjuroze@gmail.com">tanjuroze@gmail.com</a>
            </p>
            <p>01706904898</p>
          </div>
          <div className="bg-[#edf0f2] h-[500px] md:h-[350px] rounded-xl inset-shadow-sm text-center">
            <div className="w-full h-[400px] md:h-[250px] relative mx-auto overflow-hidden">
              <Image
                src={head}
                alt="Picture of the author"
                fill
                className="object-cover rounded transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className=" text-[16px] font-semibold bg-[#353683] text-white p-1 rounded-b-lg">
              সহকারী শিক্ষক
            </h2>
            <p className="mt-1 font-bold">সুফিয়া ইসলাম এ্যানি</p>
            <p>
              <a href="mailto:anneislam42@gmail.com">anneislam42@gmail.com</a>
            </p>
            <p>01402381461</p>
          </div>
          <div className="bg-[#edf0f2] h-[500px] md:h-[350px] rounded-xl inset-shadow-sm text-center">
            <div className="w-full h-[400px] md:h-[250px] relative mx-auto overflow-hidden">
              <Image
                src={head}
                alt="Picture of the author"
                fill
                className="object-cover rounded transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className=" text-[16px] font-semibold bg-[#353683] text-white p-1 rounded-b-lg">
              সহকারী শিক্ষক
            </h2>
            <p className="mt-1 font-bold">মো: সাজ্জাদুর রহমান রাসেল</p>
            <p>
              <a href="mailto:sajjadurasel07@gmail.com">sajjadurasel07@gmail.com</a>
            </p>
            <p>01923273451</p>
          </div>
           <div className="bg-[#edf0f2] h-[500px] md:h-[350px] rounded-xl inset-shadow-sm text-center">
            <div className="w-full h-[400px] md:h-[250px] relative mx-auto overflow-hidden">
              <Image
                src={head}
                alt="Picture of the author"
                fill
                className="object-cover rounded transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className=" text-[16px] font-semibold bg-[#353683] text-white p-1 rounded-b-lg">
              সহকারী শিক্ষিকা
            </h2>
            <p className="mt-1 font-bold">রাশেদা</p>
            <p>
              <a href="mailto:rashedaakter@gmail.com">rashedaakter@gmail.com</a>
            </p>
            <p>01726029401</p>
          </div>
          <div className="bg-[#edf0f2] h-[500px] md:h-[350px] rounded-xl inset-shadow-sm text-center">
            <div className="w-full h-[400px] md:h-[250px] relative mx-auto overflow-hidden">
              <Image
                src={head}
                alt="Picture of the author"
                fill
                className="object-cover rounded transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className=" text-[16px] font-semibold bg-[#353683] text-white p-1 rounded-b-lg">
              কম্পিউটার ল্যাব অপারেটর
            </h2>
            <p className="mt-1 font-bold">মোঃ শামসুল আলম</p>
            <p>
              <a href="mailto:shamsulsajib@gmail.com">shamsulsajib@gmail.com</a>
            </p>
            <p>01946-139925</p>
          </div>
           <div className="bg-[#edf0f2] h-[500px] md:h-[350px] rounded-xl inset-shadow-sm text-center">
            <div className="w-full h-[400px] md:h-[250px] relative mx-auto overflow-hidden">
              <Image
                src={head}
                alt="Picture of the author"
                fill
                className="object-cover rounded transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className=" text-[16px] font-semibold bg-[#353683] text-white p-1 rounded-b-lg">
              অফিস সহকারি
            </h2>
            <p className="mt-1 font-bold">মোঃ জিয়াউর রহমান</p>
            <p>
              <a href="mailto:ziaurbnhs@gmail.com">ziaurbnhs@gmail.com</a>
            </p>
            <p>01715-371589</p>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}