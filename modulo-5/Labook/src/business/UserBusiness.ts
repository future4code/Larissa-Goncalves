import { UserDatabase } from './../data/UserDatabase';
import { Authenticator } from './../services/Authenticator';
import { HashManager } from '../services/HashManager';
import { IdGenerator } from './../services/IdGenerator';

const idGenerator = new IdGenerator()
const hashManager = new HashManager()
const auth = new Authenticator()
const userDB = new UserDatabase()

export class UserBusiness{

    signup = async(
        name: string,
        email: string,
        password: string
    ) => {
        //faz a verificação se todos os campos foram preenchidos 
        if(
            !name ||
            !email ||
            !password
        ){
            throw new Error('Preecha corretamente todos os campos')
        }

        //se estiver tudo certo, gera um id para o usuário
        const genderId : string = idGenerator.generateId()

        //criptografa a senha do usuário
        const cypherPassword = await hashManager.hash(password)

        //insere o usuário na tabela, gera o id e criptografa a senha 
        await userDB.insertUser({
            id: genderId,
            name,
            email,
            password: cypherPassword
        })

        //retorna um token de autorização para acessar o site
        const token: string = auth.generateToken({
            id: genderId,
        })

        //retorna o token de acesso para o usuário
        return token
    }
}