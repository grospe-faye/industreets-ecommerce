import React, {useContext, useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utility/productItem/ProductItem'


function DetailedProduct() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const addCart = state.userAPI.addCart
    const [detailedProduct, setDetailedProduct] = useState([])

    useEffect(() =>{
        if(params.id){
            products.forEach(product => {
                if(product._id === params.id) setDetailedProduct(product)
            })
        }
    }, [params.id, products])

    console.log(detailedProduct)

    if(detailedProduct.length === 0) 
        return null;

    return (
        <>
           <div className='detail'>
                <img src={detailedProduct.images.url} alt=''/>
                <div className='box-detail'>
                    <div className='row'>
                        <h2>{detailedProduct.title}</h2>
                        <h6>#id: {detailedProduct.product_id}</h6>
                    </div>
                    <span>₱ {detailedProduct.price}.00</span>
                    <p>{detailedProduct.description}</p>
                    <p>{detailedProduct.content}</p>
                    <p>Sold: {detailedProduct.sold}</p>
                    <Link to='/cart' className='cart' onClick={() => addCart(detailedProduct)}>
                        Add to Cart
                    </Link>
                </div>
           </div>

           <div>
               <h2>Related products</h2>
               <div className="products">
                    {
                        products.map(product => {
                            return product.category === detailedProduct.category 
                                ? <ProductItem key={product._id} product={product} /> : null
                        })
                    }
                </div>
           </div>
        </>
    )
}

export default DetailedProduct