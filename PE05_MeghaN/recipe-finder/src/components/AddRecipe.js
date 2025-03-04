import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './AddRecipe.css'; // Import the CSS file

const AddRecipe = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const recipeToEdit = location.state?.recipe || null;  // Get the recipe passed for editing
  const [name, setName] = useState(recipeToEdit?.name || '');
  const [ingredients, setIngredients] = useState(recipeToEdit?.ingredients || '');
  const [instructions, setInstructions] = useState(recipeToEdit?.instructions || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (recipeToEdit) {
      // If editing, populate fields with existing recipe data
      setName(recipeToEdit.name);
      setIngredients(recipeToEdit.ingredients);
      setInstructions(recipeToEdit.instructions);
    }
  }, [recipeToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input
    if (!name || !ingredients || !instructions) {
      setError("Please fill in all fields.");
      return;
    }

    const newRecipe = { name, ingredients, instructions };
    setLoading(true); // Start loading
    setError(null); // Clear previous error

    try {
      if (recipeToEdit) {
        // If editing, update the existing recipe
        await axios.put(`http://localhost:5000/recipes/${recipeToEdit._id}`, newRecipe);
      } else {
        // If creating new recipe
        await axios.post('http://localhost:5000/recipes', newRecipe);
      }
      navigate('/');  // Redirect to the recipe list page after successful submission
    } catch (err) {
      setError("Error adding/updating recipe. Please try again later.");
      console.log(err);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="container">
      <h1>{recipeToEdit ? 'Update Recipe' : 'Add Recipe'}</h1>

      {/* Display error message */}
      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <textarea
          placeholder="Ingredients"
          value={ingredients}
          onChange={e => setIngredients(e.target.value)}
        />
        <textarea
          placeholder="Cooking Instructions"
          value={instructions}
          onChange={e => setInstructions(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : recipeToEdit ? "Update Recipe" : "Add Recipe"}
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
