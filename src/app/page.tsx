import Featured from "@/components/Featured";
import LimitedOffer from "@/components/LimitedOffer";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main>
      <Slider />
      <Featured />
      <LimitedOffer />
    </main>
  );
}
