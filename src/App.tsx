import { useEffect, useState } from 'react'
import Products from './components/products/Products'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="app">
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
