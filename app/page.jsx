import { FaSquareGithub } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/navbar/Navbar";
import AboutSection from "./components/AboutSection.tsx/AboutSection";
import ProjectsSection from "./components/ProjectSection/ProjectSection";
import EmailSection from "./components/EmailSection/EmailSection";
import AchievementsSection from "./components/AchievementSection/AchievementSection";

export default function Home() {
  return (
    <main className=" bg-[#121212]   px-12 py-4">
       <Navbar/>
    <HeroSection/>
    <AchievementsSection/>
   <AboutSection/>
   <ProjectsSection/>
   <EmailSection/>
   <div className="flex flex-row ml-[10px] mt-[-200]" >
   <a href="https://github.com/Jawadali8592"><FaSquareGithub className="bg-white w-8 h-8 " /></a>
    <a href="mailto:jsidd350@gmail.com"><SiGmail className="text-white w-8 h-8 ml-8"/></a>
   <a href='www.linkedin.com/in/jawad-ali-73b66228a'><IoLogoLinkedin  className="text-white w-8 h-8 ml-8"/></a>
   <a href='https://www.facebook.com/profile.php?id=100028451017196&mibextid=ZbWKwL'><FaFacebook  className="text-white w-8 h-8 ml-8"/></a>
   <a href="https://wa.me/923040268592" target="_blank"><ImWhatsapp className="text-white w-8 h-8 ml-8" /></a>
   <a href='https://instagram.com/j_a_w_a_d_a_l_i_?igshid=MzMyNGUyNmU2YQ=='><BsInstagram className="text-white w-8 h-8 ml-8"/></a>
   <p className="ml-[615px] text-yellow-400"><b>Made with  by JAWAD ALI Developer</b></p>
        
   
   
   <p className=" text-yellow-400 ml-[]"><b>Copyright © 2024 MY Portfolio. All Rights Reserved</b></p>
  
   </div>

    </main>
  );
}
