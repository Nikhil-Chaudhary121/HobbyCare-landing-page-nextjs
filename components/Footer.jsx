import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Fb from "@/public/Fb";
import Google from "@/public/Google";
import Insta from "@/public/Insta";
import MsgBox from "@/public/MsgBox";
import Pintrest from "@/public/Pintrest";
import Twiter from "@/public/Twiter";
import Youtube from "@/public/Youtube";
import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
import DownArrow from "@/public/DownArrow";

const Footer = () => {
  return (
    <footer className="flex sm:justify-center sm:items-center w-full ">
      <div className="   flex w-full flex-col ">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <div className="flex sm:p-16 p-6 w-full sm:flex-wrap sm:flex-row flex-col gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <div className="flex flex-col items-start" key={columns.title}>
                <div className=" mb-2 flex w-full justify-between items-center">
                  <p className="font-bold text-lg">{columns.title}</p>
                  <div className=" sm:hidden">
                    <DownArrow />
                  </div>
                </div>
                <ul className="p-0 flex flex-col gap-0 text-gray-30">
                  {columns.links.map((link, idx) => (
                    <p href="/" key={idx}>
                      {link}
                    </p>
                  ))}
                </ul>
              </div>
            ))}

            {/* <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div> */}

            <div className="flex flex-col gap-12">
              <div className=" flex flex-col gap-3">
                <p className="text-lg font-bold">Social Media</p>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  <Link href="/">
                    <Fb />
                  </Link>
                  <Link href="/">
                    <Twiter />
                  </Link>
                  <Link href="/">
                    <Insta />
                  </Link>
                  <Link href="/">
                    <Pintrest />
                  </Link>
                  <Link href="/">
                    <Google />
                  </Link>
                  {/*<Link href="/">
                    <Youtube />
                  </Link>
                  <Link href="/">
                    <MsgBox /> */}
                  {/* </Link> */}
                </ul>
              </div>
              <div className=" flex flex-col gap-3">
                <p className="text-lg font-bold">Invite Friends</p>
                <SearchBox isFooter={true} />
              </div>
            </div>
          </div>
        </div>

        <div className="border py-10  bg-[#F7F5F9]">
          <p className=" text-sm font-bold w-full text-center text-black">
            © Purple Cues Private Limited
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
