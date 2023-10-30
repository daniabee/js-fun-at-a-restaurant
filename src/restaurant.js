function createRestaurant(name) {
  return { name: name, menus: { breakfast: [], lunch: [], dinner: [] } };
}

function addMenuItem(restaurant, menu) {
  if (menu.type === "lunch") {
    if (!restaurant.menus.lunch.includes(menu)) {
      restaurant.menus.lunch.push(menu);
    }
  } else if (menu.type === "breakfast") {
    if (!restaurant.menus.breakfast.includes(menu)) {
      restaurant.menus.breakfast.push(menu);
    }
  } else if (menu.type === "dinner") {
    if (!restaurant.menus.dinner.includes(menu)) {
      restaurant.menus.dinner.push(menu);
    }
  }
}

function removeMenuItem(restaurant, name, type) {
  let index = restaurant.menus[`${type}`].findIndex(
    (item) => item.name === name
  );
  restaurant.menus[`${type}`].splice(index, 1);

  if (index === -1) {
    return `Sorry, we don't sell ${name}, try adding a new recipe!`;
  }
  return `No one is eating our ${name} - it has been removed from the ${type} menu!`;
}

function checkForFood(restaurant, foodItem) {
  let found = restaurant.menus[`${foodItem.type}`].find(
    (item) => (item.name = foodItem.name)
  );

  if (found) {
    return `Yes, we\'re serving ${foodItem.name} today!`;
  } else {
    return `Sorry, we aren't serving ${foodItem.name} today.`;
  }
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem,
  checkForFood,
};
