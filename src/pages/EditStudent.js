import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

const EditStudent = () => {
  const { id } = useParams(); // Get the student ID from the URL
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [assignedClass, setAssignedClass] = useState("");
  const [availableClasses, setAvailableClasses] = useState([]);

  // Fetch student details and available classes
  useEffect(() => {
    fetchStudent();
    fetchClasses();
  }, []);

  const fetchStudent = async () => {
    try {
      const response = await API.get(`/students/students/${id}/`);
      const student = response.data;
      setFullName(student.full_name);
      setAge(student.age);
      setContact(student.contact);
      setAssignedClass(student.assigned_class);
    } catch (error) {
      console.error("Error fetching student details:", error);
    }
  };

  const fetchClasses = async () => {
    try {
      const response = await API.get("/classes/classes/");
      setAvailableClasses(response.data);
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedStudent = {
        full_name: fullName,
        age,
        contact,
        assigned_class: assignedClass,
      };
      await API.put(`/students/students/${id}/`, updatedStudent);
      alert("Student updated successfully!");
      navigate("/students"); // Redirect to the student list page
    } catch (error) {
      console.error("Error updating student:", error);
      alert("Failed to update student. Please check the input and try again.");
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Edit Student</h2>
      <form
        className="bg-white p-6 rounded shadow-md max-w-lg mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Full Name
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Age</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Contact</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Assigned Class
          </label>
          <select
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            value={assignedClass}
            onChange={(e) => setAssignedClass(e.target.value)}
          >
            <option value="">Select a class</option>
            {availableClasses.map((cls) => (
              <option key={cls.id} value={cls.id}>
                {cls.name} - {cls.section}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          Update Student
        </button>
      </form>
    </div>
  );
};

export default EditStudent;
