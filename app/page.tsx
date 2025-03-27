import Hero from "@/components/Home/Hero";
import Location from "@/components/Location";
import AboutUs from "@/components/Home/AboutUs";
import Lead from "@/components/Home/Lead";
import GetEdified from "@/components/Home/Edify";
import NewsLetter from "@/components/Home/NewsLetter";
import Departments from "@/components/Home/Departments";

export default function Home() {
  return (
    <>
      <Hero />
      <Location />
      <AboutUs />
      <Lead />
      <GetEdified />
      <Departments />
      <NewsLetter />
    </>
  );
}
