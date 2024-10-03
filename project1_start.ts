//Implémenter un programme pour générer des mots de passe aléatoires selon divers
//critères (longueur, présence de chiffres, symboles, majuscules).
//promptwindow asking for name + ps
//3 functions: 1. getWord a random word, the pw; 2. to guide the user to choose a pw; 3.create the prompt window with 

function getWord(motsPasse: string[]): string
 {
    return motsPasse[Math.floor(Math.random() * motsPasse.length)];
}
//funct PW deve contenere come parametri quelli dati dalle istruzioni specificati nel loro tipo.
//--e poi tutte le possibilità dei tipi di caratteri/parametri usati, messi in const
// variabile let mette insieme tuttte le possibilità dei parametri: se maiuscole, la scelta dei caratteri aggiungera la constche 
//equivale a ABCD...
//questo blocco serve per guidare le istruzioni per la creazione della pw
function generatePassword(length: number, useUppercase: boolean, useNumbers: boolean, useSpecialChars: boolean): string {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{};:,.<>?';

    let characterSet = lowercaseChars;     
    if (useUppercase) characterSet += uppercaseChars;
    if (useNumbers) characterSet += numberChars;
    if (useSpecialChars) characterSet += specialChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += getWord(characterSet.split(''));
    }

    return password;
}

function promptUserForPasswordOptions(): void {
    const length = Number(prompt('Enter the desired password length:'));
    const useUppercase = confirm('Include uppercase letters?');
    const useNumbers = confirm('Include numbers?');
    const useSpecialChars = confirm('Include special characters?');

    if (length <= 0 || isNaN(length)) {
        console.error('Please enter a valid length.');
        return;
    }

    const password = generatePassword(length, useUppercase, useNumbers, useSpecialChars);
    console.log('Generated Password:', password);
}

// Run the password generator
promptUserForPasswordOptions();
