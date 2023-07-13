export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  //Calculate total price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)
  );

  //Calculate total shipping price (if order is over $100, shipping is free, otherwise it's $10)
  state.shippingPrice = state.itemsPrice > 100 ? 0 : 10;

  //Calculate total tax price (15%)
  state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));

  //Calculate total price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
