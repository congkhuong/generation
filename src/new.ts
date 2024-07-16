import express from 'express';
import path from 'path';
import "reflect-metadata";
import bodyParser from 'body-parser';


import projectController from './controllers/projectController';

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Define a route that uses the home controller
// app.get('/', homeController.home);
app.get('/', projectController.index);
app.get('/create-project', projectController.createProjectForm);
app.post('/project', projectController.createProject);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
