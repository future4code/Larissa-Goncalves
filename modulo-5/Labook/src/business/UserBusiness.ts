import { InputSignUp, user, InputLogin } from './../model/UserType';
import { UserDatabase } from './../data/UserDatabase';
import { Authenticator } from './../services/Authenticator';
import { HashManager } from '../services/HashManager';
import { IdGenerator } from './../services/IdGenerator';

const idGenerator = new IdGenerator()
const hashManager = new HashManager()
const auth = new Authenticator()
const userDB = new UserDatabase()

export class UserBusiness{

    async signup (input: InputSignUp) : Promise<string> {

        try{

            if(!input.name || !input.email || !input.password){
                throw new Error ('preencha todos os dados corretamente')
            }
    
            const id : string = idGenerator.generateId()
    
            const cypherPassword = await hashManager.hash(input.password)
            
            const newUser: user = {
                id,
                name: input.name,
                email: input.email,
                password: cypherPassword,
            }

            await userDB.insertUser(newUser)

            const token: string = auth.generateToken({id})

            return token;
    

        }catch(error: any){
            throw new Error(error.message)

        }
    }



    async login (input: InputLogin){

        try{

            if (!input.email || !input.password) {
                throw new Error('email ou senha incorreta')
             }

             const user: user = await userDB.getEmailUser(input.email)

             if(!user){
                 throw new Error('Usuário invalido')
             }

            const passwordIsCorrect: boolean = await hashManager.compare(input.password, user.password)

            if (!passwordIsCorrect) {
            throw new Error('algo deu errado, verifique suas senha e email')
            }

            const token: string = auth.generateToken({
                id: user.id
            });

            return token;


        }catch(error: any){
            throw new Error(error.message)
        }
    }
}