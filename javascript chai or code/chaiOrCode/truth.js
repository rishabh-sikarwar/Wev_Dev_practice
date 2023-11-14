const userEmail = "r@gmail.com"          //right now it is true but if empty array it is false

if(userEmail){
    console.log("got user email");
}

else{
    console.log("don't have user email");
}


//  falsy values are given below

//  false  ,  0  ,  -0  ,  BigInt 0n  ,  ""  ,  null  ,  undefined  ,  NaN


//  truthy values are
//     "0"  ,  "false"  , "  "  ,  []  ,  {}  ,  function(){}


false == 0   //true
false == ""  //true
0 == ""      //true


//     Nullish Coalescing Operator   ( ?? ) 

let val1;
// val1 = 5 ?? 10           // 5
// val1 = null ?? 10        // 10
val1 = undefined ?? 15      // 15
val1 = null ?? 10 ?? 20     //10

console.log(val1);


//   Terniary Operator  ( ? )
  
const IceTeaPrice = 100
IceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
