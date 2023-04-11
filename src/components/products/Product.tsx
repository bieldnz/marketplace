import React from 'react'
import Styles from "../../styles/products.module.css"
type ProductProps = {
    id: any,
    name: string,
    price: number
    img: string
}

const Product = ({id,name, price, img}: ProductProps) => {
  return (
    
        <div className={Styles.product} key={id}>
            <img src={img} alt="" width="300px" height="200px"/>
            <h3>{name}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <span className="price">{price}</span>
            <a href="#" className="cta-button">Buy Now</a>
        </div>
        
  )
}

export default Product