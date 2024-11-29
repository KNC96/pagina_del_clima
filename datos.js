let resultado = document.getElementById("resultado");
let searchBtn = document.getElementById('search-btn');
let cityRef = document.getElementById('city');
let key = '69023853454b77bb14f59764b1216bff';
/*funcion*/
let getWeather = () => {
    let cityValue = cityRef.value;
    if (cityValue.length == 0){
        resultado.innerHTML = `<h3>Ingrese el nombre de su ciudad</h3>`;
    }
    else{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
        /*aqui se utiliza fetch para pedir los datos del clima*/
        cityRef.value= "";
        fetch(url).then((resp) => resp.json()).then(data => {
            console.log(data);
            console.log(data.weather[0].main);
            console.log(data.weather[0].description);
            console.log(data.name);
            console.log('temperatura '+(data.main.temp)+'°');
            resultado.innerHTML = `<h2>${data.name}</h2>
            <h4 class="weather">${data.weather[0].description}</h4>
            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
            <h1>${data.main.temp} &#176</h1>`;
        })
        .catch(() => {
            resultado.innerHTML = `<h2>ciudad no encontrada</h2>`;
        })
    };
};
searchBtn.addEventListener('click', getWeather);
//esto ejecuta la funcion getWeather apenas carga la pagina
window.addEventListener("load", getWeather);
