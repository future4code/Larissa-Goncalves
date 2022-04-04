import { DogWalking, DogDTO } from './../model/DogModel';
import { DogDatabase } from './../data/DogDatabase';
import { IdGenerator } from './../services/idGenerator';
import { errorCustom } from './../error/ErrorCustom';

export class DogBusiness {
    // static createWalk(input: DogDTO) {
    //    throw new Error('Method not implemented.');
    // }
   public static createWalk(date: String, duration: String, petNumber: Number, start: String, finish: String, status: String) {
       throw new Error('Method not implemented.');
    }

   

    constructor(
        private idGenerator: IdGenerator,
        private dogDatabase: DogDatabase,
        // private valueOfWalk: ValueOfWalk
    ){
        
    }

 async createWalk(input : DogDTO) {
        try{

            if(!input) {
                throw new errorCustom(422, "preencha corretamente todos os campos corretamente")
            }

            const id = this.idGenerator.generate()


            // const Value = await this.valueOfWalk.value(duration, pet_number)
            
            await this.dogDatabase.createWalk(
                new DogWalking(
                    id,
                    input.date,
                    input.duration,
                    input.petNumber,
                    input.start,
                    input.finish,
                    input.status
                )
            )

            return("Passeio cadastrado com sucesso")

        }catch(error){
            if (error instanceof Error) {
            throw new errorCustom(400, error.message)
         } else {
            throw new errorCustom(400, "Erro ao cadastrar passeio")
         }

        }
    }
}

export default new DogBusiness(
    new IdGenerator(),
    new DogDatabase(),
    // new ValueOfWalk()
)