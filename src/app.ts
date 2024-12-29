import express ,{Application,NextFunction,Request, Response } from 'express';
import cors from 'cors';
import httpStatus from 'http-status';
import cookieParser from 'cookie-parser';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import router from './app/routes';
import http from 'http'
import { Server } from 'socket.io';


const app:Application = express();

const server = http.createServer(app)



app.use(cors())

// parse 
app.use(express.json())
app.use(cookieParser())

// initializing the Socket.io
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET","POST"]
    }
})

// listen for mesage 
io.on('connect', (socket) => {
    console.log("user connected successfully" + ` ${socket.id}`) 

    // 
})


// use 
app.use(express.urlencoded({
    extended: true
}))

app.get("/" , (req:Request,res:Response) => {
    res.send({
        message:"bonewire background application"
    })
})

app.use('/api',router)
app.use(globalErrorHandler);

app.use((req:Request,res:Response,next:NextFunction) =>{
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: 'API NOT FOUND!',
        error: {
            path:req.originalUrl,
            message:"Your requested path is not found"
        }
    })

})

export default app