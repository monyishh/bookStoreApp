// import React from 'react'

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="modal-box">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>
          <h3 className="text-center font-bold text-lg">SignUp!</h3>
          <br />

          <label 
          className="input input-bordered flex items-center gap-2"
          >
            Name
            <input type="text" class="grow" placeholder="Daisy" 
            {...register("name", { required: true })}/>
          
            {errors.name && <span className="text-sm text-red-500" >This field is required</span>}
          </label>
          <br />
          <label className="input input-bordered flex items-center gap-2">
            Email
            <input type="text" class="grow" placeholder="daisy@site.com" 
              {...register("email", { required: true })}/>
             
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </label>

          <br />
          <label className="input input-bordered flex items-center gap-2">
            Password
            <input type="text" class="grow" placeholder="xyz@432" 
              {...register("password", { required: true })}/>
            
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          </label>

          <div className="flex justify-around mt-4">
            <button className="bg-pink-500 p-2 rounded">SignUp</button>
            <p className="mt-2">
              Have Account?
              <Link to="/" className="underline text-blue-600">
                Login
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
