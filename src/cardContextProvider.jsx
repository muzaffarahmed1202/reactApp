import React, { useState } from "react";
import UseCardContext from "./cardContextApi";


const CardContextProvider =(props)=>{

    console.log("cardContext provider");
    const [count, SetCount] = useState(5);
    console.log(count,"wddw");

    return (

        <UseCardContext.Provider value={{count,SetCount}}>
            {props.children}
        </UseCardContext.Provider>

    )



}
export default CardContextProvider;
