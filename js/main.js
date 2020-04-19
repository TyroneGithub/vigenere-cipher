


function cipher(){
    let key = document.querySelector('#key').value.toUpperCase();
    let plainText = document.querySelector('#plain-text1').value.toUpperCase();
    let cipherText =  document.querySelector('#cipher-text1');
    let displayCipher = ""; 
    let keyCtr = 0;
    for(let i = 0; i < plainText.length; i++){    
        if(keyCtr == key.length){
            keyCtr = 0;
        }    
        let cipherCode= (plainText.charCodeAt(i) + key.charCodeAt(keyCtr)) % 26;
        cipherCode += 65;
        keyCtr++;
        let cipherChar =  String.fromCharCode(cipherCode);
        displayCipher += cipherChar;

    }
    cipherText.value = displayCipher;
   

    // console.log(key);
}
function decipher(){
    let key = document.querySelector('#key').value.toUpperCase();
    let plainText = document.querySelector('#plain-text2');
    let cipherText =  document.querySelector('#cipher-text2').value.toUpperCase();
    let displayPlain = ""; 
    let keyCtr = 0;
    for(let i = 0; i < cipherText.length; i++){    
        if(keyCtr == key.length){
            keyCtr = 0;
        }    
        let plainCode= (cipherText.charCodeAt(i) - key.charCodeAt(keyCtr) + 26) % 26;
        

        plainCode += 65;
        keyCtr++;
        let plainChar =  String.fromCharCode(plainCode);
        displayPlain += plainChar;
        

    }
    plainText.value = displayPlain;
}