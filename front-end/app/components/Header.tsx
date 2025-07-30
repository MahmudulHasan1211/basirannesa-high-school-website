import Logo from "./Logo";
import Schoolinfo from "./Schoolinfo";

export default function Header() {
  return (

  <div className="flex flex-1/2 items-center justify-center md:gap-5 gap-7 bg-[#edf0f2]">
    <Logo />
    <Schoolinfo />
  </div>

  );
}
