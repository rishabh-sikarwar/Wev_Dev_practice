import Newfunction from "./newfile"

function App() {
    const username = "*** UserName  but not a string***"
  return (
    <>
    <Newfunction/>                  //isme hum sirf ek hi element hi return kar sakte hai or sisi liye agar hume jyada elements ko return karna hai to sab ko ek div me wrap kar do       or hum ek empty element bhi le sakte hai  
    <h1>Hello everyone   {username}    </h1>

    </>
  )
}

export default App
