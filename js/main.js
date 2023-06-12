// let inputItem=document.getElementById('input-id');
// inputItem.addEventListener('keyup', onkeyUp1);
// function onkeyUp1(e) {
//    let inputValue= e.target.value.toUpperCase();
  
//    let ul =document.querySelector('#ul-id')
//    let listItem =ul.querySelectorAll('.list-item');
// Array.from(listItem).forEach(function(item) {
//     let items =item.textContent;
//     if(items.toUpperCase().includes(inputValue) != 1) {
//       item.style.display='none';
   // }
//     else{
//         item.style.display='block';
    
//       }
// })
// }
let inputItem=document.querySelector('#input-id');
inputItem.addEventListener('keyup', hey)
 function hey(e) {
    let inputValue =e.target.value.toUpperCase();
    let ul=document.querySelector('#ul-id');
    let liValue=ul.querySelectorAll('.list-item');
    Array.from(liValue).forEach(function(item) {
        let items=item.textContent;
        if(items.toUpperCase().includes(inputValue)) {
            item.style.display='block'
        }else{
            item.style.display='none';
        }
    })
  
 }
    

