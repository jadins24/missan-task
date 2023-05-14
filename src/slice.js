import { createSlice } from "@reduxjs/toolkit";
import { productData } from "./datas/productData.js";


const slice=createSlice({
    name:'products', 
    initialState:{

        productdata:productData,
        
        
    },
    reducers:{
        
        
       
    }
})


export default slice.reducer;