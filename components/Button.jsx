const Button = ({ label, isFill = false, childClass = "" }) => {
  return (
    <>
      {!isFill && (
        <button
          className={` ${childClass} w-fit px-4 py-2 border border-[#8064A2] font-semibold md:text-[14px] text-[12px] leading-[16px] text-[#8064A2]  rounded-lg`}
        >
          {label}
        </button>
      )}
      {isFill && (
        <button
          className={` ${childClass}  border border-[#8064A2] text-white font-semibold text-[14px] w-fit px-4 py-2 leading-[16px] bg-[#8064A2]  rounded-lg`}
        >
          {label}
        </button>
      )}
    </>
  );
};

export default Button;
