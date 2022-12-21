
// get id//

let attempt = 0;

function getId (boxId){
let boxElem = document.getElementById(boxId);
// console.log(boxElem.innerHTML)
   attempt++;

     
    if(attempt % 2 === 0){
        boxElem.innerHTML = "X";
        boxElem.style.color = "green";
    }else{
      boxElem.innerHTML = "O";
      boxElem.style.color = "red";
    }
 }