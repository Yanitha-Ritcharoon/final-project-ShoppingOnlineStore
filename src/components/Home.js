import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <div className="banner">
                <div className="banner-overlay">
                    <div className="row">
                        <div className="col-lg-9">
                            <h1 className="banner-title">Welcome to The Universal Online Store</h1>
                            <p className="banner-description">
                                Check out our latest products and place an order today!
                            </p>
                            <Link to="/products" className="btn btn-primary">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;