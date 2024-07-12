// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBox = ({ isFooter }) => {
  return (
    <>
      {!isFooter && (
        <div className="  lg:flex w-[300px] hidden  h-[40px] left-[425px] ">
          <input
            className="h-10 p-3 text-[12px] w-72 box-border border-[1px] border-[#EBEDF0] bg-gray-100 rounded-lg"
            type="text"
            placeholder="Search here..."
          />
          <button
            className="-ml-10 w-10 h-10  bg-[#8064A2] rounded-tr-lg  rounded-br-lg flex justify-center items-center"
            type="submit"
          >
            <CiSearch color="white" />
          </button>
        </div>
      )}
      {isFooter && (
        <div className="  flex w-[300px] h-[40px] left-[425px] ">
          <input
            className="h-10 p-3 text-[12px] w-72 box-border border-[1px] border-[#EBEDF0] bg-gray-100 rounded-lg"
            type="text"
            placeholder="Email ID"
          />
          <button
            className="-ml-10 w-fit px-3 h-10  bg-[#8064A2] rounded-tr-lg  rounded-br-lg flex justify-center items-center"
            type="submit"
          >
            <span className=" text-white text-xs ">Invite</span>
          </button>
        </div>
      )}
    </>
  );
};

export default SearchBox;
