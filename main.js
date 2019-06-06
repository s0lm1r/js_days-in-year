'use strict';

function daysInYear(year) { 

  if (Number.isInteger(year)) {
    return (new Date(year, 11, 31) - new Date(year, 0, 0))/(1000*60*60*24);
      } else { 
        throw new Error (`Invalid data`); 
      };
};

console.log(daysInYear(2019)); // 365
console.log(daysInYear('2019')); // exception
console.log(daysInYear(2020)); // 366
console.log(daysInYear(2020.2)); // exception
console.log(daysInYear(2100)); // 365
console.log(daysInYear({year: 2100})); // exception*/
