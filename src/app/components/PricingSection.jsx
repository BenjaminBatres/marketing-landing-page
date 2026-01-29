import React from "react";
import SectionIntro from "./SectionIntro";
import PricingTiers from "./ui/PricingTiers";

export default function PricingSection() {
    const pricingTiers = [
        {
            title: "Basic plan",
            description: 'Access a curated selection of abtract images',
            price: '$9.99',
            perks: [
                'Standard quality images',
                'Limited to personal use',
                'Email support'
            ]
        },
        {   
            subtitle: "Most popular",
            title: "Standard Plan",
            description: 'Next-level Intergations, pricing aconomically',
            price: '$19.99',
            perks: [
                'Expanded library with more diverse abtract images',
                'High-resolution images avaliable',
                'Suitable for commerical use',
                'Priority email support',
                'Advanced analytics',
            ]
        },
        {
            title: "Premium Plan",
            description: 'Experience limitless living for power users',
            price: '$29.99',
            perks: [
                'Full access to the entire image library, including exclusive content',
                'Highest quality images, including premium collections',
                'Commercial and resale rights',
                'Dedicated customer support line',
                '24/7 support response time',
                'Advanced analytics and insights',
            ]
        },

    ] 
  return (
    <section id="pricing" className="py-20 sm:py-30 px-3">
      <SectionIntro
        title={"Pricing Tiers"}
        subtitle={"Fit for all your needs"}
        para={
          "Pick the plan that suits you today and step up as your demands grow - our fllexible options have your journey mapped out."
        }
        paraWidth={660}
      />
      <div className="flex justify-center gap-20 mb-10 laptop:mb-15">
        <button className="px-7 py-2 rounded-sm shadow-sm border border-gray-100">
          Monthly
        </button>
        <button className="text-black/50 cursor-not-allowed">Annually</button>
      </div>

      <div className="max-w-360 mx-auto">
        <div className="flex flex-col laptop:flex-row gap-8 laptop:gap-0 justify-evenly">
        {pricingTiers.map((pricingTier, id) => (
            <PricingTiers pricingTier={pricingTier} key={id} id={id}/> 
        ))}
        </div>
      </div>
    </section>
  );
}
