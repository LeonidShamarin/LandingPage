// script.js

document.addEventListener('DOMContentLoaded', () => {
    const navList = document.getElementById('navList');
    const moreButton = document.querySelector('.main__more-button');
    const mountainItems = document.querySelectorAll('.mountains__list-item');
    const controlsButton = document.querySelector('.mountains__controls');
  
    // Додати клас "active" до навігаційного пункту при кліку
    navList.addEventListener('click', (event) => {
      const target = event.target;
      if (target.tagName === 'A') {
        const navItems = navList.getElementsByClassName('nav__list-item');
        Array.from(navItems).forEach((item) => {
          item.classList.remove('active');
        });
        target.parentNode.classList.add('active');
      }
    });
  
    // Змінити стиль головного заголовка при наведенні курсора
    const header = document.querySelector('.main__header-title');
    header.addEventListener('mouseover', () => {
      header.style.color = 'red';
    });
  
    header.addEventListener('mouseout', () => {
      header.style.color = 'black';
    });
  
    // Додати обробник події для кнопки "READ MORE"
    moreButton.addEventListener('click', () => {
      mountainItems.forEach((item) => {
        item.style.display = 'block';
      });
      moreButton.style.display = 'none';
    });
  
    // Карусель для зображень гір
    let currentPosition = 0;
    const totalItems = mountainItems.length;
  
    // Функція для переміщення каруселі вперед
    function moveToNext() {
      if (currentPosition === totalItems - 1) {
        currentPosition = 0;
      } else {
        currentPosition++;
      }
      updateCarousel();
    }
  
    // Функція для оновлення каруселі
    function updateCarousel() {
      mountainItems.forEach((item) => {
        item.style.display = 'none';
      });
      mountainItems[currentPosition].style.display = 'block';
    }
  
    // Додати обробник події для кнопки керування каруселлю
    controlsButton.addEventListener('click', moveToNext);
  });
  