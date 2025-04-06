/* eslint-disable react/jsx-key */
import { CgIfDesign } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa";
import { IoMdBusiness } from "react-icons/io";
import { RiSeoLine } from "react-icons/ri";
import { TfiServer } from "react-icons/tfi";
import { MdOutlinePhoneAndroid } from "react-icons/md";
const Features = () => {
  const featuresData = [
    {
      id: 1,
      icon: <CgIfDesign />,
      title: "Website Design",
      des: "I craft elegant, user-friendly web interfaces focused on delivering a seamless user experience.",
    },
    {
      id: 2,
      icon: <FaLaptopCode />,
      title: "Website Development",
      des: "Beyond design, I develop high-performance web applications using Next.js and Spring Boot frameworks.",
    },
    {
      id: 3,
      icon: <IoMdBusiness />,
      title: "Business Strategy",
      des: "I create custom automation systems aligned with your business strategies to boost efficiency and scalability.",
    },
    {
      id: 4,
      icon: <RiSeoLine />,
      title: "SEO & Digital Marketing",
      des: "I help promote businesses through effective SEO and digital marketing strategies tailored to your niche.",
    },
    {
      id: 5,
      icon: <TfiServer />,
      title: "VPS Server Management",
      des: "I set up and manage Virtual Private Servers (VPS), especially for Java-based applications, based on project requirements.",
    },
    {
      id: 6,
      icon: <MdOutlinePhoneAndroid />,
      title: "Mobile App Development",
      des: "I develop mobile-friendly versions of web apps and build native mobile apps tailored to client needs.",
    },
  ];
  
  return (
    <section name="features">
    <div className="container-2xl p-4 pt-5">
      <div className="flex items-center justify-center w-full">
        <div className="divider divider-center tracking-widest text-xl md:text-2xl font-bold text-accent divider-accent w-64">WHAT I DO</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-5">
        {featuresData.map((item) => (
          <div className="card border shadow-lg hover:scale-105 duration-500 hover:text-accent shadow-slate-700 w-full p-4">
            <h1 className="text-3xl md:text-5xl font-bold">{item.icon}</h1>
            <h1 className="text-lg md:text-xl font-bold">{item.title}</h1>
            <p className="text-md md:text-lg pt-4">{item.des}</p>
          </div>
        ))}
      </div>

    </div>
    </section>
  )
}

export default Features