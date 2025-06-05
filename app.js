const menubtn = document.querySelector('.js__menu');
const menu = document.querySelector('.sidebar-menu');

menubtn.addEventListener('click', function() {

    if (menu.style.left === '0px') { 
        menu.style.left = '-208px';
    } else {
        menu.style.left = '0px';
    }
    
});