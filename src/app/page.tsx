import Image from "next/image";
import Hero from "./components/Sections/Heros/HeroSection";
import NavTabs from "./components/Sections/NavTabs";
import TimeLine from "./components/Sections/Timeline/TimeLine";
import Video from "./components/Sections/Video";
import Table from "./components/Sections/Table";
import Marques from "./components/Sections/Marques";
import Blogs from "./components/Sections/Blogs";

export default function Home() {
  return (
    <>
    
    <div className="mt-[70px]">
      <Hero />
      <NavTabs />
      <TimeLine />
      <Video />
      <Table />
      <Marques />
      <Blogs />
    </div>
    
    </>
  );
}
