import React, { useContext } from 'react'
import "../App.css"
import Mycontext from './Mycontext'
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';

const Header = ({page}) => {
    const { cartCount, setCartCount } = useContext(Mycontext);
    const navigate = useNavigate();
    return (
        <>
            <nav className='navbar'>
                <h2 style={{ color: "red" }}><span><i className="fa-solid fa-stopwatch"></i></span>Watch Mart</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Shop</li>
                </ul>
                {
                page==="home"?
                <button onClick={() => navigate("/cart")}><span><i className="fa-solid fa-cart-shopping"></i></span>Cart {cartCount}</button>:
                <button onClick={() => navigate("/")}><span><i className="fa-solid fa-cart-shopping"></i></span>Product</button>
                }
                </nav>

        </>
    )
}

export default Header