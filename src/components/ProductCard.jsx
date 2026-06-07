import React, { useContext, useState } from 'react'
import Mycontext from './Mycontext';

const ProductCard = ({ id, title, price, image }) => {
    const { cartCount, setCartCount, addedProducts, setAddedProducts } = useContext(Mycontext);

    const isAdded = addedProducts.find(product => product.id === id);
    function addtocart() {
        setAddedProducts([...addedProducts, {
            id: id,
            quantity: 1
        }])
        setCartCount(cartCount + 1)
    }

    function removefromcart() {
        setAddedProducts(
            addedProducts.filter(product => product.id !== id)
        )

        setCartCount(cartCount - 1)
    }
    return (
        <>
            <div className='card'>
                <img className='watchImage' src={image} />
                <h4>{title}</h4>
                <p>{price}</p>
                {
                    isAdded ? <button onClick={() => removefromcart()}>Remove From cart</button> :
                        <button onClick={() => addtocart()}>Add to cart</button>
                }
            </div>
        </>
    )
}

export default ProductCard