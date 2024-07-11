//rrd import
import { Form, Link, useActionData } from "react-router-dom";
//components
import FormInput from "../components/FormInput";
//react import
import { useEffect } from "react";

//action
export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");

  return { email, password };
};

function Login() {
  const userData = useActionData();

  useEffect(() => {
    if (userData) {
      console.log(userData);
    }
  }, [userData]);
  return (
    <div className="grid place-items-center h-lvh w-full auth-bg-left auth-bg-right">
      <div className="card glass bg-[rgba(255,255,255,0.7)] backdrop-blur-sm w-[450px] py-20 px-5">
        <Form method="post" className="flex flex-col gap-5 ">
          <h1 className="text-center text-3xl text-green-800 font-bold font-serif">
            Log In{" "}
          </h1>

          <FormInput
            label="Email"
            type="email"
            name="email"
            placeholder="Email"
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            placeholder="Password"
          />
          <div className=" flex items-center justify-between px-4 mb-10">
            <label className=" cursor-pointer flex items-center gap-3">
              <input
                type="checkbox"
                defaultChecked
                className=" checkbox-primary w-4 h-4"
              />
              <span className="label-text">Remember me</span>
            </label>
            <p className="text-[12px] text-primary">Forgote Password</p>
          </div>
          <div>
            <button className="btn bg-[#33b574] rounded-[25px] btn-block text-xl tracking-[2px] font-bold">
              Log in
            </button>
          </div>
          <div>
            <h3 className="text-center text-xl text-green-800 font-semibold font-serif mb-2">
              Or Sign in with
            </h3>
            <div className="btn mb-5 bg-[#33b574] rounded-[25px] btn-block text-xl tracking-[2px] font-bold">
              <button type="button">Google</button>
            </div>
            <div className="flex items-center justify-between px-5">
              <h4>Don't have an account ?</h4>
              <Link to="/register" className="text-primary">
                Sign up
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
