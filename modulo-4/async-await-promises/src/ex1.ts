import axios from 'axios';
import { Request, Response } from 'express';
import { URL_BASE } from './URL_BASE';

//A) O endpoint de get
//B) como Any
//C)

//async

const getAllSubscribers = async () => {
   const response = await axios.get(`${URL_BASE}/subscribers`)
   return response.data
}
const main = async () => {
    try{
        const subscribers = await getAllSubscribers()
        console.log(subscribers)
    }catch (err: any){
        console.log(err.response?.data || err.message)
    }
    
}

main()

//then 

// const result = axios.get(`${URL_BASE}/subscribers`);

// result.then(console.log)