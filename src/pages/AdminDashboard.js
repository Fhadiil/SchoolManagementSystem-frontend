import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [admissions, setAdmissions] = useState([]);

  useEffect(() => {
    const fetchAdmissions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/admissions/"
        );
        setAdmissions(response.data);
      } catch (error) {
        console.error("Error fetching admissions:", error);
      }
    };
    fetchAdmissions();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await axios.patch(`http://localhost:8000/api/admissions/${id}/status/`, {
        status,
      });
      setAdmissions((prevAdmissions) =>
        prevAdmissions.map((admission) =>
          admission.id === id ? { ...admission, status } : admission
        )
      );
      alert(`Application ${status} successfully!`);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admissions Dashboard</h1>
      <table className="table-auto w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2">Full Name</th>
            <th className="px-4 py-2">Class Applied</th>
            <th className="px-4 py-2">Parent/Guardian</th>
            <th className="px-4 py-2">Contact</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {admissions.map((admission) => (
            <tr key={admission.id}>
              <td className="border px-4 py-2">{admission.full_name}</td>
              <td className="border px-4 py-2">{admission.class_applied}</td>
              <td className="border px-4 py-2">{admission.parent_name}</td>
              <td className="border px-4 py-2">{admission.parent_contact}</td>
              <td className="border px-4 py-2">{admission.status}</td>
              <td className="border px-4 py-2">
                {admission.status === "Pending" && (
                  <>
                    <button
                      onClick={() => updateStatus(admission.id, "Approved")}
                      className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateStatus(admission.id, "Rejected")}
                      className="bg-red-500 text-white px-4 py-2 rounded-md"
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
