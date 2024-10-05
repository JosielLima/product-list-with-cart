import AddToCard from '../components/AddToCard';
import Typography from '../components/Typography';
import { useCart } from '../hooks/useCart';

const Product = ({ product }) => {
  const { items = [], removeFromCart, addToCart } = useCart() ?? {};
  const productInCart = items.find((item) => item.name === product.name);
  return (
    <div className="flex flex-col p-4 rounded-lg w-250px h-347px">
      <div className="relative pb-8">
        <img
          src={product.image.desktop}
          alt={product.name}
          className={`object-cover w-full h-auto rounded-lg 
            ${productInCart ? 'border-2 border-brand-primary' : ''}`}
        />
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <AddToCard product={product} />
        </div>
      </div>
      <Typography variant="preset-4">{product.category}</Typography>
      <Typography variant="preset-3">{product.name}</Typography>
      <Typography variant="preset-3" className="text-brand-primary">
        $ {product.price.toFixed(2)}
      </Typography>
    </div>
  );
};

export default Product;
