import Rewards from "@/components/Rewards";
import HandcraftedCurations from "@/components/HandcraftedCurations";
import DiwaliBlend from "@/components/DiwaliBlend";
import LatestOfferings from "@/components/LatestOfferings";
import BaristaRecommends from "@/components/BaristaRecommends";
import WorldOfCoffee from "@/components/WorldOfCoffee";

export default function Home() {
  return (
    <main>
      <Rewards />
      <HandcraftedCurations />
      <DiwaliBlend />
      <LatestOfferings />
      <BaristaRecommends />
      <WorldOfCoffee />
    </main>
  );
}
