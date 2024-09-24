import CartProvider from '../context/CartContext';
import Product from '../general/Product';
import data from '../api/data.json';
import Typography from '../components/Typography';
import Cart from '../components/Cart';

export const Home = () => (
  <div className="flex w-full flex-col">
    <CartProvider>
      <div className="grid grid-cols-[3fr_1fr] gap-5">
        <div>
          <Typography variant="preset-1">Desserts</Typography>
          <section className="grid grid-cols-3 gap-6">
            {data.map((product) => (
              <Product key={product.name} product={product} />
            ))}
          </section>
        </div>
        <aside>
          <Cart />
        </aside>
      </div>
    </CartProvider>
  </div>
);
