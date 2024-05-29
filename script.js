document.addEventListener('DOMContentLoaded', () => {
    const userMenuButton = document.getElementById('user-menu-button');
    const userMenu = document.getElementById('user-menu');
  
    userMenuButton.addEventListener('click', () => {
      userMenu.classList.toggle('hidden');
    });
  
    window.addEventListener('click', (event) => {
      if (!userMenuButton.contains(event.target) && !userMenu.contains(event.target)) {
        userMenu.classList.add('hidden');
      }
    });
  });
  