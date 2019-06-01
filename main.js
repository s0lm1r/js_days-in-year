'use strict';

function daysInYear(year) { 


if (typeof year === 'number' && year % 1 === 0 ) {
	return  (new Date(`${year+1}`) - new Date(`${year}`))/(1000*60*60*24);
    }  else { 
       	throw new Error (`Invalid data`); 
     }
 }

console.log(daysInYear(2019)); // 365
console.log(daysInYear('2019')); // exception
console.log(daysInYear(2020)); // 366
console.log(daysInYear(2020.2)); // exception
console.log(daysInYear(2100)); // 365
console.log(daysInYear({year: 2100})); // exception*/


/*			// спочатку я хотів відправити такий варіант, але мене запевнили що це не правильний підхід
'use strict';

function daysInYear(year) { 

    try {

        if (typeof year === 'number' && year % 1 === 0 ) {
            return  console.log((new Date(`${year+1}`) - new Date(`${year}`))/(1000*60*60*24));
        }   throw new Error    (`Invalid data`);
    } catch(e) {
           return console.log(` ${e.name} ${e.message}`);
       }
}

daysInYear(2019); // 365
daysInYear('2019'); // exception
daysInYear(2020); // 366
daysInYear(2020.2); // exception
daysInYear(2100); // 365
daysInYear({year: 2100}); // exception*/