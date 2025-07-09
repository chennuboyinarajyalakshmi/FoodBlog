import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  ingredients: {
    type: String,
    required: true
  },
  instructions: {
    type: String,
    required: true
  },
  time: {
    type: String
  },
  coverImage: {
    type: String
  }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe; // ✅ Correct for ES Module syntax
