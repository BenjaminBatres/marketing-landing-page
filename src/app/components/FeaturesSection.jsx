import React from "react";
// icons
import { FiDownload } from "react-icons/fi";
import { RiBrushLine } from "react-icons/ri";
import { FaRegCopyright } from "react-icons/fa6";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { RiTeamLine } from "react-icons/ri";
import SectionIntro from "./SectionIntro";
import Highlights from "./ui/Highlights";

export default function FeaturesSection() {
  const highlights = [
    {
      icon: <FiDownload />,
      title: "Infinite Download",
      description:
        "Once you subscribe to our plan, they're all yours. Download as many as you want and use them for work presentations, wallpaper, and much more.",
    },
    {
      icon: <RiBrushLine />,
      title: "Purely Handcrafted",
      description:
        "No AI, no generic images, Crafted from various chemicals, fabrics, clouds, or even particles a small as dust.",
    },
    {
      icon: <FaRegCopyright />,
      title: "All Are Under licensed",
      description:
        "The only limitations with abtract images is that you are not able to sell them in any form, whether digital or haed copy (such as paintings or prints on paper)",
    },
    {
      icon: <RxCounterClockwiseClock />,
      title: "Cancel Anytime",
      description:
        "Subscibe at your own pace, and cancel when you feel it's enough.",
    },
    {
      icon: <RiTeamLine />,
      title: "Empowering for Team",
      description:
        "We support multiple seat at oonce, requiring only a single payment.",
    },
    {
      icon: <i className="bx  bx-refresh-ccw"></i>,
      title: "No Limitations",
      description:
        "Use as many you want, from Dribble presentations to PowerPoint presentations.",
    },
  ];
  return (
    <section id="features" className="py-20 px-3">
      <SectionIntro
        title={"Premium abstract images"}
        subtitle={"Easy access to top quality images"}
        para={
          "In a world where storytelling constanly evolves, we lead with groundbreaking images designed for your presentations excellence."
        }
        paraWidth={640}
      />
      <div className="max-w-360 mx-auto">
        <div className="flex justify-center flex-wrap gap-5 md:gap-0">
          {highlights.map((highlight, id) => (
           <Highlights key={id} highlight={highlight}/>
          ))}
        </div>
      </div>
    </section>
  );
}
