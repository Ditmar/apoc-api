import { UserWrapper } from "../data/interfaces/user-wrapper";
import { User } from "../models/user";

const MongoClient = (dbConnection: BaseClient): UserWrapper => {
    dbConnection.connection();
    const getUsers = async (): Promise<User[]> => {
        return [{ id: '1', name: 'John Doe', email: 'john@example.com' }, { id: '2', name: 'Jane Doe', email: 'jane@example.com' }];
    }
    const getUser = async (id: string): Promise<User> => {
        return { id: '1', name: 'John Doe', email: 'john@example.com' };
    }
    const createUser = async (user: User): Promise<User> => {
        return { id: '1', name: 'John Doe', email: 'john@example.com' };
    }
    return { getUsers, getUser, createUser };
}
export default MongoClient;