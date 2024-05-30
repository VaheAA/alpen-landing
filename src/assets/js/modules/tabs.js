window.addEventListener('DOMContentLoaded', () => {
  const tabsWrapper = document.querySelector('.tabs__wrapper');
  if (!tabsWrapper) return;

  tabsWrapper.addEventListener('click', function (event) {
    const clickedLink = event.target.closest('a');

    if (clickedLink) {
      const allLinks = tabsWrapper.querySelectorAll('a');
      allLinks.forEach((link) => link.classList.remove('active'));

      clickedLink.classList.add('active');
    }
  });
});
