import React from 'react'
import Styles from "../../styles/products.module.css"
import Card from 'react-bootstrap/Card';
import { BsFillPencilFill, BsFillTrash3Fill } from "react-icons/bs"

type ProductProps = {
  id: number | undefined,
  name: string,
  price: string,
  descricao: string,
  handleRemove: (id: number | undefined) => void,
  handleEdit: (id: number | undefined) => void
}

const Product = ({ id, name, price, descricao, handleRemove, handleEdit }: ProductProps) => {

  const remove = () => {
    handleRemove(id)
  }
  const edit = () => {
    handleEdit(id)
  }

  return (
    <div className={Styles.allCard}>
      <Card style={{ width: '18rem', height: "235px" }}>
        <Card.Body className={Styles.card}>
          <div className={Styles.cardContent}>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Orçamento: {price}R$</Card.Subtitle>
            <Card.Text>
              {descricao}
            </Card.Text>
          </div>
          <div className={Styles.cardButton}>
            <button onClick={() => handleEdit(id)}><BsFillPencilFill />Editar </button>
            <button onClick={() => handleRemove(id)}><BsFillTrash3Fill />Excluir</button>
          </div>

        </Card.Body>
      </Card>
    </div>

  )
}

export default Product