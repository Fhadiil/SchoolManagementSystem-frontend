import React, { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [subjects, setSubjects] = useState({});
  const [classes, setClasses] = useState({});

  useEffect(() => {
    fetchTeachers();
    fetchSubjects();
    fetchClasses();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await API.get("/teachers/teachers/");
      setTeachers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  const fetchSubjects = async () => {
    try {
      const response = await API.get("/teachers/subjects/");
      const subjectMap = {};
      response.data.forEach((subject) => {
        subjectMap[subject.id] = subject.name;
      });
      setSubjects(subjectMap);
    } catch (error) {
      console.error("Error fetching subjects:", error);
    }
  };

  const fetchClasses = async () => {
    try {
      const response = await API.get("/classes/classes/");
      const classMap = {};
      response.data.forEach((cls) => {
        classMap[cls.id] = `${cls.name} - ${cls.section}`;
      });
      setClasses(classMap);
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  const deleteTeacher = async (id) => {
    try {
      await API.delete(`/teachers/teachers/${id}/`);
      setTeachers(teachers.filter((teacher) => teacher.id !== id));
    } catch (error) {
      console.error("Error deleting teacher:", error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Teacher List</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200 shadow-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 px-4 py-2">Full Name</th>
              <th className="border border-gray-200 px-4 py-2">
                Qualifications
              </th>
              <th className="border border-gray-200 px-4 py-2">Contact</th>
              <th className="border border-gray-200 px-4 py-2">Subjects</th>
              <th className="border border-gray-200 px-4 py-2">
                Assigned Classes
              </th>
              <th className="border border-gray-200 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id} className="hover:bg-gray-100">
                <td className="border border-gray-200 px-4 py-2">
                  {teacher.full_name}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {teacher.qualifications}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {teacher.contact}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {teacher.subjects
                    .map((id) => subjects[id] || `Subject ${id}`)
                    .join(", ")}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {teacher.assigned_classes
                    .map((id) => classes[id] || `Class ${id}`)
                    .join(", ")}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  <Link
                    to={`/teachers/edit/${teacher.id}`}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Edit
                  </Link>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => deleteTeacher(teacher.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherList;
