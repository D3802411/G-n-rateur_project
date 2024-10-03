//while loop to repeat some code while certain conditions are true
const passwordInput = prompt("Please enter the password to continue...");

function getPassword (len: number, upperCase: boolean, specialChar: boolean )
{   
        const minuscules: string = 'abcdefghijklmnopqrstuvwxyz';
    const majuscules: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const Chiffres: string = '0123456789';
    const symbols: string = '!@#$%^&*()-_=+[]{};:,.<>?';
   
    let choixMot: string = ""
    

    //le loop pour vérifier si toutes les conditions respectés pour chaque caractère rentré
    for (let i = 0; i < len; i++)
    {
        if (upperCase) 
             {choixMot += majuscules }
    if (specialChar)
    {choixMot += symbols}
    if (Chiffres)
    { choixMot += Chiffres}
    
    }
    
                
    return choixMot[Math.floor(Math.random() * choixMot.length)];
}

getPassword(8,true,true )


//in the end create block for the prompt

function prompt (): void 
{const len = Number(prompt('Enter the desired password length:'));
    const upperCase = confirm('Include uppercase letters?');
    const useNumbers = confirm('Include numbers?');
    const specialChars = confirm('Include special characters?');

    if (length <= 0 || isNaN(length)) {
        console.error('Please enter a valid length.');
        return;
    }}

 prompt ()








