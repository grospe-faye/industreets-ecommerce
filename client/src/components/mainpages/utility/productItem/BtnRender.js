import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'

function BtnRender({product, deleteProduct}) {
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart

    
    return (
        <div className="row_btn">
            {
                isAdmin ? 
                <>
                   <Link id="btn_buy" to={`/edit_product/₱{product._id}`} style={{ color: '#FFF' }} >
                        Edit
                    </Link>
                     <Link id="btn_view" to="#!" onClick={() =>deleteProduct(product._id, product.images.public_id)} style={{ color: '#FA8200' }}> 
                        Delete
                    </Link>
                </>
                : <>
                    <Link id="btn_buy" to="#!" onClick={() => addCart(product)} style={{ color: '#FFF' }} >
                        Buy
                    </Link>
                    <Link id="btn_view" to={`/detail/${product._id}`} style={{ color: '#FA8200' }}>
                        View
                    </Link>
                </>
            }
                
        </div>
    )
}

export default BtnRender