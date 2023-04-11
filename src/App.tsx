import { useEffect, useState } from 'react'
import Products from './components/products/Products'
import FloatingButton from './components/layout/FloatingButton'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)
  const [project, setProject] = useState<any>([])
  let name:string = ""
  let price:number = 0

  function mostrar(){

  }

  useEffect(() => {
    fetch("http://localhost:5000/products", {
      method: "GET",
      headers: {"Content-Type":"application/json"},
    }).then((resp) => resp.json())
    .then((data) => setProject(data))
  }, [])

  return (
    <div className="app">
      <button onClick={mostrar}>kasdvf</button>
      <FloatingButton/>
      <section className="hero">
        <h1>Welcome to Marketplace!</h1>
      </section>
      <Products/>
      <footer>
        <p>&copy; 2023 Marketplace. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
