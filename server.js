// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;
app.listen(port, ()=> console.log(`running on port ${port}`))

//GET route that returns 'projectData' object
app.get('/', getProjectData);

function getProjectData (req, res){
	res.send(projectData);
	console.log('Getting projectData: ', projectData)
};

//POST route that adds incoming data to 'projectData'
app.post('/addData', postData);

function postData (req, res){
	try {
		projectData.date = req.body.date,
		projectData.temperature = req.body.temp,
		projectData.content = req.body.content,
		console.log(projectData)
		res.send(projectData);
	} catch (error) {
		console.log('Error in server: ', error)
	}
}