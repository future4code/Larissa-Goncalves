import { Residence, Commerce, Industry } from './Quantify';
import { client } from './Client';
import { Customer } from './Customer';
import { User } from "./User"

console.log('hello world!')

//3
const users: User = new User("1", "larissa@labenu", "larissa", "1234")

console.log(users)

const customer: Customer = new Customer ("1", "larissa@labenu", "larissa", "1234", "200,000,000" )
customer.interoduceYourself()

console.log(customer)

//4
console.log(`${customer.interoduceYourself()}, eu sou a ${customer.getName()}`)

//5
console.log(customer.newHello())

//POLIMORFISMO

console.log(client,client.calculateBill())

//3 

const resdidenceQuantify: Residence = new Residence(2, '999.999.999-99')
const floorsQuantity: Commerce = new Commerce(3, '111.111.111-11')
const machinesQuantity: Industry = new Industry(4, '666.666.666-66')

console.log(`CEP da Residencia: ${resdidenceQuantify.getCep()}, CEP do comercio: ${floorsQuantity.getCep()}, CEP da industria: ${machinesQuantity.getCep()}`)

//4