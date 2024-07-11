//rrd import
import { Outlet } from "react-router-dom";
//components
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div>
      <header className="">
        <Navbar />
      </header>
      <main className="container px-10 mx-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
