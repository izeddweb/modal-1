// Set Variable

const buttons = document.querySelectorAll('.btn')
const divs = document.querySelectorAll('.container-box div')
// console.log(divs);

// Set Function 

buttons.forEach(function(ele) {
  ele.onclick = function (){
    let data = ele.getAttribute('data-name')
    divs.forEach(function(ele){
      ele.getAttribute('data-name')=== data?ele.style.opacity='.3':'';
    })
  }
})
