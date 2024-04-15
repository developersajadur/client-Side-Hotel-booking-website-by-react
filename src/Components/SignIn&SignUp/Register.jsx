import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";

const Register = () => {

    const {createUser , googleLogin , twitterLogin ,facebookLogin} = useContext(AuthContext)

    const handleGoogleLogin = () => {
        googleLogin()
    }
    const handleFacebookLogin = () => {
        facebookLogin()
    }

    const handleTwitterLogin = () => {
        twitterLogin()
    }


    const { register, handleSubmit, formState: { errors }} = useForm();
      const onSubmit = (data) => {
        createUser(data.email , data.password)
        .then(result => {
            console.log(result);
          })
      }
    return (
        <div className="w-full h-full flex flex-col justify-center pt-10 lg:pt-20 items-center">

            <div className="px-8 py-12 rounded-3xl bg-[#F5F5F5] lg:w-[50%]">
            <h1 className="text-4xl font-bold text-center">Create an Account!</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 mt-10">
            <input {...register("Name" , { required: true })} type="text" placeholder="Your Full Name" className="input input-bordered w-full" />
            {errors.Name && <span className="text-sm text-red-500 font-medium -mt-4">Please Write Your Name</span>}
            <input {...register("email" , { required: true })} name="email" type="email" placeholder="Your Email" className="input input-bordered w-full" />
            {errors.email && <span className="text-sm text-red-500 font-medium -mt-4">Please Write Your Email</span>}
            <input {...register("Photo URL")} type="text" placeholder="Your Photo URL" className="input input-bordered w-full" />
            <input {...register("password" , { required: true })} name="password" type="password" placeholder="Your Password" className="input input-bordered w-full" />
            {errors.password && <span className="text-sm text-red-500 font-medium -mt-4">Please Write Your Password</span>}
            <button className="btn w-full btn-error">Sign Up</button>
            </form>
            <div className="mt-5 flex justify-center items-center">
                <h5 className="text-lg font-bold">Already have an account? <Link className="text-[#B56952]" to="/login">Sign In</Link></h5>
            </div>
            <div className="divider">Register With</div>
            <div className="flex gap-5 justify-center pt-4">
                <button onClick={handleGoogleLogin} >
                    <img className="h-9 w-9 rounded-full" src="../../../public/google-icon.png" alt="google" /></button>
                    <button onClick={handleFacebookLogin}>
                    <img className="h-9 w-9 rounded-full" src="../../../public/facebook-icon.png" alt="facebook" /></button>
                    <button onClick={handleTwitterLogin}>
                    <img className="h-9 w-9 rounded-full" src="../../../public/twitter-icon.png" alt="facebook" /></button>
            </div>
            </div>
            
        </div>
    );
};

export default Register;