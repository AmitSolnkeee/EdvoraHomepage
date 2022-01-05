import React from 'react';
import { useEffect, useState } from 'react';

const SideBar = (props) => {
   
	return (
		<div className="section-filter">
			 <div className="title-filter">
				<font>Filter</font>
			 </div><hr className="hr-style" />
			 <div className="product-filter">
				<select className="select-option">
					{
                        props.fetchData.map((elm,idx)=>{
                            return(
                                <>
                                    <option selected disabled hidden>Product</option>
                                    <option>{elm.product_name}</option>
                                </>)
                        })
                    }
				</select>
			</div>
            <div className="state-filter">
				<select className="select-option">
					{
                        props.fetchData.map((stateList,idx)=>{
                            return(
                                <>
                                    <option selected disabled hidden>State</option>
                                    <option>{stateList.address.state}</option>
                                </>)
                        })
                    }
				</select>
			</div>
            <div className="city-filter">
				<select className="select-option">
					{
                        props.fetchData.map((cityList,idx)=>{
                            return(
                                <>
                                    <option selected disabled hidden>City</option>
                                    <option>{cityList.address.city}</option>
                                </>)
                        })
                    }
				</select>
			</div>
		</div>
	);
};

export default SideBar;
