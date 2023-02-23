const imgMoon = document.querySelector('.imgMoon');

imgMoon.addEventListener('click', ()=>{
    imgMoon.classList.toggle('dark');
    const body = document.querySelector(':root');
    body.classList.toggle('darkMode');
});
