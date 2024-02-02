import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai';

import './index.css'

const Hero = () =>{
    return(
        <div className='hero'>
            <div className='content'>
                <h1>Search the best apartments in London</h1>
                <p className ='search-text'>Best family homes in london at an affordable price at your fingertips</p>
                <form className ='search'>
                    <div>
                        <input type='text' placeholder='Enter Keyword..'/>

                    </div>
                    <div className='radio'>
                        <input type='radio' checked/>
                        <label>Buy</label>
                        <input type='radio' checked/>
                        <label>Rent</label>
                        <button type='submit'><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
            
            </div>

        </div>
    )
}


export default Hero