import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const LoginSignup = () => {
  const loginsignup_fields_input =
    "flex items-center h-[clamp(1.4rem,14vmin,4rem)] w-full px-[clamp(0.4rem,4vmin,1.25rem)] border-[#c9c9c9] border-[0.065rem] outline-none bg-white text-[clamp(0.4rem,4vmin,1.25rem)] text-[#5c5c5c] rounded-full";

  const [[hiddenPassword, hiddenConfirmedPassword], setHiddenPassword] =
    useState([true, true]);

  return (
    <div className="loginsignup flex justify-center w-full h-fit bg-[linear-gradient(180deg,#fde1ff,#e1ffea22_80%)] sm:py-[clamp(1.5rem,15vmin,6rem)]">
      <div className="loginsignup-container h-fit bg-white/40 backdrop-blur-sm px-[clamp(1rem,6vmin,2.5rem)] py-[clamp(1rem,10vmin,3rem)] sm:rounded-3xl">
        <h1 className="text-[#171717] text-[clamp(1rem,10vmin,3rem)]">
          Sign up
        </h1>
        <div className="loginsignup-fields flex flex-col gap-[clamp(0.5rem,5vmin,1.75rem)] my-[clamp(0.5rem,5vmin,1.75rem)]">
          <input
            className={loginsignup_fields_input}
            type="text"
            placeholder="Your Name"
          />
          <input
            className={loginsignup_fields_input}
            type="email"
            placeholder="Email Address"
          />
          <div className={loginsignup_fields_input}>
            <input
              className="w-full h-fit outline-none "
              type={hiddenPassword ? "password" : "text"}
              placeholder="Password"
            />
            &nbsp;
            <FontAwesomeIcon
              icon={
                hiddenPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
              }
              onClick={() => {
                setHiddenPassword((prev) => [!prev[0], prev[1]]);
              }}
              className="size-[clamp(1rem,6vmin,2rem)] "
            />
          </div>
          <div className={loginsignup_fields_input}>
            <input
              className="w-full h-fit outline-none "
              type={hiddenConfirmedPassword ? "password" : "text"}
              placeholder="Confirmed Password"
            />
            &nbsp;
            <FontAwesomeIcon
              icon={
                hiddenConfirmedPassword
                  ? "fa-solid fa-eye"
                  : "fa-solid fa-eye-slash"
              }
              onClick={() => {
                setHiddenPassword((prev) => [prev[0], !prev[1]]);
              }}
              className="size-[clamp(1rem,6vmin,2rem)] "
            />
          </div>
        </div>
        <button className="w-full h-[clamp(1rem,10vmin,4rem)] rounded-full bg-[#ff4141] text-white text-[clamp(0.4rem,4vmin,1.5rem)] font-medium mt-[clamp(0.5rem,3.7vmin,1.5rem)] cursor-pointer">
          Continue
        </button>
        <p className="loginsignup-login text-[#5c5c5c] text-[clamp(0.4rem,4vmin,1.25rem)] mt-[clamp(0.5rem,5vmin,1.75rem)] font-medium">
          Already have an account?&nbsp;
          <span className="text-[#ff4141] font-semibold cursor-pointer">
            Login
          </span>
        </p>
        <div className="loginsignup-agree flex items-baseline text-[#5c5c5c] text-[clamp(0.4rem,4vmin,1.25rem)] mt-[clamp(0.4rem,4vmin,1.25rem)] font-medium">
          <input
            type="checkbox"
            className="size-[clamp(0.3rem,3.8vmin,1.15rem)] accent-[#ff4141]"
          />
          &nbsp; By continuing, i agree to the terms of use & privacy policy
        </div>
      </div>
    </div>
  );
};

export { LoginSignup };
