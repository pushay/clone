import React, { useState, useEffect } from 'react';
import transparentPhone from '../Assets/transparentPhone.png';
import slide1 from '../Assets/loginImageSlider/slide1.jpg';
import slide2 from '../Assets/loginImageSlider/slide2.jpg';
import slide3 from '../Assets/loginImageSlider/slide3.jpg';
import slide4 from '../Assets/loginImageSlider/slide4.jpg';

const slides = [slide1, slide2, slide3, slide4]

function ImageSlider(props){

    const [loginSlider, setLoginSlider] = useState(0)

    useEffect( () => {
       const slider =setInterval(() => {
           loginSliderWorking()
       }, 6000)

       return () => clearInterval(slider)

    },[])

    const loginSliderWorking = () => {
        setLoginSlider(prevLoginSlider => {
            if (prevLoginSlider == slides.length - 1) return 0
            return prevLoginSlider + 1
        })
    }



    // console.log(props)
    if (props.imageSlider == 'login'){
        return(
            <div className='imageSlider'>
               <img src={transparentPhone} alt='transparentPhone' className='imageSlider__transparentPhone'/>
               <div className='imageSlider__slideContainer'>
                    <img src={slides[loginSlider]} alt={slide1} className='imageSlider__insidePhoto' />
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