const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('.overlay');
const header =  document.querySelector('.header');
const fadeElems = document.querySelectorAll('.has-fade');


btnHamburger.addEventListener('click', function(){
    console.log('open hamburger');

    if(btnHamburger.classList.contains('open') && header.classList.contains('open')){
        btnHamburger.classList.remove('open');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        })

    } else {
        btnHamburger.classList.add('open');
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
    
    });
    }     
});