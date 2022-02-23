// import { authenticator } from './../middleware/authenticator';
import { UserDataBase} from './../data/userDataBase';
import { User } from './../types/user';
import { HashManager } from './../middleware/hashManager';
import { Request, Response } from "express";
import { IdGenerator } from "../middleware/idGenerator";

export async function signUp(req: Request, res: Response){
    try{
        const {name, email, password} = req.body
        //validação
        if(!name || !email || !password){
            res.statusCode = 401
            throw new Error ('preencha todos os dados corretamente')
            // res.status(401).send('preencha todos os dados corretamente')
        }

        //verifica pelo email se esse usuário já existe
        const userDataBase = new UserDataBase()
        const userById = userDataBase.userByEmail(email)

        if(await userById){
            res.status(409).send('já existe um usuário criado com esse email');
        }


        //Gera um Id aleatório para o usuário com a lib 'uuid' ==>
        const idGenerator = new IdGenerator();
        const idUser = idGenerator.generate()
        //
        //outra maneira ==>
        const id :string = new IdGenerator().generate()

        //Criptografa a senha do usuário com a lib 'bcrypt' ==>
        const hashManager = new HashManager(); 
        const hashPassword = hashManager.hash(password)

        //outra maneira ==>
        const cypherPassword: string = new HashManager().hash(password)
        //

        //criar o usuário
        const newUser = new User(id, name, email, cypherPassword)

        
        // const newUser: User = {id, name, email, hashPassword}

        //adiona o usuário na tabela
        await userDataBase.saveUser(newUser);

        // await.connection('cookenu_User').insert(newUser)
        
        //guarda o token do usuário para acessar areas privadas

        // const Authenticator = new authenticator();
        // const token = Authenticator.auth({id});

        // res.status(201).send({message: "usuário criado com sucesso", token})

    }catch(err){
        res.status(401).send(err)
        console.log('não vai não querida')
    }
}