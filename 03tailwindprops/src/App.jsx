import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username :"hitesh",
    age:21
  }

  let newArr = [1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-10 rounded-xl mb-4'>Tailwind Test</h1>
      {/* <Card channel="Chaiaurcode" someObject = {myObj}  someArray= {newArr} /> */}
      <Card username="Chaiaurcode" btnText = "click me" />
      <Card username="hitesh" btnText = "visit me"/>
      <Card username="Best Youtube Channel" />
    </>
  )
}

export default App
