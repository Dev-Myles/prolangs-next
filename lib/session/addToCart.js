export function createCart() {
  const sess = window.sessionStorage;

  if (!sess.getItem('cart')) return sess.setItem('cart', JSON.stringify([]));
  else return;
}

export function addToCart({ cartId, price, imageUrl, sizes, name }) {
  const sess = window.sessionStorage;
  if (!sess.getItem('cart')) {
    sess.setItem('cart', JSON.stringify([]));
  }
  const cart = JSON.parse(sess.getItem('cart'));
  cart.push({ cartId, price, imageUrl, sizes, name });
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
