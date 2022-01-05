import React  from 'react'
import { CarouselSlide } from './CarouselSlide'




const Slider = (props) => {
    
    return (
       <div className='main-content'>
           <div className='head-title'>
               <font>Edvora</font>
           </div>
           <div className='product-title'>
               <font>Products</font>
           </div>
           <div className='productname-slider'>
                <font>Product Name </font>
           </div><hr className='productname-hr'/>
           <div className='main-slider-container'>
             <CarouselSlide fetchData={props.fetchData}/>     
           </div>
           <div className='productname-slide'>
               <font>Product Name</font>
           </div><hr className='productname-hrr'/>
           <div className='second-slider'>
             <CarouselSlide fetchData={props.fetchData}/>
           </div>
           
       </div>
    )
}

export default Slider

