import React from "react";
import Image from "next/image";
import SectionIntro from "./SectionIntro";
import FeatureImage from "../assets/unsplash_rAtzDB6hWrU.jpg";
import { RiHdLine } from "react-icons/ri";
import { TbDropletStar } from "react-icons/tb";
import { FaRainbow } from "react-icons/fa6";
import Features from "./ui/Features";

export default function DesignerSection() {
  const features = [
    {
      icon: <RiHdLine />,
      title: "5k resolution support",
      description:
        "All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.",
    },
    {
      icon: <TbDropletStar />,
      title: "From water to glass",
      description:
        "We offer a wide array of abstraction, ranging from water to glass, and encompassing various styles including 3D and vector. ",
    },
    {
      icon: <FaRainbow />,
      title: "Portrait or landscape",
      description:
        "Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories",
    },
  ];
  return (
    <section className="py-20 px-3">
      <SectionIntro
        title={"High quality images"}
        subtitle={"For designers, by designers"}
        para={
          "Unleash boundless creativity with a large repository of images optimized for designers"
        }
      />
      <div className="max-w-360 mx-auto">
        <div className="flex flex-col laptop:flex-row gap-10 pt-5">
          <div className="flex-1/2 space-y-15">
            <Features features={features} />
          </div>
          <div className="flex-1/2">
            <figure className="h-55 sm:h-120 shadow-lg">
              <Image
                src={FeatureImage}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
