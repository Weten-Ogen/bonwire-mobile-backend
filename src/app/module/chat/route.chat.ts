import httpStatus from "http-status"
import  express  from "express"
import { ChatService } from "./service.chat"
import { AuthController } from "../auth/controller.auth"
import { ChatController } from "./controller.chat"


const router = express.Router()
router.get('/getrooms',
    ChatController.getRooms
)
router.get('/getmessages',
    ChatController.getMessages
)
router.get('/createroom', 
    ChatController.createRoom
)

router.post('/createmessage',
    ChatController.createMessage
)

export const ChatRoute = router