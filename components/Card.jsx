import Button from "@/components/Button";
import LocationSvg from "@/public/LocationSvg";
import PeopleSvg from "@/public/PeopleSvg";
import ProductSvg from "@/public/ProductSvg";
import ProgramSvg from "@/public/ProgramSvg";
const Card = ({ className, childClass, icon, label, context, btnText, id }) => {
  // const bgcolor = `bg-[${color}]`;
  const bgs = [
    "hover:bg-[#8064A2]",
    "hover:bg-[#77933C]",
    "hover:bg-[#C0504D]",
    "hover:bg-[#0096C8]",
  ];
  // const newIcon = `< ${icon} />`;

  return (
    <div
      className={` ${className}  border-2 p-10 gap-8 duration-1000 ${bgs[id]} rounded-lg flex flex-col`}
    >
      <div className=" flex md:justify-start justify-center items-center gap-6">
        {icon}
        <h1 className={` ${childClass} text-2xl font-semibold`}>{label}</h1>
      </div>

      <div>
        <p
          className={` ${childClass} sm:text-center text-start font-poppins font-normal text-lg leading-27 text-black`}
        >
          {context}
        </p>
      </div>
      <Button label={btnText} childClass={`${childClass} hidden xl:inline`} />
    </div>
  );
};

export default Card;
