import React from 'react'

const Navbar=(props)=>{
    return(
<div style={styles.nav} >
    <div style={styles.cartIconContainer} >
        <img style={styles.cartIcon} src="https://image.flaticon.com/icons/png/512/34/34627.png"/>
        <span style={styles.cartCount}>{props.count}</span>
    </div>
</div>
    );
}

const styles={
    cartIcon:{
        height:32,
        marginRight:20
    },
    nav:{
        height:70,
      
        bakground:'#4267b2',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row-reverse',
        border:"2px solid red"
    },
    cartIconContainer:{
        position:'absolute',
        right:10
    },
    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding:'4px 8px',
        position:'absolute',
        right:0,
        top:-9 
    }
}

export default Navbar;