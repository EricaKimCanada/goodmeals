import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Meal from '../models/mealModel.js';

const mealRouter = express.Router();

mealRouter.get(
    '/',
    expressAsyncHandler(async (req, res) => {
        const meals = await Meal.find({});
        res.send(meals);
    })
);

//add meal data from data.js to Mongodb - not use for website functionality
mealRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    // await User.remove({});
    const createdMeals = await Meal.insertMany(data.meals);
    res.send({ createdMeals });
})
);

mealRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const meal = await Meal.findById(req.params.id);
        if (meal) {
            res.send(meal);
        } else {
            res.status(404).send({ message: 'Meal Not Found' });
        }
    })
);

export default mealRouter;