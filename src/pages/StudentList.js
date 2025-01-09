import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState({});

  useEffect(() => {
    fetchStudents();
    fetchClasses();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await API.get("/students/students/");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
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

  const deleteStudent = async (id) => {
    try {
      await API.delete(`/students/students/${id}/`);
      setStudents(students.filter((student) => student.id !== id));
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Student List</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200 shadow-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 px-4 py-2">Full Name</th>
              <th className="border border-gray-200 px-4 py-2">Age</th>
              <th className="border border-gray-200 px-4 py-2">Contact</th>
              <th className="border border-gray-200 px-4 py-2">
                Assigned Class
              </th>
              <th className="border border-gray-200 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-100">
                <td className="border border-gray-200 px-4 py-2">
                  {student.full_name}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {student.age}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {student.contact}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {/* Display the class name instead of the ID */}
                  {student.assigned_class && classes[student.assigned_class]
                    ? classes[student.assigned_class]
                    : "No class assigned"}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  <Link
                    to={`/students/edit/${student.id}`}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => deleteStudent(student.id)}
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

export default StudentList;
