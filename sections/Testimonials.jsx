import MicSvg from "@/public/MicSvg";
import PlayerImg from "@/public/PlayerImg";
import PlayerSvg from "@/public/PlayerSvg";
import TestimonialsSvg from "@/public/TestimonialsSvg";
import { IoPlay } from "react-icons/io5";

const Testimonials = () => {
  return (
    <section className=" md:p-[100px] px-6 py-12 relative">
      <div className=" flex md:gap-10 gap-5 flex-col  p-10 bg-[#F7F5F9]">
        <div className=" flex  items-center  md:justify-start justify-center gap-6">
          <TestimonialsSvg />
          <h1 className=" text-2xl font-semibold">Testimonials</h1>
        </div>
        <p className="font-poppins font-light sm:text-lg text-sm md:text-start text-center leading-30 tracking-wider text-gray-600">
          In a fast growing and ever changing city like Bangalore, it sometimes
          becomes very difficult to find or connect with like minded people.
          Websites like hobbycue.com is a great service which helps me get in
          touch with, communicate, connect, and exchange ideas with other
          dancers. It also provides the extra benefit of finding products and
          services that I can avail, which I can be assured is going to be of
          great quality as it comes recommended by people of the hobbycue
          community. To have discussions, to get visibility, and to be able to
          safely explore various hobbies and activities in my city, all under
          one roof, is an excellent idea and I highly recommend it.
        </p>
        <div>
          <div className=" flex md:flex-row flex-col-reverse  justify-between gap-10 items-center ">
            <div className=" bg-[#CCC1DA] md:w-[100%] w-full justify-center md:p-[20px] p-[10px] rounded-lg flex items-center ">
              <div className=" relative md:w-fit w-fit">
                {" "}
                {/* <PlayerSvg /> */}
                <div className="p-2 w-fit bg-white rounded-full">
                  <IoPlay className="  text-[#8064A2] text-xl  " />
                </div>
                {/* <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"> */}
                {/* </div> */}
              </div>
              <div className=" w-full lg:px-10 px-2 flex items-center">
                <div className="h-3 w-3 rounded-full bg-[#8064A2]"></div>
                <div className="h-1 rounded-md w-[100%] bg-white"></div>
                <p className="ml-2 text-xs">0:00</p>
              </div>
              <div>
                <div className="h-16 w-16 object-cover relative rounded-full">
                  <img
                    src="/PlayerImg.jpg"
                    className="h-16 w-16 object-cover rounded-full"
                    alt=""
                  />
                  <div className=" absolute bottom-0">
                    <MicSvg />
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex items-center gap-8 justify-between w-fit">
              <img
                src="/PlayerImg.jpg"
                className="md:w-20 w-16 object-cover  rounded-full"
                alt=""
              />
              <div className=" flex flex-col items-center justify-center pr-10 gap-2">
                <h1 className=" text-[#8064A2] whitespace-nowrap font-semibold md:text-lg text-base">
                  Shubha Nagarajan
                </h1>
                <p className="text-[#0096C8] text-sm font-normal">
                  Classical Dancer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
