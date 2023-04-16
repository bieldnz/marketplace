import React from 'react'
import Styles from "../../styles/products.module.css"
type ProductProps = {
    id: any,
    name: string,
    price: number,
    handleRemove: any,
    handleEdit: any
}

const Product = ({id,name, price, handleRemove, handleEdit}: ProductProps) => {

  const remove: any = () => {
    handleRemove(id)
  }
  const edit: any = () => {
    handleEdit(id)
  }

  return (
    
        <div className={Styles.product} key={id}>
          <div>
            <h3>{name}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <span className="price">R${price}</span>
            <div className={Styles.buttons}>
              <button onClick={remove}>Excluir</button>
              <button onClick={edit}>Editar</button>
            </div>
          </div>
        </div>
        
  )
}

export default Product