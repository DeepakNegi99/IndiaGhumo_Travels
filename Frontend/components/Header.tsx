import { Link } from "react-router-dom";
import { toggleTheme } from "../features/theme/themeSlice";
import { useDispatch } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white shadow">
      <h1 className="text-xl font-bold">Travel App </h1>
      
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/login">Login</Link>
      </nav>

      <button
        className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded"
        onClick={() => dispatch(toggleTheme())}
      >
        🌙
      </button>
    </header>
  );
};
