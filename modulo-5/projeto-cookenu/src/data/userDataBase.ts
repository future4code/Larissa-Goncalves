import { User } from './../types/user';
import { dataBase } from './dataBase';

export class UserDataBase extends dataBase{
    public async saveUser(user: User): Promise<void>{
        try{
            await dataBase.connection('cookenu_User').insert({
                id: user.getId(),
                name: user.getName(),
                email : user.getEmail(),
                password : user.getPassword()
            })

        }catch(error: any){
            throw new Error (error.message)
        }
    }

     public async userByEmail(email:string): Promise<User> {
        try{
            const user = await dataBase.connection('cookenu_User').select('*').where({email});
            
            return User.toUserModel(user[0]);
        }catch(error: any){
            throw new Error(error.message);
        }
    }
}