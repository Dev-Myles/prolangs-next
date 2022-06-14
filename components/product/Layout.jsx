import dynamic from 'next/dynamic';

const ProductCard = dynamic(() => import('./ProductCard'), {
  ssr: false,
});

export default function Layout({ props }) {
  const { price, imageUrl, name, description, material, size = null } = props;

  return (
    <ProductCard
      price={price}
      imageUrl={imageUrl}
      name={name}
      size={size}
      material={material}
      description={description}
    />
  );
}
