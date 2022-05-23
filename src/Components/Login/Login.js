import React from "react";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = e =>{ 
      e.preventDefault();
      console.log(e);
    };

  console.log(watch("example"));
  console.log(user);
//   <button className="btn btn-red-200" onClick={() => signInWithGoogle()}>
   
  return (
    <div>  
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">  
  <div className="card-body">
    <h2 className="mb-3 card-title">Please Log in</h2>

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
      <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs"  {...register("email", { required: true })} />
      {errors.email?.type === 'required' && "First name is required"}
      </div>
      
      <div className="mb-3">
      <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" {...register("password", { required: true })} />
      {errors.password && "Last name is required"}
      </div>

      <div className="mb-3 card-actions">
      <button type="submit" className="btn btn-primary w-full">Log in</button>
    </div>      
     
    </form>  

    <div>
        <div class="flex flex-col w-full border-opacity-50">  
            <div class="divider">OR</div> 
        </div>

        <div className="mb-3 card-actions">
            <button  onClick={() => signInWithGoogle()}  className="btn btn-outline btn-accent w-full">Google</button>
        </div> 
        <div className="mb-3 card-actions">
            <button  className="btn btn-outline btn-accent w-full">Facebook</button>
        </div> 
    </div>
    
  </div>
</div>






      
    </div>
  );
};

export default Login;
