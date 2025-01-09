import React, { useState, useEffect } from "react";
import API from "../services/api";

const AddTeacher = () => {
  const [fullName, setFullName] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [contact, setContact] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [assignedClasses, setAssignedClasses] = useState([]);
  const [availableSubjects, setAvailableSubjects] = useState([]);
  const [availableClasses, setAvailableClasses] = useState([]);

  useEffect(() => {
    fetchSubjects();
    fetchClasses();
  }, []);

  const fetchSubjects = async () => {
    try {
      const response = await API.get("/teachers/subjects/");
      setAvailableSubjects(response.data);
    } catch (error) {
      console.error("Error fetching subjects:", error);
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
      const teacherData = {
        full_name: fullName,
        qualifications,
        contact,
        subjects,
        assigned_classes: assignedClasses,
      };
      await API.post("/teachers/teachers/", teacherData);
      alert("Teacher added successfully!");
      setFullName("");
      setQualifications("");
      setContact("");
      setSubjects([]);
      setAssignedClasses([]);
    } catch (error) {
      console.error("Error adding teacher:", error);
      alert("Failed to add teacher. Please check the input and try again.");
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Add Teacher</h2>
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
          <label className="block text-gray-700 font-bold mb-2">
            Qualifications
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            value={qualifications}
            onChange={(e) => setQualifications(e.target.value)}
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
          <label className="block text-gray-700 font-bold mb-2">Subjects</label>
          <select
            multiple
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            value={subjects}
            onChange={(e) =>
              setSubjects(
                [...e.target.selectedOptions].map((option) => option.value)
              )
            }
            required
          >
            {availableSubjects.map((subject) => (
              <option key={subject.id} value={subject.id}>
                {subject.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Assigned Classes
          </label>
          <select
            multiple
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            value={assignedClasses}
            onChange={(e) =>
              setAssignedClasses(
                [...e.target.selectedOptions].map((option) => option.value)
              )
            }
          >
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
          Add Teacher
        </button>
      </form>
    </div>
  );
};

export default AddTeacher;
