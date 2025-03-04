import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);  // State to handle loading
  const [error, setError] = useState(null);  // State to handle errors

  useEffect(() => {
    axios.get('http://localhost:5000/recipes')
      .then(response => {
        setRecipes(response.data);
        setLoading(false);  // Data is loaded, stop loading
        setError(null);  // Clear any previous errors
      })
      .catch(err => {
        setError("Error fetching recipes. Please try again later.");
        setLoading(false);  // Stop loading even if there's an error
        console.log(err);
      });
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#2c3e50' }}>Recipe List</h1>

      {/* Loading Indicator */}
      {loading && <div>Loading...</div>}

      {/* Error Message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Recipe List */}
      {!loading && !error && (
        <ul>
          {recipes.map(recipe => (
            <li key={recipe._id} style={{ marginBottom: '10px' }}>
              <Link 
                to={`/recipe/${recipe._id}`} 
                style={{ textDecoration: 'none', color: '#3498db', fontSize: '18px' }}>
                {recipe.name}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Add Recipe Link */}
      <Link 
        to="/add-recipe" 
        style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#3498db',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px'
        }}>
        Add a New Recipe
      </Link>
    </div>
  );
};

export default RecipeList;
