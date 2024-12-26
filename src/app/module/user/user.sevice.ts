import prisma from "../../../shared/prisma";



const  getuserbyId = async(data:any) =>{
    const user = await prisma.user.findFirst({
        where: {
            id: data.req.id
        }
    }
    )
    return user
}



export const UserService = {
    getuserbyId
}