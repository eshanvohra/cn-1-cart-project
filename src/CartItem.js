import React from 'react'
import './index.css';
const CartItem=()=>{
    return (
        <>
        <div className='cart-item'>
            <div className='left-block'>
                <img style={styles.image}/>
            </div>
            <div className='right-block'>
            <div>Phone</div>
            <div>Rs.10000</div>
            <div>Qty:1</div>
                <div className='cart-item-actions'>
                    <div className='action-icons'>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:10,
        background:'#ccc'
    }
}

export default CartItem;