import Image from "next/image";
import Slider from "./components/Slider";
import Notice from "./components/Notice";


export default function Home() {
  return (
    <div className="">
      <Notice />
    <Slider />
    </div>
  );
}
