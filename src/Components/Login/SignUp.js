import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Common/Loading';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, eUser, eLoading, eError] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, error] = useUpdateProfile(auth);

  const { register, watch, formState: { errors } } = useForm();

  if(eLoading){
      return <Loading></Loading>
  }
  
  const handleFormSubmit = async e =>{ 
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      const displayName = e.target.name.value;

      await createUserWithEmailAndPassword(email,password);
      await updateProfile({displayName}); 
      e.target.reset();     
    };    

    return (
        <div>  
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">  
  <div className="card-body">
    <h2 className="mb-3 card-title">Please Sign up</h2>

    {/* <form onSubmit={handleSubmit(onSubmit)}> */}
    <form onSubmit={handleFormSubmit}>
      <div className="mb-3">
      <input type="text" placeholder="Name" name='name' className="input input-bordered w-full max-w-xs"  {...register("name", { required: true })} />
      {errors.name?.type === 'required' && "Name is required"}
      </div>

      <div className="mb-3">
      <input type="email" placeholder="Email" name='email' className="input input-bordered w-full max-w-xs"  {...register("email", { required: true })} />
      {errors.email?.type === 'required' && "Email is required"}
      </div>
      
      <div className="mb-3">
      <input type="password" placeholder="Password" name='password' className="input input-bordered w-full max-w-xs" {...register("password", { required: true })} />
      {errors.password && "Password is required"}
      </div>

      <div className="mb-3 card-actions">
      <button type="submit" className="btn btn-primary w-full">Sign up</button>
    </div>   

    <p className="mt-5">Already have an account? <Link to="/login" className="text-primary">Log in</Link></p>   
     
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

export default SignUp;