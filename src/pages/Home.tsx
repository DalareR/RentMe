import Hero from "../components/Hero";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";

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
    </>
  );
}

export default Home;
