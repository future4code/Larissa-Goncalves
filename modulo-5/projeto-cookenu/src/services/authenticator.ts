import { authenticatorData } from './../types/user';
import * as jsonwebtoken from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const {JWT_TOKEN} = process.env

export const generateToken = (
    payload: authenticatorData

): string => jsonwebtoken.sign(
    payload,
    JWT_TOKEN!,
    { expiresIn: '12h'}
)

export const getTokenData = (
    token: string
): authenticatorData | null  => {
    try{
        const {id} = jsonwebtoken.verify(token, JWT_TOKEN!) as authenticatorData

        return {id}
        
    }catch(error){
        return null
    }
}