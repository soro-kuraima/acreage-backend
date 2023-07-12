import express, { Request, Response } from 'express';

const router = express.Router();

/*
get routes to get all the details to be displayed on the
marketplace, display properties, display investments, display revenue
*/

router.get('/properties', (req: Request, res: Response) => {
    console.log(req.body);
});

router.get('/properties/:id', (req: Request, res: Response) => {
    console.log(req.body);
});

router.get('/my-propeties', (req: Request, res: Response) => {
    console.log(req.body);
});

router.get('/my-properties/:id', (req: Request, res: Response) => {
    console.log(req.body);
});

router.get('/my-investments', (req: Request, res: Response) => {
    console.log(req.body);
});

router.get('/my-investments/:id', (req: Request, res: Response) => {
    console.log(req.body);
});

router.get('/revenue', (req: Request, res: Response) => {
    console.log(req.body);
});

router.get('/revenue/:id', (req: Request, res: Response) => {
    console.log(req.body);
});

/* get routes to get details of the user*/

router.get('/get-user', (req: Request, res: Response) => {
    console.log(req.body);
});

/*post and update routes to add new details to the database*/

/*user creation*/

router.post('/create-user', (req: Request, res: Response) => {
    console.log(req.body);
});

/*property creation*/
router.post('/create-property', (req: Request, res: Response) => {
    console.log(req.body);
});

router.put('/commit-sale', (req: Request, res: Response) => {
    console.log(req.body);
});

/*investment creation*/

router.post('/create-offer', (req: Request, res: Response) => {
    console.log(req.body);
});

router.put('/update-offer', (req: Request, res: Response) => {
    console.log(req.body);
});

export  {router};
