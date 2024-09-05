import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login1() {
  const location = useLocation();
  let setFlag = false;
  if (location.pathname === "/Login1") {
    setFlag = true;
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className={`${setFlag ? "grid place-items-center  h-screen" : ""}`}>
        <div className={`card bg-base-100 w-96 ${setFlag ? "shadow-xl" : ""}`}>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              {setFlag && (
                <Link
                  to="/"
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                  ✕
                </Link>
              )}
              <h3 className="font-bold text-lg">Login</h3>
              <div className="grid gap-4 mt-4">
                <label className="input input-bordered flex items-center gap-2">
                  Email
                  <input
                    type="email"
                    className="grow"
                    placeholder="dummy@gmail.com"
                    {...register("mail", {
                      required: "Email Address is required",
                    })}
                    aria-invalid={errors.mail ? "true" : "false"}
                  />
                </label>
                <span className="text-red-600 text-sm pl-4">
                  {errors.mail && <p role="alert">{errors.mail.message}</p>}
                </span>
                <label className="input input-bordered flex items-center gap-2">
                  Password
                  <input
                    type="password"
                    className="grow"
                    placeholder="abc124"
                    {...register("pwd", {
                      required: "Password is required",
                    })}
                    aria-invalid={errors.pwd ? "true" : "false"}
                  />
                </label>
                <span className="text-red-600 text-sm pl-4">
                  {errors.pwd && <p role="alert">{errors.pwd.message}</p>}
                </span>
              </div>
              <div className="flex mt-4 items-center justify-between">
                <button className="bg-pink-500 p-3 hover:text-white border rounded-xl">
                  Login
                </button>
                <p>
                  {" "}
                  Not registered?{" "}
                  <Link to="/signup">
                    <span className="underline text-blue-700">Sign up</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login1;
