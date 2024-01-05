const promiseOne = new Promise(function (resolve , reject){
    // do an async task
// DB calls, cryptography, network , etc......
setTimeout(function(){
    console.log('Async task is complete');
    resolve()
}, 1000)
})

promiseOne.then(function(){
    console.log('promise consumed');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    } , 1000)
}).then(function(){
    console.log('Async 2 resolved');
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
                resolve({username: "chai" , email: "rishabhsikarwar1000@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false         // if true then output will be error something went wrong
            if(!error){
                resolve({username: "Rishabh" , password: "qw123"})
            } else{
                reject("ERROR : somethin went wrong")
            }
    } , 1000)
})

 const username = promiseFour.then((user) => {
        console.log(user);
        return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log('the promise is either resolved or rejected'))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false     
            if(!error){
                resolve({username: "Rishabh+learningJS" , password: "qw123456789"})
            } else{
                reject("ERROR : JS went wrong")
            }
    } , 1000)
})

async function consumePromiseFive() {
  try {
    const response =  await promiseFive
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive()


// async function getAllUsers() {
//  try {
//     const response = await  fetch('https://api.github.com/users/rishabh-sikarwar')
//     const data =  await response.json()
//     console.log(data);
//  } catch (error) {
//     console.log('E: ', error);
//  }

// }
//getAllUsers()

fetch('https://api.github.com/users/rishabh-sikarwar')
.then( (response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

