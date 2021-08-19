const getData = async (pais) => {
  const url = `https://restcountries.eu/rest/v2/name/${pais}`;
  const res = await fetch(url);

  if (!res.ok) {
    console.log("Ha ocurrido un error");
  } else {
    console.log(res);
    const data = await res.json();
    console.log(data);
  }
};

const listaPaises = async () => {
  const url = `https://restcountries.eu/rest/v2/all`;

  const res = await fetch(url);

  if (!res.ok) {
    console.log("Ha ocurrido un error");
    return "error";
  } else {
    const paises = await res.json();
    return paises;
  }
};




const selectPaises = document.querySelector('#paises');


console.log(dataImprimir);
