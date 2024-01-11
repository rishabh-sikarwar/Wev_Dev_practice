// let myName = "Rishabh     "

// console.log(myName.truelength);              // ye truelength ko property nahi method banana hai



myHeros = ['Thanos' , 'Loki']

let heroPower = {
    Thanos : "chutki" ,
    Loki: "hera Pheri" ,

    getLokiPower: function(){
            console.log(`Loki power is ${this.Loki}`);
    }
}

Object.prototype.rishabh = function(){
    console.log("rishabh is learning javascript currently      and now it is created in the object ");
}


// heroPower.rishabh()

myHeros.rishabh()


// *************************************************************************************


let myName = "Rishabh      "


String.prototype.truelength = function(){
    console.log(` ${this}`);
    console.log(` ${this.name}`);
    console.log(` True length is : ${this.trim().length}`);
}

myName.truelength()
"iceTea   ".truelength()
