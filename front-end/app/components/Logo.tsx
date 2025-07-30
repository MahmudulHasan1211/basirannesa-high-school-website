import Image from 'next/image'
import logo from '../../public/logo.png'
export default function Logo() {
    return (
      <div className="h-[70px] w-[70px] md:h-[100px] md:w-[100px]">
        <Image src={logo} alt="Basirannesa High School logo" />
      </div>
    );
  }