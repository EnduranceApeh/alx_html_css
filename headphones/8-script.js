document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const navUl = document.getElementById('nav-menu');

  menuIcon.addEventListener('click', () => {
    const isOpen = navUl.classList.toggle('open');

    if (isOpen) {
      menuIcon.src = "./images/cancel-icon.png";
      navUl.style.opacity = 1;
    } else {
      menuIcon.src = "./images/icons8-menu-24.png";
      navUl.style.opacity = 0;
    }
  });
});
