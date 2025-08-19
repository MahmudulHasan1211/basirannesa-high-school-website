import Image from "next/image";
import head from "../../public/head.jpeg";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";


async function getTeachers() {
  try {
    console.log(process.env.NEXT_PUBLIC_IMAGE);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/newteacher`, {
      cache: "no-store", 
    });

    if (!res.ok) throw new Error("Failed to fetch teachers");

    const data = await res.json();
    // console.log(data)

    return data.map(
      (t: {
        _id: string;
        name: string;
        email: string;
        phone: string;
        designation: string;
        avatars?: string; 
      }) => ({
        id: t._id,
        name: t.name,
        email: t.email,
        phone: t.phone,
        designation: t.designation,
        avatar: t.avatars ?? null, 
      })
    );
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}

export default async function TeacherPage() {
  const teachers = await getTeachers();

  return (
    <div className="text-center">
      <h1 className="text-2xl p-3">সকল শিক্ষকের তথ্য</h1>
      <div className="border-t-[3px] border-[#a44a77]" />
      <div className="w-[90%] h-auto p-3 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-7">        
          {/* Dynamic teachers */}
          {teachers.map((teacher: { id: Key | null | undefined; avatar: string | null; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; designation: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; email: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; phone: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
            <div
              key={teacher.id}
              className="bg-[#edf0f2] h-auto md:h-auto rounded-xl inset-shadow-sm text-center"
            >
              
              <div className="w-full h-[400px] md:h-[250px] relative mx-auto overflow-hidden">
                {teacher.avatar ? (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE}${teacher.avatar}`}
                    alt={teacher.name}
                    fill
                    className="object-cover rounded transition-transform duration-300 hover:scale-110"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    No Image
                  </div>
                )}
              </div>
              <h2 className="text-[16px] font-semibold bg-[#353683] text-white p-1 rounded-b-lg">
                {teacher.designation}
              </h2>
              <p className="mt-1 font-bold">{teacher.name}</p>
              <p>
                <a className="font-[#0000FF]" href={`mailto:${teacher.email}`}>
                  {teacher.email}
                </a>
              </p>
              <p>{teacher.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
