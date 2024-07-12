"use client";
import GoogleSvg from "@/public/GoogleSvg";
import AuthButton from "./AuthButton";
import FacebookSvg from "@/public/FacebookSvg";
import { FormCheck } from "react-bootstrap";
import LockSvg from "@/public/LockSvg";
import { useSetRecoilState } from "recoil";
import authScreenAtom from "@/atom/AuthAtom";

const SignInCard = () => {
  const setAuthScreen = useSetRecoilState(authScreenAtom);
  return (
    <>
      {/* <div className="  w-f px-6 flex flex-col  pt-4 gap-8">
        <div className=" flex justify-start items-center gap-5 ">
          <AuthButton isActive={true} label={"Sign In"} />
          <AuthButton
            isActive={false}
            label={"Join Us"}
            action={() => {
              setAuthScreen(() => "join");
            }}
          />
        </div>
        <div className=" mb-5 flex md:flex-col flex-col-reverse gap-8 ">
          <div className=" flex flex-col  gap-4 w-full">
            <button class="box-border  relative  flex flex-row items-center justify-center md:gap-[88px] h-[40px] bg-[#F7F5F9] border border-[#8064A2] rounded-lg">
              <div class=" w-[16px] absolute left-[15%] h-[16px]">
                <GoogleSvg />
              </div>
              <span class="font-poppins  text-nowrap font-semibold text-[14px] leading-[16px] text-[#08090A]">
                Continue with Google
              </span>
            </button>
            <button class="box-border relative w-full flex flex-row items-center justify-center md:gap-[88px] h-[40px] bg-[#F7F5F9] border border-[#8064A2] rounded-lg">
              <div class=" w-[16px]  absolute left-[15%] h-[16px]">
                <FacebookSvg />
              </div>
              <span class="font-poppins whitespace-nowrap font-semibold text-[14px] leading-[16px] text-[#08090A]">
                Continue with Facebook
              </span>
            </button>
          </div>
          <div>
            <div class="relative flex justify-around items-center gap-3 ">
              <div class=" h-[2px] flex-1 bg-gray-300"></div>
              <div class=" inset-0 left-[38.29%] right-[38.05%] flex items-center justify-center">
                <span class="font-poppins font-semibold text-[12px] leading-[16px] text-black">
                  Or connect with
                </span>
              </div>
              <div class=" h-[2px] flex-1 bg-gray-300"></div>
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            <div className=" flex flex-col gap-4">
              <div className=" ">
                <input
                  type="Email"
                  placeholder="Email"
                  className=" text-[#939CA3] py-2 px-4 box-border flex flex-row justify-center items-center  gap-10 h-10  w-[98%] bg-white border border-gray-300 rounded-lg"
                  name=""
                  id=""
                />
              </div>
              <div className=" ">
                <input
                  type="Password"
                  placeholder="Password"
                  className=" text-[#939CA3] py-2 px-4 box-border flex flex-row justify-center items-center  gap-10 h-10 w-[98%] bg-white border border-gray-300 rounded-lg"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className=" px-2  flex justify-between items-center">
              <div className=" flex justify-start items-center">
                <FormCheck />
                <label className="ml-3">Remember me</label>
              </div>
              <div className="flex justify-start items-center">
                <LockSvg />
              </div>
            </div>
            <div className="mt-4">
              <button class="box-border bg-[#8064A2] text-white flex flex-row justify-center items-center px-12 py-2 gap-10 w-full  border border-[#8064A2] rounded-lg">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="  px-6 flex flex-col  pt-4 gap-8">
        <div className=" flex justify-start items-center gap-5 ">
          <AuthButton isActive={true} label={"Sign In"} />
          <AuthButton
            isActive={false}
            label={"Join Us"}
            action={() => {
              setAuthScreen(() => "join");
            }}
          />
        </div>
        <div className=" flex md:flex-col flex-col-reverse gap-8 ">
          <div className=" flex flex-col  gap-4 w-full">
            <button class="box-border  relative  flex flex-row items-center justify-center md:gap-[88px] h-[40px] bg-[#F7F5F9] border border-[#8064A2] rounded-lg">
              <div class=" w-[16px] absolute left-[15%] h-[16px]">
                <GoogleSvg />
              </div>
              <span class="font-poppins  text-nowrap font-semibold text-[14px] leading-[16px] text-[#08090A]">
                Continue with Google
              </span>
            </button>
            <button class="box-border relative w-full flex flex-row items-center justify-center md:gap-[88px] h-[40px] bg-[#F7F5F9] border border-[#8064A2] rounded-lg">
              <div class=" w-[16px]  absolute left-[15%] h-[16px]">
                <FacebookSvg />
              </div>
              <span class="font-poppins whitespace-nowrap font-semibold text-[14px] leading-[16px] text-[#08090A]">
                Continue with Facebook
              </span>
            </button>
          </div>
          <div>
            <div class="relative flex justify-around items-center gap-3 ">
              <div class=" h-[2px] flex-1 bg-gray-300"></div>
              <div class=" inset-0 left-[38.29%] right-[38.05%] flex items-center justify-center">
                <span class="font-poppins font-semibold text-[12px] leading-[16px] text-black">
                  Or connect with
                </span>
              </div>
              <div class=" h-[2px] flex-1 bg-gray-300"></div>
            </div>
          </div>
          <div className=" flex flex-col ">
            <div className=" flex flex-col sm:gap-4 gap-2">
              <div className=" ">
                <input
                  type="Email"
                  placeholder="Email"
                  className=" text-[#939CA3] py-2 px-4 box-border flex flex-row justify-center items-center  gap-10 h-10  w-[98%] bg-white border border-gray-300 rounded-lg"
                  name=""
                  id=""
                />
              </div>
              <div className=" ">
                <input
                  type="Password"
                  placeholder="Password"
                  className=" text-[#939CA3] py-2 px-4 box-border flex flex-row justify-center items-center  gap-10 h-10 w-[98%] bg-white border border-gray-300 rounded-lg"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className=" px-2  flex justify-between items-center">
              <div className=" flex justify-start items-center">
                <FormCheck />
                <label className="ml-2 sm:text-base text-sm">Remember me</label>
              </div>
              <div className="flex  justify-start items-center">
                <div className=" hidden sm:flex">
                  <LockSvg />
                </div>
                <span className=" text-sm flex sm:hidden">
                  Forget password?
                </span>
              </div>
            </div>
            <p className=" invisible ml-2 h-0 text-xs text-[#6D747A]">
              {"   "}
              By continuing, you agree to our{" "}
              <span className=" text-black font-semibold">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className=" text-black font-semibold">Privacy Policy</span>
            </p>
            <div className="">
              <button class="box-border bg-[#8064A2] text-white text-bold flex flex-row justify-center items-center px-12 py-2 gap-10 w-full  border border-[#8064A2] rounded-lg">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInCard;
