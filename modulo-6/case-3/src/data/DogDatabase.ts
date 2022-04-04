import { errorCustom } from './../error/ErrorCustom';
import { DogWalking } from './../model/DogModel';
import BaseDataBase, { table_name } from "./BaseData";


export class DogDatabase extends BaseDataBase {

   public async createWalk(dog: DogWalking): Promise<void>{
        try{
            await BaseDataBase.connection.raw(`
            INSERT INTO ${table_name} (id, date, duration, pet_number, start, finish, status)
            VALUES (
                '${dog.getId}',
                '${dog.getDate}',
                '${dog.getDuration}',
                '${dog.getPetNumber}',
                '${dog.getStart}',
                '${dog.getFinish}',
                '${dog.getStatus}'
            )
            `)

        }catch(error){
            if(error instanceof errorCustom){
                throw new errorCustom(401, error.message)
            }
        }
     
    }
}