import Image from "next/image";
import beans from "@/images/beans.png";

export default function DiwaliBlend() {
  return (
    <section className="container py-10">
      <div className="flex items-center bg-yellow-200 rounded-lg border-2 bg-cover">
        <div className="flex-shrink-0">
          <Image
            src={beans}
            alt="beans"
            className="hidden object-scale-down h-48 md:inline"
          />
        </div>
        <div className="flex-grow ml-6">
          <div className="mb-2 text-sm">Arriving With A Sizzle</div>
          <div className="mb-2 text-xl font-semibold">Diwali Blend</div>
          <div className="mb-6 text-sm">
            Crafted with passion, Diwali Blend offers a flavorful, festive
            experience inspired by the colors & flavors of Diwali.
          </div>
          <div className="flex justify-between">
            <div>
              <div className="text-xs">For</div>
              <div className="text-sm font-semibold">₹ 1100.00</div>
            </div>
            <div>
              <button className="w-24 py-2 text-sm text-white bg-green-700 rounded-full">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
