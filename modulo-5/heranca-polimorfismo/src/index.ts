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