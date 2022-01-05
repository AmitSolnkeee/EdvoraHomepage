import React from 'react'
import Carousel from 'react-elastic-carousel'
import dateFormat from 'dateformat'

const breakPoints = [
    {width : 1 ,itemsToShow : 1},
    {width : 200 ,itemsToShow : 2},
    {width : 500 ,itemsToShow : 3},
    {width : 700 ,itemsToShow : 4},
]

export const CarouselSlide = (props) => {
    console.log(props)
    return (
        <div>
            <Carousel breakPoints={breakPoints} >
                           {
                               props.fetchData.map((elm1,idx1)=>{
                                   return(
                                       <div className='cards'>
                                           <div className='image-css'>
                                              <img width='70px' height='70px' style={{borderRadius:'5px'}} src={elm1.image}/>
                                           </div>
                                           <div className='fontp-css'>
                                               <font>{elm1.product_name}</font>
                                           </div>
                                           <div className='brand-css'>
                                               <font>{elm1.brand_name}</font>
                                           </div>
                                           <div className='price-css'>
                                               <font>$ {elm1.price}</font>
                                           </div>
                                           <div className='location-css'>
                                              <font>{elm1.address.city}</font>    
                                           </div>   
                                           <div className='date-css'>
                                               <font>Date:{dateFormat(elm1.date, "dd:mm:yyyy")}</font>
                                           </div>
                                           <div className='discription-css'>
                                               <font><span className='discription-span'>Description : </span> {elm1.discription}</font>
                                           </div>
                                      </div>
                                   )
                               })
                           }
                       </Carousel>
            
        </div>
    )
}
