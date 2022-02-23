// import dotenv from 'dotenv';
// import * as jwt from 'jsonwebtoken'

// dotenv.config()

// export interface authenticationData {
//     id: string,
// }
// //gera um token

// export class Authenticator {
//     generateToken = (
//         payload: authenticationData
//     ) => {
//         const token = sign(
//             payload,
//             process.env.JWT_KEY,
//             {expiresIn: process.env.TOKEN_EXPIRES}
//         )
//         return token;
//     }
    // public generate(input: AuthenticatorData): string {
    //     const token = jwt.sign(input, 
    //         process.env.JWT_KEY, {
    //         expiresIn: process.env.TOKEN_EXPIRES,
    //     });
    //     return token;
    // }

    //verifica se o token é valido 

    // const getTokenData = (token: string) => {
    //     try{
        
    //     }

    // }
//     public getTokenData(token: string): AuthenticatorData {
//         const data = jwt.verify(token, 
//             process.env.JWT_KEY)
//         return data as AuthenticationrData
//     }
// }