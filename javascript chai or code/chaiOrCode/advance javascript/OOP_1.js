//Object literals   and  "this" keyword 

const user = {
    usrname : "Rishabh",
    loginCount : 8,
    signedIn: true,
    getUserDeatailes:  function(){
        //console.log("got user detailes from the database");      *******isme ek  undefined aa raha hai
         console.log(this);    //this will print the current context 
    }

}

console.log(user.usrname);
console.log(user.getUserDeatailes());   //Method hai to run karana padega sirf reference nahi de sakte hai so we used () 
console.log(this);           //this will print the empty parenthesis      OR    Global Context




//    **************************Constructor***************************************************  (new    keyword)
//      constructor function is like ki jab hum usse use karte hai  to vo hume us function ka ek naya instance de deta hai matlab ek nayi copy de deta hai and us copy ke saath hi hum log khelte hai

function User (username, loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this 

}

const UserOne = User("Rishabh " , 10 , false)
const UserTwo = User("Khushi" , 23 , true)         //isse userOne ki values overwrite ho jaa rahi hai ,,,,,,,,,,,,,,,, isliye hi hum log 'new'  keyword use karte hai jab bhi hum new constructor function banate hai
console.log(UserOne);

const UserThree = new User("Rishabh " , 10 , false)
const UserFour = new User("Khushi" , 23 , true)  
console.log(UserThree);
console.log(UserFour); 

//   1st  new keyword use karne ke baad sabse pehle ek empty and naya object create hota hai jissko instance bola jata hai    { empty parenthesis }
//  2nd   uske baad ek constructor function call hota hai
//  3rd    "this" keyword ke saare elements or arguments uske andar inject ho jaate hai
//  4th    you got that in a function 



//***************************inheritance **************************
const userTeacher = {
    name: "Chai",
    email : "chai@google.com"
}

const Teacher =  {
    makeVideos : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__: TeachingSupport                   //to link the objects
}

Teacher.__proto__ = userTeacher                  //andar or bahar dono jagah se ye proto wala use kar sakte hai 



//********************************* modern syntax for inheritance 

Object.setPrototypeOf(TeachingSupport , Teacher)     // teachingsupport  ko teacher ki access mil jaati hai


