function toggleNavbar() {
  const navbar = document.querySelector('.navbar');
  if (navbar.classList.contains('collapsed')) {
    navbar.classList.remove('collapsed');
  } else {
    navbar.classList.add('collapsed');
  }
}
