import React, { ChangeEvent, ChangeEventHandler, useEffect } from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ProductType } from './types/ProductType';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Styles from "../../styles/products.module.css"

type ProductProps = {
    id: number | undefined,
    booleanProps: boolean,
    productData: ProductType[],
    handleForm: (products: ProductType) => void,
    title: string
}

const ProductForm = ({ id, booleanProps, productData, handleForm, title }: ProductProps) => {

    const [show, setShow] = useState(true);
    const [products, setProducts] = useState<ProductType>({ name: "", price: "", descricao: "" })
    useEffect(() => {
        setShow(!show)
        if (id != undefined && id > 0) {
            setProducts(productData[id - 1])
            console.log(id)
        }
    }, [booleanProps])

    const handleOnChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        setProducts({ ...products, [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value })
        console.log(products)
    }
    const submit = (productSubmited: ProductType) => {
        if (productSubmited.name.length < 3 || productSubmited.name.length > 30) {
            alert("Nome precisa ter entre 4 e 30 caracteress.")
            return
        }
        if (parseFloat(productSubmited.price) < 0) {
            alert("O preço precisa ser maior que 0.")
            return
        }
        handleForm(productSubmited)
    }

    return (
        <Modal size="lg" show={show} onHide={() => setShow(false)} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FloatingLabel controlId="floatingInput" label="Nome do projeto" className="mb-3">
                    <Form.Control
                        type="email"
                        placeholder="Ex: Meu projeto"
                        name='name'
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
                        value={products ? products.name : undefined}
                    />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Orçamento do projeto" className="mb-3">
                    <Form.Control
                        type="number"
                        placeholder="Ex: 100"
                        name='price'
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
                        value={products ? products.price : undefined}
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingTextarea"
                    label="Descrição"
                    className="mb-3"
                >
                    <Form.Control
                        as="textarea"
                        placeholder="Descrição"
                        name='descricao'
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
                        value={products ? products.descricao : undefined}
                    />
                </FloatingLabel>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(!show)}>
                    Fechar
                </Button>
                <Button variant="primary" onClick={() => submit(products)}>
                    Salvar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ProductForm