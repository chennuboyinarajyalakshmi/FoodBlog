import mongoose from "mongoose";
import Recipe from "../models/recipe.js";

// Get all recipes
export const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    res.status(200).json({ success: true, data: recipes });
  } catch (error) {
    console.log("Error occurred during fetching recipes:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Get a single recipe by ID
export const getRecipe = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.log("You entered an invalid ID");
    return res.status(404).json({ success: false, message: "Please enter a valid ID" });
  }

  try {
    const recipe = await Recipe.findById(id);
    if (!recipe) {
      return res.status(404).json({ success: false, message: "Recipe not found" });
    }

    res.status(200).json({ success: true, data: recipe });
  } catch (error) {
    console.log("Error occurred during fetching your recipe:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Add a new recipe
export const addRecipe = async (req, res) => {
  const recipe = req.body;

  if (!recipe.title || !recipe.ingredients || !recipe.instructions) {
    return res.status(400).json({ success: false, message: "Required fields can't be empty" });
  }

  const newRecipe = new Recipe(recipe);

  try {
    await newRecipe.save();
    console.log("Recipe added successfully");
    res.status(201).json({ success: true, data: newRecipe, message: "Recipe added successfully" });
  } catch (error) {
    console.log("Error in adding recipe:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Edit an existing recipe
export const editRecipe = async (req, res) => {
  const { id } = req.params;
  const recipe = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.log("You entered an invalid ID");
    return res.status(404).json({ success: false, message: "Please enter a valid ID" });
  }

  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(id, recipe, { new: true });
    if (!updatedRecipe) {
      return res.status(404).json({ success: false, message: "Recipe not found" });
    }

    res.status(200).json({ success: true, data: updatedRecipe, message: "Recipe updated successfully" });
  } catch (error) {
    console.log("Error in updating the recipe:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Delete a recipe
export const deleteRecipe = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.log("You entered an invalid ID");
    return res.status(404).json({ success: false, message: "Please enter a valid ID" });
  }

  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(id);
    if (!deletedRecipe) {
      return res.status(404).json({ success: false, message: "Recipe not found" });
    }

    console.log("Recipe deleted successfully");
    res.status(200).json({ success: true, message: "Recipe deleted successfully" });
  } catch (error) {
    console.log("Error in deleting the recipe:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
