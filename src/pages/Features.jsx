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
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ut ducimus delectus cupiditate? Aut voluptates similique nisi consequuntur vel a!"
    },
    {
      id: 3,
      icon:<IoMdBusiness/>,
      title: "Business Stratagy",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ut ducimus delectus cupiditate? Aut voluptates similique nisi consequuntur vel a!"
    },
    {
      id: 4,
      icon:<RiSeoLine/>,
      title: "SEO & DIgital Marketing",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ut ducimus delectus cupiditate? Aut voluptates similique nisi consequuntur vel a!"
    },
    {
      id: 5,
      icon:<TfiServer/>,
      title: "VPS Server Management",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ut ducimus delectus cupiditate? Aut voluptates similique nisi consequuntur vel a!"
    },
    {
      id: 6,
      icon:<MdOutlinePhoneAndroid/>,
      title: "Mobile App",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ut ducimus delectus cupiditate? Aut voluptates similique nisi consequuntur vel a!"
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
            <h1 className="text-7xl font-bold">{item.icon}</h1>
            <h1 className="text-2xl font-bold">{item.title}</h1>
            <p className="text-xl pt-4">{item.des}</p>
          </div>
        ))}
      </div>

    </div>
    </section>
  )
}

export default Features