function toggleNavbar(x) {
  const navbar = document.querySelector('.navbar');
  if (navbar.classList.contains('collapsed')) {
    navbar.classList.remove('collapsed'); 
    
  } else {
    navbar.classList.add('collapsed');
    
  }
 x.classList.toggle("fa-xmark");
}

