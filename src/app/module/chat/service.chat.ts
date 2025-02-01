import prisma from "../../../shared/prisma";

export const createChatRoom  = async() => {
    
    const newroom = await prisma.chatRoom.create({
        data: {}
    })
    return newroom.id
}

export const createMessage = async(data:any) => {
    
    const {message,chatroom} = await data.req.body

    const newmessage = await prisma.message.create({
        data:{
            text:message,
            chatroom: chatroom
        }
    })
    return newmessage
}

export const getMessages = async() => {
    
    const allMessages = await prisma.message.findMany();
    return allMessages

}

export const getRooms = async() => {

    const allRooms = await prisma.chatRoom.findMany()
    return allRooms
}

export const ChatService = {

    createMessage,
    createChatRoom,
    getMessages,
    getRooms
}