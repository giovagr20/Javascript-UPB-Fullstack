const reset = document.getElementById('zreset');
const p = document.querySelector('p');

reset.addEventListener('click', (e)=>{
    console.log(e)
    console.log(p.classList);
    console.log(p.className);
    p.classList.add('esconder');
})