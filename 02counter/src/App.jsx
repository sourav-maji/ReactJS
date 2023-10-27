import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  // let counter =5
  const addValue = ()=>{
    //normal js
    // console.log("Clicked", Math.random());
    // counter++
    // console.log(counter);

    // react
    if( counter <20){
      counter = counter+1
      setCounter(counter)
      console.log(`clicked ${counter}`);
    }else{
      alert("You can Add upto 20")
    }
   

  }

  const removeValue = ()=>{
    if(counter >= 1 ){
      counter = counter -1
      setCounter(counter)
    }else{
      alert("You can't Remove below 0")
    }
    

  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter Value : {counter}</h2>
    <button 
    onClick={addValue}>Add Value {counter}</button>
    <br />
    <button onClick={removeValue}>Remove Value value {counter}</button>
    <p>Footer : {counter}</p>
    </>
  )
}

export default App
