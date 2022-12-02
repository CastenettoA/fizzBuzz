/** 
  * Personal implementation of fizzBuzz coding exercize
  * 
  * Exercize:
  * Print numbers from 1 to 220.
  * For multiples of 3 print the string 'fizz'
  * For multiples of 5 print the string 'buzz'
  * For multiples of 3 and 5 print the string 'fizzbuzz'
  * For multiples of 7 print the string 'hello world!'
 */

function initFizzBuzz() {
    for(let i=1; i<=220; i++) {
        console.log(fizzBuzz(i));
    }
}

export function fizzBuzz(i:number):string|number {
    let returnStrings = '';

    let obj:Record<number,string> = {
        3: 'fizz',
        5: 'buzz',
        7: ' hello world!'
    };

    Object.keys(obj).forEach((el:string)=> {
        if(i % parseInt(el) === 0) {
            returnStrings+=obj[el];
        }
    });

    return returnStrings || i.toString();    
}
