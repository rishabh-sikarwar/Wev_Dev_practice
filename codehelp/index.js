for(let i=0;i<10;i++){
    console.log("Namaste world")
}
for(let i=0;i<10;i++){
    if(i%2==0)
    console.log(i)
}
let j=10;
do{
    console.log("namaste world")
    j++

}
while(j<10)
// do while me kam se kam ek baar to code run hoga hi 
let animal ={
    name:"zebra",
    leg:4
};

// for   in loop

for(let key in animal){
    console.log(key,animal[key])
}


// arrays      and 
let names = ["Rahul","Neha","aman","Rishabh"];
for(let index in names){
    console.log(index)
    console.log(index,names[index])

}



// for   of loop
for(let name of names){
    console.log(name)
}