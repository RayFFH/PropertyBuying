import React from 'react'

import './index.css'
import bed8 from '../../assets/8.jpg'
import bed9 from '../../assets/9.jpg'
import bath10 from '../../assets/10.jpg'
import house11 from '../../assets/11.jpg'
import bath7 from '../../assets/7.jpg'

import House6 from '../../assets/6.jpg'
import Bed12 from '../../assets/12.jpg'
import Bed1 from '../../assets/1.jpg'
import kitchen17 from '../../assets/17.jpg'
import bath16 from '../../assets/16.jpg'


const Featured = () => {
    return(
        <div className='featured'>
            <h1 className='featured-text'>Top Featured Listings</h1>
            <p className='featured-text'>Selected listings by City</p>
            <div className ='container'>
                <img className='span-3 image-grid-row-2' src={house11} alt="image"/>
                <img src={bed9} alt="image"/>
                <img src={bath10} alt="image"/>
                <img src={bed8} alt="image"/>
                <img src={bath7} alt="image"/>
                <div className='span-3 img-details'>
                    <div className='top'>
                        <h2>123 Greenwich</h2>
                        <p>House for Sale</p>
                        <p className='price'>£2,100,000</p>
                    </div>
                    <div className = "info-grid">
                        <div>
                            <div className ="info">
                                <p className='bold'>Bedrooms</p><p>4</p>
                            </div>
                            <div className ="info">
                                <p className='bold'>Bathrooms</p><p>2</p>
                            </div>
                        </div>
                        <div>
                            <div className ="info">
                                <p className='bold'>Square feet</p><p>9000</p>
                            </div>
                            <div className ="info">
                                <p className='bold'>Est. Price</p><p>£4000pm</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='span-2 right-img-details'>
                    <p>
Nestled in the heart of London, this stunning modern home seamlessly blends contemporary design with timeless elegance, featuring sleek architectural lines, expansive glass facades, and luxurious interiors, creating an inviting haven for sophisticated urban living</p>
                <button className='btn'>View Listing</button>
                </div>
            </div>

            <div className ='container'>
                <img className='order-2' src={Bed12} alt="image"/>
                <img className='order-3'src={Bed1} alt="image"/>
                <img className ='span-3 image-grid-row-2 order-1'src={House6} alt="image"/>
                <img className='order-4'src={kitchen17} alt="image"/>
                <img className='order-5' src={bath16} alt="image"/>
                <div className='span-2 right-img-details order-7'>
                    <p>
Nestled in the heart of London, this stunning modern home seamlessly blends contemporary design with timeless elegance, featuring sleek architectural lines, expansive glass facades, and luxurious interiors, creating an inviting haven for sophisticated urban living</p>
                <button className='btn'>View Listing</button>
                </div>


                <div className='span-3 img-details order-6'>
                    <div className='top'>
                        <h2>123 Victoria</h2>
                        <p>House for Sale</p>
                        <p className='price'>£10,100,000</p>
                    </div>
                    <div className = "info-grid">
                        <div>
                            <div className ="info">
                                <p className='bold'>Bedrooms</p><p>4</p>
                            </div>
                            <div className ="info">
                                <p className='bold'>Bathrooms</p><p>2</p>
                            </div>
                        </div>
                        <div>
                            <div className ="info">
                                <p className='bold'>Square feet</p><p>9000</p>
                            </div>
                            <div className ="info">
                                <p className='bold'>Est. Price</p><p>£4000pm</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Featured