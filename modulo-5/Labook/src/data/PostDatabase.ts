import { posts, toPostModel } from './../model/PostType';
import { BaseDatabase } from './BaseDatabase';

export class PostDataBase extends BaseDatabase{
     
    async createPost(post: posts){

        try{
            await this.connection("labook_posts")
            .insert({
               id: post.id,
               photo: post.photo,
               description: post.description,
               role: post.role,
               author_id: post.authorId,
               created_at: post.createdAt.toISOString().substring(0, 10)
            })

        }catch(error: any){
            throw new Error (error.message)

        }
    }


    async getPostById(id: string): Promise<posts>{
        try{
            const result: any = await this.connection("labook_posts")
            .select("*")
            .where({ id })

            return toPostModel(result[0])
   

        }catch(error: any){
            throw new Error(error.message)
        }
    }
}