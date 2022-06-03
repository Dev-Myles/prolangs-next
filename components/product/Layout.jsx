import ProductCard from './ProductCard';

export default function Layout({ props }) {
  const {
    price,
    imageUrl,
    name,
    sizes = null,
    colors = null,
    description,
    fabric = null,
    size = null,
    metal = null,
  } = props;

  let shirtsize =
    sizes == undefined
      ? null
      : sizes.reduce((prev, curr) => [prev, ', ', curr]);
  let color =
    colors == undefined
      ? null
      : colors.reduce((prev, curr) => [prev, ', ', curr]);

  return (
    <ProductCard
      price={price}
      imageUrl={imageUrl}
      name={name}
      sizes={shirtsize}
      size={size}
      metal={metal}
      fabric={fabric}
      description={description}
      color={color}
    />
  );
}
