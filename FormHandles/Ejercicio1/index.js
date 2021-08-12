
const formData = document.querySelector('form');

formData.addEventListener('submit', (e)=> {
    e.preventDefault();

     const value = document.getElementById('taskList');

     const ul = document.querySelector('ul');

     const li = document.createElement('li');


     //FIXED
    ul.appendChild(li);
})