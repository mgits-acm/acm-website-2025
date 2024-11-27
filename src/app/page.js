import AboutSection from "./components/About/About";
import Landing from "./Landing/Landing";

export default function Home() {
  return (
    <div className="w-screen h-max text-center flex flex-col items-center justify-center">
      <Landing />
      <AboutSection />
    </div>
  );
}
