import React from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from "../components/input/CustomInput";
import Button from "../components/button/Button";
import { motion } from "framer-motion";
import Logo from "../components/logo/Logo";

function SignUp() {
  const navigate = useNavigate();
  return (
    <div className="container grid place-items-center pt-[4%] 880:pt-[8%] pb-12">
      <Logo />
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="text-2xl tracking-tighter 880:text-3xl font-semibold text-center text-primary-900 mt-10 880:mt-12 mb-1 mx-0"
      >
        Create an account
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.1 }}
        className="text-base font-medium"
      >
        Already have an account?{" "}
        <button
          className="text-primary-main"
          onClick={() => navigate("/login")}
        >
          Sign in
        </button>
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 mb-4 px-[4%] 880:px-[24%]"
      >
        <div className="flex justify-between gap-4">
          <CustomInput placeholder="FirstName" type="text" />
          <CustomInput placeholder="LastName" type="text" />
        </div>
        <div className="flex justify-between gap-4">
          <CustomInput placeholder="Business Name" type="text" />
          <CustomInput placeholder="+234" type="tel" />
        </div>
        <CustomInput placeholder="Email" type="text" />
        <CustomInput placeholder="Password" type="password" />
        <CustomInput placeholder="Confirm Password" type="password" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          className="mt-4"
        >
          <Button text="Sign Up" onClick={() => navigate("/login")} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SignUp;
