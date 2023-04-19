
import React, {useState} from "react";

function Item({ name, category }) {
  const [toggle,setToggle]=useState(false)
  const toggleDescription=()=>{
        setToggle(!toggle)
    }
  const inCart = toggle ? "in-cart" : null
  return (
  
    <li className= {inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>      
      <button className="add"onClick={toggleDescription}
      >{toggle ?"Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}


export default Item;
