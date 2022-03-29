const apiKey = '47b36918b1e5dd5d56b7aabc4fa1f0fa&units=imperial';

/* Global Variables */
let baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let zipcode = document.querySelectorAll('#zip')

/* Get zipcode value and return the url */
document.querySelector('button').addEventListener('click', function() {
    let zipcode = document.querySelector('#zip');
    let generateUrl = `${baseUrl}${zipcode.value}&appid=${apiKey}`;
    getData(generateUrl);
});

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//Fetch data from API

const getData = async (url) => {
	const response = await fetch (url);
	try {
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error('Error getting data: ', error);
	}
}

