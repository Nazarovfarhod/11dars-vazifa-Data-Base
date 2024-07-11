//rrd import
import { Form, Link, useActionData } from "react-router-dom";
//components
import FormInput from "../components/FormInput";
//react import
import { useEffect } from "react";
//action
export const action = async ({ request }) => {
  let formData = await request.formData();
  let firstName = formData.get("firstName");
  let lastName = formData.get("lastName");
  let email = formData.get("email");
  let password = formData.get("password");
  let configPassword = formData.get("configPassword");

  return { firstName, lastName, email, password, configPassword };
};

//custom hooks

import { useRegister } from "../hooks/useRegister";

function Register() {
  const userData = useActionData();
  const { registerWithGoogle, isPending } = useRegister();

  useEffect(() => {
    if (userData) {
      console.log(userData);
    }
  }, [userData]);

  return (
    <div className="grid place-items-center h-lvh w-full auth-bg-left auth-bg-right">
      <div className="card glass bg-[rgba(255,255,255,0.9)] backdrop-blur-sm w-[500px] py-20 px-5">
        <Form method="post" className="flex flex-col gap-5 ">
          <h1 className="text-center text-3xl text-green-800 font-bold font-serif">
            Sign up{" "}
          </h1>
          <div className="flex gap-3 items-center">
            <FormInput
              label="First Name"
              type="email"
              name="firstName"
              placeholder="Email"
            />
            <FormInput
              label="Last Name"
              type="text"
              name="lastName"
              placeholder="Password"
            />
          </div>
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
          <FormInput
            label="Confirm Password"
            type="password"
            name="configPassword"
            placeholder="Password"
          />
          <div className=" flex items-center justify-between px-4 mb-10">
            <label className=" cursor-pointer flex items-center gap-3">
              <input
                type="checkbox"
                defaultChecked
                className=" checkbox-primary w-4 h-4"
              />
              <span className="label-text">
                I Agree with <span className="text-red-400">privacy</span> and{" "}
                <span className="text-red-400">policy</span>
              </span>
            </label>
          </div>
          <div>
            <button className="btn bg-[#33b574] rounded-[25px] btn-block text-xl tracking-[2px] font-bold">
              Sign up
            </button>
          </div>
          {isPending && (
            <div className="btn mb-5 bg-[#33b574] rounded-[25px] btn-block text-xl tracking-[2px] font-bold">
              <button type="button">Loading...</button>
            </div>
          )}
          {!isPending && (
            <div
              onClick={registerWithGoogle}
              className="btn mb-5 bg-[#33b574] rounded-[25px] btn-block text-xl tracking-[2px] font-bold"
            >
              <button type="button">Google</button>
            </div>
          )}
          <div>
            <div className="flex items-center justify-between px-5">
              <h4>Already have an account ?</h4>
              <Link to="/login" className="text-primary">
                Log in
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
