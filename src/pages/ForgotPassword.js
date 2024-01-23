import React from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from "../components/input/CustomInput";
import Button from "../components/button/Button";
import { motion } from "framer-motion";
import Logo from "../components/logo/Logo";
import { toast } from "react-toast";

function ForgotPassword() {
  const navigate = useNavigate();
  return (
    <div className="container grid place-items-center pt-[28%] 880:pt-[8%] pb-12">
      <Logo />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.1 }}
        className="text-base font-medium mt-10 880:mt-12"
      >
        <p
          className="text-primary-main font-medium cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Back to Login
        </p>
      </motion.p>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="text-2xl tracking-tighter 880:text-3xl font-semibold text-center text-primary-900 mt-1 mb-1 mx-0"
      >
        Can&apos;t remember your password?
      </motion.h3>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 mb-4 w-full px-[4%] 880:px-[24%]"
      >
        <CustomInput placeholder="Enter account email" type="text" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          className="mt-4"
        >
          <Button
            text="Reset Password"
            onClick={() => {
              toast.success("Check Mail For Reset Link", { color: "#fff" });
              navigate("/reset-password");
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ForgotPassword;
