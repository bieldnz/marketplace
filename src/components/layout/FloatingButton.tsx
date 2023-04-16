import React, { ChangeEvent } from 'react'
import Styles from "../../styles/floatingButton.module.css"
import { useState } from "react"
import ProductForm from './ProductForm'

type ButtonPros = {
    productsData: any,
}

const FloatingButton = ({productsData}: ButtonPros) => {

    async function handleSave(productData: any) {
        await fetch('https://json3-vpe5.vercel.app/products', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productData),
        }).then((resp) => resp.json())
        .then((data) => { console.log(data) })
        .catch((err) => console.log(err))

        location.reload()
    }

    const [booleanProps, setBooleanProps] = useState(false)
    console.log(booleanProps)
    return (
        <>
            <button className={Styles.allFloating} onClick={() => setBooleanProps(!booleanProps)}>ADICIONE PRODUTO</button>
            <ProductForm
                id={0}
                booleanProps={booleanProps}
                productData={productsData}
                handleForm={handleSave}
            />
        </>
    )
}

export default FloatingButton