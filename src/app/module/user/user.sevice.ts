import prisma from "../../../shared/prisma";



const  getuserbyId = async(data:any) =>{
    const user = await prisma.user.findUnique({
        where: data
    }
    )
    return user
}



export const UserService = {
    getuserbyId
}