const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Recipe = require('./models/Recipe');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Get all recipes
app.get('/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get recipe by ID
app.get('/recipes/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    res.json(recipe);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

// Create new recipe
app.post('/recipes', async (req, res) => {
  const { name, ingredients, instructions } = req.body;
  const newRecipe = new Recipe({ name, ingredients, instructions });
  try {
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete recipe by ID
app.delete('/recipes/:id', async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Recipe deleted' });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

// Update recipe by ID (PUT request)
app.put('/recipes/:id', async (req, res) => {
  const { name, ingredients, instructions } = req.body;
  try {
    // Find the recipe by ID and update it
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      { name, ingredients, instructions },
      { new: true }  // This ensures the updated recipe is returned
    );
    if (!updatedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.json(updatedRecipe); // Send the updated recipe as a response
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
