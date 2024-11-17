import prisma from "../../../shared/prisma";



const  getuserbyId = async(data:any) =>{
    const user = await prisma.user.findUnique({
        where: {
            id: data
        }
    }
    )
    return user
}



export const UserService = {
    getuserbyId
}