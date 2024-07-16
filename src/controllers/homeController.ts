import { Request, Response } from 'express';

const home = (req: Request, res: Response): void => {
    res.render('home', { title: 'Home Page', message: 'Welcome to my simple Express app!' });
};

export default { home };
