import SearchBox from "./SearchBox";
import NavBtn from "./NavBtn";
import Button from "./Button";
import BookMarkSvg from "@/public/BookMarkSvg";
import NotificationSvg from "@/public/NotificationSvg";
import CartSvg from "@/public/CartSvg";
import { CiMenuBurger, CiSearch } from "react-icons/ci";

const Nav = () => {
  return (
    /* HobbyCue Logo */

    <nav className=" flex justify-between items-center max-container bg-white padding-container relative z-30 lg:px-20 px-6 py-2">
      <div className=" flex justify-start gap-12 items-center">
        <img
          src="/logo.png"
          className=" lg:w-[293.26px] lg:h-[60px] h-8 "
          alt=""
        />
        <SearchBox />
      </div>
      <div className=" gap-6 hidden lg:flex items-center">
        <div className=" 2xl:flex hidden ">
          <NavBtn />
          <NavBtn label={"Explore"} />
        </div>
        <BookMarkSvg />
        <NotificationSvg />
        <CartSvg />
        <Button label={"Sign In"} />
      </div>
      <div className=" gap-6 lg:hidden flex items-center">
        <CiSearch className=" text-[#8064A2] text-2xl font-bold" />
        <NotificationSvg />
        <CiMenuBurger className=" text-[#8064A2] text-2xl font-bold " />
      </div>

      {/* <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div> */}
    </nav>
  );
};

export default Nav;
