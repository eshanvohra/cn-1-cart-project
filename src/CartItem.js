import React, { useState } from 'react'
import './index.css';
const CartItem=(props)=>{

    // const {cost,name,Qt}=props;
    console.log(props);
    const [cartItem,setItem]=useState({
        price:props.price,
        title:props.title,
        Qty:props.Qty,
       
        img:'https://image.flaticon.com/icons/png/512/3020/3020657.png'
    })
    const {price,title,Qty,img}=cartItem;
    const increaseQty=()=>{
      var NewQty=Qty+1;
        setItem({
            ...cartItem,
            Qty:NewQty
        })
        var NewQty=Qty+5;
        setItem({
            ...cartItem,
            Qty:NewQty
        })
        var NewQty=Qty+1;
        setItem({
            ...cartItem,        // BATCHING   it merges all setstate rquests and makes last rrequest effective
            Qty:NewQty
        })
    }
    const decQty=()=>{

        var NewQty=Qty>1?Qty-1:1;
        setItem({
            ...cartItem,
            Qty:NewQty
        })
    }
   
    return (
        <>
        <div className='cart-item'>
            <div className='left-block'>
                <img style={styles.image} src={img}/>
            </div>
            <div className='right-block'>
            <div>{title}</div>
            <div>{price}</div>
            <div>{Qty}</div>
                <div className='cart-item-actions'>
                    <img alt="increase" src="https://image.flaticon.com/icons/png/512/992/992651.png" className='action-icons' onClick={increaseQty}/>
                    <img alt="decrease" src="https://image.flaticon.com/icons/png/512/992/992683.png" className='action-icons'
                        onClick={decQty}
                    />
                    <img alt="delete" src="https://image.flaticon.com/icons/png/512/3096/3096673.png" className='action-icons'/>
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