//       different types of loops   [ array specific loops ]

//  for of loop
const arr = [1, 2 , 3 , 4 ,5 ]

for (const num of arr ) {
    console.log(num);
}

const greetings = "namaste sab bhai log"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);

}


// maps 

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('Fr' , "France")
map.set('IN' , "India")      // unique values only therefore no entries of any two objects

// console.log(map);

for (const key of map ) {
    console.log(key);             //prints the array 
}


for (const [key , value] of map ) {
    console.log(key, ' :- ' , value );       //destructure kar ke separately print kar sakte hai
}

// ************************************************************************************************************
const myObject = {
    game1: 'NFS',
    game2: 'spiderman'
}

for (const [key , value] of object) {
    console.log(key , ' :- ' , value);       //object is not iterable 
    
}




const myLanguage = {
    js: 'javascript' ,
    cpp: 'C++' ,
    rb: 'ruby' ,
    swift: 'swift by apple'
}

for (const key in myLanguage) {
   console.log(`${key} shortcut is for ${myLanguage[key]}`);
}

const programming = ["js" , "rb" , "py" , "java" , "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}




//   for each loop     **** ye koi value return nahi karta hai ****
const coading = ["js" , "rb" , "py" , "java" , "cpp"]
coading.forEach( function (item) {                        //function liya and pass kar diya jo ki item ke name se hai
    console.log(item);
}   )


// for each in arrow functions
coading.forEach( (item) => {
    console.log(item);                 // output same as upper side
} )

// so to use the return keyword  we use .......


// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter(  (Num) => Num > 4 )
// console.log(newNums);

const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)              //by this we can use the return keyword in the for each loop
    
    }
})

console.log(newNums);