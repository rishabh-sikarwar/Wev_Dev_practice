const clock = document.getElementById('clock')
//****************** or   document.querryselector('#clock')



setInterval(function(){
    let date = new Date();
// console.log(date.toLocaleTimeString());.              consoole me nahi chalani
clock.innerHTML = date.toLocaleTimeString();

}, 1000)
