import express from 'express';
import { UserWrapper } from '../data/interfaces/user-wrapper';

const userRouter = (dataBase: UserWrapper) => {
    const router = express.Router();
    router.get('/users', async (req, res) => {
        const users = await dataBase.getUsers();
        res.json(users);
    });
    router.get('/users/:id', async (req, res) => {
        const user = await dataBase.getUser(req.params.id);
        res.json(user);
    });
    router.post('/users', async (req, res) => {
        const user = await dataBase.createUser(req.body);
        res.json(user);
    });
    return router;
}
export default userRouter;