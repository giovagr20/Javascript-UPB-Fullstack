// Manejo de localStorage

let persona = {
  nombre: "Giovanni",
  edad: 20,
  genero: 'M',
  pasatiempos: ['Leer. Programar']
};

localStorage.setItem('persona', JSON.stringify(persona));

console.log(localStorage.getItem('persona'));

/* data.forEach((element) => {
  localStorage.setItem("nombre", element.nombre);
  console.log(localStorage.getItem("nombre"));
}); */

/* SESSION STORGAE */

sessionStorage.setItem('personas', JSON.stringify(persona));

console.log(localStorage.getItem('personas'));
