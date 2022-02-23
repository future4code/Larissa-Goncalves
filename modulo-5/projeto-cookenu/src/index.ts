import { HashManager } from './middleware/hashManager';
import app from "./app";

const cypherText = new HashManager().hash('12345')

console.log('cypherText', cypherText)