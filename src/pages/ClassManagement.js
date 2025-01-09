import React, { useEffect, useState } from "react";
import ClassCard from "../components/ClassCard";
import API from "../services/api";
import AddStudentsModal from "../components/AddStudentsModal";
import AssignSubjectsModal from "../components/AssignSubjectsModal";

const ClassManagement = () => {
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [isAssignSubjectsOpen, setAssignSubjectsOpen] = useState(false);
  const [isAddStudentsOpen, setAddStudentsOpen] = useState(false);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await API.get("/classes");
      setClasses(response.data);
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Class Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem) => (
          <ClassCard
            key={classItem.id}
            classItem={classItem}
            onAssignSubjects={() => {
              setSelectedClass(classItem);
              setAssignSubjectsOpen(true);
            }}
            onAddStudents={() => {
              setSelectedClass(classItem);
              setAddStudentsOpen(true);
            }}
          />
        ))}
      </div>

      {/* Modals */}
      {selectedClass && (
        <>
          <AssignSubjectsModal
            isOpen={isAssignSubjectsOpen}
            onClose={() => setAssignSubjectsOpen(false)}
            selectedClass={selectedClass}
            fetchClasses={fetchClasses}
          />
          <AddStudentsModal
            isOpen={isAddStudentsOpen}
            onClose={() => setAddStudentsOpen(false)}
            selectedClass={selectedClass}
            fetchClasses={fetchClasses}
          />
        </>
      )}
    </div>
  );
};

export default ClassManagement;
