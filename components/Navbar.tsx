import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.png";
import user from "@/images/user.svg";

export default function Navbar() {
  return (
    <div className="border-gray-300 border-2">
      <section className="container flex flex-wrap items-center">
        <div className="flex justify-center py-3 basis-full lg:basis-1/12 lg:justify-start">
          <Image src={logo} alt="logo" className="w-10 h-10" />
        </div>
        <div className="flex justify-center gap-5 py-3 lg:basis-4/12 basis-full lg:justify-start">
          <a className="" href="#">
            Home
          </a>
          <a className="" href="#">
            Gift
          </a>
          <a className="" href="#">
            Order
          </a>
          <a className="" href="#">
            Pay
          </a>
          <a className="" href="#">
            Store
          </a>
        </div>
        <div className="flex justify-center py-3 lg:basis-7/12 basis-full lg:justify-end gap-9">
          <input
            className="px-4 border-2 rounded-full w-72"
            placeholder="Looking for something specific?"
          />
          <Image src={user} alt="user" className="w-8 h-8" />
        </div>
      </section>
    </div>
  );
}
