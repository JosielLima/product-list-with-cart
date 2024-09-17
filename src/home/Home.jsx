import CartProvider from '../context/CartContext';
import IncrementIcon from "../components/IncrementIcon";
import DecrementIcon from "../components/DecrementIcon";
import AddToCard from "../components/AddToCard";
import Button from "../components/Button";
import RemoveItem from "../components/RemoveItem";
import Typography from "../components/Typography";

export const Home = () => (
    <div className="mt-10 flex w-full flex-col bg-blue-500 text-14 font-bold letter-spacing-none">
      <CartProvider>
      <Typography variant="preset-1">Hello World</Typography>
      <IncrementIcon/><DecrementIcon/><AddToCard />
      <Button placeholder={"Add to card"} onClick={()=>(console.log("clicked"))} />
      <RemoveItem />
      <div className="mt-10 flex flex-col items-center justify-center">
        <Typography variant="preset-3">
          <span className="text-red-500">
            <span className="text-red-500">
              {" "}
              <span className="text-red-500">
                You have no items in your cart
              </span>
            </span>
          </span>
        </Typography>
      </div>
      </CartProvider>
    </div>

);
