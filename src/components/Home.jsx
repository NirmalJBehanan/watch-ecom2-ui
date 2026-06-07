import React, { useContext } from 'react'
import Banner from './Banner'
import ProductCard from './ProductCard'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import banner from '../assets/photos/banner.jpg'
import Mycontext from './Mycontext'
import "../App.css"
const Home = () => {
    const { productsData } = useContext(Mycontext);

    return (

        <>
            <div className='container'>
                <Header page="home"/>
                <Banner  img={banner} />
                <div className='produts'>
                    {

                        productsData.products.map((product) =>
                        (< ProductCard key={product.id} id={product.id} title={product.title} price={product.price} image={product.image} />)
                        )

                    }
                </div>
            </div>
        </>
    )
}

export default Home