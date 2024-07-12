import CumpasSvg from "@/public/CumpasSvg";
import DownArrow from "@/public/DownArrow";
import StarSvg from "@/public/StarSvg";

const NavBtn = ({ label }) => {
  return (
    <>
      {label && (
        <button className=" text-black font-semibold text-lg flex gap-4 py-4 px-2 justify-center items-center ">
          <CumpasSvg />
          {label}
          <DownArrow />
        </button>
      )}
      {!label && (
        <button className=" text-black font-semibold text-lg flex gap-4 py-4 px-2 justify-center items-center ">
          <StarSvg />
          Hobbies
          <DownArrow />
        </button>
      )}
    </>
  );
};
export default NavBtn;
