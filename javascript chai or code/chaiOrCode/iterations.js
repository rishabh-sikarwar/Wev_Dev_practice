//  for loop

for (let i  = 0; i  < 10 ; i ++) {   
    console.log(`Outer loop value : ${i}`);
    for (let j = 0; j < 10 ; j++) {
       console.log(`Inner loop value : ${j}  and outer loop : ${i}`);
        
    }
    
}

let myArray = ["flash", "batman", "superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    }


    //break and continue
    for (let index = 0; index < 20 ; index++) {
        if (index == 5) {
            console.log(" Detected 5 ");
            break;     // break the loop ab kuch nahi hoga
        }
console.log(`value of i is ${index}`);

 }
    //***************************************************************
    for (let index = 0; index < 20 ; index++) {
        if (index == 5) {
            console.log(" Detected 5 ");
            continue;     // ek baar ki maafi bas and aange ke liye continue hoga
        }
console.log(`value of i is ${index}`);

 }

 
