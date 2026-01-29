import React from "react";
import SectionIntro from "./SectionIntro";
import { FiBell } from "react-icons/fi";
import { PiUsersThree } from "react-icons/pi";
import { FaRegCopyright } from "react-icons/fa6";
import Features from "./ui/Features";
import FeatureImage from "../assets/unsplash_rAtzDB6hWrU_1.jpg";
import Image from "next/image";
export default function ClassSupportSection() {
  const features = [
    {
      icon: <FiBell />,
      title: "Fast downloads",
      description:
        "Our robust servers are primed to deliver the highest resolution images swiftly, ensuriing a smooth download experience",
    },
    {
      icon: <PiUsersThree />,
      title: "Convenience for teams",
      description:
        "Your single account can accomodate multiplle users simultaneously downloading without any disruptions, streaming teamwork and productivity. ",
    },
    {
      icon: <FaRegCopyright />,
      title: "Portrait or landscape",
      description:
        "Our straighforward, royalty-free licensing means your choosen images are your to innovate with, without the hassie of negotiating usage rights for every new project.",
    },
  ];
  return (
    <section className="py-10 sm:py-20 px-3">
      <SectionIntro
        title={"Best-in-class support"}
        subtitle={"Convenience and licensing that empowers"}
        para={
          "In a world where storytelling constantly evolves, don't let licensing and poor support hold you down."
        }
        paraWidth={400}
      />
      <div className="max-w-360 mx-auto">
        <div className="flex flex-col gap-10 laptop:flex-row laptop:gap-8">
          <div className="flex-1/2">
            <figure className="h-55 sm:h-100 transition-all duration-300">
              <Image
                src={FeatureImage}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </figure>
          </div>
          <div className="flex-1/2 space-y-15">
            <Features features={features} />
          </div>
        </div>
      </div>
    </section>
  );
}
