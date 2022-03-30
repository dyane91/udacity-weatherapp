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
app.get('/all', getProjectData);

function getProjectData (req, res){
	res.send(projectData);
};

//POST route that adds incoming data to 'projectData'
app.post('/addData', postData);

function postData (req, res){
	try {
		projectData = {
			date: req.body.date,
			temperature: req.body.temp || '-',
			content: req.body.content || '-',
		};
		res.send(projectData);
	} catch (error) {
		console.log('Error in server: ', error)
	}
}