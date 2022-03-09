import { user } from './../model/UserType';
import { BaseDatabase } from './BaseDatabase';

export class UserDatabase extends BaseDatabase{

    insertUser = async(
        user: user
    )=> {
        //insere os dados do meu usuário na tabela do banco de dados
        await UserDatabase.connection.insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        }).into('labook_users')
    }
}