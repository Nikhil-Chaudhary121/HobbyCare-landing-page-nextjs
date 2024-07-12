import Card from "@/components/Card";
import PlusSvg from "@/public/PlusSvg";
import React from "react";

const SingleCard = () => {
  return (
    <section className="bg-[#F7FDFF] relative md:p-[100px] px-6 py-12 ">
      <div className=" w-full h-fit">
        <Card
          icon={<PlusSvg color={"#0096C8"} />}
          label={"Add your own"}
          context={`Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page`}
          btnText={"Add new"}
        />
      </div>
    </section>
  );
};

export default SingleCard;
