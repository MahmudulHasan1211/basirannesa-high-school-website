import Logo from "./Logo";
import Schoolinfo from "./Schoolinfo";

export default function Header() {
  return (

  <div className="flex flex-1/2 items-center justify-center gap-5 ">
    <Logo />
    <Schoolinfo />
  </div>

  );
}
