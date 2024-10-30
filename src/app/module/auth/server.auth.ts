import { Secret } from "jsonwebtoken";
import config from "../../../config";
import { jwtHelpers } from "../../../lib/jwtHelpers";
import prisma from "../../../shared/prisma";
import * as bcrypt from 'bcrypt';
import {UserRole, UserStatus} from '@prisma/client';


const createUser = async(data:any) => {
    const hashPassword =  await bcrypt.hash(data.password, 12)
    const userData = {
        name: data?.name,
        email:data?.email,
        contactNumber: data?.contactNumber,
        password: hashPassword,
        address:data?.address,
        country:data?.country,
        role:data?.role || UserRole.USER,
        status:data?.status || UserStatus.ACTIVE

    }
    const createUser = await prisma.user.create({
        data:userData,
        select:{
            id:true,
            name:true,
            email: true,
            role:true,
            status:true,
            createdAt: true,
            updatedAt: true,
        },
    })
    return createUser
}

const loginUser = async(payload:{email:string, password:string}) => {
    const userData = await prisma.user.findUniqueOrThrow({
        where:{
            email: payload.email,
            status:UserStatus.ACTIVE
        }
    })

    const isCorrectPassword : boolean = await bcrypt.compare(payload.password,userData.password)
    if(!isCorrectPassword){
        throw new Error("Password incorrect!");
    }
    const accessToken = jwtHelpers.generateToken(
        {
            id:userData.id,
            name:userData.name,
            email:userData.email,
            role:userData.role
        },
        config.jwt.jwt_secret as Secret,
        config.jwt.expires_in as string
    )
    const result = {
        id: userData.id,
        name :userData.name,
        email: userData.email,
        role: userData.role,
        accessToken
    }

    return result
}

export const AuthService = {
    createUser,
    loginUser
}