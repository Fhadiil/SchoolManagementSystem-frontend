import React, { useState } from "react";
import axios from "axios";
import API from "../services/api";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    date_of_birth: "",
    class_applied: "",
    parent_name: "",
    parent_contact: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/admissions", formData);
      alert("Application submitted successfully!");
      setFormData({
        full_name: "",
        date_of_birth: "",
        class_applied: "",
        parent_name: "",
        parent_contact: "",
        address: "",
      });
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Admission Form</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Full Name</label>
        <input
          type="text"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Date of Birth</label>
        <input
          type="date"
          name="date_of_birth"
          value={formData.date_of_birth}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Class Applied For</label>
        <input
          type="text"
          name="class_applied"
          value={formData.class_applied}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Parent/Guardian Name</label>
        <input
          type="text"
          name="parent_name"
          value={formData.parent_name}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Parent/Guardian Contact</label>
        <input
          type="text"
          name="parent_contact"
          value={formData.parent_contact}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Submit Application
      </button>
    </form>
  );
};

export default AdmissionForm;
