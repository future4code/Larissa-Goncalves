import { HashManager } from './../services/hashManager';
import { IdGenerator } from './../services/idGenerator';
import { Authenticator } from '../services/authenticator';
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
      
          if (password.length < 4) {
            throw new Error("Sua senha deve ter no minimo 4 caracteres");
          }
         
         const idGenerator = new IdGenerator()
         const id: string = idGenerator.generateId()
         
         const hashManager = new HashManager()
         const cypherPassword = await hashManager.hash(password);
   
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
         
         const userDataBase = new UserDataBase()
         const user: user = await userDataBase.selectUserByEmail(email)
   
         if (!user) {
            throw new Error("Usuário não encontrado, tente novamente")
         }
         
         const hashManager = new HashManager()
         const passwordIsCorrect: boolean = await hashManager.compare(password, user.password)
   
         if (!passwordIsCorrect) {
            throw new Error("Senha incorreta, tente novamente")
         }
         
         const authenticator = new Authenticator()
         const token: string = authenticator.generateToken({
            id: user.id,
            role: user.role
         })

         return token
    }

    }
