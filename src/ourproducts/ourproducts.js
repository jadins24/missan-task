import React , { useEffect, useState }from 'react'
import './ourproducts.scss';
import { useNavigate ,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Ourproducts = () => {

    const state = useSelector(({ products }) => products);
    // const params = useParams();
    const [mapproduct,changeMapproduct]=useState(state.productdata);
  
    const [allProduct, changeAllProduct] = useState("all");
console.log("fs" + allProduct);

useEffect(()=>{
  
 

  if(allProduct==="all"){
    changeMapproduct(state.productdata);
  }
  else if(allProduct==="earbuds") {
  
    var earbuds=state.productdata.filter((value) => {
      return value.caretory==="earbuds"

    })
    changeMapproduct(earbuds)
  }
  else if(allProduct==="neckbands") {
  
    var neckbands=state.productdata.filter((value) => {
      return value.caretory==="neckbands"

    })
    changeMapproduct(neckbands)
  }
  else if(allProduct==="headphones") {
  
    var headphones=state.productdata.filter((value) => {
      return value.caretory==="headphones"

    })
    changeMapproduct(headphones)
  }

},[allProduct])
    

  return (
    <div className='products'>
        <div className='products-container'>
        <div className='filter'>
                <div className='head'> 
                  <h1>PRODUCTS</h1>
                </div>
                <div className="filter-container">
                <p>Filter by Category:</p>
                
                    <select
                      name="category-list"
                      id="category-list"
                      onChange={(event) => changeAllProduct(event.target.value)}
                    >
                      <option value="all">All</option>
                      <option value="earbuds">earbuds</option>
                      <option value="neckbands">neckbands</option>
                      <option value="headphones">headphones</option>
                    </select>
                
              </div>
            </div>
            
            <div className='products-cards'>
                {mapproduct.map((value, index) => {
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

export default Ourproducts