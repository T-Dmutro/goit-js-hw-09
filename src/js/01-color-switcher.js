
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
// console.log(btnStart, btnStop)
let activStatus = false;
 btnStart.addEventListener("click", handBtnClickStart);
 btnStop.addEventListener("click", handBtnClickStop)



 
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function handBtnClickStart ( ){
    if (activStatus ){
        return
    }
    let  timerId = setInterval(()=> {
        activStatus = true;
        document.body.style.background = getRandomHexColor() ;
        }, 1000);
        
console.log( 'click start')
};

function handBtnClickStop ( ) {
     clearInterval(timerId),
    console.log('stop interval'),
    activStatus = false;
};