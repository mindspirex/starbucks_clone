import Image from "next/image";
import bestseller from "@/images/curations/bestseller.jpg";
import drinks from "@/images/curations/drinks.jpg";
import food from "@/images/curations/food.jpg";
import merchandise from "@/images/curations/merchandise.jpg";
import coffee_at_home from "@/images/curations/coffee_at_home.jpg";
import ready_to_eat from "@/images/curations/ready_to_eat.jpg";

export default function HandcraftedCurations() {
  return (
    <section className="container py-5 flex flex-col gap-3">
      <div className="flex items-center justify-center h-20 text-2xl font-extrabold lg:justify-start">
        Handcrafted Curations
      </div>

      <div className="flex flex-wrap justify-between gap-6 mb-16 text-sm font-semibold text-center">
        <div>
          <Image
            src={bestseller}
            alt="bestseller"
            className="rounded-full h-28 w-28 hover:border-2 hover:border-green-700"
          />
          <div className="pt-1">Bestseller</div>
        </div>
        <div>
          <Image
            src={drinks}
            alt="drinks"
            className="rounded-full h-28 w-28 hover:border-2 hover:border-green-700"
          />
          <div className="pt-1">Drinks</div>
        </div>
        <div>
          <Image
            src={food}
            alt="food"
            className="rounded-full h-28 w-28 hover:border-2 hover:border-green-700"
          />
          <div className="pt-1">Food</div>
        </div>
        <div>
          <Image
            src={merchandise}
            alt="merchandise"
            className="rounded-full h-28 w-28 hover:border-2 hover:border-green-700"
          />
          <div className="pt-1">Merchandise</div>
        </div>
        <div>
          <Image
            src={coffee_at_home}
            alt="coffee at home"
            className="rounded-full h-28 w-28 hover:border-2 hover:border-green-700"
          />
          <div className="pt-1">Coffee at Home</div>
        </div>
        <div>
          <Image
            src={ready_to_eat}
            alt="ready to eat"
            className="rounded-full h-28 w-28 hover:border-2 hover:border-green-700"
          />
          <div className="pt-1">Ready to Eat</div>
        </div>
      </div>
    </section>
  );
}
