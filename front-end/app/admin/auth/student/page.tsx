"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Section {
  section: string;
  boys: number;
  girls: number;
}

interface ClassGroup {
  _id?: string;
  serialNo: number;
  className: string;
  sections: Section[];
}

export default function EditableBengaliTable() {
  const [classes, setClasses] = useState<ClassGroup[]>([]);
  const [editClassIndex, setEditClassIndex] = useState<number | null>(null);
  const [editSectionIndex, setEditSectionIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<Section>({ section: "", boys: 0, girls: 0 });

  const API_URL = "http://localhost:5000/studentsection/api/classes";
  const router = useRouter();
  useEffect(() => {
    checkLogin();
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(API_URL);
      setClasses(res.data);
    } catch (error) {
        
      console.error("Error fetching data:", error);
    }
  };
      const checkLogin = async () => {
        try {
          const response = await axios.get("http://localhost:5000/login/me", {
            withCredentials: true,
          });
          if (response.status !== 200) {
            router.push("/admin/login");
          }
        } catch {
          router.push("/admin/login");
        }
      };
      

  // Edit
  const handleEdit = (classIndex: number, sectionIndex: number) => {
    setEditClassIndex(classIndex);
    setEditSectionIndex(sectionIndex);
    setFormData(classes[classIndex].sections[sectionIndex]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (editClassIndex === null || editSectionIndex === null) return;

    const updatedClasses = [...classes];
    updatedClasses[editClassIndex].sections[editSectionIndex] = {
      ...formData,
      boys: Number(formData.boys),
      girls: Number(formData.girls),
    };

    const updatedClass = updatedClasses[editClassIndex];

    try {
      await axios.put(`${API_URL}/${updatedClass._id}`, updatedClass);
      setClasses(updatedClasses);
      setEditClassIndex(null);
      setEditSectionIndex(null);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  // Add Section (instant)
  const handleAddSection = (classIndex: number) => {
    const updatedClasses = [...classes];
    const newSection: Section = { section: "", boys: 0, girls: 0 };
    updatedClasses[classIndex].sections.push(newSection);
    setClasses(updatedClasses);

    // Update backend
    axios.put(`${API_URL}/${updatedClasses[classIndex]._id}`, updatedClasses[classIndex])
      .catch((err) => console.error(err));
  };

  // Delete Section
  const handleDeleteSection = async (classIndex: number, sectionIndex: number) => {
    const updatedClasses = [...classes];
    updatedClasses[classIndex].sections.splice(sectionIndex, 1);
    setClasses(updatedClasses);

    try {
      await axios.delete(`${API_URL}/${updatedClasses[classIndex]._id}`, {
        data: updatedClasses[classIndex]  // <-- payload goes here
      });
    } catch (error) {
      console.error("Error deleting section:", error);
    }
  };

  // Add Class (instant)
  const handleAddClass = async () => {
    const newClass: ClassGroup = {
      serialNo: classes.length + 1,
      className: "",
      sections: [{ section: "", boys: 0, girls: 0 }],
    };

    setClasses([...classes, newClass]);

    try {
      const res = await axios.post(API_URL, newClass);
      const savedClass = res.data;
      setClasses((prev) =>
        prev.map((cls) => (cls === newClass ? savedClass : cls))
      );
    } catch (error) {
      console.error("Error adding class:", error);
      setClasses((prev) => prev.filter((cls) => cls !== newClass));
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-lg font-bold mb-4">Editable Bengali Table</h1>

      <div className="mb-4">
        <button onClick={handleAddClass} className="bg-green-500 text-white px-4 py-2 rounded">
          + Add Class
        </button>
      </div>

      <table className="border-collapse border border-gray-400 w-full text-center">
        <thead>
          <tr className="bg-yellow-200">
            <th className="border border-gray-400 p-2">ক্রমিক</th>
            <th className="border border-gray-400 p-2">শ্রেণি</th>
            <th className="border border-gray-400 p-2">শাখা/বিভাগ</th>
            <th className="border border-gray-400 p-2">ছাত্র</th>
            <th className="border border-gray-400 p-2">ছাত্রী</th>
            <th className="border border-gray-400 p-2">মোট</th>
            <th className="border border-gray-400 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((cls, classIndex) =>
            cls.sections.map((sec, sectionIndex) => {
              const isEditing = editClassIndex === classIndex && editSectionIndex === sectionIndex;
              return (
                <tr key={`${cls._id}-${sectionIndex}`}>
                  {sectionIndex === 0 && (
                    <>
                      <td rowSpan={cls.sections.length} className="border border-gray-400 p-2">{cls.serialNo}</td>
                      <td rowSpan={cls.sections.length} className="border border-gray-400 p-2">
                        {isEditing ? (
                          <input
                            name="className"
                            value={cls.className}
                            onChange={(e) => {
                              const updatedClasses = [...classes];
                              updatedClasses[classIndex].className = e.target.value;
                              setClasses(updatedClasses);
                            }}
                            className="border p-1 w-full"
                          />
                        ) : cls.className}
                      </td>
                    </>
                  )}

                  <td className="border border-gray-400 p-2">
                    {isEditing ? (
                      <input name="section" value={formData.section} onChange={handleChange} className="border p-1 w-full" />
                    ) : sec.section}
                  </td>

                  <td className="border border-gray-400 p-2">
                    {isEditing ? (
                      <input type="number" name="boys" value={formData.boys} onChange={handleChange} className="border p-1 w-full" />
                    ) : sec.boys}
                  </td>

                  <td className="border border-gray-400 p-2">
                    {isEditing ? (
                      <input type="number" name="girls" value={formData.girls} onChange={handleChange} className="border p-1 w-full" />
                    ) : sec.girls}
                  </td>

                  <td className="border border-gray-400 p-2">{sec.boys + sec.girls}</td>

                  <td className="border border-gray-400 p-2">
                    {isEditing ? (
                      <>
                        <button onClick={handleSave} className="bg-green-500 text-white px-2 py-1 mr-2 rounded">Save</button>
                        <button onClick={() => { setEditClassIndex(null); setEditSectionIndex(null); }} className="bg-gray-400 text-white px-2 py-1 rounded">Cancel</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => handleEdit(classIndex, sectionIndex)} className="bg-blue-500 text-white px-2 py-1 mr-2 rounded">Edit</button>
                        <button onClick={() => handleDeleteSection(classIndex, sectionIndex)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                        {sectionIndex === cls.sections.length - 1 && (
                          <button onClick={() => handleAddSection(classIndex)} className="bg-purple-500 text-white px-2 py-1 ml-2 rounded">+ Section</button>
                        )}
                      </>
                    )}
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
