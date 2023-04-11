import React from 'react'
import { useState, useEffect } from 'react'
import Product from './Product'
import Styles from "../../styles/products.module.css"

const Products = () => {
    const [products, setProducts] = useState<any>({})
    let name = ""
    let price = 0

    useEffect(() => {
        fetch("http://localhost:5000/products", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then((resp) => resp.json())
            .then((data) => {
                setProducts(data)
            })
    }, [])

    function handleSave(product: any){
    fetch('http://localhost:5000/products', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(products),
    }).then((resp) => resp.json())
        .then((data) => {console.log(data)})
    }

    return (
        <div className={Styles.featuredProducts}>
            {products.length > 0 && products.map((product: any) => (
                <Product id={product.id} name={product.name} price={product.price} key={product.id} img={product.foto}/>
            ))}
        </div>
    )
}

export default Products