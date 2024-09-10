import IncrementIcon from "../components/IncrementIcon";
import DecrementIcon from "../components/DecrementIcon";
import AddToCard from "../components/AddToCard";
export const Home = () => (
  <div className="mt-10 flex w-full flex-col bg-blue-500">
    <h6 className="text-red sans">Starter</h6>
    <IncrementIcon/><DecrementIcon/><AddToCard />
  </div>
);
