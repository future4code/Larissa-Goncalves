import { user } from './../types/user';
import { BaseDataBase } from './BaseDataBase';

export class UserDataBase extends BaseDataBase{

    insertUser = async(
        user: user
     ) => {
        await UserDataBase.connection.insert({
           id: user.id,
           name: user.name,
           email: user.email,
           password: user.password,
           role: user.role
        }).into('User_Arq')
     }

  

}