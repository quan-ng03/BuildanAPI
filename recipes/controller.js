const pool = require('../db');
const queries = require('./queries');

const getRecipes = (req, res) => {
  pool.query(queries.getRecipes, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getRecipeById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getRecipeById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getRecipes,
  getRecipeById,
  addRecipe,
};
