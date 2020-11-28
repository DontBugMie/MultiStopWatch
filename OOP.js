'use strict';

class Runner {
    constructor(name, totalTime = '00:00:000') {
      this.name = name;
      this.totalTime = totalTime;
    }
    
    lapCount = ('click',(e) => {

    })
    
    get averageTime() {
      this.totalTime/ this.lapCount
      return this;
    }

    get lastLap(){
      this.totalTime - (this.)
    }
  }


  // class Runner {
  //   constructor(name, speed) {
  //     this.make = make;
  //     this.speed = speed;
  //   }
  
  //   accelerate() {
  //     this.speed += 10;
  //     console.log(`${this.make} is going at ${this.speed} km/h`);
  //   }
  
  //   brake() {
  //     this.speed -= 5;
  //     console.log(`${this.make} is going at ${this.speed} km/h`);
  //     return this;
  //   }
  
  //   get speedUS() {
  //     return this.speed / 1.6;
  //   }
  
  //   set speedUS(speed) {
  //     this.speed = speed * 1.6;
  //   }
  // }