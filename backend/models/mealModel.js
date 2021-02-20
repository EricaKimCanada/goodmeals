import mongoose from "mongoose";

const mealSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  ingredients: { type: String },
  dietplanName: { type: String },
  image: { type: String },
  vidId: { type: String },
});

const Meal = mongoose.model("Meal", mealSchema);
export default Meal;
