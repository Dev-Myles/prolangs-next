export function createCart() {
  const sess = window.sessionStorage;

  if (!sess.getItem('cart')) return sess.setItem('cart', JSON.stringify([]));
  else return;
}

export function addToCart({ price, imageUrl, sizes, name }) {
  const sess = window.sessionStorage;
  if (!sess.getItem('cart')) {
    sess.setItem('cart', JSON.stringify([]));
  }
  const cart = JSON.parse(sess.getItem('cart'));
  cart.push({ price, imageUrl, sizes, name });
  sess.setItem('cart', JSON.stringify(cart));
}
