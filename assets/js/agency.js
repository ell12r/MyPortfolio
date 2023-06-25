function toggleNavbar(x) {
  const navbar = document.querySelector('.navbar');
  if (navbar.classList.contains('collapsed')) {
    navbar.classList.remove('collapsed'); 
    
  } else {
    navbar.classList.add('collapsed');
    
  }
 x.classList.toggle("fa-xmark");
}


function callHero(){
  const Hero = document.querySelector('.Hero')
  const About = document.querySelector('.about');
  const Services = document.querySelector('.Service');
  const Portfolio = document.querySelector('.Portfolio');
  const LeftOver = document.querySelector('.LeftOver')
    
    Hero.style.display = "unset"; 
    LeftOver.style.display = "none";
}

function callServ(){
  const Hero = document.querySelector('.Hero')
  const About = document.querySelector('.about');
  const Services = document.querySelector('.Service');
  const Portfolio = document.querySelector('.Portfolio');
  const LeftOver = document.querySelector('.LeftOver');

  LeftOver.style.display = "unset";
  Hero.style.display = "none"; 
  About.style.display = "none";
  Services.style.display = "unset";
  Portfolio.style.display = "none";
}
function callAbout(){
  const Hero = document.querySelector('.Hero')
  const About = document.querySelector('.about');
  const Services = document.querySelector('.Service');
  const Portfolio = document.querySelector('.Portfolio');
  const LeftOver = document.querySelector('.LeftOver');

  LeftOver.style.display = "unset";
  Hero.style.display = "none"; 
  About.style.display = "unset";
  Services.style.display = "none";
  Portfolio.style.display = "none";
}
function callPort(){
  const Hero = document.querySelector('.Hero')
  const About = document.querySelector('.about');
  const Services = document.querySelector('.Service');
  const Portfolio = document.querySelector('.Portfolio');
  const LeftOver = document.querySelector('.LeftOver');

  LeftOver.style.display = "unset";
  Hero.style.display = "none"; 
  About.style.display = "none";
  Services.style.display = "none";
  Portfolio.style.display = "unset";
}