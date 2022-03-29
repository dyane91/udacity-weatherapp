const apiKey = '47b36918b1e5dd5d56b7aabc4fa1f0fa&units=imperial';

/* Global Variables */
let baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let zipcode = document.querySelectorAll('#zip');
let temperature;
let content = document.getElementById('feelings');


/* Get zipcode value and return the url */
document.getElementById('generate').addEventListener('click', function(e) {
	e.preventDefault();
	console.log('OLI: ', feelings.value)
  let zipcode = document.querySelector('#zip');
	let generateUrl = `${baseUrl}${zipcode.value}&appid=${apiKey}`;
	getData(generateUrl)
		.then(postData('/addData', {date: new Date(), temp: temp, content: feelings.value}))
});

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//Fetch data from API

const getData = async (url) => {
	const response = await fetch (url);
	try {
		const data = await response.json();
		temp = data.main.temp;
		console.log(temp);
		return data;
	} catch (error) {
		console.error('Error getting data: ', error);
	}
}

// Post data

const postData = async(url, data) => {
	const response = await fetch(url, {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	try {
		const newData = await response.json();
		return newData;
	} catch (error) {	
		console.error('Error posting data: ', error);
	}
};

