import { useEffect } from "react";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";
import PageCurtain from "../components/PageCurtain";

interface Props {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  setPickUpDate: React.Dispatch<React.SetStateAction<string>>;
  setDropOffDate: React.Dispatch<React.SetStateAction<string>>;
}

function Home({ setLocation, setDropOffDate, setPickUpDate }: Props) {
  return (
    <>
      <Hero
        setLocation={setLocation}
        setDropOffDate={setDropOffDate}
        setPickUpDate={setPickUpDate}
      />
      <Service />
      <Testimonial />
      <PageCurtain>Home</PageCurtain>
    </>
  );
}

export default Home;
