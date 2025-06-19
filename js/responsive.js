if (window.innerWidth <= 435) {
  document.querySelectorAll('.dropdown-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.parentElement;
      section.classList.toggle('open');
    });
  });
}
