import MongoDbFactory from './mongo-db';
import PostgressFactory from './postgress-db';

const factory = (type: string) => {
    switch (type) {
        case 'mongo':
            return new MongoDbFactory();
        case 'postgress':
            return new PostgressFactory();
        default:
            throw new Error('Invalid database type');
    }
}
export default factory;