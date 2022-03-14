import  dotenv  from 'dotenv';
import * as bcrypt from 'bcryptjs'

dotenv.config()

export const HashManager = (
    plainText: string
): string => {
    const rounds: number = Number (process.env.BCRYPT_COST)
    const salt : string = bcrypt.genSaltSync(rounds)
    return bcrypt.hashSync(plainText, salt)
}

export const compareHash = (
    text: string,
    hash: string
): boolean => bcrypt.compareSync(text, hash)









