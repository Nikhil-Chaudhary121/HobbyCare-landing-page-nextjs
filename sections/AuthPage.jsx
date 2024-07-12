"use client";
import Button from "@/components/Button";
import AuthButton from "@/components/AuthButton";
import "../app/globals.css";
import GroupSvg from "@/public/GroupSvg";
import ContinueWithButtom from "@/components/ContinueWithButtom";
import GoogleSvg from "@/public/GoogleSvg";
import FacebookSvg from "@/public/FacebookSvg";
import { FormCheck } from "react-bootstrap";
import LockSvg from "@/public/LockSvg";
import SignInCard from "@/components/SignInCard";
import JoinUsCard from "@/components/JoinUsCard";

import authScreenAtom from "@/atom/AuthAtom";
import { useRecoilValue } from "recoil";
const AuthPage = ({ component }) => {
  const authScreenState = useRecoilValue(authScreenAtom);
  return (
    <section className="flex lg:flex-row justify-between flex-col md:pt-24 lg:px-20 xl:p-24 px-6 pt-8 relative bg-[#F7F5F9] ">
      <div className=" flex flex-col lg:w-[56%] w-full">
        <div className="flex flex-col lg:gap-10 gap-0 pt-2">
          <h1 className=" font-poppins italic font-semibold md:text-[36px] sm:text-[28px] text-[20px] md:leading-[54px] leading-[22px] md:tracking-[0.02em] text-black">
            Explore your <span className=" text-[#0096C8]">hobby</span> or{" "}
            <span className=" text-[#8064A2]">passion</span>
          </h1>
          <div className=" flex flex-col lg:gap-5">
            <p className=" w-[95%] font-poppins font-light md:text-[14px] sm:text-[16px] text-[12px]  md:leading-[30px] leading-[22px] md:tracking-[0.02em] text-black">
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform.{" "}
              <span className=" hidden sm:inline">
                Your hobby may be about visual or performing arts, sports,
                games, gardening, model making, cooking, indoor or outdoor
                activities…
              </span>
            </p>
            <p className="  w-[95%] hidden sm:inline font-poppins font-light text-[14px] leading-[25px] tracking-[0.02em] text-black">
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
          </div>
          <div className=" w-full justify-center mt-10 hidden md:flex">
            <GroupSvg />
          </div>
        </div>
      </div>
      <div className=" xl:w-[30%] lg:w-[40%] md:w-[70%]  m-auto">
        {authScreenState === "sign" ? <SignInCard /> : <JoinUsCard />}
      </div>
      {/* <SignInCard />
      <JoinUsCard /> */}
      <div className=" overflow-hidden mt-10  md:hidden flex">
        <GroupSvg />
      </div>
    </section>
  );
};

export default AuthPage;
