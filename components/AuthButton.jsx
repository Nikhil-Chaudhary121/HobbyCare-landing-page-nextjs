import React from "react";

const AuthButton = ({ isActive, label, action = "" }) => {
  return (
    <>
      {isActive && (
        <button
          onClick={action}
          className="font-semibold text-[20px] leading-[30px] text-[#8064A2] underline underline-offset-8"
        >
          {label}
        </button>
      )}
      {!isActive && (
        <button
          onClick={action}
          className="font-semibold text-[20px] leading-[30px] text-[#939CA3]"
        >
          {label}
        </button>
      )}
    </>
  );
};

export default AuthButton;
