import { HashManager } from './../middleware/hashManager';
import { Request, Response } from "express"

export async function login (req: Request, res: Response){
    try{
        const {email, password} = req.body

        if(!email || !password){
            res.statusCode = 402
            throw new Error('Algo deu errado, preencha tudo corretamente')
        }

        //validação se o usuário existe
        // const [user] = await.connection(nome da tabela).where({email})

        
        //pega o password guardado no banco de dados e compara
        // const passwordOk : boolean = user && new HashManager().compareHash(password, user.password)
       
       
        //se o password tiver errado ele nega o acesso -->
        // if(!user || !passwordOk){
        //     res.statusCode = 402
        //     res.statusMessage = "email ou senha incorreto"
        //     throw new Error('email ou senhas incorreto')
        // }

    }catch(err){
        res.status(401).send(err)
        console.log('algo deu errado')

    }
}