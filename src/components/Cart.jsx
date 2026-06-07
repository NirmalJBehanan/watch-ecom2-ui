import React, { useContext } from 'react'
import Mycontext from './Mycontext'
import Header from './Header';
import "../App.css"
import empty from "../assets/photos/empty-cart.png"
const Cart = () => {
    let total = 0;
    const { addedProducts, productsData, setAddedProducts } = useContext(Mycontext)

    const cartItems = addedProducts.map(item => {

        const product = productsData.products.find(
            product => product.id === item.id
        );

        return {
            ...product,
            quantity: item.quantity
        };

    });
    cartItems.forEach(element => {
        total = total + Number(element.price) * element.quantity;
        console.log(total)
    });

    const updateQuantity = ((id, newquantity) => {
        setAddedProducts(
            addedProducts.map(product =>
                product.id === id ?
                    {
                        ...product, quantity: Number(newquantity)
                    } :
                    product

            ))

    })


    console.log(cartItems)

    return (

        <div className='container'>
            <Header page="cart" />
            {
                cartItems.length === 0 ? (
                    <div  className='empty'>
                    <img src={empty}/>
                     </div>
                ) : (
                    cartItems.map(product => (
                        <div key={product.id} className='cart-container'>
                            <div className='cart-1'>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    width="120"
                                />
                            </div>
                            <div className='cart-2'>
                                <h3>{product.title}</h3>
                                <p>In Stock</p>
                                <select value={product.quantity} onChange={(e) =>
                                    updateQuantity(product.id, e.target.value)
                                }>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                            </div>
                            <div className='cart-3'>
                                <p>{product.price}</p>
                                <br></br>
                                <div>
                                <p>Total:</p>
                                <p>{product.price * product.quantity}</p></div>
                            </div>
                        </div>
                    ))
                )}
            {
                cartItems.length > 0 && 
                <div className='cart-4-container'>
                    <div className='div-1'>
                    
                <h2>Total :</h2>
                </div>
                <div className='div-2'>
                <h2> {total} </h2>
                </div></div>
            }
        </div>
    )
}

export default Cart