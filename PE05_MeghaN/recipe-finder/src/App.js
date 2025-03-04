import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components
import RecipeList from './components/RecipeList';
import AddRecipe from './components/AddRecipe';
import RecipeDetails from './components/RecipeDetails';
import Navbar from './components/Navbar';  // Import Navbar

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Add Navbar here */}
        <div style={{ padding: '20px' }}>
          <Routes>
            {/* Route to display the list of recipes */}
            <Route path="/" element={<RecipeList />} />

            {/* Route to add a new recipe */}
            <Route path="/add-recipe" element={<AddRecipe />} />

            {/* Route to display details of a specific recipe */}
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
