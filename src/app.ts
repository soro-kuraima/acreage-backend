import express, {Express} from 'express';
import { router } from 'router/routes';

const app: Express = express();


app.use('/', router);


const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});