import app from './server';
import userRouter from './controller/user-routes';
import MongoClient from './database/mongo-client';
import postgressClient from './database/postgress-client';
import factory from './database/factory/factory';

if (process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv');
    const result = dotenv.config();

    if (result.error) {
        throw result.error;
    }
}

(async () => {
    const dbConnection = factory('postgress');
    const dataBase = postgressClient(dbConnection);
    app.use('/api', userRouter(dataBase));
    app.listen(process.env.API_PORT, () => console.log(`server is running on port ${process.env.API_PORT}`));
})();