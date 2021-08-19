
const formData = document.querySelector('form');

formData.addEventListener('submit', (e)=> {
    e.preventDefault();
    const pais = document.getElementById('pais');
    getData(pais.value);
})

const resultado = document.getElementById('resultado');


const template = (bandera, nombre, capital, poblacion) => {
    return `
        <div class="col mb-3">
            <div class="card">
                <img src="${bandera}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                    <p class="card-text">Capital: ${capital}</p>
                    <p class="card-text">Población: ${poblacion}</p>
                </div>
            </div>
        </div>
    `;
};


const getData = async (pais) => {
    const url = `https://restcountries.eu/rest/v2/name/${pais}`;
    const res = await fetch(url);
  
    if (!res.ok) {
      alert('No existe países')
    } else {
      
      resultado.innerHTML = '';
      const dataPais = await res.json();
      for(let i=0; i< dataPais.length; i++) {
        resultado.innerHTML += template(dataPais[i].flag, 
            dataPais[i].name, dataPais[i].capital, dataPais[i].population)
      }
    }
  };  