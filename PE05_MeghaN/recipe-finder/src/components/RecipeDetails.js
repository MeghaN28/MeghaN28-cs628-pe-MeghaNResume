import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);  // To handle errors
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/recipes/${id}`)
      .then(response => {
        setRecipe(response.data);
        setError(null);  // Clear any previous errors
      })
      .catch(err => {
        setError("Error fetching recipe details. Please try again later.");
        console.log(err);
      });
  }, [id]);

  const handleDelete = () => {
    // Confirm before deletion
    const confirmDelete = window.confirm("Are you sure you want to delete this recipe?");
    if (confirmDelete) {
      axios.delete(`http://localhost:5000/recipes/${id}`)
        .then(() => navigate('/'))
        .catch(err => {
          setError("Error deleting the recipe. Please try again.");
          console.log(err);
        });
    }
  };

  const handleUpdate = () => {
    // Pass the current recipe data for editing
    navigate(`/add-recipe`, { state: { recipe } });
  };

  if (!recipe) return <div>Loading...</div>;

  const buttonStyles = {
    common: {
      padding: '10px 20px',
      cursor: 'pointer',
      borderRadius: '5px',
      border: 'none',
      fontWeight: 'bold',
      transition: 'background-color 0.3s ease',
    },
    update: {
      backgroundColor: '#3498db',
      color: 'white',
    },
    delete: {
      backgroundColor: '#e74c3c',
      color: 'white',
    },
  };

  const hoverStyles = {
    update: { backgroundColor: '#2980b9' }, // Darker shade for update button
    delete: { backgroundColor: '#c0392b' }, // Darker shade for delete button
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ color: '#2c3e50' }}>{recipe.name}</h1>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>

      {/* Error Message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ marginTop: '20px', marginBottom: '15px', display: 'flex', justifyContent: 'space-between' }}>
        <button
          onClick={handleUpdate}
          style={{
            ...buttonStyles.common,
            ...buttonStyles.update,
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = hoverStyles.update.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyles.update.backgroundColor}
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          style={{
            ...buttonStyles.common,
            ...buttonStyles.delete,
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = hoverStyles.delete.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyles.delete.backgroundColor}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default RecipeDetails;
