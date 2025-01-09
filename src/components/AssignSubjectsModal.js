import React, { useState, useEffect } from "react";
import axios from "axios";

const AssignSubjectsModal = ({
  isOpen,
  onClose,
  selectedClass,
  fetchClasses,
}) => {
  const [subjects, setSubjects] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    try {
      const response = await axios.get("/api/subjects/");
      setSubjects(response.data);
    } catch (error) {
      console.error("Error fetching subjects:", error);
    }
  };

  const handleAssignSubjects = async () => {
    try {
      await axios.patch(`/api/classes/${selectedClass.id}/`, {
        subjects: selectedSubjects,
      });
      fetchClasses();
      onClose();
    } catch (error) {
      console.error("Error assigning subjects:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-lg font-bold mb-4">
          Assign Subjects to {selectedClass.name}
        </h3>
        <div className="space-y-2">
          {subjects.map((subject) => (
            <label key={subject.id} className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                value={subject.id}
                onChange={(e) =>
                  setSelectedSubjects((prev) =>
                    e.target.checked
                      ? [...prev, subject.id]
                      : prev.filter((id) => id !== subject.id)
                  )
                }
              />
              {subject.name}
            </label>
          ))}
        </div>
        <div className="mt-4 flex space-x-2">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
            onClick={handleAssignSubjects}
          >
            Save
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-600"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignSubjectsModal;
