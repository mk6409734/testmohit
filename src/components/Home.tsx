import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
export const Home = () => {
  const mainNavRef = useRef<HTMLDivElement | null>(null);
  const smallNavRef = useRef<HTMLDivElement | null>(null);
  const [ismobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [showSmallNav, setShowSmallNav] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const mainNav = mainNavRef.current;
      if (!mainNav) return;

      const mainNavBottom = mainNav.getBoundingClientRect().bottom;
      setShowSmallNav(mainNavBottom <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true, amount: 0.2 },
  };
  return (
    <div className="relative min-h-screen pb-20 md:p-0 overflow-hidden w-full bg-linear-to-br from-primary via-black to-primary z-20">
      {/* gradiant ovelay  */}
      <div className="absolute inset-0 -z-10 before:absolute before:left-1/4  before:top-0 before:h-[800px] before:w-[800px] before:rounded-full before:bg-black/30 before:blur-2xl"></div>

      <div className="container mx-auto font-poppins">
        <nav
          ref={mainNavRef}
          className="flex justify-between items-center px-5"
        >
          <div className="w-26 h-26 overflow-hidden object-contain group">
            <img
              className="w-full h-full group-hover:scale-105"
              src="https://www.traincapetech.in/static/media/WhatsApp_Image_2024-06-22_at_10.01.48-removebg-preview.558783d2fc5ef9a5158d.png"
              alt=""
            />
          </div>
          <div className="">
            <ul className="hidden md:flex items-center gap-5 text-lightbackground">
              <li className="hover:bg-neutralgray/20 px-3 py-2 rounded-md cursor-pointer">
                Home
              </li>
              <li className="hover:bg-neutralgray/20 px-3 py-2 rounded-md cursor-pointer">
                About
              </li>
              <li className="hover:bg-neutralgray/20 px-3 py-2 rounded-md cursor-pointer">
                Servies
              </li>
              <li className="hover:bg-neutralgray/20 px-3 py-2 rounded-md cursor-pointer">
                Reviews
              </li>
              <li className="hover:bg-neutralgray/20 px-3 py-2 rounded-md cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
          <div className="hidden md:flex items-center gap-5 text-buttontext ">
            <Button
              className="bg-lightbackground hover:bg-white cursor-pointer"
              variant="outline"
            >
              Pay Now
            </Button>
            <Button
              className="bg-lightbackground hover:bg-white cursor-pointer"
              variant="outline"
            >
              Log In
            </Button>
          </div>
          <div className="pr-5 md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!ismobileMenuOpen)}>
              <AiOutlineMenu className="text-2xl  text-lightbackground" />
            </button>
          </div>
        </nav>

        {/* mobile navbar  */}
        {ismobileMenuOpen && (
          <nav className="md:hidden fixed  top-0 left-0 right-0 z-50 h-screen  bg-lightbackground rounded-lg px-5 w-full">
            <div className="flex items-center justify-between">
              <div className="w-26 h-26 overflow-hidden object-scale-down group">
                <img
                  className="w-full h-full group-hover:scale-105"
                  src="https://www.traincapetech.in/static/media/WhatsApp_Image_2024-06-22_at_10.01.48-removebg-preview.558783d2fc5ef9a5158d.png"
                  alt=""
                />
              </div>
              <div className="flex items-center pr-5">
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  {" "}
                  {ismobileMenuOpen ? (
                    <RxCross1 className="text-2xl" />
                  ) : (
                    <AiOutlineMenu />
                  )}
                </button>
              </div>
            </div>

            <div>
              <ul className="flex flex-col items-start gap-5 text-darktext w-full">
                <li className="hover:bg-neutral-200 px-3 py-2 rounded-md cursor-pointer">
                  Home
                </li>
                <li className="hover:bg-neutral-200 px-3 py-2 rounded-md cursor-pointer">
                  About
                </li>
                <li className="hover:bg-neutral-200 px-3 py-2 rounded-md cursor-pointer">
                  Services
                </li>
                <li className="hover:bg-neutral-200 px-3 py-2 rounded-md cursor-pointer">
                  Reviews
                </li>
                <li className="hover:bg-neutral-200 px-3 py-2 rounded-md cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>
            <div className="absolute bottom-0 left-0 px-5 py-5 flex flex-col w-full items-center gap-5">
              <Button
                className="bg-primary w-full text-lightbackground hover:bg-primary/90 cursor-pointer"
                variant="outline"
              >
                Pay Now
              </Button>
              <Button
                className="bg-lightbackground w-full hover:bg-white cursor-pointer"
                variant="outline"
              >
                Log In
              </Button>
            </div>
          </nav>
        )}

        {/* small Navbar - appears on scroll with slide-down animation and sticky */}

        <motion.nav
          ref={smallNavRef}
          className="fixed top-0 left-0 right-0 z-50 bg-lightbackground rounded-lg px-5 md:w-4xl  flex justify-between items-center mx-auto shadow-lg"
          initial={{ y: -100, opacity: 0 }}
          animate={
            showSmallNav ? { y: 10, opacity: 1 } : { y: -100, opacity: 0 }
          }
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="w-26 h-26 overflow-hidden object-scale-down group">
            <img
              className="w-full h-full group-hover:scale-105"
              src="https://www.traincapetech.in/static/media/WhatsApp_Image_2024-06-22_at_10.01.48-removebg-preview.558783d2fc5ef9a5158d.png"
              alt=""
            />
          </div>
          <div>
            <ul className="hidden md:flex items-center gap-5 text-darktext">
              <li className="hover:bg-neutral-200 px-3 py-2 rounded-md cursor-pointer">
                Home
              </li>
              <li className="hover:bg-neutral-200 px-3 py-2 rounded-md cursor-pointer">
                About
              </li>
              <li className="hover:bg-neutral-200 px-3 py-2 rounded-md cursor-pointer">
                Services
              </li>
              <li className="hover:bg-neutral-200 px-3 py-2 rounded-md cursor-pointer">
                Reviews
              </li>
              <li className="hover:bg-neutral-200 px-3 py-2 rounded-md cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
          <div className="hidden md:flex items-center gap-5">
            <Button
              className="bg-primary text-lightbackground hover:bg-primary/90 cursor-pointer"
              variant="outline"
            >
              Pay Now
            </Button>
            <Button
              className="bg-lightbackground hover:bg-white cursor-pointer"
              variant="outline"
            >
              Log In
            </Button>
          </div>
          <div className="pr-5 md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!ismobileMenuOpen)}>
              <AiOutlineMenu className="text-2xl  text-darktext" />
            </button>
          </div>
        </motion.nav>

        <motion.header
          {...fadeUp}
          className="h-full w-full flex flex-col md:flex-row lg:flex-row  items-center justify-between md:justify-evenly mt-20 gap-10 md:gap-0 "
        >
          <div className="space-y-3 px-8 md:px-0">
            <h1 className=" text-3xl/normal md:text-5xl/15  text-lightbackground  text-shadow-md">
              Learn Tech Skills <br />
              That Actually Get You Jobs <br /> & Grow Your Career Faster
            </h1>
            <p className=" text-neutralgray">
              Join India’s growing community of learners and professionals{" "}
              <br />
              mastering development, web design, and industry-ready tech skills.
            </p>

            <div className="flex items-center gap-5 mt-8">
              <Button className="bg-accent text-buttontext hover:bg-buttonhover cursor-pointer">
                Start Learning Now
              </Button>
              {/* <Button className="bg-indigo-600 inset-shadow-2xs inset-shadow-indigo-400">
                Start Learning Now
              </Button> */}
              <Button className="bg-lightbackground hover:bg-white cursor-pointer">
                Explore Services
              </Button>
            </div>

            <div className="flex items-center gap-3 mt-10">
              <div className="flex -space-x-2">
                <div className="w-8 rounded-full overflow-hidden object-contain">
                  <img
                    src="https://framerusercontent.com/images/2Y7D9JS4krqAwKQy2bnTL8Hqfg.png"
                    alt=""
                  />
                </div>
                <div className="w-8 rounded-full overflow-hidden object-contain">
                  <img
                    src="https://framerusercontent.com/images/uNyXIhuGNBdSRHCDQcDtk8Wtjk.png"
                    alt=""
                  />
                </div>
                <div className="w-8 rounded-full overflow-hidden object-contain">
                  <img
                    src="https://framerusercontent.com/images/DqlCOuEt50xoB9OtRSkK9tDWTjQ.png"
                    alt=""
                  />
                </div>
                <div className="w-8 rounded-full overflow-hidden object-contain">
                  <img
                    src="https://framerusercontent.com/images/Mp7qaShG98j2qmmBNdftQVFjYag.png?scale-down-to=512"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-lightbackground">
                  Trusted by 1,000+ learners
                </p>
                <div className="flex items-center ">
                  <div className="w-5 ">
                    <img src="./star.svg" alt="" />
                  </div>
                  <div className="w-5 ">
                    <img src="./star.svg" alt="" />
                  </div>
                  <div className="w-5 ">
                    <img src="./star.svg" alt="" />
                  </div>
                  <div className="w-5 ">
                    <img src="./star.svg" alt="" />
                  </div>
                  <div className="w-5 ">
                    <img src="./star.svg" alt="" />
                  </div>
                  <p className="pl-2 text-lightbackground">
                    4.2/5{" "}
                    <span className="text-neutralgray">(45k reviews)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[300px] h-[400px] rounded-lg bg-secondary  inset-shadow-sm inset-shadow-indigo-300">
            <div className="flex flex-col">
              <div className="w-[280px]  flex items-center">
                <img src="./design.png" alt="" className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start space-y-2 pl-7 text-lightbackground   py-3">
                <h1 className="text-2xl font-normal">
                  AI & Tech Skills with
                  <br /> Real-World Training
                </h1>
                <p className="text-sm">by traincapetech</p>
              </div>
            </div>
          </div>
        </motion.header>
      </div>
    </div>
  );
};
