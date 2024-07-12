import Card from "@/components/Card";
import LocationSvg from "@/public/LocationSvg";
import PeopleSvg from "@/public/PeopleSvg";
import ProductSvg from "@/public/ProductSvg";
import ProgramSvg from "@/public/ProgramSvg";
import { IoPeople } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { IoBagHandle } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
const CardSection = () => {
  return (
    <section className=" relative  ">
      <div className=" md:p-[100px] px-6 py-12 gap-8 grid lg:grid-cols-2 grid-cols-1">
        <Card
          className={"parent1"}
          childClass={"child1"}
          icon={<IoPeople className=" text-[#8064A2] text-4xl child1" />}
          id={0}
          label={"People"}
          context={`Find a teacher, coach, or expert for your hobby interest in your
          locality. Find a partner, teammate, accompanist or collaborator.`}
          btnText={"Connect"}
        />
        <Card
          className={"parent2"}
          childClass={"child2"}
          id={1}
          icon={<MdLocationOn className=" text-[#77933C] text-4xl child2 " />}
          label={"Place"}
          context={`Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.`}
          btnText={"Meet up"}
        />
        <Card
          className={"parent3"}
          childClass={"child3"}
          id={2}
          icon={<IoBagHandle className=" text-[#C0504D] text-4xl child3" />}
          label={"Product"}
          context={`Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.`}
          btnText={"Get it"}
        />
        <Card
          className={"parent4"}
          childClass={"child4"}
          id={3}
          icon={<SlCalender className=" text-[#0096C8] text-4xl child4" />}
          label={"People"}
          context={`Find events, meetups and workshops related to your hobby.  Register or buy tickets online.`}
          btnText={"Attend"}
        />
      </div>
    </section>
  );
};

export default CardSection;
