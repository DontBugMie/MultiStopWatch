'use strict';

//step one get all the variables from the html page

const tableHeader = document.querySelector('.tableHeader');
// const rowContainer = document.querySelector('.rowContainer');
const rowRacerNameBtn = document.querySelector('.rowRacerNameBtn');
const rowLapCount = document.querySelector('.rowLapCount');
const rowTotaltime = document.querySelector('.rowTotaltime');
const rowAverageTime = document.querySelector('.rowAverageTime');
const rowLastLapTime = document.querySelector('.rowLastLapTime');

// const html =  `<td><button id="rowRacerNameBtn">${this.inputName.value}</button></td>
// <td id="lapCount">0</td>
// <td id="j">adfsaf </td>
// <td id="averageTime">average Time</td>
// <td id=lastLapTime>last LapTime</td> 
// `;

const appTitle = document.getElementById('appTitle');
const inputName = document.getElementById('inputName');
const addNameBtn = document.getElementById('addNameBtn');
const startRaceBtn = document.getElementById('startRaceBtn');
const endRaceBtn = document.getElementById('endRaceBtn');
// const startDate = document.getElementById('startDate');
// const startTime = document.getElementById('startTime');

// const startDateTime = document.getElementsByClassName('hidden');

const displayTimer = document.getElementById('displayTimer');

//2) function for the timer 
// const start = () => setInterval(timer,10);
const start = () => setInterval(timer,10);
const timer = (() => {
    let min = 0, sec = 0, ms = 0;
    displayTimer.innerText = (min < 10 ? "0"+ min : min) + ":" + (sec < 10 ? "0" + sec : sec) + ":" + (ms < 10 ? "0" + ms : ms);
    ms++;
    if((ms == 100)){
        ms = 0;
        sec++
    }
    if((sec == 60)){
        sec = 0;
        min++
    }

    
    return displayTimer
});
start();
// console.log(displayTimer)

// console.log(start());




//1) function for adding new row


const addNewRow = addNameBtn.addEventListener('click', (e) => {
        var html =  `<td><button id="rowRacerNameBtn">${this.inputName.value}</button></td>
        <td id="lapCount">0 hard written</td>
        <td id="totalTime">00:00:000 hardwritten</td>
        <td id="averageTime">00:00:000 hardwritten</td>
        <td id=lastLapTime>00:00:000 hardwritten</td> 
        `;
        const rowContainer = document.querySelector('.rowContainer');
        e.preventDefault();
        rowContainer.insertAdjacentHTML('afterend', html);
    
    
    
        rowContainer.style.display = 'contents';
})

// console.log(start());





//3) function for starting the timer



//4) function for displaying the timer




//5) displaying date and start time 
const startDateTime = startRaceBtn.addEventListener('click', (e) => {

    const startDate = document.getElementById('startDate');
    const startTime = document.getElementById('startTime');
    const [date, month, year] = new Date().toLocaleDateString("en-GB").split("/");
    const [startTime_] = new Date().toLocaleTimeString("en-GB").split("/");
    const startDateTime = document.querySelectorAll('.hidden');  
    

  
    startTime.innerHTML = startTime_;
    startDate.innerHTML = `${date}/${month}/${year}`;
    for (var i=0; i<startDateTime.length; i++) {
        startDateTime[i].classList.remove('hidden');
      }
})
  



//6) function for creating a new lap

// const newLap = rowRacerNameBtn.addEventListener('click', (e)=>{
//     console.
// });



//7) function for ending race 

//8) function for displaying the winner