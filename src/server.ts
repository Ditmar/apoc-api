import express, {Express} from 'express';
import * as BodyParser from 'body-parser';

const app: Express = express();
app.use(BodyParser.json());
app.use(express.json());
app.use(BodyParser.urlencoded({ extended: true }));
export default app;