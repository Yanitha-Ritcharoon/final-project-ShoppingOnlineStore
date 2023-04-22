import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartIcon from './Cart-Icon';


function CustomNavbar() {
    const navigate = useNavigate();
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
                    <Nav.Link onClick={() => navigate('/products')}>Products</Nav.Link>
                    <Nav.Link onClick={() => navigate('/orders')}>Orders</Nav.Link>
                </Nav>
                <Nav>
                    <Link to="/orders">
                        <CartIcon />
                    </Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    );
}

export default CustomNavbar;

