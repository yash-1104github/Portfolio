"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link, Element } from "react-scroll";
import "./globals.css";
import TypingAnimation from "@/Components/typingAnimation";
import { Navigate } from "react-router-dom";

export default function Home() {
  const form = useRef();
  //const navigate = Navigate

  const sendEmail = (e) => {
    e.preventDefault();
    document.getElementById("sendBtn").innerHTML = "Sending...";
    emailjs
      .sendForm("service_3kpm6q8", "template_1xt8hsb", form.current, {
        publicKey: "xKhzDJsNEnGPNycPb",
      })
      //service_id =
      //templete_id =
      //public key =
      .then(
        () => {
          setSuccessTost(true);
          document.getElementById("sendBtn").innerHTML = "Success...";
          setTimeout(() => {
            document.getElementById("sendBtn").innerHTML = "Send Message";
            setSuccessTost(false);
          }, 2000);
        },
        (error) => {
          setErrorTost(true);
          console.log(error);
          document.getElementById("sendBtn").innerHTML = "Failed...";
          setTimeout(() => {
            document.getElementById("sendBtn").innerHTML = "Send Message";
            setErrorTost(false);
          }, 2000);
        }
      );
  };

  const [successTost, setSuccessTost] = useState(false);
  const [errorTost, setErrorTost] = useState(false);

  return (
    <>
      {/* successTost */}
      {successTost && (
        <div
          id="toast-simple"
          className="flex fixed items-center right-3 top-2 z-50 max-w-xs p-4 space-x-4 rtl:space-x-reverse   divide-x rtl:divide-x-reverse  rounded-lg shadow text-gray-200 divide-gray-700 bg-gray-900  shadow-gray-100"
          role="alert"
        >
          <svg
            className="w-5 h-5 text-blue-500 rotate-45"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
            />
          </svg>
          <div className="ps-4 text-sm font-normal">
            Message sent successfully.
          </div>
        </div>
      )}

      {/* Error */}
      {errorTost && (
        <div
          id="toast-simple"
          className="flex fixed items-center right-3 top-2 z-50 max-w-xs p-4 space-x-4 rtl:space-x-reverse  divide-x rtl:divide-x-reverse rounded-lg text-gray-200 divide-gray-700 bg-gray-900 shadow-sm shadow-gray-100"
          role="alert"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#d0021b"
            fill="red"
          >
            <path
              d="M8.25 17.0001C8.67265 16.5774 9.16229 16.2441 9.6906 16.0001M15.75 17.0001C15.3274 16.5774 14.8377 16.2441 14.3094 16.0001"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.5 14.0001C17.4308 13.0692 16.2435 12.4026 15 12.0001M5.5 14.0001C6.59299 13.1038 7.778 12.4525 9 12.046"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 11C3.92227 9.3768 5.94206 8.1353 8 7.50015M22 10.9999C20.0778 9.37675 18.0579 8.13529 16 7.50015"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 20H12.0118"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.5864 4.32714C12.6577 3.89104 11.3422 3.89102 10.4136 4.32714C10.0852 4.48134 9.95517 4.84478 10.0135 5.19157L12 17.0001L13.9865 5.19159C14.0448 4.84479 13.9148 4.48134 13.5864 4.32714Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="ps-4 text-sm font-normal">
            Sorry, Mail unable to Forward..
          </div>
        </div>
      )}

      {/* background layout */}
      <div className="w-full min-h-screen bg-[url('https://assets.awwwards.com/awards/submissions/2022/08/62ed824664c3a873839057.png')] object-cover bg-bottom bg-no-repeat blur-sm fixed top-0 z-[-2]"></div>

      {/* navigation Bar */}
      <nav
        name="home"
        className="w-full h-24 flex  items-center justify-center md:justify-between md:px-10 lg:px-20 bg-gradient-to-b from-black to-transparent"
      >
        <div></div>
        <div>
          <ul className="flex items-center justify-evenly gap-3 text-sm sm:gap-4  md:gap-6 md:text-base lg:gap-10 lg:text-lg">
            <Link to="home" smooth={true} duration={200} offset={-70}>
              <li className="cursor-pointer hidden xs:flex hover:drop-shadow  hover:text-sky-300 font-mono">
                Home
              </li>
            </Link>
            <Link to="projectSection" smooth={true} duration={200} offset={-70}>
              <li className="cursor-pointer  font-mono hover:text-sky-300">
                Projects
              </li>
            </Link>
            <Link to="skillsSection" smooth={true} duration={200} offset={-70}>
              <li className="cursor-pointer font-mono hover:text-sky-300">
                Skills
              </li>
            </Link>
            <Link to="contactSection" smooth={true} duration={200} offset={-70}>
              <li className="cursor-pointer  font-mono hover:text-sky-300">
                Contact
              </li>
            </Link>
            <a
              href="https://drive.google.com/file/d/1rl3Py3tmiPsy35LGINg22jxXr6nYyx8_/view?usp=sharing"
              target="_blank"
            >
              <li className="rounded-md bg-white  text-black cursor-pointer px-4  py-2 font-bold hover:text-sky-900">
                RESUME
              </li>
            </a>
          </ul>
        </div>
      </nav>

      {/* Intro Section */}
      <Element className="container m-auto py-4 md:py-4 lg:py-10 flex justify-center">
        <div className=" w-full flex flex-col gap-3 justify-center items-center">
          <div className="text-4xl md:text-5xl text-slate-200 font-medium lg:text-7xl  cursor-default tracking-wider">
            YASH GUPTA
          </div>
          <div className="text-sm md:text-md lg:text-xl  font-bold  pl-4 cursor-default">
            {" "}
            {/* <span
              className="text-sky-500 relative w-[max-content] font-mono underline before:absolute before:inset-0 before:animate-typewriter"
              id="role"
            >
              Full-Stack
            </span>{" "} */}
            <TypingAnimation />{" "}
          </div>
          <div className="md:hidden  pb-5 text-base  flex items-center justify-center mx-auto  text-gray-400 cursor-default text-center">
            Hi Everyone, Im Yash developer from India with a strong passion for
            Software and problem-solving.I have solid understanding of building
            scalable and efficient solutions.I am eager to apply my technical
            skills, to create impactful solutions and grow as software
            developer.
          </div>
          <div className="md:hidden pb-5 text-base font-mono flex items-center  text-gray-400 cursor-default text-center pl-6">
            Javascript| | Python | TypeScript | Node.Js | MySQL | React Js | MONGODB | Docker | Amazon Web Service | Google Cloud | 
            Tailwind | DSA | Problem solving | Competitive Programmer
          </div>

          <div className="hidden pb-5 text-base py-6 font-mono md:flex items-center  text-gray-400 cursor-default text-center pl-4">
            Hi Everyone, I'm Yash developer from India with a strong passion for
            Software and problem-solving.I have solid understanding of building
            scalable and efficient solutions. I am eager to apply my technical
            skills, to create impactful solutions and grow as software
            developer.
          </div>
          <div className="hidden  pb-5 text-base font-mono md:flex items-center mt-8 text-gray-400 cursor-default text-center pl-6">
            Javascript | Python | TypeScript | React | React-Native | Next.Js |
            Node.Js | Exprees.js | Docker | Amazon Web Service | Google Cloud | MySQL  MongoDB | PostgreSQL |
             | Firebase | Git/Github | HTML | Tailwind CSS | DSA(C++) | Problem solving |
            Competitive Programmer
          </div>

          <div className="flex gap-10">
            <Link to="contactSection" smooth={true} duration={300} offset={-70}>
              <span className="flex gap-2 font-mono items-center cursor-pointer px-5 py-2 border-2 border-white rounded-md hover:bg-gray-800">
                <span className="text-xs md:text-sm">Contact </span>
              </span>
            </Link>
            <a href="https://github.com/yash-1104github/" target="_blank">
              <span className="flex gap-2 font-mono items-center cursor-pointer px-5 py-2 border-2 border-white rounded-md hover:bg-gray-800">
                <span className="text-xs md:text-sm">GitHub </span>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/yash-gupta-1a137b223/"
              target="_blank"
            >
              <span className="flex gap-2 font-mono items-center cursor-pointer px-5 py-2 border-2 border-white rounded-md hover:bg-gray-800">
                <span className="text-xs md:text-sm">Linkedin </span>
              </span>
            </a>
          </div>
        </div>
      </Element>

      {/* Expreince Section */}
      <Element
        name="skillsSection"
        className="container w-full mb-10 pb-5 mt-6 backdrop-blur-2xl m-auto rounded-3xl shadow-lg shadow-black "
      >
        <div className="max-w-screen-2xl px-10 mx-12 flex items-center justify-center py-3 border-b-2 border-sky-800 ">
          <span className=" text-xl md:text-2xl text-sky-300 font-bold font-mono text-nowrap">
            WORK EXPERIENCE
          </span>
        </div>

        <div className="w-11/12 m-auto my-5 pb-8 lg:py-10 flex flex-wrap items-start gap-0.5 gap-y-5  justify-evenly">
          <div className="text-base md:text-2xl text-blue-400">
            Material Deport | Software Developer
            <div>
              <span className="text-slate-300 font-mono text-sm">
                (May 2025 - Present)
              </span>
            </div>
            <div className="text-slate-400 font-mono text-base py-6 text-pretty ">
              1. Developed static pages for the company's new website, enhancing
              UI/UX and page responsiveness, and integrated TanStack Query to
              enable server-side rendering, improving data fetching efficiency
              by 30%.
              <br />
              <br />
              2. Enhanced Single-sheet functionality in product dashboard,
              implement real-time API data comparison, integrated warnings and
              error checking features reducing the data entry team workflow by
              25%.
              <br />
              <br />
              3. Automated product availability checks in procurement dashboard,
              eliminating manual data entry which improved team efficiency by
              35%.
              <br />
              <br />
               4. Implemented authentication to secure APIs, Built multi
              user role based server-client forms for Customer, Sales, Retailer.
              Worked in React.js, Next.js, TanStack Query, TypeScript, Node.js,
              REST APIs, Tailwind CSS.
            </div>
          </div>

          <div className="text-base md:text-2xl text-blue-400">
            OctaNet Pvt Ltd | Web Developer
            <div>
              <span className="text-slate-300 font-mono text-sm">
                (June 2024 - July 2024)
              </span>
            </div>
            <div className="text-slate-400 font-mono text-base py-6 text-pretty ">
              1. Spearheaded a development team to build applications that
              retrieve information about various genres of books and comics, and
              used axios library for fetching data, created ContextAPI hook to
              store it.
              <br />
              <br />
              2. Collaborated with the testing team to perform API testing
              using Postman for different test cases resulting in 91% success
              rate.
            </div>
          </div>
        </div>
      </Element>

      {/* Project section */}
      <Element
        name="projectSection"
        className="container mb-10 pb-5  backdrop-blur-2xl m-auto rounded-3xl shadow-lg shadow-black "
      >
        <div className="max-w-screen-xl px-10 m-auto flex items-center justify-center py-3 border-b-2 border-sky-800 ">
          <span className="text-2xl text-sky-300 font-bold font-mono">
            PROJECTS
          </span>
        </div>
        <div className="my-5 pb-10 md:px-10 lg:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5 md:gap-0 md:flex-row lg:flex-wrap  lg:gap-8 justify-evenly">
          <div className="md:w-[90%] overflow-hidden shadow-lg hover:scale-105 md:hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <Image
              className="aspect-video w-full h-auto max-w-screen mx-auto"
              src="/aii.png"
              alt="Sunset in the mountains"
              width={700}
              height={500}
            />

            <div className="px-6 py-4 bg-gray-900">
              <div className="font-bold text-xl mb-2">AI DECO</div>
              <p className="text-gray-200 font-thin md:text-sm lg:text-base  min-h-12">
                JAVASCRIPT | TAILWIND CSS | NEXT.JS | REACT JS | NODE.JS |
                POSTGRESQL | CLERK | PRISMA ORM
              </p>
            </div>

            <div className="px-6 pt-4 pb-2 bg-gray-900 flex  items-center justify-between gap-4">
              <div className="flex-col justify-center items-center gap-2">
                <a
                  title="Github"
                  href="https://github.com/yash-1104github/AI-Deco"
                  target="_blank"
                >
                  <button className="cursor-pointer h-[30px] w-[120px] bg-gray-200 rounded-2xl p-1 text-xl tracking-wide  font-semibold text-gray-700 ">
                    <div className="text-base">Git Repo</div>
                  </button>
                </a>
              </div>

              <a
                title="Preview available"
                href="https://ai-deco.vercel.app/"
                target="_blank"
                className="cursor-pointer inline-block bg-gray-200 rounded-full p-1 text-sm md:text-xs lg:text-sm font-semibold text-gray-700 "
              >
                <button className="cursor-pointer h-[30px] w-[120px] bg-gray-200 rounded-2xl p-1 text-xl tracking-wide  font-semibold text-gray-700 ">
                  <div className="text-base text-nowrap">LIVE VIEW</div>
                </button>
              </a>
            </div>
          </div>

          <div className="md:w-[90%] overflow-hidden shadow-lg hover:scale-105 md:hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <Image
              className="w-full aspect-video "
              src="/trr.png"
              alt="Sunset in the mountains"
              width={600}
              height={400}
            />

            <div className="px-6 py-4 bg-gray-900">
              <div className="font-bold text-xl mb-2">Travel Buddy</div>
              <p className="text-gray-200 font-thin md:text-sm lg:text-base min-h-12">
                JAVASCRIPT | REACT JS | NODE.JS | TAILWIND CSS | FIREBASE |
                EXPRESS JS | GCP | MONGODB |
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 bg-gray-900 flex items-center justify-between">
              <span>
                <a
                  title="Github"
                  href="https://github.com/yash-1104github/Travel_buddy"
                  target="_blank"
                  className="cursor-pointer inline-block bg-gray-200 rounded-full p-1 text-sm md:text-xs lg:text-sm font-semibold text-gray-700 "
                >
                  <button className="cursor-pointer h-[30px] w-[120px] bg-gray-200 rounded-2xl p-1 text-xl tracking-wide  font-semibold text-gray-700 ">
                    <div className="text-base">Git Repo</div>
                  </button>
                </a>
              </span>
              <a
                title="Preview available"
                href="https://ai-trip-planner-gules.vercel.app/"
                target="_blank"
                className="cursor-pointer inline-block bg-gray-200 rounded-full p-1 text-sm md:text-xs lg:text-sm font-semibold text-gray-700 "
              >
                <button className="cursor-pointer h-[30px] w-[120px] bg-gray-200 rounded-2xl p-1 text-xl tracking-wide  font-semibold text-gray-700 ">
                  <div className="text-base text-nowrap">LIVE VIEW</div>
                </button>
              </a>
            </div>
          </div>

          <div className="md:w-[90%] overflow-hidden shadow-lg hover:scale-105 md:hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <Image
              className="w-full aspect-video"
              src="/rrr.png"
              alt="Sunset in the mountains"
              width={600}
              height={400}
            />

            <div className="px-6 py-4 bg-gray-900">
              <div className="font-bold text-xl mb-2">GENAI</div>
              <p className="text-gray-200 md:text-sm lg:text-base font-thin min-h-12">
                JAVASCRIPT | REACT JS | NODE.JS | EXPRESS JS | TAILWIND CSS|
                MONGODB | REST API | MATERIAL-UI
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 bg-gray-900 flex items-center justify-between">
              <span>
                <a
                  title="Github"
                  href="https://github.com/yash-1104github/AI-Image-Generation/tree/main"
                  target="_blank"
                  className="cursor-pointer inline-block bg-gray-200 rounded-full p-1 text-sm md:text-xs lg:text-sm font-semibold text-gray-700 "
                >
                  <button className="cursor-pointer h-[30px] w-[120px] bg-gray-200 rounded-2xl p-1 text-xl tracking-wide  font-semibold text-gray-700 ">
                    <div className="text-base">Git Repo</div>
                  </button>
                </a>
              </span>
              <a
                title="Preview available"
                href="https://ai-image-generation-drab.vercel.app/"
                target="_blank"
                className="cursor-pointer inline-block bg-gray-200 rounded-full p-1 text-sm md:text-xs lg:text-sm font-semibold text-gray-700 "
              >
                <button className="cursor-pointer h-[30px] w-[120px] bg-gray-200 rounded-2xl p-1 text-xl tracking-wide  font-semibold text-gray-700 ">
                  <div className="text-base text-nowrap">LIVE VIEW</div>
                </button>
              </a>
            </div>
          </div>

          <div className="md:w-[90%] overflow-hidden shadow-lg hover:scale-105 md:hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <Image
              className="w-full aspect-video"
              src="/ss.png"
              alt="Sunset in the mountains"
              width={600}
              height={400}
            />

            <div className="px-6 py-4 bg-gray-900">
              <div className="font-bold text-xl mb-2">FOODIVERSE</div>
              <p className="text-gray-200 md:text-sm lg:text-base font-thin min-h-12">
                JAVASCRIPT | REACT JS | HTML | TAILWIND CSS | MONGODB | REST API
                | MATERIAL-UI
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 bg-gray-900 flex items-center justify-between">
              <span>
                <a
                  title="Github"
                  href="https://github.com/yash-1104github/Foodie"
                  target="_blank"
                  className="cursor-pointer inline-block bg-gray-200 rounded-full p-1 text-sm md:text-xs lg:text-sm font-semibold text-gray-700 "
                >
                  <button className="cursor-pointer h-[30px] w-[120px] bg-gray-200 rounded-2xl p-1 text-xl tracking-wide  font-semibold text-gray-700 ">
                    <div className="text-base">Git Repo</div>
                  </button>
                </a>
              </span>
              <a
                title="Preview available"
                href="https://foodie-dusky-ten.vercel.app/"
                target="_blank"
                className="cursor-pointer inline-block bg-gray-200 rounded-full p-1 text-sm md:text-xs lg:text-sm font-semibold text-gray-700 "
              >
                <button className="cursor-pointer h-[30px] w-[120px] bg-gray-200 rounded-2xl p-1 text-xl tracking-wide  font-semibold text-gray-700 ">
                  <div className="text-base text-nowrap">LIVE VIEW</div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </Element>

      {/* Skills section */}
      <Element
        name="skillsSection"
        className="container mb-10 pb-5 backdrop-blur-2xl m-auto rounded-3xl shadow-lg shadow-black "
      >
        <div className=" w-3/4 m-auto flex items-center justify-center py-3 border-b-2 border-sky-800 ">
          <span className="text-2xl text-sky-300 font-bold font-mono">
            PROGRAMMING SKILLS
          </span>
        </div>
        <div className="w-11/12 m-auto my-5 pb-8 lg:py-10 flex flex-wrap items-start gap-0.5 gap-y-5  justify-evenly">
          {/* java skills */}
          <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <Image
              className="w-full aspect-square object-cover  box-border"
              src={"/js.png"}
              alt="Sunset in the mountains"
              width={500}
              height={300}
            />
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              Javascript
            </div>
          </div>

          <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <div className="m-3 md:m-4">
              <Image
                className="w-full aspect-square object-cover p-1 md:p-3 box-border bg-white rounded-full"
                src="/node.png"
                alt="Sunset in the mountains"
                width={500}
                height={300}
              />
            </div>
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              Node
            </div>
          </div>

          <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <Image
              className="w-full aspect-square object-cover p-3 box-border rounded-full "
              src="/mongo.png"
              alt="Sunset in the mountains"
              width={500}
              height={300}
            />
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              MongoDB
            </div>
          </div>

          <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <Image
              className="w-full aspect-square object-cover p-3 box-border "
              src="https://pngimg.com/uploads/mysql/mysql_PNG4.png"
              alt="Sunset in the mountains"
              width={500}
              height={300}
            />
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              MySql
            </div>
          </div>

          {/* <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <Image
              className="w-full aspect-square object-cover p-3 box-border"
              src="https://www.pngkit.com/png/full/101-1010012_download-png.png"
              alt="Sunset in the mountains"
              width={500}
              height={300}
            />
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              C
            </div>
          </div> */}

          {/* Front End skills */}
          <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <Image
              className="w-full aspect-square object-cover p-3 box-border"
              src={
                "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
              }
              alt="Sunset in the mountains"
              width={500}
              height={300}
            />
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              HTML
            </div>
          </div>

          <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <div className="m-3 md:m-4">
              <Image
                className="w-full aspect-square object-cover p-1 md:p-3 box-border bg-white rounded-full"
                src="https://icon-library.com/images/css3-icon/css3-icon-28.jpg"
                alt="Sunset in the mountains"
                width={500}
                height={300}
              />
            </div>
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              CSS
            </div>
          </div>

          <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <Image
              className="w-full aspect-square object-cover p-3 box-border rounded-full "
              src="/redux1.png"
              alt="Sunset in the mountains"
              width={500}
              height={300}
            />
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              Redux
            </div>
          </div>

          <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <div className="lg:m-4">
              <Image
                className="w-full aspect-square object-cover p-3 box-border "
                src="/react.png"
                alt="Sunset in the mountains"
                width={500}
                height={300}
              />
            </div>
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              React Js
            </div>
          </div>

          <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <div className="m-4">
              <Image
                className="w-full aspect-square object-cover box-border rounded-full"
                src="/c++.png"
                alt="Sunset in the mountains"
                width={500}
                height={300}
              />
            </div>
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              C++
            </div>
          </div>

          {/* Extra skills */}
          <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <Image
              className="w-full aspect-square object-cover p-3 box-border"
              src={
                "https://www.pngrepo.com/png/354431/512/tailwindcss-icon.png"
              }
              alt="Sunset in the mountains"
              width={500}
              height={300}
            />
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              Tailwind CSS
            </div>
          </div>

          <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <div className="m-3 md:m-4">
              <Image
                className="w-full aspect-square object-cover p-1 md:p-3 box-border bg-white rounded-full"
                src="https://th.bing.com/th/id/OIP.IqehWlKgsVTNXTNXPZnu8QHaG2?rs=1&pid=ImgDetMain"
                alt="Sunset in the mountains"
                width={500}
                height={300}
              />
            </div>
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              Bootstrap CSS
            </div>
          </div>

          <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <Image
              className="w-full aspect-square object-cover p-3 box-border rounded-full invert"
              src="https://pngimg.com/uploads/github/github_PNG68.png"
              alt="Sunset in the mountains"
              width={500}
              height={300}
            />
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              GitHub
            </div>
          </div>

          <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <div className="lg:m-4">
              <Image
                className="w-full aspect-square object-cover p-3 box-border rounded-full "
                src="https://th.bing.com/th/id/OIP.lGXbDhpDGpF5uWduBkp3PwHaEh?rs=1&pid=ImgDetMain"
                alt="Sunset in the mountains"
                width={500}
                height={300}
              />
            </div>
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              Postman
            </div>
          </div>

          <div className="w-1/6 overflow-hidden shadow-lg hover:scale-110 duration-300 border-2 border-sky-600 shadow-black rounded-lg">
            <div className="m-1 lg:m-4">
              <Image
                className="w-full aspect-square object-cover box-border rounded-full"
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/217d5ea0-623d-40b1-9b31-027b904a5f15/ddjrgww-846ce429-3b0d-4ad8-bf6d-ac52dfe48201.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIxN2Q1ZWEwLTYyM2QtNDBiMS05YjMxLTAyN2I5MDRhNWYxNVwvZGRqcmd3dy04NDZjZTQyOS0zYjBkLTRhZDgtYmY2ZC1hYzUyZGZlNDgyMDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.G0SE64OMLNEGI8vXb21JRl13RMfER1VP8Kh2Ig3oJaQ"
                alt="Sunset in the mountains"
                width={500}
                height={300}
              />
            </div>
            <div className="hidden md:flex justify-center lg:font-bold text-sm lg:text-md pb-2 text-center">
              Vs Code
            </div>
          </div>
        </div>
      </Element>

      {/* About section */}
      <Element
        name="contactSection"
        className="container md:mb-5 lg:mb-10 lg:pb-5 backdrop-blur-2xl m-auto rounded-3xl shadow-lg shadow-black scroll-smooth "
      >
        <div className="max-w-screen-lg m-auto flex items-center justify-center py-3 border-b-2 border-sky-800 ">
          <span className="text-2xl text-sky-300 font-bold font-mono">
            CONTACT ME
          </span>
        </div>

        {/* Social links */}
        <div className="flex md:hidden justify-evenly  pt-2">
          <ul className="flex gap-8">
            <li className="mt-4">
              <a
                href="https://github.com/yash-1104github"
                aria-label="GITHUB"
                target="_blank"
                rel="noopener"
                className="w-min flex items-center  bg-white px-1 py-1 rounded-md text-black transition hover:scale-125 hover:no-underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512.08 512.08"
                  width="20"
                  height="20"
                >
                  <path
                    d="M255.942 5.361C113.905 6.046-.683 121.746.003 263.783c.531 109.928 70.871 207.365 175.043 242.473 12.8 2.368 17.44-5.568 17.44-12.384 0-6.112-.192-22.4-.352-43.712-71.2 15.52-86.24-34.464-86.24-34.464a67.906 67.906 0 00-28.384-37.6c-23.264-16 1.76-15.616 1.76-15.616a53.858 53.858 0 0139.2 26.496c14.379 26.38 47.421 36.109 73.801 21.73.233-.127.464-.255.695-.386a54.848 54.848 0 0116.256-34.368c-56.832-6.496-116.48-28.512-116.48-127.008a99.488 99.488 0 0126.24-68.96 92.802 92.802 0 012.56-68.032s21.504-6.912 70.4 26.336a242.167 242.167 0 01128.224 0c48.864-33.248 70.4-26.336 70.4-26.336a92.802 92.802 0 012.56 68.032 99.422 99.422 0 0126.016 68.96c0 98.72-59.84 120.448-116.864 126.816a61.503 61.503 0 0117.376 47.616c0 34.336-.32 62.048-.32 70.4 0 6.88 4.608 14.88 17.6 12.352 134.53-45.57 206.647-191.57 161.076-326.101C462.822 76.144 365.622 6.009 255.942 5.361z"
                    fill="#5c6bc0"
                  ></path>
                  <path d="M184.262 506.705a40.434 40.434 0 01-7.072-.672C42.868 462.36-30.617 318.066 13.056 183.744S201.022-24.063 335.344 19.61s207.808 187.966 164.135 322.288c-25.09 77.168-85.313 137.851-162.288 163.527a31.359 31.359 0 01-27.712-4.96 28 28 0 01-9.888-21.76v-13.472c0-12.384.224-31.072.224-52.544a41.249 41.249 0 00-10.752-32.448c-6.697-5.765-7.453-15.867-1.688-22.564a16.001 16.001 0 0110.392-5.468c49.504-5.504 95.328-21.76 95.328-102.816a77.186 77.186 0 00-20.48-53.76 16 16 0 01-3.008-16.832 67.937 67.937 0 00.896-41.6 131.391 131.391 0 00-45.408 21.888 15.617 15.617 0 01-13.28 2.176 214.393 214.393 0 00-55.872-7.552 211.21 211.21 0 00-55.712 7.52 15.682 15.682 0 01-13.344-2.272 127.24 127.24 0 00-45.504-21.76 68.096 68.096 0 00.96 41.6 16 16 0 01-3.008 16.8 77.504 77.504 0 00-20.512 53.792c0 81.024 45.728 97.376 95.136 103.04 8.778 1.014 15.072 8.952 14.058 17.73a16.002 16.002 0 01-5.322 10.174 35.2 35.2 0 00-9.952 22.4 16 16 0 01-9.28 12.352 73.984 73.984 0 01-57.44 3.2 64 64 0 0046.688 3.808 16.224 16.224 0 0113.408 3.2c3.77 3.01 5.98 7.56 6.016 12.384l.352 41.024c.306 15.16-11.735 27.699-26.895 28.005-.444.009-.887.007-1.33-.005zm71.68-469.344c-124.1.37-224.403 101.273-224.033 225.373.282 94.478 59.632 178.689 148.513 210.723v-17.216c-34.359 5.788-68.015-13.527-80.352-46.112a49.407 49.407 0 00-18.528-25.6c-6.816-4.48-21.984-14.88-17.184-30.016 3.2-9.6 11.52-14.688 26.272-14.88a67.199 67.199 0 0150.592 33.088c7.461 15.614 25.846 22.648 41.824 16a84.051 84.051 0 012.624-8.32c-39.456-8.416-98.72-34.592-98.72-131.008a108.48 108.48 0 0122.656-68.032 107.617 107.617 0 015.536-66.048 16.001 16.001 0 019.984-9.376c6.176-2.016 29.216-5.952 73.6 22.592a243.688 243.688 0 01114.464 0c44.512-28.544 67.488-24.512 73.6-22.592a15.998 15.998 0 019.952 9.344 107.394 107.394 0 015.44 65.984 108.32 108.32 0 0122.752 68.128c0 96.416-59.296 122.496-98.816 130.848a92.123 92.123 0 015.536 32.448c0 21.568 0 40.32-.224 52.768v7.872c116.714-42.072 177.223-170.794 135.151-287.507C434.555 96.977 350.382 37.651 255.942 37.361z"></path>
                </svg>
              </a>
            </li>

            <li className="mt-4">
              <a
                href="https://www.linkedin.com/in/yash-gupta-1a137b223/"
                aria-label="LINKEDIN"
                target="_blank"
                rel="noopener"
                className="w-min flex items-center  bg-white px-1 py-1 rounded-md text-black transition hover:scale-125 hover:no-underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="20"
                  height="20"
                >
                  <path
                    d="M469.779 503.983H42.221c-18.891 0-34.205-15.314-34.205-34.205V42.221c0-18.891 15.314-34.205 34.205-34.205h427.557c18.891 0 34.205 15.314 34.205 34.205v427.557c0 18.891-15.314 34.205-34.204 34.205z"
                    fill="#3cafe6"
                  ></path>
                  <path
                    d="M42.221 452.676V8.017c-18.891 0-34.205 15.314-34.205 34.205v427.557c0 18.891 15.314 34.205 34.205 34.205h427.557c18.891 0 34.205-15.314 34.205-34.205H59.324c-9.446 0-17.103-7.657-17.103-17.103z"
                    fill="#1c9ad6"
                  ></path>
                  <path
                    fill="#fff"
                    d="M84.977 196.142h68.409v230.881H84.977z"
                  ></path>
                  <path
                    fill="#e5e5e5"
                    d="M84.977 196.142h25.653v230.881H84.977z"
                  ></path>
                  <path
                    d="M350.063 196.142c-17.102 0-58.076 2.494-76.96 42.756v-42.756h-68.409v230.881h68.409V315.858c0-25.653 21.644-42.756 42.756-42.756 23.613 0 42.756 17.102 42.756 42.756V427.023h68.409V264.551c-.001-37.781-38.837-68.409-76.961-68.409z"
                    fill="#fff"
                  ></path>
                  <g fill="#e5e5e5">
                    <path d="M204.693 196.142h25.653v230.881h-25.653zM384.267 315.858c0-25.653-19.143-42.756-42.756-42.756-4.154 0-8.326.671-12.351 1.93 17.098 5.139 29.453 20.219 29.453 40.825V427.022h25.653V315.858z"></path>
                  </g>
                  <circle
                    cx="119.182"
                    cy="119.182"
                    r="34.205"
                    fill="#fff"
                  ></circle>
                  <path
                    d="M136.284 136.284c-18.891 0-34.205-15.314-34.205-34.205a34.07 34.07 0 013.03-14.072c-11.869 5.367-20.133 17.301-20.133 31.174 0 18.891 15.314 34.205 34.205 34.205 13.873 0 25.807-8.264 31.174-20.133a34.046 34.046 0 01-14.071 3.031z"
                    fill="#e5e5e5"
                  ></path>
                  <path d="M503.983 92.994A8.017 8.017 0 00512 84.977V42.221C512 18.941 493.059 0 469.779 0H42.221C18.941 0 0 18.941 0 42.221v427.557C0 493.059 18.941 512 42.221 512h427.557c23.28 0 42.221-18.941 42.221-42.221V119.182c0-4.427-3.588-8.017-8.017-8.017s-8.017 3.589-8.017 8.017v350.597c0 14.44-11.747 26.188-26.188 26.188H42.221c-14.44 0-26.188-11.748-26.188-26.188V42.221c0-14.44 11.748-26.188 26.188-26.188h427.557c14.441 0 26.188 11.748 26.188 26.188v42.756a8.017 8.017 0 008.017 8.017z"></path>
                  <path d="M153.386 238.898a8.017 8.017 0 008.017-8.017v-34.739a8.017 8.017 0 00-8.017-8.017H84.977a8.017 8.017 0 00-8.017 8.017v230.881a8.017 8.017 0 008.017 8.017h68.409a8.017 8.017 0 008.017-8.017V266.154a8.017 8.017 0 00-16.034 0v152.852H92.994V204.159h52.376v26.722a8.017 8.017 0 008.016 8.017zM358.614 435.04h68.409a8.017 8.017 0 008.017-8.017V264.551c0-20.236-9.586-39.579-26.99-54.465-16.319-13.955-37.454-21.96-57.987-21.96-33.891 0-55.359 11.268-68.944 25.151v-17.134a8.017 8.017 0 00-8.017-8.017h-68.409a8.017 8.017 0 00-8.017 8.017v230.881a8.017 8.017 0 008.017 8.017h68.409a8.017 8.017 0 008.017-8.017V315.858c0-21.457 18.032-34.739 34.739-34.739 20.129 0 34.739 14.61 34.739 34.739v111.165a8.017 8.017 0 008.017 8.017zm-42.756-169.954c-24.418 0-50.772 19.412-50.772 50.772v103.148H212.71V204.159h52.376v34.739c0 3.656 2.573 6.926 6.125 7.789 3.66.888 7.55-.973 9.15-4.385 11.871-25.31 35.323-38.143 69.703-38.143 32.545 0 68.944 25.828 68.944 60.392v154.455H366.63V315.858c0-28.946-21.827-50.772-50.772-50.772zM119.182 76.96c-23.281 0-42.221 18.941-42.221 42.221s18.941 42.221 42.221 42.221 42.221-18.941 42.221-42.221-18.941-42.221-42.221-42.221zm0 68.41c-14.44 0-26.188-11.748-26.188-26.188s11.748-26.188 26.188-26.188 26.188 11.748 26.188 26.188-11.749 26.188-26.188 26.188z"></path>
                </svg>
              </a>
            </li>
            <li className="mt-4">
              <a
                href="https://leetcode.com/u/yash_leetcode04/"
                aria-label="FACEBOOK"
                // target="_blank"
                rel="noopener"
                className="w-min flex items-center  bg-white px-1 py-1 rounded-md text-black transition hover:scale-125 hover:no-underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="leetcode"
                  width="20px"
                  height="20px"
                >
                  <path
                    fill="#B3B1B0"
                    d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"
                  ></path>
                  <path
                    fill="#E7A41F"
                    d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"
                  ></path>
                  <path
                    fill="#070706"
                    d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="m-auto my-5 pb-10 lg:py-10 flex items-start gap-8 justify-evenly">
          <div className="max-w-screen-xl mx-auto  p-5 pt-0">
            <div className="grid grid-cols-1 md:grid-cols-12 border">
              <div className="bg-gray-900 md:col-span-4 p-10 text-white">
                <p className="mt-4 text-sm leading-7 font-regular uppercase">
                  Contact
                </p>
                <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                  Get In <span className="text-indigo-600">Touch</span>
                </h3>
                <p className="my-4 leading-7 text-gray-200">
                  I&apos;m always open to exploring new opportunities and
                  discussing how my skills can contribute to innovative
                  projects. If you&apos;re a recruiter interested in my work or
                  potential fit for your team, I&apos;d love to hear from you!
                </p>

                <div className="flex gap-2 items-center mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    color="white"
                    fill="none"
                  >
                    <path
                      d="M3.16405 11.3497L4 11.5587L4.45686 16.1005C4.715 18.6668 4.84407 19.9499 5.701 20.7249C6.55793 21.5 7.84753 21.5 10.4267 21.5H13.5733C16.1525 21.5 17.4421 21.5 18.299 20.7249C19.1559 19.9499 19.285 18.6668 19.5431 16.1005L20 11.5587L20.836 11.3497C21.5201 11.1787 22 10.564 22 9.85882C22 9.35735 21.7553 8.88742 21.3445 8.59985L13.1469 2.86154C12.4583 2.37949 11.5417 2.37949 10.8531 2.86154L2.65549 8.59985C2.24467 8.88742 2 9.35735 2 9.85882C2 10.564 2.47993 11.1787 3.16405 11.3497Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="14.5"
                      r="2.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">
                    Ghandi Chowk Fatehabad, Agra, Uttar Pradesh 283111
                  </span>
                </div>
                <div className="flex gap-2 items-center mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    color="white"
                    fill="none"
                  >
                    <path
                      d="M21 20C20.3567 18.7133 19 17.0243 19 15.5279C19 13.8295 19.3671 11.7341 18.5777 10.1554C18.2445 9.48892 18 8.81397 18 8.05573V4.42857C18 4.19188 17.8081 4 17.5714 4C16.1513 4 15 5.15127 15 6.57143M8 18L11.6348 20.2717C11.8755 20.4222 12.0814 20.6222 12.2389 20.8583L13 22"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M5.02734 15C5.08201 16.0967 5.24516 16.7809 5.73203 17.2678C6.46426 18 7.64277 18 9.99979 18C12.3568 18 13.5353 18 14.2676 17.2678C14.9998 16.5355 14.9998 15.357 14.9998 13V7C14.9998 4.64298 14.9998 3.46447 14.2676 2.73223C13.5353 2 12.3568 2 9.99979 2C7.64277 2 6.46426 2 5.73203 2.73223C5.24516 3.2191 5.08201 3.90328 5.02734 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.25 7.5H5.75C6.44036 7.5 7 6.94036 7 6.25C7 5.55964 6.44036 5 5.75 5L4.25 5C3.55964 5 3 5.55964 3 6.25C3 6.94036 3.55964 7.5 4.25 7.5ZM4.25 7.5L6.75 7.5C7.44036 7.5 8 8.05964 8 8.75C8 9.44036 7.44036 10 6.75 10L4.25 10M4.25 7.5C3.55964 7.5 3 8.05964 3 8.75C3 9.44036 3.55964 10 4.25 10M4.25 10L5.75 10C6.44036 10 7 10.5596 7 11.25C7 11.9404 6.44036 12.5 5.75 12.5H4.25M4.25 10C3.55964 10 3 10.5596 3 11.25C3 11.9404 3.55964 12.5 4.25 12.5M4.25 12.5H5.25C5.94036 12.5 6.5 13.0596 6.5 13.75C6.5 14.4404 5.94036 15 5.25 15H4.25C3.55964 15 3 14.4404 3 13.75C3 13.0596 3.55964 12.5 4.25 12.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9.99981 15H10.0088"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">+91 7409512633</span>
                </div>
                <div className="flex gap-2 items-center mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    color="white"
                    fill="none"
                  >
                    <path
                      d="M19 2V5C19 8.86599 15.866 12 12 12M5 2V5C5 8.86599 8.13401 12 12 12M12 12C15.866 12 19 15.134 19 19V22M12 12C8.13401 12 5 15.134 5 19V22"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M4 2H20M20 22H4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-sm">24/7</span>
                </div>
              </div>
              <form
                className="md:col-span-8 p-10"
                ref={form}
                onSubmit={sendEmail}
              >
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                      Full Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Akash Gupta"
                      name="user_name"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide  text-gray-400 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email Address
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-email"
                      type="email"
                      placeholder="akash@gmail.com"
                      name="user_email"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Your Message
                    </label>
                    <textarea
                      rows="10"
                      className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      name="message"
                      required
                    ></textarea>
                  </div>
                  <div className="flex justify-between w-full px-3">
                    <div className="md:flex md:items-center"></div>
                    <button
                      className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                      type="submit"
                      value="Send"
                      id="sendBtn"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Element>

      {/* Footer */}
      <nav className="w-full h-16 md:h-20 lg:h-32 flex items-center justify-center px-20 bg-gradient-to-t from-black to-transparent">
        {/* <div>
          <span className="cursor-default text-4xl">Portfolio</span>
        </div>
        <div>
          <ul className="flex items-center justify-evenly gap-10">
            <li className="cursor-pointer hover:drop-shadow hover:underline font-mono">
              Home
            </li>
            <li className="cursor-pointer hover:underline font-mono">
              Projects
            </li>
            <li className="cursor-pointer hover:underline font-mono">Skills</li>
            <li className="cursor-pointer hover:underline font-mono">About</li>
          </ul>
        </div> */}
        <span className="flex text-2xl md:text-3xl lg:text-4xl font-bold text-slate-200">
          Thank You for Visiting!
        </span>
      </nav>

      {/* Social Links */}
      <div className="fixed hidden md:block bottom-1 md:bottom-4 right-1 lg:right-3 p-2">
        <ul className="">
          <li className="my-4">
            <a
              href="https://github.com/yash-1104github"
              aria-label="GITHUB"
              target="_blank"
              rel="noopener"
              className="w-min flex items-center  bg-white px-1 py-1 rounded-md text-black transition hover:scale-125 hover:no-underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512.08 512.08"
                width="20"
                height="20"
              >
                <path
                  d="M255.942 5.361C113.905 6.046-.683 121.746.003 263.783c.531 109.928 70.871 207.365 175.043 242.473 12.8 2.368 17.44-5.568 17.44-12.384 0-6.112-.192-22.4-.352-43.712-71.2 15.52-86.24-34.464-86.24-34.464a67.906 67.906 0 00-28.384-37.6c-23.264-16 1.76-15.616 1.76-15.616a53.858 53.858 0 0139.2 26.496c14.379 26.38 47.421 36.109 73.801 21.73.233-.127.464-.255.695-.386a54.848 54.848 0 0116.256-34.368c-56.832-6.496-116.48-28.512-116.48-127.008a99.488 99.488 0 0126.24-68.96 92.802 92.802 0 012.56-68.032s21.504-6.912 70.4 26.336a242.167 242.167 0 01128.224 0c48.864-33.248 70.4-26.336 70.4-26.336a92.802 92.802 0 012.56 68.032 99.422 99.422 0 0126.016 68.96c0 98.72-59.84 120.448-116.864 126.816a61.503 61.503 0 0117.376 47.616c0 34.336-.32 62.048-.32 70.4 0 6.88 4.608 14.88 17.6 12.352 134.53-45.57 206.647-191.57 161.076-326.101C462.822 76.144 365.622 6.009 255.942 5.361z"
                  fill="#5c6bc0"
                ></path>
                <path d="M184.262 506.705a40.434 40.434 0 01-7.072-.672C42.868 462.36-30.617 318.066 13.056 183.744S201.022-24.063 335.344 19.61s207.808 187.966 164.135 322.288c-25.09 77.168-85.313 137.851-162.288 163.527a31.359 31.359 0 01-27.712-4.96 28 28 0 01-9.888-21.76v-13.472c0-12.384.224-31.072.224-52.544a41.249 41.249 0 00-10.752-32.448c-6.697-5.765-7.453-15.867-1.688-22.564a16.001 16.001 0 0110.392-5.468c49.504-5.504 95.328-21.76 95.328-102.816a77.186 77.186 0 00-20.48-53.76 16 16 0 01-3.008-16.832 67.937 67.937 0 00.896-41.6 131.391 131.391 0 00-45.408 21.888 15.617 15.617 0 01-13.28 2.176 214.393 214.393 0 00-55.872-7.552 211.21 211.21 0 00-55.712 7.52 15.682 15.682 0 01-13.344-2.272 127.24 127.24 0 00-45.504-21.76 68.096 68.096 0 00.96 41.6 16 16 0 01-3.008 16.8 77.504 77.504 0 00-20.512 53.792c0 81.024 45.728 97.376 95.136 103.04 8.778 1.014 15.072 8.952 14.058 17.73a16.002 16.002 0 01-5.322 10.174 35.2 35.2 0 00-9.952 22.4 16 16 0 01-9.28 12.352 73.984 73.984 0 01-57.44 3.2 64 64 0 0046.688 3.808 16.224 16.224 0 0113.408 3.2c3.77 3.01 5.98 7.56 6.016 12.384l.352 41.024c.306 15.16-11.735 27.699-26.895 28.005-.444.009-.887.007-1.33-.005zm71.68-469.344c-124.1.37-224.403 101.273-224.033 225.373.282 94.478 59.632 178.689 148.513 210.723v-17.216c-34.359 5.788-68.015-13.527-80.352-46.112a49.407 49.407 0 00-18.528-25.6c-6.816-4.48-21.984-14.88-17.184-30.016 3.2-9.6 11.52-14.688 26.272-14.88a67.199 67.199 0 0150.592 33.088c7.461 15.614 25.846 22.648 41.824 16a84.051 84.051 0 012.624-8.32c-39.456-8.416-98.72-34.592-98.72-131.008a108.48 108.48 0 0122.656-68.032 107.617 107.617 0 015.536-66.048 16.001 16.001 0 019.984-9.376c6.176-2.016 29.216-5.952 73.6 22.592a243.688 243.688 0 01114.464 0c44.512-28.544 67.488-24.512 73.6-22.592a15.998 15.998 0 019.952 9.344 107.394 107.394 0 015.44 65.984 108.32 108.32 0 0122.752 68.128c0 96.416-59.296 122.496-98.816 130.848a92.123 92.123 0 015.536 32.448c0 21.568 0 40.32-.224 52.768v7.872c116.714-42.072 177.223-170.794 135.151-287.507C434.555 96.977 350.382 37.651 255.942 37.361z"></path>
              </svg>
            </a>
          </li>

          <li className="my-4">
            <a
              href="https://www.linkedin.com/in/yash-gupta-1a137b223/"
              aria-label="LINKEDIN"
              target="_blank"
              rel="noopener"
              className="w-min flex items-center  bg-white px-1 py-1 rounded-md text-black transition hover:scale-125 hover:no-underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="20"
                height="20"
              >
                <path
                  d="M469.779 503.983H42.221c-18.891 0-34.205-15.314-34.205-34.205V42.221c0-18.891 15.314-34.205 34.205-34.205h427.557c18.891 0 34.205 15.314 34.205 34.205v427.557c0 18.891-15.314 34.205-34.204 34.205z"
                  fill="#3cafe6"
                ></path>
                <path
                  d="M42.221 452.676V8.017c-18.891 0-34.205 15.314-34.205 34.205v427.557c0 18.891 15.314 34.205 34.205 34.205h427.557c18.891 0 34.205-15.314 34.205-34.205H59.324c-9.446 0-17.103-7.657-17.103-17.103z"
                  fill="#1c9ad6"
                ></path>
                <path
                  fill="#fff"
                  d="M84.977 196.142h68.409v230.881H84.977z"
                ></path>
                <path
                  fill="#e5e5e5"
                  d="M84.977 196.142h25.653v230.881H84.977z"
                ></path>
                <path
                  d="M350.063 196.142c-17.102 0-58.076 2.494-76.96 42.756v-42.756h-68.409v230.881h68.409V315.858c0-25.653 21.644-42.756 42.756-42.756 23.613 0 42.756 17.102 42.756 42.756V427.023h68.409V264.551c-.001-37.781-38.837-68.409-76.961-68.409z"
                  fill="#fff"
                ></path>
                <g fill="#e5e5e5">
                  <path d="M204.693 196.142h25.653v230.881h-25.653zM384.267 315.858c0-25.653-19.143-42.756-42.756-42.756-4.154 0-8.326.671-12.351 1.93 17.098 5.139 29.453 20.219 29.453 40.825V427.022h25.653V315.858z"></path>
                </g>
                <circle
                  cx="119.182"
                  cy="119.182"
                  r="34.205"
                  fill="#fff"
                ></circle>
                <path
                  d="M136.284 136.284c-18.891 0-34.205-15.314-34.205-34.205a34.07 34.07 0 013.03-14.072c-11.869 5.367-20.133 17.301-20.133 31.174 0 18.891 15.314 34.205 34.205 34.205 13.873 0 25.807-8.264 31.174-20.133a34.046 34.046 0 01-14.071 3.031z"
                  fill="#e5e5e5"
                ></path>
                <path d="M503.983 92.994A8.017 8.017 0 00512 84.977V42.221C512 18.941 493.059 0 469.779 0H42.221C18.941 0 0 18.941 0 42.221v427.557C0 493.059 18.941 512 42.221 512h427.557c23.28 0 42.221-18.941 42.221-42.221V119.182c0-4.427-3.588-8.017-8.017-8.017s-8.017 3.589-8.017 8.017v350.597c0 14.44-11.747 26.188-26.188 26.188H42.221c-14.44 0-26.188-11.748-26.188-26.188V42.221c0-14.44 11.748-26.188 26.188-26.188h427.557c14.441 0 26.188 11.748 26.188 26.188v42.756a8.017 8.017 0 008.017 8.017z"></path>
                <path d="M153.386 238.898a8.017 8.017 0 008.017-8.017v-34.739a8.017 8.017 0 00-8.017-8.017H84.977a8.017 8.017 0 00-8.017 8.017v230.881a8.017 8.017 0 008.017 8.017h68.409a8.017 8.017 0 008.017-8.017V266.154a8.017 8.017 0 00-16.034 0v152.852H92.994V204.159h52.376v26.722a8.017 8.017 0 008.016 8.017zM358.614 435.04h68.409a8.017 8.017 0 008.017-8.017V264.551c0-20.236-9.586-39.579-26.99-54.465-16.319-13.955-37.454-21.96-57.987-21.96-33.891 0-55.359 11.268-68.944 25.151v-17.134a8.017 8.017 0 00-8.017-8.017h-68.409a8.017 8.017 0 00-8.017 8.017v230.881a8.017 8.017 0 008.017 8.017h68.409a8.017 8.017 0 008.017-8.017V315.858c0-21.457 18.032-34.739 34.739-34.739 20.129 0 34.739 14.61 34.739 34.739v111.165a8.017 8.017 0 008.017 8.017zm-42.756-169.954c-24.418 0-50.772 19.412-50.772 50.772v103.148H212.71V204.159h52.376v34.739c0 3.656 2.573 6.926 6.125 7.789 3.66.888 7.55-.973 9.15-4.385 11.871-25.31 35.323-38.143 69.703-38.143 32.545 0 68.944 25.828 68.944 60.392v154.455H366.63V315.858c0-28.946-21.827-50.772-50.772-50.772zM119.182 76.96c-23.281 0-42.221 18.941-42.221 42.221s18.941 42.221 42.221 42.221 42.221-18.941 42.221-42.221-18.941-42.221-42.221-42.221zm0 68.41c-14.44 0-26.188-11.748-26.188-26.188s11.748-26.188 26.188-26.188 26.188 11.748 26.188 26.188-11.749 26.188-26.188 26.188z"></path>
              </svg>
            </a>
          </li>
          <li className="my-4">
            <a
              href="https://leetcode.com/u/yash_leetcode04/"
              aria-label="Leetcode"
              // target="_blank"
              rel="noopener"
              className="w-min flex items-center  bg-white px-1 py-1 rounded-md text-black transition hover:scale-125 hover:no-underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="leetcode"
                width="20px"
                height="20px"
              >
                <path
                  fill="#B3B1B0"
                  d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"
                ></path>
                <path
                  fill="#E7A41F"
                  d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"
                ></path>
                <path
                  fill="#070706"
                  d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
