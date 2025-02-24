import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CityDetails.css";

export default function CityDetails({ cities }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const city = cities.find((c) => c.id === parseInt(id));

  useEffect(() => {
    if (!city) navigate("/cities", { replace: true });
  }, [city, navigate]);

  if (!city) return null;

  return (
    <div className="city-details-container">
      <h3>{city.name}</h3>
      <p><strong>Country:</strong> {city.country}</p>
      <p><strong>Population:</strong> {city.population}</p>
      <p><strong>Details:</strong> {city.details}</p>
    </div>
  );
}
