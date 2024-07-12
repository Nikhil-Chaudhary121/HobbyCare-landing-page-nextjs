"use client";
import AuthPage from "@/sections/AuthPage";
import BottomCard from "@/sections/BottomCard";
import CardSection from "@/sections/CardSection";
import SingleCard from "@/sections/SingleCard";
import Testimonials from "@/sections/Testimonials";
import Image from "next/image";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <main className=" relative  ">
      <RecoilRoot>
        <AuthPage />
      </RecoilRoot>
      <CardSection />
      <SingleCard />
      <Testimonials />
      <BottomCard />
    </main>
  );
}
