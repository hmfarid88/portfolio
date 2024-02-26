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
      icon:<CgIfDesign/>,
      title: "Website Design",
      des: "I design professional web appplication and user experience elegantly."
    },
    {
      id: 2,
      icon:<FaLaptopCode/>,
      title: "Website Development",
      des: "I not only design website but also develop very efficient way with next ja and spring boot framework."
    },
    {
      id: 3,
      icon:<IoMdBusiness/>,
      title: "Business Stratagy",
      des: "I make automation system for your business according to your stratagy."
    },
    {
      id: 4,
      icon:<RiSeoLine/>,
      title: "SEO & DIgital Marketing",
      des: "Search engine optimization and digital marketing are very essential for business promotion. I also serve tese for my clients business promotion"
    },
    {
      id: 5,
      icon:<TfiServer/>,
      title: "VPS Server Management",
      des: "I make virtual private server for my project specially for java project. I make it as needed as project demand."
    },
    {
      id: 6,
      icon:<MdOutlinePhoneAndroid/>,
      title: "Mobile App",
      des: "I develop mobile app for mobile version of web application and also make native mobile app as need as clients."
    },
  ]
  return (
    <section name="features">
    <div className="container-2xl p-4 pt-5">
      <div className="flex items-center justify-center w-full">
        <div className="divider divider-center tracking-widest text-xl md:text-2xl font-bold text-accent divider-accent w-64">WHAT I DO</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-5">
        {featuresData.map((item) => (
          <div className="card border shadow-lg hover:scale-105 duration-500 hover:text-accent shadow-slate-700 w-full p-4">
            <h1 className="text-3xl md:text-5xl text-accent font-bold">{item.icon}</h1>
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