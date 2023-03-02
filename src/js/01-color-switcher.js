
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
// console.log(btnStart, btnStop)
let activStatus = false;
 btnStart.addEventListener("click", handBtnClickStart);
 btnStop.addEventListener("click", handBtnClickStop)
 
 

 btnStop.disabled = 'false';
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
let timerId;
function handBtnClickStart ( ){
   
    if (btnStart.getAttribute('disabled')){
        return;
    }
    btnStart.disabled = 'false';
    btnStop.removeAttribute('disabled') ;
     timerId = setInterval(()=> {
        activStatus = true;
        document.body.style.background = getRandomHexColor() ;
        }, 1000);
        
console.log( 'click start')
};

function handBtnClickStop ( ) {
     clearInterval(timerId),
    console.log('stop interval' )
    activStatus = false;
    btnStart.removeAttribute('disabled') ;
};