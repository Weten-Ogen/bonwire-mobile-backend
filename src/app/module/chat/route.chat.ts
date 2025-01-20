import httpStatus from "http-status"
import  express  from "express"
import { ChatService } from "./service.chat"
import { AuthController } from "../auth/controller.auth"
import { ChatController } from "./controller.chat"


const router = express.Router()
router.get('chat/getrooms',
    ChatController.getRooms
)
router.get('/chat/getmessages',
    ChatController.getMessages
)
router.post('/chat/createroom', 
    ChatController.createRoom
)

router.post('/chat/createmessage',
    ChatController.createMessage
)

export const ChatRoute = router