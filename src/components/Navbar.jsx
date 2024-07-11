import { Link } from "react-router-dom";
import fnlogo from "../assets/lite-mode-fn.png";

//context
import { useGlobalContext } from "../hooks/useGlobalContext";
function Navbar() {
  const { user } = useGlobalContext();
  console.log(user);
  return (
    <div className=" mx-auto my-10 px-3 ">
      <div className="navbar bg-base-300 w-full px-10 flex justify-between h-5 rounded-[25px]">
        <div className="navbar-start w-auto">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <img className="w-32 h-20 " src={fnlogo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5 px-1">
            <li className="text-xl font-semibold italic font-serif">
              <Link to="/">Home</Link>
            </li>

            <li className="text-xl font-semibold italic font-serif">
              <Link to="/about">About</Link>
            </li>
            <li className="text-xl font-semibold italic font-serif">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-16 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <p className="text-[10px] mb-0 p-0 italic">email:</p>
              <p className="text-[12px] pt-0">{user.email}</p>
            </li>
            <li>
              <p className="text-[10px] mb-0 p-0 italic">Name:</p>
              <p className="capitalize pt-0 pb-3 font-medium font-serif">
                {user.displayName}
              </p>
            </li>
            <li>
              <Link
                className="bg-red-400 text-white py-1 font-serif text-xl font-semibold"
                to="/login"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
