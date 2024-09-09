//rrd import
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

//components

import ProtectRoutes from "./components/ProtectRoutes";

//pages
import { Home, About, Contact, Login, Register, ErrorPage } from "./pages";

//layout
import MainLayout from "./layout/MainLayout";

//actions
import { action as RegisterAction } from "./pages/Register";
import { action as LoginAction } from "./pages/Login";

//context
import { useGlobalContext } from "./hooks/useGlobalContext";
import { useEffect } from "react";

//firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";

function App() {
  const { user, dispatch, isAuthReady } = useGlobalContext();
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectRoutes user={user}>
          <MainLayout />
        </ProtectRoutes>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "login",
      element: user ? <Navigate to="/" /> : <Login />,
      action: LoginAction,
      errorElement: <ErrorPage />,
    },
    {
      path: "register",
      element: user ? <Navigate to="/" /> : <Register />,
      action: RegisterAction,
      errorElement: <ErrorPage />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOG_IN", payload: user });
      dispatch({ type: "IS_AUTH_READY" });
      // console.log(isAuthReady);
    });
  }, [user]);

  return <>{<RouterProvider router={routes} />}</>;
}

export default App;
