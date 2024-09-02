import Image from "next/image";
import flower from "@/images/flower.svg";
import barista1 from "@/images/barista1.jpg";
import barista2 from "@/images/barista2.jpg";

export default function BaristaRecommends() {
  return (
    <div className="relative bg-gray-200 pt-5 pb-9">
      <section className="container flex flex-col gap-5">
        <div className="flex items-center justify-between gap-5">
          <Image
            src={flower}
            alt="flower"
            className="absolute right-0 h-[70px] w-[57px] top-0"
          />
          <div className="flex items-center h-20 text-2xl font-extrabold lg:justify-start">
            Barista Recommends
          </div>
          <a className="z-10 text-sm font-semibold text-green-700" href="#">
            View Menu
          </a>
        </div>
        <div className="flex flex-wrap justify-start gap-6">
          <div className="p-4 bg-white border-2 border-black rounded-lg">
            <div className="flex mb-3 w-80">
              <Image
                src={barista1}
                alt="barista"
                className="w-20 h-20 mr-4 rounded-lg"
              />
              <div>
                <div className="text-sm font-semibold">
                  Strawberry Milkshake
                </div>
                <div className="text-[0.5rem]">
                  TALL(Tall Strawberry Milkshake) .PER SERVE (354ml) - 569 Kcal
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div>₹ 367.50</div>
              <button className="w-20 py-1.5 text-xs font-semibold text-white bg-green-700 rounded-full">
                Add Item
              </button>
            </div>
          </div>
          <div className="p-4 bg-white border-2 border-black rounded-lg">
            <div className="flex mb-3 w-80">
              <Image
                src={barista2}
                alt="barista"
                className="w-20 h-20 mr-4 rounded-lg"
              />
              <div>
                <div className="text-sm font-semibold">Vanilla Milkshake</div>
                <div className="text-[0.5rem]">
                  TALL(354 ML) .PER SERVE (354ml) - 531 Kcal
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div>₹ 367.50</div>
              <button className="w-20 py-1.5 text-xs font-semibold text-white bg-green-700 rounded-full">
                Add Item
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
