import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { OrdersContext } from '../App';
import { ModalContext } from './Products';


const ProductDetails = ({ product, onAddToCart }) => {
    
    const {showModal, setShowmodal} = useContext(ModalContext);
    const {totalOrders, setTotalOrders} = useContext(OrdersContext);

    const handleAddToCart = () => {
        if (typeof onAddToCart === 'function') {
            onAddToCart(product);
        }
        setShowmodal(false);
        setTotalOrders(totalOrders +  1);
    };

    const handleCloseModal = () => {
        setShowmodal(false);
    };

    return (
        <>
            {product && (
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{product.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={product.image} alt={product.title} style={{ maxWidth: "100%"}} />
                        <p>{product.description}</p>
                        <p>{`$${product.price}`}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleAddToCart}>
                            Add to Cart
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
};


export { ProductDetails };