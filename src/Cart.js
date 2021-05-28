import React, { useState } from 'react'
import CartItem from './CartItem'

const Cart=()=>{

const Items=[{
    title:"Watch",
     Qty:1,
    price:1000,
    id:1
},
{
    title:"Laptop",
     Qty:1,
    price:1000,
    id:2
},
{
    title:"Phone",
     Qty:1,
    price:1000,
    id:3
},
];

        return (
            <div className='cart'>
{
    Items.map((element)=>{
          return (
           
             
              <CartItem {...element} key={element.id} />
                )
    })
}
               
                
            </div>
        )
    }



export default Cart;