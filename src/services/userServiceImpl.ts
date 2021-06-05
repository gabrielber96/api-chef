import User from '../models/user';
import UserService from './userService'
import UserRepository from '../repositorys/userRepository'
class UserServiceImpl implements UserService {

    private user: UserRepository

    constructor() {
        this.user = new UserRepository
    }

    public async listUsers(): Promise<User[]> {
        try {
            const list: User[] = await this.user.listUsers()
            return list
        } catch (err) {
            throw err
        }
    }
}
export default UserServiceImpl
