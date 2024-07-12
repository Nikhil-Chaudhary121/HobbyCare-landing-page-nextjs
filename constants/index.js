import Fb from "@/public/Fb";
import Google from "@/public/Google";
import Insta from "@/public/Insta";
import MsgBox from "@/public/MsgBox";
import Pintrest from "@/public/Pintrest";
import Twiter from "@/public/Twiter";
import Youtube from "@/public/Youtube";

// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/", key: "how_hilink_work", label: "How Hilink Work?" },
  { href: "/", key: "services", label: "Services" },
  { href: "/", key: "pricing ", label: "Pricing " },
  { href: "/", key: "contact_us", label: "Contact Us" },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Hobbycue",
    links: ["About Us", "Our Services", "Work with Us", "FAQ", "Contact Us"],
  },
  {
    title: "How Do I",
    links: [
      "Sign Up ",
      "Add a Listing ",
      "Claim Listing",
      "Post a Query",
      "Add a Blog Post",
      "Other Queries",
    ],
  },
  {
    title: "Quick Links",
    links: ["Listings", "Blog Posts", "Shop / Store", "Community"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "123-456-7890" },
    { label: "Email Officer", value: "hilink@akinthil.com" },
  ],
};

export const SOCIALS = {
  title: "Social Media",
  links: [
    // <Fb />,
    // <Twiter />,
    // <Insta />,
    // <Pintrest />,
    // <Google />,
    // <Youtube />,
    // <MsgBox />,
  ],
};
