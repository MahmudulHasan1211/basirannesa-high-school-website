export default function Student() {
  return (
    <div className="overflow-x-auto p-4">
      <h1 className="text-center mb-4 text-lg font-bold">সকল শ্রেণীর শিক্ষার্থীর তথ্য</h1>

      <table className="w-full min-w-[800px] border border-black border-collapse text-xl">
        <thead>
          <tr className="font-bold">
            <th className="border border-black p-2 bg-red-100">ক্রমিক</th>
            <th className="border border-black p-2 bg-red-100">শ্রেণি</th>
            <th className="border border-black p-2 bg-red-100">শাখা / বিভাগ</th>
            <th className="border border-black p-2 bg-red-100">ছাত্রী</th>
            <th className="border border-black p-2 bg-red-100">মোট</th>
            <th className="border border-black p-2 bg-red-100">সর্বমোট</th>
            <th className="border border-black p-2 bg-red-100">শ্রেণি</th>
          </tr>
        </thead>

        <tbody className="font-bold">
          <tr>
            <td className="border border-black p-2 text-center">০১</td>
            <td className="border border-black p-2 text-center">৩৬</td>
            <td className="border border-black p-2 text-center">সোশাল</td>
            <td className="border border-black p-2 text-center">১৩০</td>
            <td className="border border-black p-2 text-center">৩৭</td>
            <td className="border border-black p-2 text-center">১৬৭</td>
            <td className="border border-black p-2 text-center" rowSpan={5}>
              ৮৮৮
            </td>
          </tr>

          <tr>
            <td className="border border-black p-2 text-center">০২</td>
            <td className="border border-black p-2 text-center">৭ম</td>
            <td className="border border-black p-2 text-center">শলাপা</td>
            <td className="border border-black p-2 text-center">৩৬</td>
            <td className="border border-black p-2 text-center">৫৫</td>
            <td className="border border-black p-2 text-center">৯১</td>
          </tr>

          <tr>
            <td className="border border-black p-2 text-center">০৩</td>
            <td className="border border-black p-2 text-center">৮ম</td>
            <td className="border border-black p-2 text-center">শলাপা</td>
            <td className="border border-black p-2 text-center">১৪</td>
            <td className="border border-black p-2 text-center">৫৬</td>
            <td className="border border-black p-2 text-center">৭০</td>
          </tr>

          <tr>
            <td className="border border-black p-2 text-center">০৪</td>
            <td className="border border-black p-2 text-center">৯ম</td>
            <td className="border border-black p-2 text-center">বাস্তক</td>
            <td className="border border-black p-2 text-center">৮৫</td>
            <td className="border border-black p-2 text-center">৩৫</td>
            <td className="border border-black p-2 text-center">১২০</td>
          </tr>

          <tr>
            <td className="border border-black p-2 text-center">০৫</td>
            <td className="border border-black p-2 text-center">১০ম</td>
            <td className="border border-black p-2 text-center">বাস্তক</td>
            <td className="border border-black p-2 text-center">৭৫</td>
            <td className="border border-black p-2 text-center">৮০</td>
            <td className="border border-black p-2 text-center">১৫৫</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}