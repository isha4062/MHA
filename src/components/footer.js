import React from 'react';

export const Footer = () => {
    const style ={
        backgroundColor : "black"
    }
    const style2 ={
        margin : "auto",
        width : "50%",
        color : "white",
        textAlign : "center"
    }
    return(
        <>
         <div style={style}><h6 style={style2}>Copyright &copy; All Rights Reserved</h6></div>
        </>
    )
}
