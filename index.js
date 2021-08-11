const reset = document.getElementById('zreset');
const p = document.querySelector('p');

reset.addEventListener('click', (e)=>{
    p.classList.add('esconder');
})