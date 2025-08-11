export default function Student() {
  return (
    <div className="overflow-x-auto p-4">
      <h1 className="text-center mb-4 text-lg font-bold">সকল শ্রেণীর শিক্ষার্থীর তথ্য</h1>

      <table className="w-full min-w-[800px] border border-black border-collapse text-xl">
        <thead>
          <tr className="font-bold">
            <th className="border border-black p-2 bg-yellow-100">ক্রমিক</th>
            <th className="border border-black p-2 bg-yellow-100">শ্রেণি</th>
            <th className="border border-black p-2 bg-yellow-100">শাখা/বিভাগ</th>
            <th className="border border-black p-2 bg-yellow-100">ছাত্র</th>
            <th className="border border-black p-2 bg-yellow-100">ছাত্রী</th>
            <th className="border border-black p-2 bg-yellow-100">মোট</th>
            <th className="border border-black p-2 bg-yellow-100">সর্বমোট</th>
          </tr>
        </thead>

        <tbody className="font-bold">
          <tr>
            <td className="border border-black p-2 text-center" rowSpan={4}>০১</td>
            <td className="border border-black p-2 text-center" rowSpan={4}>ষষ্ঠ</td>
            <td className="border border-black p-2 text-center">গোলাপ</td>
            <td className="border border-black p-2 text-center">13</td>
            <td className="border border-black p-2 text-center">37</td>
            <td className="border border-black p-2 text-center">50</td>
            <td className="border border-black p-2 text-center" rowSpan={4}>172</td>
          </tr>

          <tr>
            <td className="border border-black p-2 text-center">শাপলা</td>
            <td className="border border-black p-2 text-center">13</td>
            <td className="border border-black p-2 text-center">38</td>
            <td className="border border-black p-2 text-center">51</td>
          </tr>

          <tr>
            <td className="border border-black p-2 text-center">পদ্মা</td>
            <td className="border border-black p-2 text-center">71</td>
            <td className="border border-black p-2 text-center"></td>
            <td className="border border-black p-2 text-center">71</td>
          </tr>

          <tr>
            <td className="border border-black p-2 text-center">মোট</td>
            <td className="border border-black p-2 text-center">97</td>
            <td className="border border-black p-2 text-center">75</td>
            <td className="border border-black p-2 text-center">172</td>
          </tr>

          <tr>
            <td className="border border-black p-2 text-center" rowSpan={4}>02</td>
            <td className="border border-black p-2 text-center" rowSpan={4}>১০ম</td>
            <td className="border border-black p-2 text-center">গোলাপ</td>
            <td className="border border-black p-2 text-center">17</td>
            <td className="border border-black p-2 text-center">34</td>
            <td className="border border-black p-2 text-center">51</td>
            <td className="border border-black p-2 text-center" rowSpan={4}>191</td>
          </tr>

          <tr>
            <td className="border border-black p-2 text-center">শাপলা</td>
            <td className="border border-black p-2 text-center"></td>
            <td className="border border-black p-2 text-center">65</td>
            <td className="border border-black p-2 text-center">65</td>
            
          </tr>

          <tr>
            <td className="border border-black p-2 text-center">পদ্মা</td>
            <td className="border border-black p-2 text-center">75</td>
            <td className="border border-black p-2 text-center"></td>
            <td className="border border-black p-2 text-center">৭৫</td>
          </tr>
          
          <tr>
            <td className="border border-black p-2 text-center">মোট</td>
            <td className="border border-black p-2 text-center">92</td>
            <td className="border border-black p-2 text-center">99</td>
            <td className="border border-black p-2 text-center">191</td>
          </tr>

          <tr>
            <td className="border border-black p-2 text-center" rowSpan={4}>02</td>
            <td className="border border-black p-2 text-center" rowSpan={4}>১০ম</td>
            <td className="border border-black p-2 text-center">গোলাপ</td>
            <td className="border border-black p-2 text-center">17</td>
            <td className="border border-black p-2 text-center">34</td>
            <td className="border border-black p-2 text-center">51</td>
            <td className="border border-black p-2 text-center" rowSpan={4}>191</td>
          </tr>

          <tr>
            <td className="border border-black p-2 text-center">শাপলা</td>
            <td className="border border-black p-2 text-center"></td>
            <td className="border border-black p-2 text-center">65</td>
            <td className="border border-black p-2 text-center">65</td>
            
          </tr>
          
          <tr>
            <td className="border border-black p-2 text-center">পদ্মা</td>
            <td className="border border-black p-2 text-center">75</td>
            <td className="border border-black p-2 text-center"></td>
            <td className="border border-black p-2 text-center">৭৫</td>
          </tr>
          
          <tr>
            <td className="border border-black p-2 text-center">মোট</td>
            <td className="border border-black p-2 text-center">92</td>
            <td className="border border-black p-2 text-center">99</td>
            <td className="border border-black p-2 text-center">191</td>
          </tr>
          
          <tr>
            <td className="border border-black p-2 text-center" rowSpan={3}>02</td>
            <td className="border border-black p-2 text-center" rowSpan={3}>১০ম</td>
            <td className="border border-black p-2 text-center">গোলাপ</td>
            <td className="border border-black p-2 text-center">17</td>
            <td className="border border-black p-2 text-center">34</td>
            <td className="border border-black p-2 text-center">51</td>
            <td className="border border-black p-2 text-center" rowSpan={3}>191</td>
          </tr>
          
          <tr>
            <td className="border border-black p-2 text-center">শাপলা</td>
            <td className="border border-black p-2 text-center"></td>
            <td className="border border-black p-2 text-center">65</td>
            <td className="border border-black p-2 text-center">65</td>
            
          </tr>
          
          <tr>
            <td className="border border-black p-2 text-center">পদ্মা</td>
            <td className="border border-black p-2 text-center">75</td>
            <td className="border border-black p-2 text-center"></td>
            <td className="border border-black p-2 text-center">৭৫</td>
          </tr>
                    {/* <tr>
            <td className="border border-black p-2 text-center">মোট</td>
            <td className="border border-black p-2 text-center">92</td>
            <td className="border border-black p-2 text-center">99</td>
            <td className="border border-black p-2 text-center">191</td>
          </tr> */}
                   
          <tr>
            <td className="border border-black p-2 text-center" rowSpan={3}>02</td>
            <td className="border border-black p-2 text-center" rowSpan={3}>১০ম</td>
            <td className="border border-black p-2 text-center">গোলাপ</td>
            <td className="border border-black p-2 text-center">17</td>
            <td className="border border-black p-2 text-center">34</td>
            <td className="border border-black p-2 text-center">51</td>
            <td className="border border-black p-2 text-center" rowSpan={3}>191</td>
          </tr>
          
          <tr>
            <td className="border border-black p-2 text-center">শাপলা</td>
            <td className="border border-black p-2 text-center"></td>
            <td className="border border-black p-2 text-center">65</td>
            <td className="border border-black p-2 text-center">65</td>
            
          </tr>
          
          <tr>
            <td className="border border-black p-2 text-center">পদ্মা</td>
            <td className="border border-black p-2 text-center">75</td>
            <td className="border border-black p-2 text-center"></td>
            <td className="border border-black p-2 text-center">৭৫</td>
          </tr>
                    {/* <tr>
            <td className="border border-black p-2 text-center">মোট</td>
            <td className="border border-black p-2 text-center">92</td>
            <td className="border border-black p-2 text-center">99</td>
            <td className="border border-black p-2 text-center">191</td>
          </tr> */}
                   
          <tr>
            <td className="border border-black p-2 text-center" colSpan={2}></td>
            <td className="border border-black p-2 text-center">মোট</td>
            <td className="border border-black p-2 text-center">মোট</td>
            <td className="border border-black p-2 text-center">মোট</td>
            <td className="border border-black p-2 text-center">মোট</td>
            <td className="border border-black p-2 text-center">মোট</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
}