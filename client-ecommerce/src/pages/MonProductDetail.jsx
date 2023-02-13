import React from "react"
import {useParams} from "react-router-dom"
import { trendingProducts } from "../data";
import { useDispatch, useSelector } from "react-redux";


function MonProductDetail() {
    const {productId} = useParams()
    const thisProduct = trendingProducts.find(prod => prod.id === productId)
    
    return (
        <div>
            <h1>{thisProduct.name}</h1>
            <p>Price: ${thisProduct.price}</p>
            <p>{thisProduct.desc}</p>
        </div>
    )
}

export default MonProductDetail