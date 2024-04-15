import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import {useNavigate , useLocation} from 'react-router-dom';

const Login = () => {

    const {signInUser , googleLogin , twitterLogin , facebookLogin } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();

    const handleSocialLogin = socialProvider =>{
        socialProvider()
        .then(result => {
            if(result.user){
                navigate(location?.state || "/");
            }
        }
        )
    }


    const handleGoogleLogin = () => {
        handleSocialLogin(googleLogin)
    }

    const handleFacebookLogin = () => {
        handleSocialLogin(facebookLogin)
    }

    const handleTwitterLogin = () => {
        handleSocialLogin(twitterLogin)
    }

    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = (data) => {
        signInUser(data.email , data.password)
      .then(result => {
          console.log(result);
        })
    }
    
    return (
        <div className="w-full h-full flex flex-col justify-center pt-10 lg:pt-20 items-center">

            <div className="px-8 py-12 rounded-3xl bg-[#F5F5F5] lg:w-[50%]">
            <h1 className="text-4xl font-bold text-center">Sign In to Your Account!</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 mt-10">
            <input {...register("email" , { required: true })} name="email" type="email" placeholder="Your Email" className="input input-bordered w-full" />
            {errors.email && <span className="text-sm text-red-500 font-medium -mt-4">Please Write Your Email</span>}
            <input {...register("password" , { required: true })} name="password" type="password" placeholder="Your Password" className="input input-bordered w-full" />
            {errors.password && <span className="text-sm text-red-500 font-medium -mt-4">Please Write Your Password</span>}
            <div className="flex justify-between items-center">
            <div className="form-control">
  <label className="label cursor-pointer gap-2">
    <input type="checkbox" defaultChecked className=" cursor-pointer w-4 h-4" />
    <span className="label-text">Remember me</span> 
  </label>
</div>
<Link>Forgot My Password?</Link>
                </div>
            <button className="btn w-full btn-error">Sign In</button>
            </form>
            <div className="mt-5 flex justify-center">
                <h5 className="text-lg font-bold">Not a Member? <Link className="text-[#B56952]" to="/register">Sign Up</Link></h5>
            </div>
            <div className="divider">Login With</div>
            <div className="flex gap-5 justify-center pt-4">
                <button onClick={handleGoogleLogin}>
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

export default Login;