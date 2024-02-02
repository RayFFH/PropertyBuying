import React from 'react';

import "./index.css"
import apt13 from '../../assets/13.jpg'
import apt14 from '../../assets/14.jpg'
import apt15 from '../../assets/15.jpg'
import apt20 from '../../assets/20.jpg'
import apt21 from '../../assets/21.jpg'

const Best = () =>{
    return(
        <div className="best">
            <h1>Find the best properties currently</h1>
            <div>
                <p><span className='bold'>All</span></p>
                <p>City Center</p>
                <p>North London</p>
                <p>South London</p>
            </div>
            <div className='container'>
                <img src={apt21} alt=''/>
                <img src={apt20} alt=''/>
                <img src={apt15} alt=''/>
            </div>
            <button className='btn'>View All</button>
        </div>
    )
}

export default Best