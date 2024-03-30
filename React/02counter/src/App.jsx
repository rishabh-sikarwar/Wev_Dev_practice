import { useState } from 'react'                          //isse hi hook ka use aata hai in react
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter , setCounter] =  useState(15)

function validateValuedecrement(counter){
  if(counter<1){
    return false
  }
  else{
    return true
  }
}


function validateValueincrement(counter){
  if(counter > 19 ){
    return false
  }
  else{
    return true
  }
}

//let counter =15

const addValue = ()=>{
 if( validateValueincrement(counter)){
   // counter++             //  issee update nahi hoga
   setCounter(counter+1)           //isse ab saari jagah automatically value update ho rahi hai
   console.log("clicked" , counter);
 
 }

}

const removeValue = ()=>{
  if(validateValuedecrement(counter)){
    setCounter(counter-1)
  }
 
}


                                              //like wise agar ek hi value {counter} ko hume UI me kaafi jagah update karna hai to us jagah hum react ko use karte hai means agar ye normal js se karnge to kaafi saare reference ekathe ho jayenge.....
  return (
    <>
    <h1> learning react video 5 Use of HOOK </h1>
    <h2>Counter value: {counter}</h2>

    <button
    onClick={addValue}
    >Add value {counter} </button>
    <br/>                                 
    <button
    onClick={removeValue}
    >Remove value   {counter}</button>
    </>
  )
}

export default App
