const apiKey = '47b36918b1e5dd5d56b7aabc4fa1f0fa&units=imperial';

/* Global Variables */
let baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let content = document.getElementById('feelings');
let zipcode = document.querySelector('#zip');
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'/'+ d.getDate()+'/'+ d.getFullYear();

const generateClick = async () => {
	let generateUrl = `${baseUrl}${zipcode.value}&appid=${apiKey}`;
	let weather = await getWeatherData(generateUrl);
	let temperature = weather.main.temp;

		await postData('/addData', {date: newDate, temp: temperature, content: feelings.value});
		await updateUI();
};

document.getElementById('generate').addEventListener('click', generateClick)

//Fetch data from API

const getWeatherData = async (url) => {
	const response = await fetch (url);
	try {
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error getting data: ', error);
	}
};

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

// Function to update UI

const updateUI = async () => {
	//Fetching data from my own server
	const request = await fetch('http://localhost:8000/all');
	try {
		const allData = await request.json();

		document.getElementById('date').innerHTML = allData.date;
		document.getElementById('temp').innerHTML = allData.temperature + ' degrees';
		document.getElementById('content').innerHTML = allData.content;
	} catch (error) {
		console.error('Error updating UI: ', error)
	}
};