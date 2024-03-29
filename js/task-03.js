const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');
const liEl = images
  .map(
    element =>
      `<li class='list-item-js'><img class='img3' src='${element.url}' alt='${element.alt}'></li>`
  )
  .join('');
galleryEl.insertAdjacentHTML('afterbegin', liEl);

// const galeryElement = document.querySelector('.gallery');
// const createImage = images.map(({ url, alt }) => {
//   const liEl = document.createElement('li');
//   liEl.classList.add('list-item-js');
//   const imageEl = document.createElement('img');
//   imageEl.classList.add('img3');
//   imageEl.src = url;
//   imageEl.alt = alt;
//   liEl.append(imageEl);

//   return liEl;
// });

// galeryElement.append(...createImage);
/*



Напиши скрипт для створення галереї зображень на підставі масиву даних. 
HTML містить список ul.gallery.

<ul class="gallery"></ul>
Використовуй масив об'єктів images для створення елементів <img>, 
вкладених в <li>. 
Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

*/
