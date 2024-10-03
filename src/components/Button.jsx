const Button = ({ placeholder, onClick }) => (
  <button
    className="w-full py-3 px-4 rounded-full text-rose-900 bg-red-500 hover:bg-red-700 text-white rounded-md"
    onClick={onClick}
  >
    {placeholder}
  </button>
);
export default Button;
