import React from "react";

const ClassCard = ({ classItem, onAssignSubjects, onAddStudents }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-2">{classItem.name}</h2>
      <p className="text-gray-600">Grade: {classItem.grade_level}</p>
      <p className="text-gray-600">Section: {classItem.section || "N/A"}</p>
      <p className="text-gray-600">
        Subjects:{" "}
        {classItem.subjects.length
          ? classItem.subjects.map((s) => s.name).join(", ")
          : "None"}
      </p>
      <p className="text-gray-600">
        Students: {classItem.students.length || "None"}
      </p>
      <div className="mt-4 flex space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
          onClick={onAssignSubjects}
        >
          Assign Subjects
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
          onClick={onAddStudents}
        >
          Add Students
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
