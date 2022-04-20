import { toUserModel, user } from './../model/UserType';
import { BaseDatabase } from './BaseDatabase';


export class UserDatabase extends BaseDatabase{

    insertUser = async(
        user: user
    )=> {
        try{
            await this.connection.insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            }).into('labook_users')

        }catch(error: any){
            throw new Error(error.message)
        }
    }

    async getEmailUser(
        email: string
    ): Promise<user> {
        try{
            const result: any = await this.connection("labook_users")
            .select("*")
            .where({ email }) 

            return toUserModel(result[0]);;

        }catch (error: any){
            throw new Error(error.message)
        }
    }
}
