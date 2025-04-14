import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  
  // let counter = 2

  const addvalue = () => {   
    if(counter < 20){
    setCounter(counter + 1)
    console.log("clicked ",counter); 
  }else {
    console.log("max value of counter is 20")
   }
  }

  const removevalue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    } else {
      console.log("counter doesnot go in minus");
    }
  }

  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter value: {counter}</h2>

     <button
     onClick={addvalue}
     >Add value</button>
     <br></br>
     <button
     onClick={removevalue}
     >Remove value</button>
    </>
  )
}

export default App
