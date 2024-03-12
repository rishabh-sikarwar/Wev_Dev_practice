const clock = document.getElementById('clock')
//****************** or   document.querryselector('#clock')
const start = document.getElementById('start')
const stop = document.getElementById('stop')

let timestart
start.addEventListener('click' , ()=>{
timestart = setInterval(function(){
    let date = new Date();
// console.log(date.toLocaleTimeString());.              consoole me nahi chalani
clock.innerHTML = date.toLocaleTimeString();

}, 1000)
console.log('time start')
})

stop.addEventListener('click' , ()=>{
    clearInterval(timestart)
    console.log('time stop');
} )
