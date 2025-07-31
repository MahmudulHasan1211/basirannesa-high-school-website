// import Image from "next/image";
import Slider from "./components/Slider";
import Notice from "./components/Notice";
import Message from "./components/Message";
import StudentTeacherCounter from "./components/StudentTeacherCounter";


export default function Home() {
  return (
    <div className="">
      <Notice />
    <Slider />
    <StudentTeacherCounter />
    <Message />
    </div>
  );
}
