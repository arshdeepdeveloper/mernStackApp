import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className=" grid place-items-center  h-screen">
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <div className=" ">
              <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <Link
                  to="/"
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                  ✕
                </Link>
                <h3 className="font-bold text-lg">Registration</h3>
                <div className="grid gap-4 mt-4">
                  <label className="input input-bordered flex items-center gap-2">
                    Name
                    <input
                      type="text"
                      className="grow"
                      placeholder="Please enter your name"
                      {...register("name", {
                        required: "Name field is required",
                      })}
                      aria-invalid={errors.name ? "true" : "false"}
                    />
                  </label>
                  <span className="text-red-600 text-sm pl-4">
                    {errors.name && <p role="alert">{errors.name.message}</p>}
                  </span>
                  <label className="input input-bordered flex items-center gap-2">
                    Email
                    <input
                      type="text"
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
                    Signup
                  </button>
                  <p>
                    {" "}
                    Have acoount?{" "}
                    <Link to="/Login1">
                      <span className="underline text-blue-700">Login</span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
