import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate()


  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate('/')
      });
    });
  };

  return (
    <div className="text-center mb-2">
      <div className="divider">OR</div>
      <p>Sign up with Google</p>
      <div className="text-2xl">
        <button onClick={handleGoogleSignIn} className="btn">
          <FcGoogle></FcGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
