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

        return res.json(user)
    }

    public async delete(req:Request, res:Response): Promise<Response> {
        const user = await User.deleteMany(req.body)

        return res.json(user)
    }

    public async remove(req:Request, res:Response): Promise<Response> {
        await User.remove({_id: req.params.user_id})

        return res.status(200).send();

    }

}

export default new UserController()