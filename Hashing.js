function Vernam(str, key){
    //values
    str = str.toUpperCase().split('');
    key = key.toUpperCase().split('');
    //output;
    let output=[];
    let length = key.length;
    let codes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#', '!', '_', '@', '?',' '];
    for(let i in str){
      let a = codes.findIndex(e=>e===str[i])
      let b = codes.findIndex(e=>e===key[i%length])
      output.push(codes[a^b])
    }
    return output.join('')
  }
let openText = document.querySelector('.vernam__input');
let keyText = document.querySelector('.vernam__input-key');
let outputText = document.querySelector('.output');
let form = document.querySelector('.vernam__form');

form.addEventListener('submit', e=>{
    e.preventDefault();
    let val = openText.value;
    let key = keyText.value;
    let output = Vernam(val, key);
    console.log()
    outputText.textContent = output;
})
