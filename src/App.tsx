import "./App.css";
import { Button } from "./components/ui/button";
import Shuffle from "./components/Shuffle";
import {Home} from "./components/Home";

import LogoLoop from "./components/LogoLoop";
import Card from "./components/Card";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import ThunderLines from "./components/ThunderLines";
import AnimatedLines from "./components/AnimatedLines";
import NextLines from "./components/AnimatedLines";
import AnimatedBorderCard from "./components/AnimatedLines";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

// Example card items (will be passed as `node` items to LogoLoop)
const cardItems = [
  {
    node: (
      <Card
        image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
        quote="“A pellentesque pretium feugiat vel morbi sagittis lorem habitasse cursus. Suspendisse tempus rhoncus enim pellentesque est in neque, elit mattis.”"
        name="Kelly Garcia"
        role="KG Architects"
      />
    ),
    // title: "Acme",
    // href: "https://company1.com",
  },
];

function App() {
  return (
    <>
      <Home />
      <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-200">
        {/* <Button>Click me</Button> */}
        {/* <Shuffle
          text="Learn Tech Skills 
              That Actually Get You Jobs  & Grow Your Career Faster"
          shuffleDirection="right"
          duration={0.35}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover={true}
          respectReducedMotion={true}
        /> */}
        <AnimatedBorderCard>
          <div className="text-white">
            <img
              src="/design.png"
              className="w-48 mx-auto mb-6 opacity-90"
              alt="Decoration"
            />

            <h2 className="text-2xl font-semibold leading-tight">
              Designing creative
              <br />
              user interfaces
            </h2>

            <p className="opacity-70 mt-2">by Dmytri Ivanov</p>
          </div>
        </AnimatedBorderCard>
      </div>
    </>
  );
}

export default App;
