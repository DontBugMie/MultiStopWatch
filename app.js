'use strict';
var totalTime;
// // SECTION ONE - add new row and add name to name *****************

const addPersonBtn = document.getElementById('addName');
// const totalTime= document.getElementById('totaltime');

// class Person{
//         constructor(lapCount, totalTime){
//             this.lapCount = lapCount;
//             this.totalTime = totalTime;
//         }
    
//         static totalTime () {
//             j.textContent = (min < 10 ? "0"+ min : min) + ":" + (sec < 10 ? "0" + sec : sec) + ":" + (ms < 10 ? "0" + ms : ms);
//             ms++;
//             if((ms == 100)){
//                 ms = 0;
//                 sec++
//             }
//             if((sec == 60)){
//                 sec = 0;
//                 min++
//             }
        
//             let totalTime = j.textContent;
//             return totalTime;
//         }
    
//         get lastLapTime(){
//             return //totalTime - time since lapCount(name) is pressed 
//         }
//     }



addPersonBtn.addEventListener('click', (e) => {
    const row = document.querySelector('.rowContainer');
    const name = document.getElementById('inputName').value;
    e.preventDefault();
    // const showRow = document.querySelector('.none');
    // showRow.style.display = 'contents';

    const html =  `<td><button id="raceName">${name}</button></td>
    <td id="lapCount">sdf</td>
    <td id="j"> ${totalTime}</td>
    <td id="averageTime">average Time</td>
    <td id=lastLapTime>last LapTime</td> 
    `;
    e.preventDefault();
    row.insertAdjacentHTML('afterend', html);
})

// // END OF SECTION ONE************************************

const j = document.getElementById('j');
let min=0, sec = 0, ms =0;

const start = () => {setInterval(Person.totalTime,10);
    startDate.style.opacity = 1;
    startTime.style.opacity = 1;
}



function time () {
    j.textContent = (min < 10 ? "0"+ min : min) + ":" + (sec < 10 ? "0" + sec : sec) + ":" + (ms < 10 ? "0" + ms : ms);
    ms++;
    if((ms == 100)){
        ms = 0;
        sec++
    }
    if((sec == 60)){
        sec = 0;
        min++
    }

    totalTime = j.textContent;
    console.log(totalTime);
    console.log(totalTime, 'kkkkkkkkkkk');
    
}


const startRaceBtn = document.getElementById('startRace');
startRaceBtn.addEventListener('click',(e) => start());



// ======================


// const person = {
    
// }




// class Person{
//     constructor(lapCount, totalTime){
//         this.lapCount = lapCount;
//         this.totalTime = totalTime;
//     }

//     get averageTime(){
//         return this.totalTime / this.lapCount;
//     }

//     get lastLapTime(){
//         return //totalTime - time since lapCount(name) is pressed 
//     }
// }












//======================================
const startTime = document.getElementById('startTime');
const startDate = document.getElementById('startDate');

//START DATE / TIME

const [date, month, year] = new Date().toLocaleDateString("en-GB").split("/");
startDate.innerHTML = `${date}/${month}/${year}`;
const [startTime_] = new Date().toLocaleTimeString("en-GB").split("/");
startTime.innerHTML = startTime_;

//END OF DATE / TIME