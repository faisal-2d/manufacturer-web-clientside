import React from "react";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword, useSignInWithGoogle, signOut } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Loading from "../Common/Loading";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, eLoading, error] = useSignInWithEmailAndPassword(auth);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const handleFormSubmit = data =>{
    signInWithEmailAndPassword(data.email, data.password);    
    };

    if(eLoading || gLoading ){
      return <Loading></Loading>
  }

   
  return (
    <div>  
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">  
  <div className="card-body">
    <h2 className="mb-3 card-title">Please Log in</h2>

    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mb-3">
      <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs"  {...register("email", { required: true })} />
      {errors.email?.type === 'required' && "First name is required"}
      </div>
      
      <div className="mb-3">
      <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" {...register("password", { required: true })} />
      {errors.password && "Last name is required"}
      </div>
      
      <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>

      <div className="mb-3 card-actions">
      <button type="submit" className="btn btn-primary w-full">Log in</button>
    </div>  

    <p className="mt-5">Don't have an account? <Link to="/signup" className="text-primary">Sign up</Link></p>    
     
    </form>  

    <div>
        <div className="flex flex-col w-full border-opacity-50">  
            <div className="divider">OR</div> 
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
