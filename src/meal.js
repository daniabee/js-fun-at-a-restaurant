function nameMenuItem(name) {
  return `Delicious ${name}`;
}

function createMenuItem(name, price, type) {
  var menuItem = new Object();
  menuItem.name = name;
  menuItem.price = price;
  menuItem.type = type;
  return menuItem;
}

function addIngredients(item, array) {
  if (!array.includes(item)) {
    array.push(item);
  }
}

function formatPrice(initialPrice) {
  initialPrice = `$${initialPrice}`;
  return initialPrice;
}

function decreasePrice(price) {
  price = price - price * 0.1;
  return price;
}

function createRecipe(title, ingredients, menuItemType) {
  recipe = { title: title, ingredients: ingredients, type: menuItemType };
  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe,
};
