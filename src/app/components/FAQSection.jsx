import React, { useState } from "react";
import SectionIntro from "./SectionIntro";
import CollapseCard from "./ui/CollapseCard";

export default function FAQSection() {
  return (
    <section className="py-20 px-3">
      <SectionIntro
        subtitle={"Frequently asked questions"}
        para={"Choose any questions you need"}
      />
      <div className="max-w-360 mx-auto">
        <CollapseCard
          title={"What types of timages are avaliable on your platform?"}
        >
          <div>
            Our platform offers a diverse range of abstract images to suit
            various preference and needs. From vibrant geometric patterns to
            soothing landscapes, we strive to provide a wide selection to cater
            to different tastes.
          </div>
        </CollapseCard>
        <CollapseCard
          title={"How can I access and download images from your platform?"}
        >
          <div>
            Accessing and downlaoding images fro mour platform is simple. Upon
            signing up and logging in, users can browse through our crated
            colllection and download their chosen images dierctly to thier
            devices with just a few clicks.
          </div>
        </CollapseCard>
        <CollapseCard
          title={
            "Do you offer free image, or is there a subscription required?"
          }
        >
          <div>
            We provide both free and premium images on our platform. Users can
            explore a selection of free images without any subscription. For
            access to our enitre library and additional features, we offer
            subscription plans tailored to different user needs.
          </div>
        </CollapseCard>
        <CollapseCard
          title={"What payment methods do you accept for subscription?"}
        >
          <div>
            We accept a variety of payment methods, including credit/debit cards
            and online payment gateways, to make the subscription process
            convenient for our users.
          </div>
        </CollapseCard>
        <CollapseCard
          title={"Can I cancel or modify my subscription at any time?"}
        >
          <div>
            Yes, absolutely. You have the flexibility to cancel or modify your
            subscription at any time through your account setting. Changes will
            take effect immediately, ensuring you have full control over your
            subscription preferences.
          </div>
        </CollapseCard>
        <CollapseCard
          title={"How frequently do you update your image collection?"}
        >
          <div>
            We regularly update our image collection with fresh and captivating
            conetent to keep our users inspiree and engaged. New images are
            added consistently to ensure there's always something now to
            discover on our platform.
          </div>
        </CollapseCard>

        <div className="border border-gray-200 shadow-md mt-8 p-3 sm:p-6 rounded-md flex flex-col sm:flex-row sm:items-center justify-between">
          <div>
            <div className="font-semibold text-xl mb-1">
              Can't find the answer your're looking for?
            </div>
            <p className="text-black/70 mb-3">
              Reach out to our{" "}
              <span className="text-[#4539ca]">customer support</span> team.
            </p>
          </div>
          <button className="bg-[#4539ca] text-white px-4 py-3 rounded-sm">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}
