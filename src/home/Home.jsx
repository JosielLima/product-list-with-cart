import IncrementIcon from "../components/IncrementIcon";
import DecrementIcon from "../components/DecrementIcon";
import AddToCard from "../components/AddToCard";
export const Home = () => (
  <div className="mt-10 flex w-full flex-col bg-blue-500 text-14 font-bold letter-spacing-none">
    <IncrementIcon/><DecrementIcon/><AddToCard />
  </div>
);
