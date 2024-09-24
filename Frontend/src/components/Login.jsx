// import React from 'react'

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div>
        <dialog id="my_modal_2" className="modal">
    <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      <h3 className="font-bold text-lg">Login!</h3>
      <div>

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
<div className='flex justify-around mt-4'>
<button className='bg-pink-500 p-2 rounded'>Login</button>
<p className='mt-2'>Not Registered?
  
   <Link to="/signup" className='underline text-blue-600'>SignUp</Link>
   {" "}</p>
</div>


      </div>
      </form>
    </div>
    <form method="dialog" className="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
  </div>
  );
};

export default Login;