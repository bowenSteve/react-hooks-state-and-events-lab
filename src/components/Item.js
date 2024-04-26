import React,{useState} from "react";

function Item({ name, category }) {
  const [cart, setCart]=useState(true);
  const myCart= cart ? "" : "in-cart"
  function handleCart(){
    setCart(cart=>!cart)
  }
  return (
    <li className={myCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{cart ?  "Add to Cart":"Remove From Cart"}</button>
    </li>
  );
}

export default Item;
