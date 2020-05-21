import {Request, Response} from 'express'
import EmailService from "../services/EmailService";
import User from "../schema/User";

//test

class UserController {
    public async index(req: Request, res: Response): Promise<Response>{
        const users = await User.find()
        return res.json(users)
    }

    public async create(req:Request, res:Response): Promise<Response>{
        const user = await User.create(req.body)
        user.fullName()

        return res.json(user)
    }
}

export default new UserController()