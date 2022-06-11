export function createCart() {
  const sess = window.sessionStorage;

  if (!sess.getItem('cart')) return sess.setItem('cart', JSON.stringify([]));
  else return;
}

export function addToCart({ cartId, price, imageUrl, size, name, amount }) {
  const sess = window.sessionStorage;
  if (!sess.getItem('cart')) {
    sess.setItem('cart', JSON.stringify([]));
  }
  const cart = JSON.parse(sess.getItem('cart'));
  cart.push({ cartId, price, imageUrl, size, name, amount });
  sess.setItem('cart', JSON.stringify(cart));
}

export function deleteFromCart({ cartId }) {
  const sess = window.sessionStorage;
  const cart = JSON.parse(sess.getItem('cart'));

  const newCart = cart.filter((item) => item.cartId !== cartId);

  sess.setItem('cart', JSON.stringify(newCart));
}

export function clearCart() {
  const sess = window.sessionStorage;
  sess.setItem('cart', JSON.stringify([]));
}

export function changeSize({ cartId, e }) {
  const sess = window.sessionStorage;
  const cart = JSON.parse(sess.getItem('cart'));
  const item = cart.find((e) => e.cartId == cartId);
  item.size = e;
  return sess.setItem('cart', JSON.stringify(cart));
}

export function changeQty({ cartId, e }) {
  const sess = window.sessionStorage;
  const cart = JSON.parse(sess.getItem('cart'));
  const item = cart.find((e) => e.cartId == cartId);
  item.amount = e;
  return sess.setItem('cart', JSON.stringify(cart));
}
