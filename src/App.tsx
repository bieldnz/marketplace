import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  fetch("http://localhost:5000/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  }).then((resp) => resp.json())
  .then((data) => console.log(data))

  return (
    <div className="App">
      
    </div>
  )
}

export default App
