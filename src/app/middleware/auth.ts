import {NextFunction,Response, Request } from 'express';
import ApiError from '../error/ApiError';
import httpStatus from 'http-status';
import { JwtHeader } from 'jsonwebtoken';
import { Secret } from 'jsonwebtoken';
import config from '../../config';
import { jwtHelpers } from '../../lib/jwtHelpers';


const auth = (...roles:string[]) => {
    return async (
        req: Request & {user? : any},
        res: Response,
        next: NextFunction
    ) => {
        try {
            const token = req.headers.authorization;
            if(!token) {
                throw new ApiError(httpStatus.UNAUTHORIZED, "You are not Authorized")
            }
            const verfiedUser = jwtHelpers.verifyToken(token,config.jwt.jwt_secret as Secret)
            req.user = verfiedUser

            if(roles.length && !roles.includes(verfiedUser.role)){
                throw new ApiError(httpStatus.FORBIDDEN, "Forbidden")
            }
            next()
        } catch (err) {
            next(err)
        }
    }
}

export default auth;