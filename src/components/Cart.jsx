import React, { useEffect, useState } from "react";
import { getStoredCart } from "../utils/fakeDb";
import { useLoaderData } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const productData = useLoaderData();

  useEffect(() => {
    const savedCart = getStoredCart();
    let newArray = []
    for (const id in savedCart) {
      const foundProduct = productData?.find((product) => product?.id == id);
      if (foundProduct) {
        foundProduct.quantity = savedCart[id];
        newArray.push(foundProduct);
      }
      setCart(newArray)
    }
  }, []);
  console.log(cart);
  return <div>cart</div>;
};

export default Cart;
