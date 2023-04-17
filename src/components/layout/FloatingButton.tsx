import React, { ChangeEvent } from 'react'
import Styles from "../../styles/floatingButton.module.css"
import { useState } from "react"
import ProductForm from './ProductForm'
import { ProductType } from './types/ProductType'

type ButtonPros = {
    productsData: ProductType[],
}

const FloatingButton = ({productsData}: ButtonPros) => {

    async function handleSave(productData: ProductType) {
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
            <button className={Styles.allFloating} onClick={() => setBooleanProps(!booleanProps)}>ADICIONE PROJETO</button>
            <ProductForm
                id={0}
                booleanProps={booleanProps}
                productData={productsData}
                handleForm={handleSave}
                title='Criar Projeto'
            />
        </>
    )
}

export default FloatingButton