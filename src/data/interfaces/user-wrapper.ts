import { User } from "../../models/user";

export interface UserWrapper {
    getUsers(): Promise<User[]>;
    getUser(id: string): Promise<User>;
    createUser(user: User): Promise<User>;
}