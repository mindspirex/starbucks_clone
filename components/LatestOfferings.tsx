"use client";

import Image from "next/image";
import two from "@/images/offerings/two.jpg";
import three from "@/images/offerings/three.jpg";
import four from "@/images/offerings/four.jpg";
import five from "@/images/offerings/five.jpg";
import six from "@/images/offerings/six.jpg";
import seven from "@/images/offerings/seven.jpg";
import eight from "@/images/offerings/eight.jpg";
import nine from "@/images/offerings/nine.jpg";
import ten from "@/images/offerings/ten.jpg";
import eleven from "@/images/offerings/eleven.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <section className="container py-5 hidden lg:inline">
      <Swiper
        className="container"
        slidesPerView={3}
        spaceBetween={50}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <div className="h-48 bg-gray-50">
            <Image src={two} alt="two" />
          </div>
          <div className="p-3 text-left lg:p-6 bg-gray-50">
            <div className="text-sm font-bold">
              Veronica{"'"}s Toffee Nut Crunch Latte
            </div>
            <div className="text-[0.5rem] mb-3">
              SHORT(Short Toffee Nut Crunch Latte) .225 Kcal
            </div>
            <div className="mb-4 text-xs">
              Delight your senses with our Toffee Nut Crunch Latte. A perfect
              combination of steamed milk, our signature esp ...
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xs font-extrabold">₹ 414.75</div>
              <button className="w-20 py-1.5 text-xs font-semibold text-white bg-green-700 rounded-full">
                Add Item
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-48 bg-gray-50">
            <Image src={three} alt="three" />
          </div>
          <div className="p-3 text-left lg:p-6 bg-gray-50">
            <div className="text-sm font-bold">Pumpkin Spice Frappuccino</div>
            <div className="text-[0.5rem] mb-3">SHORT(237 ML) .219 Kcal</div>
            <div className="mb-4 text-xs">
              Our signature espresso and steamed milk with the celebrated flavor
              combination of pumpkin, cinnamon, nutmeg, an ...
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xs font-extrabold">₹ 414.75</div>
              <button className="w-20 py-1.5 text-xs font-semibold text-white bg-green-700 rounded-full">
                Add Item
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-48 bg-gray-50">
            <Image src={four} alt="four" />
          </div>
          <div className="p-3 text-left lg:p-6 bg-gray-50">
            <div className="text-sm font-bold">
              Pumpkin Spice Cream Cold Brew
            </div>
            <div className="text-[0.5rem] mb-3">SHORT(237 ML) .219 Kcal</div>
            <div className="mb-4 text-xs">
              Our signature espresso and steamed milk with the celebrated flavor
              combination of pumpkin, cinnamon, nutmeg, an ...
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xs font-extrabold">₹ 414.75</div>
              <button className="w-20 py-1.5 text-xs font-semibold text-white bg-green-700 rounded-full">
                Add Item
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-48 bg-gray-50">
            <Image src={five} alt="five" />
          </div>
          <div className="p-3 text-left lg:p-6 bg-gray-50">
            <div className="text-sm font-bold">
              Iced Rock Salted Caramel Latte
            </div>
            <div className="text-[0.5rem] mb-3">SHORT(237 ML) .219 Kcal</div>
            <div className="mb-4 text-xs">
              Our signature espresso and steamed milk with the celebrated flavor
              combination of pumpkin, cinnamon, nutmeg, an ...
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xs font-extrabold">₹ 414.75</div>
              <button className="w-20 py-1.5 text-xs font-semibold text-white bg-green-700 rounded-full">
                Add Item
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-48 bg-gray-50">
            <Image src={six} alt="six" />
          </div>
          <div className="p-3 text-left lg:p-6 bg-gray-50">
            <div className="text-sm font-bold">Rock Salted Caramel Latte</div>
            <div className="text-[0.5rem] mb-3">SHORT(237 ML) .219 Kcal</div>
            <div className="mb-4 text-xs">
              Our signature espresso and steamed milk with the celebrated flavor
              combination of pumpkin, cinnamon, nutmeg, an ...
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xs font-extrabold">₹ 414.75</div>
              <button className="w-20 py-1.5 text-xs font-semibold text-white bg-green-700 rounded-full">
                Add Item
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-48 bg-gray-50">
            <Image src={seven} alt="seven" />
          </div>
          <div className="p-3 text-left lg:p-6 bg-gray-50">
            <div className="text-sm font-bold">
              Rock Salted Caramel Frappuccino
            </div>
            <div className="text-[0.5rem] mb-3">SHORT(237 ML) .219 Kcal</div>
            <div className="mb-4 text-xs">
              Our signature espresso and steamed milk with the celebrated flavor
              combination of pumpkin, cinnamon, nutmeg, an ...
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xs font-extrabold">₹ 414.75</div>
              <button className="w-20 py-1.5 text-xs font-semibold text-white bg-green-700 rounded-full">
                Add Item
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-48 bg-gray-50">
            <Image src={eight} alt="eight" />
          </div>
          <div className="p-3 text-left lg:p-6 bg-gray-50">
            <div className="text-sm font-bold">Pumpkin Spice Latte</div>
            <div className="text-[0.5rem] mb-3">SHORT(237 ML) .219 Kcal</div>
            <div className="mb-4 text-xs">
              Our signature espresso and steamed milk with the celebrated flavor
              combination of pumpkin, cinnamon, nutmeg, an ...
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xs font-extrabold">₹ 414.75</div>
              <button className="w-20 py-1.5 text-xs font-semibold text-white bg-green-700 rounded-full">
                Add Item
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-48 bg-gray-50">
            <Image src={nine} alt="nine" />
          </div>
          <div className="p-3 text-left lg:p-6 bg-gray-50">
            <div className="text-sm font-bold">Pumpkin Spice Latte</div>
            <div className="text-[0.5rem] mb-3">SHORT(237 ML) .219 Kcal</div>
            <div className="mb-4 text-xs">
              Our signature espresso and steamed milk with the celebrated flavor
              combination of pumpkin, cinnamon, nutmeg, an ...
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xs font-extrabold">₹ 414.75</div>
              <button className="w-20 py-1.5 text-xs font-semibold text-white bg-green-700 rounded-full">
                Add Item
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-48 bg-gray-50">
            <Image src={ten} alt="ten" />
          </div>
          <div className="p-3 text-left lg:p-6 bg-gray-50">
            <div className="text-sm font-bold">Pumpkin Spice Latte</div>
            <div className="text-[0.5rem] mb-3">SHORT(237 ML) .219 Kcal</div>
            <div className="mb-4 text-xs">
              Our signature espresso and steamed milk with the celebrated flavor
              combination of pumpkin, cinnamon, nutmeg, an ...
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xs font-extrabold">₹ 414.75</div>
              <button className="w-20 py-1.5 text-xs font-semibold text-white bg-green-700 rounded-full">
                Add Item
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-48 bg-gray-50">
            <Image src={eleven} alt="elveen" />
          </div>
          <div className="p-3 text-left lg:p-6 bg-gray-50">
            <div className="text-sm font-bold">Pumpkin Spice Latte</div>
            <div className="text-[0.5rem] mb-3">SHORT(237 ML) .219 Kcal</div>
            <div className="mb-4 text-xs">
              Our signature espresso and steamed milk with the celebrated flavor
              combination of pumpkin, cinnamon, nutmeg, an ...
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xs font-extrabold">₹ 414.75</div>
              <button className="w-20 py-1.5 text-xs font-semibold text-white bg-green-700 rounded-full">
                Add Item
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
