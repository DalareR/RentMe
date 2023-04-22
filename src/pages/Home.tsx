import Hero from "../components/Hero";
import Service from "../components/Service";

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
    </>
  );
}

export default Home;
