import './style.css';
import isPalindrome from './checker';

console.log("index.ts/start")

//referencia inputText
const inputText = <HTMLInputElement> document.getElementById('inputText');
let bPalindrome = null;

//Invocar isPalindrome
const bPalindrome = isPalindrome("someText here");
console.log(bPalindrome);