function createTbody(){
    let table = document.querySelector('table');
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);
}

function displayTable(str1, str2, key, ope){
   let computation = document.querySelector('.computation');
   let tbody = document.querySelector('tbody');
   let tr = document.createElement('tr');
   let td = [];
   computation.style.display = "block";
   if(ope === '+'){
       document.querySelector('.p-text').innerHTML = "PLAIN TEXT";
       document.querySelector('.p-text2').innerHTML = "CIPHERED TEXT";

   }
   else if(ope === '-'){
    document.querySelector('.p-text').innerHTML = "CIPHERED TEXT";
    document.querySelector('.p-text2').innerHTML = "PLAIN TEXT";
   }
   
   for(let i = 0; i < 4; i++){
    td[i] = document.createElement('td');
    tr.appendChild(td[i]);
   }
   let tdText = document.createTextNode(String.fromCharCode(str1) + " (" + (str1 - 65) +")");
   let keyText = document.createTextNode(String.fromCharCode(key) + " ("+ ope + (key - 65) + "mod26" + ")");
   let result = document.createTextNode(str2);
   let tdText2 = document.createTextNode(String.fromCharCode(str2 + 65) + " (" + (str2) + ")");
   td[0].appendChild(tdText);
   td[1].appendChild(keyText);
   td[2].appendChild(result);
   td[3].appendChild(tdText2);
   tbody.appendChild(tr);
  
}
function resetTable(){
    let tbody = document.querySelector("tbody");
    tbody.remove();
}

function cipher(){
    let key = document.querySelector('#key').value.toUpperCase();
    let plainText = document.querySelector('#plain-text1').value.toUpperCase();
    let cipherText =  document.querySelector('#cipher-text1');
    let displayCipher = ""; 
    let keyCtr = 0;
    resetTable();
    createTbody();
    for(let i = 0; i < plainText.length; i++){    
        if(keyCtr == key.length){
            keyCtr = 0;
        }    
        if(plainText.charAt(i) != " "){
            let cipherCode= (plainText.charCodeAt(i) + key.charCodeAt(keyCtr)) % 26;
            displayTable(plainText.charCodeAt(i), cipherCode, key.charCodeAt(keyCtr), '+');
            cipherCode += 65;
            keyCtr++;
            let cipherChar =  String.fromCharCode(cipherCode);
            displayCipher += cipherChar;
        }
        else{
            displayCipher += " ";
        }
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
    resetTable();
    createTbody();
    for(let i = 0; i < cipherText.length; i++){    
        if(keyCtr == key.length){
            keyCtr = 0;
        }    
        if(cipherText.charAt(i) != " "){
            let plainCode= (cipherText.charCodeAt(i) - key.charCodeAt(keyCtr) + 26) % 26;
            displayTable(cipherText.charCodeAt(i), plainCode, key.charCodeAt(keyCtr), '-');

            plainCode += 65;
            keyCtr++;
            let plainChar =  String.fromCharCode(plainCode);
            displayPlain += plainChar;
        }
        else{
            displayPlain += " ";
        }

    }
    plainText.value = displayPlain;
}