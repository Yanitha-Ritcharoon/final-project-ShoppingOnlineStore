// contain som text to display at the bottom of the page
import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <p>&copy; 2023 Yanitha Ritcharoon. All rights reserved.</p>
            <div className="social-icons">
                < a href="https://github.com/Yanitha-Ritcharoon" target="_blank" rel="noopener noreferrer">
                    <i className='fab fa-github fa-lg'></i>
                </a>
                < a href="https://www.linkedin.com/in/yanitha-ritcharoon-3b54881b6/" target="_blank" rel="noopener noreferrer">
                    <i className='fab fa-linkedin fa-lg'></i>
                </a>
            </div>
        </div>   
    );
};

export default Footer;