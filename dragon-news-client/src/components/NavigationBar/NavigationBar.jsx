import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth/useAuth";

const NavigationBar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <nav className="py-5 grid grid-cols-3">
      <ul></ul>
      <ul className="flex gap-2 text-sm text-slate-400">
        <li>Home</li>
        <li>About</li>
        <li>Career</li>
      </ul>
      <ul className="flex justify-end">
        <li className="flex items-center gap-2">
          <FaUser />{" "}
          {user?.uid ? (
            <button
              onClick={() => handleLogOut()}
              className="bg-gray-500 text-white px-4 py-[3px]"
            >
              Logout
            </button>
          ) : (
            <Link to="/user/login">
              <button className="bg-gray-500 text-white px-4 py-[3px]">
                Login
              </button>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
