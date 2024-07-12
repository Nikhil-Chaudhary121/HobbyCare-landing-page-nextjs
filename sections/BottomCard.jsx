import Button from "@/components/Button";
import SearchBox from "@/components/SearchBox";
import BottomSvg from "@/public/BottomSvg";

const BottomCard = () => {
  return (
    <section className="bg-[#F7FDFF] relative md:pt-[100px] px-6 py-12 ">
      <div className=" flex flex-col ">
        <div className=" flex flex-col md:gap-8 gap-4 md:pl-[100px]">
          <h1 className=" text-4xl text-[18px] italic font-medium">
            Your <span className="text-[#8064A2]">Hobby</span>, Your{" "}
            <span className="text-[#0096C8]">Community...</span>
          </h1>
          <Button label={"Get Started"} isFill={true} />
        </div>

        <div className="">
          <img
            src="/BottomImg.png"
            alt=""
            className=" object-cover  w-full h-fit"
          />
        </div>
      </div>
    </section>
  );
};

export default BottomCard;
