import IncrementIcon from "../components/IncrementIcon";
import DecrementIcon from "../components/DecrementIcon";
import AddToCard from "../components/AddToCard";
import Button from "../components/Button";
import RemoveItem from "../components/RemoveItem";
import Typography from "../components/Typography";

export const Home = () => (
  <div className="mt-10 flex w-full flex-col bg-blue-500 text-14 font-bold letter-spacing-none">
    <Typography variant="preset-1">Hello World</Typography>
    <IncrementIcon/><DecrementIcon/><AddToCard />
    <Button placeholder={"Add to card"} onClick={()=>(console.log("clicked"))} />
    <RemoveItem />
  </div>
);
