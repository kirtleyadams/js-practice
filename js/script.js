/**
 * @description Accepts user input in the command line (or sets a default of 15) for the 
 *  number of minutes the timer will countdown
 * @example node timer.js 12
 */
 const minutes = parseInt(process.argv[2]) || 15;


 const totalSeconds = minutes * 60; // 120
 let secondsElapsed = 0;
 
 
 /**
  * 
  * @param {number} timeToFormat Number of seconds left on the timer
  * @returns  3660 in
  */
 const formatOutput = (timeToFormat) => {
   const minutes = Math.floor(timeToFormat / 60);
   // 1 -- error. Need to subtract hours out before getting minutes
   const seconds = timeToFormat % 60;
   // 59
   const hours =
     Math.floor(timeToFormat / 3600) > 0
       ? `${Math.floor(timeToFormat / 3600)} hour(s)`
       : "";
 
 
   return `${hours} ${minutes} minute(s) ${seconds} second(s)`;
 };
 
 
 let oneSecondInterval = setInterval(() => {
   const secondsLeft = totalSeconds - secondsElapsed;
   console.log(`Time remaining: ${formatOutput(secondsLeft)}`);
   secondsElapsed++;
   // STOP THE TIMER!!!
   if (secondsLeft < 1) {
     console.log("line 23");
     clearInterval(oneSecondInterval);
   }
 }, 10);
 
 