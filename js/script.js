/**
 * @description Accepts user input in the command line (or sets a default of 15) for the
 *  number of minutes the timer will countdown
 * @example node timer.js 12
 */
 const soundplayer = require("sound-player");
 const minutes = parseInt(process.argv[2]) || 15;
 
 var options = {
   filename: "times-up.mp3",
   gain: 100,
   debug: true,
   player: "mpg321", // other supported players are 'aplay', 'mpg123', 'mpg321'
   device: "plughw0:0",
 };
 const player = new soundplayer(options);
 
 const totalSeconds = minutes * 60; // 120
 let secondsElapsed = 0;
 
 /**
  *
  * @param {number} timeToFormat Number of seconds left on the timer
  * @returns  3660 in
  */
 const formatOutput = (timeToFormat) => {
   const hours = Math.floor(timeToFormat / 3600);
   const minutes = Math.floor((timeToFormat - hours * 3600) / 60);
   const seconds = timeToFormat % 60;
 
   return `${
     hours ? `${hours} hour(s)` : ""
   } ${minutes} minute(s) ${seconds} second(s)`;
 };
 
 let oneSecondInterval = setInterval(() => {
   const secondsLeft = totalSeconds - secondsElapsed;
   console.log(`Time remaining: ${formatOutput(secondsLeft)}`);
   secondsElapsed++;
   // STOP THE TIMER!!!
   if (secondsLeft < 1) {
     player.play();
     clearInterval(oneSecondInterval);
   }
 }, 100);