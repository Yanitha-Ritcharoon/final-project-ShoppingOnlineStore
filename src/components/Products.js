import React, { useState, useEffect, createContext, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductList from "./Product-List";
import { ProductDetails } from "./Product-Details";
import { OrdersContext } from "../App";

//render the product list and product detail
export const ModalContext = createContext();

const Products = () => {
    const [showModal, setShowmodal] = useState(false);
    const [products, setProducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const {cartItems, setCartItems} = useContext(OrdersContext);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            })
            .catch(error => console.log(error));
    }, []);

    const handleProductSelect = (productId) => {
        setSelectedProductId(productId);
    };

    const handleProductDetails = (productId) => {
        setSelectedProductId(productId);
    };

    const handleProductDeselect = () => {
        setSelectedProductId(null);
    };

    const handleAddToCart = (product) => {
        setCartItems([...cartItems, {...product, quantity: 1}]);
    };

    return (
        <ModalContext.Provider value={{ showModal, setShowmodal, cartItems, setCartItems }}>
            <Container fluid className="products-container">
                <h1>Products</h1>
                {products.length === 0 ? (
                    <p>No products to display.</p>
                ) : (
                    <Row className="justify-content-between">
                        {products.map((product) => (
                            <Col lg={3} key={product.id}>
                                <ProductList
                                    product={product}
                                    onProductSelect={() => handleProductSelect(product.id)}
                                    onProductDetails={() => handleProductDetails(product.id)}
                                />
                            </Col>
                        ))}
                    </Row>
                )}

                <div className={`product-details-container ${selectedProductId ? "" : "hidden"}`}>
                    <Col lg={4}>
                        {selectedProductId && (
                            <ProductDetails
                                product={products.find((p) => p.id === selectedProductId)}
                                onProductDeselect={handleProductDeselect}
                                onAddToCart={handleAddToCart}
                            />
                        )}
                    </Col>
                </div>
            </Container>
        </ModalContext.Provider>
    );
};

export default Products; 