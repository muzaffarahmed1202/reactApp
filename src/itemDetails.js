import React,{useContext} from "react";

import UseCardContext from "./cardContextApi";

const ItemDetails = ()=>{
        const data = useContext(UseCardContext);
    return (<>
    <div className="card">
    Item Details
    </div>
      
    </>)
}

export default ItemDetails;