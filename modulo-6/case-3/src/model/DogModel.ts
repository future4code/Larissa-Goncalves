// import { errorCustom } from './../error/ErrorCustom';


export class DogWalking {
   constructor(
      private id: String,
      private date: String,
      private duration: String,
      private petNumber: Number,
      private start: String,
      private finish: String,
      private status: String
   ) { }

   public getId(): String {
      return this.id;
   }

   public getDate(): String {
      return this.date;
   }

   public getDuration(): String {
      return this.duration;
   }

//    public getValue(): Number {
  //    return this.value;
   //}

   public getPetNumber(): Number {
      return this.petNumber;
   }

   public getStart(): String {
      return this.start;
   }

   public getFinish(): String {
      return this.finish;
   }

   public getStatus(): String{
      return this.status;
   }

   
}

export interface DogDTO{
    date: String,
    duration: String,
    petNumber: Number,
    start: String,
    finish: String,
    status: String

}

// export enum STATUS_ROLES{
//     EM_ANDAMENTO = "EM ANDAMENTO",
//     FINALIZADO = "FINALIZADO",
//     PENDENTE = "PENDENTE"
// }

// export const statusDogRoles = (input: string): STATUS_ROLES => {
//     switch(input){
//         case "EM ANDAMENTO":
//             return STATUS_ROLES.EM_ANDAMENTO;
//         case "FINALIZADO":
//             return STATUS_ROLES.FINALIZADO;
//         case "PENDENTE" :
//             return STATUS_ROLES.PENDENTE;
//         default:
//             throw new errorCustom(422, "status deu errado")
//     }

// }

// export enum DURATION_ROLES{
//     A = 30,
//     B = 60
// }

// export const durationDogRoles = (input: number): DURATION_ROLES => {
//     switch(input){
//         case 30 :
//             return DURATION_ROLES.A;
//         case 60 :
//             return DURATION_ROLES.B;
//         default:
//             throw new errorCustom(422, "duração do passeio deu errado")
//     }
// }

// export class ValueOfWalk{
   
//      value = async( duration: DURATION_ROLES, pet_number: number | any): Promise<any> => {

//         if(duration === 30){
//             if(pet_number ===1){
//                 return 25
//             }else{
//                 return 25 + 15 * (pet_number -1)
//             }
//         }else if(duration === 60){
//             if(pet_number ===  1){
//                 return 35
//             }else{
//                 return 35 + 20 * (pet_number -1)
//             }
//         }
        

//     }
      
// }
