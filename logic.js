const menuMobile = document.getElementById('menumobile');
const sections = document.querySelectorAll('section');
const main = document.getElementsByName('main');

function menu(){
   menuMobile.style.display = "block";
   sections.forEach(section => {section.style.display = "none";});
}

function left(){
   menuMobile.style.display = "none";
   location.reload();

}