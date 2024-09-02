import Image from "next/image";
import logo from "@/images/logo.png";
import instagram from "@/images/instagram.svg";
import facebook from "@/images/facebook.svg";
import twitter from "@/images/twitter.svg";
import app_store from "@/images/app_store.png";
import play_store from "@/images/play_store.png";

export default function Footer() {
  return (
    <div className="bg-[#0e382c]">
      <section className="container flex flex-col">
        <div className="flex flex-col lg:flex-row justify-between py-12 gap-y-10">
          <div className="shrink-0 basis-full lg:basis-1/6">
            <Image src={logo} alt="logo" />
          </div>
          <div className="flex flex-col gap-4 text-white shrink-0 basis-full lg:basis-1/6">
            <div className="text-lg font-bold">About Us</div>
            <div className="text-sm">Coffeehouse</div>
            <div className="text-sm">Our Heritage</div>
            <div className="text-sm">Our Company</div>
          </div>
          <div className="flex flex-col gap-4 text-white shrink-0 basis-full lg:basis-1/6">
            <div className="text-lg font-bold">Responsibility</div>
            <div className="text-sm">Community</div>
            <div className="text-sm">Ethical Sourcing</div>
            <div className="text-sm">Environmental Stewardship</div>
            <div className="text-sm">Diversity</div>
          </div>
          <div className="flex flex-col gap-4 text-white shrink-0 basis-full lg:basis-1/6">
            <div className="text-lg font-bold">Quick Links</div>
            <div className="text-sm">Privacy Policy</div>
            <div className="text-sm">Starbucks Rewards Day Offer</div>
            <div className="text-sm">Delivery</div>
            <div className="text-sm">Season{"'"}s Gifting</div>
            <div className="text-sm">Careers</div>
            <div className="text-sm">Customer Service</div>
            <div className="text-sm">FAQs</div>
            <div className="text-sm">
              Offer for Beverage Subscription at Starbucks
            </div>
            <div className="text-sm">Terms and Conditions</div>
          </div>
          <div className="flex flex-col gap-4 text-white shrink-0 basis-full lg:basis-1/6">
            <div className="text-lg font-bold">Social Media</div>
            <div className="flex">
              <Image className="w-8 h-8" src={instagram} alt="instagram" />
              <Image className="w-8 h-8" src={facebook} alt="facebook" />
              <Image className="w-8 h-8" src={twitter} alt="twitter" />
            </div>
          </div>
          <div className="flex flex-col gap-4 shrink-0 basis-full lg:basis-1/6">
            <Image className="w-52 h-14" src={app_store} alt="app store" />
            <Image className="w-52 h-14" src={play_store} alt="play store" />
          </div>
        </div>
        <div className="flex justify-between border-t-[1px] text-white">
          <div className="flex items-center h-12 text-xs">
            <a className="border-r-[1px] pr-6" href="#">
              Web Accessibility
            </a>
            <a className="border-r-[1px] px-6" href="#">
              Privacy Statement
            </a>
            <a className="border-r-[1px] px-6" href="#">
              Terms of Use
            </a>
            <a className="pl-6" href="#">
              Contact Us
            </a>
          </div>
          <div className="flex items-center text-[0.6rem]">
            © 2023 Starbucks Coffee Company. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}
