//1
export class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
          
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
       
      }
      //4
     
      public interoduceYourself(): string {
        return "Olá, bom dia!"
     }
     //5
     public newHello(): string{
         return `Olá eu sou ${this.name} e meu email é ${this.email} Bom dia!`
     }
  }
 
