const formData = document.querySelector("form");

formData.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Enviado ... ");
  const inputNombre = document.getElementById("input-nombre");
  console.log(inputNombre.value);


  //Radio buttons
  const checked = document.querySelector('input[name="genero"]:checked');
  if(checked) console.log(checked.value);

  //Checkbox
  const check = document.getElementById('option-1');

  console.log(check.checked);


  //Select

  const selectOptions = document.getElementById('select-options')
  console.log(selectOptions.value);

});


