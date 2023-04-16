import React, { useEffect } from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
type ProductProps = {
    id: number,
    booleanProps: any,
    productData: any,
    handleForm: any
}

const ProductForm = ({id, booleanProps, productData, handleForm}: ProductProps) => {

    const [products, setProducts] = useState(productData)
    const [show, setShow] = useState(true);

    useEffect(() => {
        setShow(!show)
        if(id > 0){
            setProducts(productData[id-1])
        }
    }, [booleanProps])

    const handleOnChange = (e: Event) => {
        setProducts({...products, [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value })
        console.log(products)
    }
    const submit = (productSubmited: any) => {
        if(productSubmited.name.length < 3 || productSubmited.name.length > 30){
            alert("Nome precisa ter entre 4 e 30 caracteres.")
            return
        }
        if(productSubmited.price < 0){
            alert("O preço precisa ser maior que 0.")
            return
        }
        if(productSubmited.descricao > 50){
            alert("A descrição precisa ter menos de 50 caracteres")
            return
        }
        handleForm(productSubmited)
    }

    return (
        <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        NOME:  <input
                            type='text'
                            name='name'
                            onChange={(e:any) => handleOnChange(e)}
                            value={products.name ? products.name : ""}
                        /><br />
                        PREÇO: <input
                            type='number'
                            name='price'
                            onChange={(e:any) => handleOnChange(e)}
                            value={products.price ? products.price : ""}
                        /><br />
                        <textarea
                            maxLength={100}
                            id='input'
                            name='descricao'
                            onChange={(e:any) => handleOnChange(e)}
                            value={products.descricao ? products.descricao : ""}
                        />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(!show)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => submit(products)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
  )
}

export default ProductForm