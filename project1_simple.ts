//Implémenter un programme pour générer des mots de passe aléatoires selon divers
//critères (longueur, présence de chiffres, symboles, majuscules).
//promptwindow asking for name + ps
//1 function: must contain as parameters the criteria for password choice.; 
//--as variables(conctants): all the possible char choices//while loop to repeat some code while certain conditions are true+ a variable to use as a dummy to try on the criteria
//2. function ot create the prompt window.


function getPassword (len: number, upperCase: boolean, specialChar: boolean ): string
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








