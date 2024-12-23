import express ,{Application,NextFunction,Request, Response } from 'express';
import cors from 'cors';
import httpStatus from 'http-status';
import cookieParser from 'cookie-parser';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import router from './app/routes';


const app:Application = express();

app.use(cors())

// parse 
app.use(express.json())
app.use(cookieParser())


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