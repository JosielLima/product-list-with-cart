import AddToCard from '../components/AddToCard';
import Typography from '../components/Typography';
import { useCart } from '../hooks/useCart';

const Product = ({ product }) => {
  const { addToCart } = useCart() ?? {};

  return (
    <div className="flex flex-col p-4 rounded-lg w-250px h-347px">
      <div className="relative pb-8">
        <img src={product.image.desktop} alt={product.name} className="object-cover w-full h-auto rounded-lg" />
        <div
          onClick={() => addToCart(product)}
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <AddToCard />
        </div>
      </div>
      <Typography variant="preset-4">{product.category}</Typography>
      <Typography variant="preset-3">{product.name}</Typography>
      <Typography variant="preset-3" className="text-brand-primary">
        $ {product.price}
      </Typography>
    </div>
  );
};

export default Product;
