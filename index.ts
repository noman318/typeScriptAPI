import express,{Express,Request,Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import routes from "./routes/postRoutes"
dotenv.config()
const app: Express = express()
const port = process.env.PORT
app.use(cors())
app.use('/',routes)

app.get('/',(req:Request,res:Response)=>{
    res.send('Get request using Typescript')
})
app.listen(port,()=>{
    console.log(`Server is running using TypeScript on port ${port}`)
})