import prisma from "../../../shared/prisma";



export const createChatRoom  = async(data:any) => {
    const id= data.id
    const newroom = await prisma.chatRoom.create({data: {}})
}

export const createMessage = async(data:any) => {
    const message = data.message
    const roomId = data.roomId
    const userId = data.userId
    const newmessage = await prisma.message.create({
        data:{
            text:message,
            chatroom: roomId,
            sender: userId
        }
    })
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