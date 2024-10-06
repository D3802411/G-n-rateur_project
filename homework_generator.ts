//create a ow generator where pw must be between 5 and 15 characters and cointain 1 lowercase, 1 uppercase, 1 number, 1 symbol
// for each criterium there must be a variable:
const maxLength: number = 15
const lowerCase: boolean = true
const upperCase: boolean = true
const withNumber: boolean = true
const withSymbol: boolean = true



function getPw (maxLength: number, lowerCase: boolean, upperCase: boolean, withNumber: boolean, withSymbol: boolean)
{   const minuscules: string = 'abcdefghijklmnopqrstuvwxyz';
    const majuscules: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const chiffres: string = '0123456789';
    const symbols: string = '!@#$%^&*()-_=+[]{};:,.<>?';
   
    let choixMot: string = ""
    


    if (choixMot.length<=5) {console.log("Please enter a valid password")}
     for (let i =0; i < maxLength; i++)
         { if (lowerCase) {choixMot += minuscules}
              if (upperCase)  {choixMot += majuscules}
               if (withNumber)  {choixMot += chiffres}
              if (withSymbol)  {choixMot += symbols}
         
         }
 
    return choixMot[Math.floor(Math.random() * choixMot.length)];
}


let password: string = getPw (maxLength, lowerCase, upperCase, withNumber, withSymbol)

console.log(password)

