import React from 'react'
import { useState, useEffect } from 'react'
import Product from './Product'
import Styles from "../../styles/products.module.css"
import FloatingButton from '../layout/FloatingButton'
import ProductForm from '../layout/ProductForm'

const Products = () => {
    const [products, setProducts] = useState<any>({})
    const [id, setId] = useState(0)
    const [booleanProps, setBooleanProps] = useState(false)

    const searchProducts: any = async () => {
        await fetch("https://json3-vpe5.vercel.app/products", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then((resp) => resp.json())
        .then((data) => {
            setProducts(data)
            console.log(data)
        })
    }

    useEffect(() => {
        searchProducts()
        console.log(products)
    }, [])

    async function handleRemove(id: any) {
        console.log("KÇHN")
        await fetch(`https://json3-vpe5.vercel.app/products/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },body: JSON.stringify(products)
        }).then((resp) => resp.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
        
        console.log("lkHN")
        location.reload()
    }

    const handleEdit = (id: any) => {
        setBooleanProps(!booleanProps)
        setId(id)
    }
    
    async function edit(products: any) {
        setBooleanProps(!booleanProps)
        await fetch(`https://json3-vpe5.vercel.app/products/${products.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(products)
        }).then((resp) => resp.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
        location.reload()
        
       
       console.log(products)
    }

    return (
        <div className={Styles.featuredProducts}>
            <ProductForm handleForm={edit} productData={products} id={id} booleanProps={booleanProps}/>
            <FloatingButton productsData={products}/>
            {products.length > 0 ? products.map((product: any) => (
                <Product
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    key={product.id}
                    handleRemove={handleRemove}
                    handleEdit={handleEdit}
                />
            )): <h3 className={Styles.emptyProducts}>Carregando</h3>}
        </div>
    )
}
export default Products