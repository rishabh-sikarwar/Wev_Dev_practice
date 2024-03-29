import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>   made a custom function same as App    
      we can also execute it by MyApp()  because it is a function only 
    </div>
  )
}

const anotherElement = ( 
  <a href= "https://google.com"  target = '_blank' > visit google </a>

)                   //to run this                             anotherElement                              //as it is an object so no need for () to implement 

const anotherUser = 'can be redirected only'
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com' , target: '_blank'},
  'click me to visit google' ,
  anotherUser
  )                      //   to run   ......  reactElement


ReactDOM.createRoot(document.getElementById('root')).render(
  
   <App/>
  
)
