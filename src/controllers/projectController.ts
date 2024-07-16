import { Request, Response } from 'express';
import { AppDataSource } from '../config/database';
import { Project } from '../entity/Project';

const index = async (req: Request, res: Response): Promise<void> => {
    const projectRepository = AppDataSource.getRepository(Project);
    const projects = await projectRepository.find();
    console.log('projects', projects)

    res.render('home', { title: 'Home Page', message: 'Welcome to my simple Express app!', projects });
};

const createProjectForm = async (req: Request, res: Response): Promise<void> => {
    res.render('create-project');
};

const createProject = async (req: Request, res: Response): Promise<void> => {
    const projectRepository = AppDataSource.getRepository(Project);
    console.log('req', req)
    const { name } = req.body;

    // Create a new user
    const project = new Project();
    project.name = name;
    await projectRepository.save(project);

    // Redirect to the home page
    res.redirect('/');
};

export default { index, createProjectForm, createProject };