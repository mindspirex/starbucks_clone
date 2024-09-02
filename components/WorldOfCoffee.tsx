export default function WorldOfCoffee() {
  return (
    <div my-10 className="bg-gray-200 my-12 py-8">
      <section className="container">
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center h-14 mb-2 text-2xl font-extrabold lg:justify-start">
            Learn more about the world of coffee!
          </div>
          <a className="text-sm font-semibold text-green-700" href="#">
            Discover More
          </a>
        </div>
        <div className="bg-[url(../images/coffee.jpg)] bg-cover rounded-lg p-8 pt-44">
          <div className="pb-3 text-3xl font-bold text-white">
            How Coffee Stired Revels {"&"} Rebels
          </div>
          <div className="w-3/4 pb-8 text-sm text-white">
            Delighted by the jovial character of coffee, everyone was inspired
            to bring it home - leading to some of the most crucial firsts.
          </div>
          <button className="py-2 text-xs font-semibold text-black bg-white rounded-full w-52">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}
