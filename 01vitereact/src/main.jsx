import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <>
    <h1>Custom App!!</h1>
    </>
  )
}

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)

// const anotherUser = "Sourav"

const reactElement = React.createElement(
    'a',
    {href:"https://google.com", target:"_blank" },"Click me to visit Google" 
    // , anotherUser
)
 
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <App />
  //   <MyApp />
    
  // </React.StrictMode>
  // anotherElement
  reactElement

)
