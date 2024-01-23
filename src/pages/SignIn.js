import React from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from "../components/input/CustomInput";
import Button from "../components/button/Button";
import { motion } from "framer-motion";
import Logo from "../components/logo/Logo";

function SignIn() {
  const navigate = useNavigate();
  return (
    <div className="container grid place-items-center pt-[28%] 880:pt-[8%] pb-12">
      <Logo />
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="text-2xl tracking-tighter 880:text-3xl font-semibold text-center text-primary-900 mt-10 880:mt-12 mb-1 mx-0"
      >
        Login
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.1 }}
        className="text-base font-medium"
      >
        Dont&apos;t have an account?{" "}
        <button className="text-primary-main" onClick={() => navigate("/")}>
          Sign up
        </button>
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 mb-4 w-full px-[4%] 880:px-[24%]"
      >
        <CustomInput placeholder="Email" type="text" />
        <CustomInput placeholder="Password" type="password" />
        <div className="flex justify-end">
          <button
            className=" text-primary-main"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password?
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          className="mt-4"
        >
          <Button text="Sign in" onClick={() => navigate("/overview")} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SignIn;
