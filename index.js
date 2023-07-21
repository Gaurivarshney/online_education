let menubtn = document.querySelector('#menubtn');
let navbar = document.querySelector('.header .flex .navbar');

menubtn.onclick = () => {
    menubtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}