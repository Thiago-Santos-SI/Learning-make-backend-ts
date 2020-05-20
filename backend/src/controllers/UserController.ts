import {Request, Response} from 'express'
import EmailService from "../../services/EmailService";

const user = [
    {
        name: 'Diego',
        email:'diego@hotmail.com'
    }
]


export default {
    async index(req: Request, res: Response){
        return res.json(user)
    },

    async create(req: Request, res: Response){
        const emailService = new EmailService();

        emailService.sendMail({
            to:{
                name: 'diego fernandes',
                email: 'diego@'
            },
            message:{
                subject:'bem vindo',
                body: 'seja bem vindo'
            }
            });
        return res.send('ok')

    }
}