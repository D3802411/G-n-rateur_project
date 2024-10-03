//while loop to repeat some code while certain conditions are true


function getPassword (len: number , upperCase: boolean, specialChar: boolean )
{   const minuscules: string = 'abcdefghijklmnopqrstuvwxyz';
    const majuscules: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const Chiffres: string = '0123456789';
    const symbols: string = '!@#$%^&*()-_=+[]{};:,.<>?';
    const insertPW: string | null= prompt("Please insert password")
    let choixMot: string = ""
    

    //le loop pour vérifier si toutes les conditions respectés pour chaque caractère rentré
    for (let i = 0; i < length; i++)
    {
        if (upperCase) 
             {choixMot += mmajuscules }
    if (specialChar)
    {choixMot += symbols}
    if (Chiffres)
    { choixMot += Chiffres}
    if (len<=8)  
        {window.prompt ("invalid password")} 
    }
    
                
    return password[Math.floor(Math.random() * password.length)];
}

getPassword(8,true,true )






