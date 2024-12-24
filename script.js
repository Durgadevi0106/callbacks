/**
* 1.Basic Callback Execution
Write a function called processNumber that accepts a number and a callback function.
The processNumber function should double the number and pass the result to the
callback function.
*/

// Named Function:
function processNumber(num,callback){
        console.warn(callback(num));
}
function double(num){
    return num+num
}
processNumber(22,double)
// Anonymous function:
function processNumber(num,callback){
    console.warn(callback(num));
}
processNumber(4,function(num){
    return num+num
});
// arrrow Function:
function processNumber(num,callback){
    console.warn(callback(num));
}
processNumber(7,num=>num+num);

/**
 * 2.	Callback with Array Iteration
Write a function called forEachElement that takes an array
and a callback function. The function should iterate over the array 
and execute the callback function for each element, passing the element 
as an argument.
 */
// NAMED FUNCTION:
function forEachElement(array,callback){
    for(let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}
function execute(array){
        console.warn(`The Elements of the array is ${array}`)
}
forEachElement([2,3,6,7,8,10],execute)
// ANONYMOUS FUNCTION:
forEachElement([3,4,6,8,11,34,56],function(array){
    console.warn(`The Elements of the array is ${array}`)
})
// // ARROW FUNCTION:
forEachElement([6,4,2,34,5,67,8,89,100],(array)=>console.warn(`The Elements of the array is ${array}`))

/**
 * 3.	Simple Delayed Callback
Write a function sayHello that accepts a name and a callback function.
Use setTimeout to wait for 1 second and then call the callback function, 
passing the message "Hello, [name]!" (replace [name] with the provided name).
 */
function sayHello(name,callback){
    setTimeout( ()=>{return callback(name)},1000);
}
// NAMED FUNCTION:
function greet(name){
    console.warn(`Hello,${name}!`)
}
sayHello(`Durgadevi`,greet)
// ANONYMOUS FUNCTION:
sayHello(`Vanitha`,function(name){console.warn(`Hello,${name}!`)})
// ARROW FUNCTION:
sayHello(`Kalyani`,name=>console.warn(`Hello,${name}!`))


function sayHello(name, callback) {
    setTimeout(function() {
      let message = `Hello, ${name}!`;
      callback(message);
    }, 1000);
  }
  
  sayHello("Durga", function(message) {
    console.warn(message);
  });
  
/**
 * 4.	Callback on Condition
Write a function checkEven that accepts a number and two callback functions. 
If the number is even, call the first callback with the number. 
If the number is odd, call the second callback with the number.
 */
function checkEven(num,callback1,callback2){
        if(num%2==0){
        (callback1(num));
        }
        else{
         (callback2(num));
        }
}
//NAMED FUNCTIONS:
function even(num){
    if(num%2==0){
           console.warn(`${num} is the even number`)
    }
}
function odd(num){
    if(!(num%2==0)){
        console.warn(`${num} is the odd number`)
    }
}
checkEven(80678,even,odd);
// ANOUNYMOUS FUNCTION:
checkEven(100,function(num){
    console.warn(`${num} is the even number`)},
function(num){
    console.warn(`${num} is the odd number`)
})
// ARROW FUNCTION:
checkEven(23,num=>console.warn(`${num} is the even number.`),num=>console.warn(`${num} is the odd number.`))
/**
 * 5.	Sequential Callbacks
Write a function performTasks that accepts a number and two callback functions. 
First, add 5 to the number using the first callback, and
 then multiply the result by 2 using the second callback. 
 Log the final result to the console.
  */
function performTasks(num,callback1,callback2){
   callback2(callback1(num));
}
// NAMED FUNCTION:
function add(num){
      return(num+5)
}
function multiply(num){
       console.warn(num*2)
}
(performTasks(2,add,multiply))
// ANONYMOUS FUNCTION:
performTasks(1,function(num){
    return(num+5)
},
function(num){
    console.warn(num*2)
})
// ARROW FUNCTION:
performTasks(0,num=>num+5,num=>console.warn(num*2))