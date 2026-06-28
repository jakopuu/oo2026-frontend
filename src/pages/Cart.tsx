import { useState } from 'react'
import type { OrderRow } from '../models/OrderRow';

function Cart() {
  const [orderRows, setOrderRows] = useState<OrderRow[]>(JSON.parse(localStorage.getItem("cart") || "[]"));

  const deleteFromCart = (index: number) => {
    const cart = [...orderRows];
    cart.splice(index, 1);
    setOrderRows(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const decreaseQuantity = (index: number) => {
    const cart = [...orderRows];
    cart[index].quantity--;
    if (cart[index].quantity === 0) {
      cart.splice(index, 1);
    }
    setOrderRows(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const increaseQuantity = (index: number) => {
    const cart = [...orderRows];
    cart[index].quantity++;
    setOrderRows(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const emptyCart = () => {
    setOrderRows([]);
    localStorage.setItem("cart", "[]");
  }

  const calculateTotal = () => {
    let sum = 0;
    orderRows.forEach(orderRow => sum = sum + orderRow.product.price * orderRow.quantity);
    return sum;
  }

  const makeOrder = () => {
    const personId = sessionStorage.getItem("token");
    if (!personId) {
      alert("Pead enne tellimist sisse logima");
      return;
    }

    const payload = orderRows.map(orderRow => ({ productId: orderRow.product.id, quantity: orderRow.quantity }));

    fetch(import.meta.env.VITE_BACK_URL + "/orders?personid=" + personId, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
      .then(json => {
        if (json.message && json.timestamp && json.status) {
          alert("Juhtus viga: " + json.message);
          return;
        }
        emptyCart();
        window.location.href = json.url;
      })
  }

  return (
    <div>
      {orderRows.length > 0 && <button onClick={() => emptyCart()}>Tühjenda</button>}

      {orderRows.length === 0 && <div>Ostukorv on tühi</div>}

      {orderRows.map((orderRow, index) =>
        <div key={orderRow.product.id}>
          <div>{orderRow.product.name}</div>
          <div>{orderRow.product.price} €</div>
          <button onClick={() => decreaseQuantity(index)}>-</button>
          <div>{orderRow.quantity} tk</div>
          <button onClick={() => increaseQuantity(index)}>+</button>
          <div>{orderRow.product.price * orderRow.quantity} €</div>
          <button onClick={() => deleteFromCart(index)}>X</button>
        </div>
      )}

      {orderRows.length > 0 &&
        <>
          <div>Kokku: {calculateTotal()} €</div>
          <button onClick={() => makeOrder()}>Telli</button>
        </>}
    </div>
  )
}

export default Cart
