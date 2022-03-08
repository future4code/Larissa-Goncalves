import { Authenticator } from '../services/authenticator';
import { compare, hash } from '../services/hashManager';
import { generateId } from '../services/idGenerator';
import { UserDataBase } from './../data/UserDataBase';
import { user, USER_ROLES } from './../types/user';
export class UserBusiness{

    signup = async (name: string, email: string, password: string, role: USER_ROLES ) => {
        if (
            !name ||
            !email ||
            !password ||
            !role
         ) {
            throw new Error('Preencha os campos "name, "email" e "password"')
         }
   
         const id: string = generateId()
   
         const cypherPassword = await hash(password);
   
         const userDataBase = new UserDataBase()
         await userDataBase.insertUser({
            id,
            name,
            email,
            password: cypherPassword,
            role
         })
   
         const authenticator =new Authenticator()
         const token: string = authenticator.generateToken({
            id,
            role: role
         })

         return token

    }


    login = async (email: string, password: string) => {


        if (!email || !password) {
            throw new Error("Email ou senha incorretos")
         }
         
         // const userDataBase = new UserDataBase()
         // const user: user = await userDataBase.selectUserByEmail(email)
   
         // if (!user) {
         //    throw new Error("Usuário não encontrado, tente novamente")
         // }
   
         // const passwordIsCorrect: boolean = await compare(password, user.password)
   
         // if (!passwordIsCorrect) {
         //    throw new Error("Senha incorreta, tente novamente")
         // }
         
         // const authenticator = new Authenticator()
         // const token: string = authenticator.generateToken({
         //    id: user.id,
         //    role: user.role
         // })

         // return token
    }

    }
