import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-indigo-600" />
            <span
              className="text-xl font-bold text-indigo-600 cursor-pointer"
              onClick={() => navigate("/")}>
              EduTrack
            </span>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => navigate("/login")}
              className="text-indigo-600 hover:text-indigo-800">
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
