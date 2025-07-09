import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectionDB.js"; // ✅ works with "export default"

import router  from "./routes/recipe.js";

dotenv.config();
  
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
app.use(express.json());
app.use("/recipe", router);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
