import React, { ChangeEvent } from 'react'
import Styles from "../../styles/floatingButton.module.css"
import { useState } from "react"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const FloatingButton = () => {

    const [show, setShow] = useState(false);
    const [products, setProducts] = useState({})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onFileChange = (e: any) => {
        const files = e.target.files[0]
        const reader = new FileReader()

        reader.addEventListener("load", () => {
            setProducts({...products, [e.target.name]: reader.result})
        console.log(products)
        })
        reader.readAsDataURL(files)


    }
    function handleOnChange(e: any){
        setProducts({...products, [e.target.name]: e.target.value})
        console.log(products)
    }
    function handleSave(e: any){
        e.preventDefault()
    fetch('http://localhost:5000/products', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(products),
    }).then((resp) => resp.json())
        .then((data) => {console.log(data)})
        handleClose()
    }
    return (
        <>
            <button className={Styles.allFloating} onClick={handleShow}>ADICIONE PRODUTO</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        NOME:  <input type='text' name='name' onChange={handleOnChange}/><br/>   
                        PREÇO: <input type='number' name='price' onChange={handleOnChange}/>
                        <input type='file' id='input' accept='image/*' name='foto' onChange={onFileChange}/>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default FloatingButton