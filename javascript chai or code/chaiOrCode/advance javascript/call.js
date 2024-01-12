function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("it is being called");
}


function createUser(username , email , password){
        SetUsername.call(this, username)               //call karke reference ko hold karne ke liye hi .call ka use kiya jata hai
                                                       //and is this se jo setussername me references createuser wale this me aake save hoga
    this.email = email,
    this.password= password
}

const Rishabh = new createUser("Rishabh " , 'Rish@google', "123456")
console.log(Rishabh);