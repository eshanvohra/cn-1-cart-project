import React, { useState } from 'react'
import CartItem from './CartItem'

const Cart=()=>{

const Items=[{
    title:"Watch",
     Qty:12,
    price:1000,
    id:1,
    img:"https://images.unsplash.com/photo-1622182125060-0b0c9454824c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
},
{
    title:"Laptop",
     Qty:1,
    price:1000,
    id:2,
    img:"https://images.unsplash.com/photo-1622188539562-e966ba2eb076?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
},
{
    title:"Phone",
     Qty:1,
    price:1000,
    id:3,
    img:"https://images.unsplash.com/photo-1622182230179-da6b2be3265b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
},
];
const [AllItems,setItems]= useState(Items);


const handleIncrease=(product)=>{
console.log(product);

const p=AllItems.find(a=> a.id===product.id)

console.log(p.id);

p.Qty++;

const newArr=AllItems.map((element)=>{
    if(element.id===p.id){
        return p;
    }
    else{
        return element;
    }
});
console.log(newArr);
console.log(AllItems);

 setItems([...newArr]);

 

}

const handleDecrease=(product)=>{
    console.log(product);
    
    const p=AllItems.find(a=> a.id===product.id)
    
    console.log(p.id);
    p.Qty=p.Qty>1?p.Qty-1:1;
    
    const newArr=AllItems.map((element)=>{
        if(element.id===p.id){
            return p;
        }
        else{
            return element;
        }
    });
    console.log(newArr);
    console.log(AllItems);
    
     setItems([...newArr]);
    
     
    
    }
    
const handleDelete=(product)=>{
    const p=AllItems.find(a=> a.id===product.id);
    const newArr=AllItems.filter((element)=>element.id!=p.id);
    setItems([...newArr]);
}


// const handleIncrease=(product)=>{
// console.log("Hwy please increase thequantity of product",product);
// // var foundItem = Items.find(x => x.id == productid);
// // console.log(foundItem.title);

// // setItems({
// //     ...AllItems,

// // })
// const index=(AllItems.findIndex(i => i.id === product.id));

// AllItems[index].Qty+=1;
// console.log(AllItems);
// // setItems(AllItems);
// console.log(Items);
// // Items=[...AllItems,Items[index].Qty+=1];
// // console.log(AllItems);
// // const index=Items.indexOf(product);
// // console.log(index);
// // products[index].Qty+=1;
 

// }

        return (
            <div className='cart'>

{
   
    AllItems.map((element)=>{
          
          return (
           
             
              <CartItem {...element} key={element.id} onIncreaseQty={handleIncrease} onDecreaseQty={handleDecrease} onDelete={handleDelete} />
                )
    })
}
               
                
            </div>
        )
    }



export default Cart;