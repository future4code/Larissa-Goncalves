import  dotenv  from 'dotenv';
import * as bcrypt from 'bcryptjs'

dotenv.config()

//informação critografada(com Hash) da senha do usuário
export class HashManager {
    hash = (
        plainText: string
        ): string => {
        const rounds: number = Number(process.env.COST)
        const salt : string = bcrypt.genSaltSync(rounds)
        const cypherText: string = bcrypt.hashSync(plainText, salt)

        return cypherText
    }

    //compara se a senha guardada do usuário é a mesma que o usuário digitou 
    compareHash = (
        text: string, hash: string
    ):boolean => {
        return bcrypt.compareSync(text, hash)
        
    }
}