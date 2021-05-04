import React from 'react';
import Sidebar from "../Sidebar/Sidebar";
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotal from './CartTotal';
import { useCartState } from '../../global-state/index';

export default function Cart() {
  const { cartState, cartActions } = useCartState();
  const { cart } = cartState;
  let content;
  content =
    cart.length > 0 ? (
      <>
        <div>
          <h1>Your Cart</h1>
          <CartColumns />
          <CartList cart={cart} />
          <CartTotal cartState={cartState} cartActions={cartActions} />
        </div>
      </>
    ) : (
      <EmptyCart />
    );
  return (
    <>
    <Sidebar />
    <div className="center">
      {content}
    </div>
    </>
  )
}