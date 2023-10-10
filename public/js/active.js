const tabLinks = document.querySelectorAll('.active-tab');

tabLinks.forEach((tabLink) => {
  tabLink.addEventListener('click', (event) => {
    tabLinks.forEach((link) => {
        link.setAttribute('aria-selected', 'false');
    });

    tabLink.setAttribute('aria-selected', 'true');
  });
});
