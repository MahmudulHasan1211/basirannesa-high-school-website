import Image from 'next/image'
import logo from '../../public/logo.png'
export default function Logo() {
    return (
      <div className="h-[100px] w-[100px]">
        <Image src={logo} alt="Basirannesa High School logo" />
      </div>
    );
  }