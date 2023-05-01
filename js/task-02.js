const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

// const list = document.querySelector('#ingredients');

// const listElementAddite = ingredients.map(ingredient => {
//   const createLiElement = document.createElement('li');
//   createLiElement.textContent = ingredient;
//   createLiElement.classList.add('item', 'list-item-js');
//   return createLiElement;
// });

// list.append(...listElementAddite);

const liEl = document.querySelector('#ingredients');

const createElement = ingredients.map(ingredient => {
  const listEl = document.createElement('li');
  listEl.classList.add('item', 'list-item-js');
  listEl.textContent = ingredient;
  return listEl;
});
// console.log(...createElement);
liEl.append(...createElement);

/*






Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. 
Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> 
за одну операцію у список ul#ingredients.

*/

// const listItem = document.createElement('li');

// listItem.textContent = nameEl;

// listItem.classList.add('item');

//отримати доступ до ul.#ingredients

//1 розбити все елементи із ingredients на окремі імена

//2 створити елемент <li>

//3 додати клас .item

//4 Після чого, вставить усі <li>
// за одну операцію у список ul#ingredients.

//
//
//
//

//
//
//

//
//
//
//
//

//
//
//

////
//
//
//

//
//
//

////
//
//
//

//
//
//

////
//
//
//

//
//
//

////
//
//
//

//
//
//

//

// const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
