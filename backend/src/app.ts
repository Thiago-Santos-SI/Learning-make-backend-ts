import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import routes from "./routes";

class App {
    public express: express.Application

    public constructor() {
        this.express = express()
        this.middlewares()
        this.routes()
        this.database()
        this.app()
    }

     private middlewares (): void{
        this.express.use(express.json())
        this.express.use(cors())
    }

    private database (): void{
        mongoose.connect('mongodb://localhost:27017/tsnode',{
            useNewUrlParser: true
        }).then(() =>{
            console.log('conectado')
        })

    }
    private routes (): void{
        this.express.use(routes)
    }

    private app(): void{
        this.express.listen(3333, () =>{
            console.log('server on')
        })
    }
}

export default new App().express