import React , { useEffect, useState }from 'react'
import './products.scss';
import { useNavigate ,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {

    const state = useSelector(({ products }) => products);
    
  return (
    <div className='products'>
        <div className='products-container'>
        
            
            <div className='products-cards'>
                {state.productdata.slice(0,8).map((value, index) => {
                    return (
                       
                            <div className='products-padding ' key={index}>
                                <div className='products-card'>
                                    <div className='img'>
                                        <img src={value.imgurl} alt='no image'/>
                                    </div>

                                    <h3>{value.productname}</h3>
                                    
                                    <h2>₹ {value.price}<span >₹ {value.mrp}</span> </h2>

                                    <p>{value.description}</p>

                                    <div className='btns'>
                                        <a href='#' className='btn'> Add Cart</a>
                                        <a href='#' className='btn'>Buy NOW </a>
                                        
                                    </div>
                                </div>
                            </div>
                       
                    );
                })}
            </div>


        </div>
    </div>
  )
}

export default Products