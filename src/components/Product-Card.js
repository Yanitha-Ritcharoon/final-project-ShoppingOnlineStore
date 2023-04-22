import React, {useContext} from "react";
import { Card, Button } from "react-bootstrap";
import { ModalContext } from "./Products";


const ProductCard = ({ product, onProductSelect, onProductDetails }) => {
    const {setShowmodal} = useContext(ModalContext)
    const handleProductSelect = () => {
        console.log(`Selected product with ID ${product.id}`);
        onProductSelect(product.id);
    };

    const handleProductDetails = () => {
        onProductDetails(product.id);
        setShowmodal(true);
    }

    return (
        <Card
        key={product.id}
        className="product-card"
        >
            <Card.Img 
            src={product.image} 
            variant="top"
            onClick={handleProductSelect}
            />
            <Card.Body>
                <Card.Title as="div">
                    <strong>{product.title}</strong>
                </Card.Title>
                <Card.Text as="div">
                    <div className="my-3">{`$${product.price}`}</div>
                </Card.Text>
                <Button variant="primary" onClick={handleProductDetails}>View Details</Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;