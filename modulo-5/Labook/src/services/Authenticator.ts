import { authenticationData } from './../model/UserType';
import * as jwt from 'jsonwebtoken'

//gera um token depois do login ou signup
export class Authenticator{
    generateToken = (
        payload: authenticationData
    ): string => {
        return jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: '24min'
            }
        )
    }
//pega o token e retorna na req
    getTokenData = (
        token: string
    ): authenticationData => {
        return jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as authenticationData
    }
}