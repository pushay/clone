import React, { useState, useEffect } from 'react';
import transparentPhone from '../Assets/transparentPhone.png';
import slide1 from '../Assets/loginImageSlider/slide1.jpg';
// import slide2 from '../Assets/loginImageSlider/slide2.jpg';
// import slide3 from '../Assets/loginImageSlider/slide3.jpg';
// import slide4 from '../Assets/loginImageSlider/slide4.jpg';

function ImageSlider(props){

    // eslint-disable-next-line no-unused-vars
    const [loginSlider, setLoginSlider] = useState()

    useEffect( () => {
        setInterval(loginSliderWorking, 200);
    },[])

    const loginSliderWorking = () => {
        
    }

    console.log(props)
    if (props.imageSlider == 'login'){
        return(
            <div className='imageSlider'>
               <img src={transparentPhone} alt='transparentPhone' className='imageSlider__transparentPhone'/>
               <div className='imageSlider__slideContainer'>
                    <img src={slide1} alt={slide1} className='imageSlider__insidePhoto' />
               </div>
            </div>
        )
    }

    else return(
        <div>
            else case
        </div>
    )
}

export default ImageSlider