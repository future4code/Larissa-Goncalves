import { PostDataBase } from './../data/PostDatabase';
import { InputGetId, posts } from './../model/PostType';
import { IdGenerator } from './../services/IdGenerator';
import { Authenticator } from './../services/Authenticator';
import { InputCreatePost } from "../model/PostType";
import { authenticationData } from '../model/UserType';


const auth = new Authenticator()
const idGenerator  = new IdGenerator() 

export class postBusiness {
    
    async createPost(input: InputCreatePost){

        try{

            const tokenData: authenticationData = auth.getTokenData(input.token)

            if(!input.token){
                throw new Error('Você nã tem permissão para acessar essa área')
            }
         
            const id: string =  idGenerator.generateId()
    
            const post: posts = {
                id,
                photo: input.photo,
                description: input.description,
                createdAt: new Date(),
                role: input.role,
                authorId: tokenData.id
            }
    
            await new PostDataBase().createPost(post)

        }catch(error: any){
            console.log('algo de errado')
            throw new Error(error.message)
        }

    }

    async getPostById(input: InputGetId){
        try{
         
        const post : posts = await new PostDataBase().getPostById(input.id)

         if (!post) {
            throw new Error("Post não encotrado")
         }

         return post
 
        }catch(error: any){
            throw new Error(error.message)

        }
    }
}