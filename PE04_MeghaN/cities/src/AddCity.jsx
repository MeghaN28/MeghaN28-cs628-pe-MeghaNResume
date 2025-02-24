import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddCity.css";

export default function AddCity({ addCity }) {
  const [formData, setFormData] = useState({ name: "", country: "", population: "", details: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCity(formData);
    navigate("/cities", { replace: true });
  };

  return (
    <div className="add-city-container">
      <h2>Add a New City</h2>
      <form onSubmit={handleSubmit} className="add-city-form">
        <input type="text" name="name" placeholder="City Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} required />
        <input type="text" name="population" placeholder="Population" value={formData.population} onChange={handleChange} required />
        <textarea name="details" placeholder="Details" value={formData.details} onChange={handleChange} required></textarea>
        <button type="submit">Add City</button>
      </form>
    </div>
  );
}