import React,{useContext} from "react";
import UseCardContext from "./cardContextApi";


const ListItem =()=>{
    const {count,SetCount} = useContext(UseCardContext);
    //console.log(data);
    return(<div className="list-item">
        <h3>Laptop {count}</h3>
        <button onClick={()=>SetCount(count +1 )}>Add to card</button>
    </div>);
}

export default ListItem;