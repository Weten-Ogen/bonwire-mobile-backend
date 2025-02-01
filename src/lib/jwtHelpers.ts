import jwt, {JwtPayload,Secret} from 'jsonwebtoken'


const generateToken =  (payload:any, secret:Secret,expiresIn:string) => {
    const token = jwt.sign(payload, secret,{
        algorithm:"HS256",
        expiresIn:'1800000',
    });
    return token
} 


// verify tokens
const verifyToken = (token: string, secret:Secret) => {
    return jwt.verify(token, secret) as JwtPayload;
}


export const jwtHelpers = {
    generateToken,
    verifyToken
}