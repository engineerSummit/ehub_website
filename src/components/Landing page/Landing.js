import React from 'react'
import Header from './Header'
import LeftLanding from './left_landing/LeftLanding'
import RightLanding from './right_landing/RightLanding'
import BottomLanding from './bottom_landing/BottomLanding'
import './landing.css' 



const Landing = () => {
    return (    
        <div>
            <Header />
            <div className="landing">
            <LeftLanding />  
            <RightLanding />             
        </div>
        <BottomLanding /> 
        </div>
    )
}

export default Landing
