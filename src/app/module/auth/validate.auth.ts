import  {z} from 'zod'
import prisma from '../../../shared/prisma'

const isUniqueEmail = async(field:string) => {
    // check if email already exists
    const existingUser = await prisma.user.findFirst({
        where:{
            OR: [{email: field }, { name: field}]
        }
    });
    return !existingUser
    
};

const UserRegSchema  = z.object({
    body:z.object({
        id: z.string().optional(),
        name: z.string({
            required_error: "Email is required"
        }).refine(
            async(name) =>{
                // check uniqueness
                return await isUniqueEmail(name)
            },
            {
                message: "Name already exists"
            }
        ),
        email: z.string().email().refine(
            async(email) => {
                // check uniqueness
                return  await isUniqueEmail(email)
            },{
                message: "Email already exists"
            }
        ),
        password: z.string({
            required_error: "Password is required"
        }),
        contactNumber: z.string(),
        role: z.enum(['USER', 'ADMIN']).optional(),
        country:z.string().optional(),
        address:z.string().optional(),
        status: z.enum(['ACTIVE','BLOCKED']).optional(),
        createdAt:z.string().optional(),
        updatedAt:z.string().optional(),
    }),
})

const changePassword  = {
    body: z.object({
        oldpassword:z.string({
            required_error:"old password is required"
        }),
        newpassword: z.string({
            required_error: "new password is required"
        })
    })
}


export const UserValidationSchema = {
    UserRegSchema,
    changePassword
}