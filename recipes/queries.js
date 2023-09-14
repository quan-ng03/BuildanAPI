const getRecipes = 'SELECT * FROM recipes';
const getRecipeById = 'SELECT * FROM recipes WHERE id = $1';
const checkRecipeExists = 'SELECT COUNT(*) FROM recipes WHERE title = $1';

module.exports = {
  getRecipes,
  getRecipeById,
};
