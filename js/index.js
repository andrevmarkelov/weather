const key = '1a181c60f0751b653277788a47914699';
const input = document.querySelector('#input');
const button = document.querySelector('#button');


button.addEventListener('click', () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}&lang=ru&units=metric`)
    .then((response) => {
        if(response.ok) {
            return response.json();
        } else {
            alert('Указанный Вами город не найден!');
        }
    })
    .then((data) => {

        document.querySelector('.sity').textContent = data['name'];
        document.querySelector('.temp').innerHTML = data['main']['temp'] + '&#176;';
        document.querySelector('.description').textContent = data['weather'][0]['description'];

        const icon = data['weather'][0]['icon'];
        const iconurl = "http://openweathermap.org/img/w/" + icon + ".png";

        document.querySelector('#wicon').setAttribute('src', iconurl);
    });

    input.value = '';
})