import { FaGithub } from "react-icons/fa6";

/* eslint-disable react/jsx-key */
const Portfolio = () => {
  const featuresData = [
    {
      id: 1,
      img: "/images/billing_craft.png",
      title: "Billing Craft",
      des: "An efficient billing and inventory management system designed for retail businesses.",
      frontend: "https://github.com/hmfarid88/billing_craft_frontend",
      backend: "https://github.com/hmfarid88/billing_craft_backend",
      tech: ["React","Next.js","Typescript", "Node.js", "Tailwind CSS", "Spring Boot", "MySql"]
    },
    {
      id: 2,
      img: "/images/charu.png",
      title: "Charu Enterprise",
      des: "A web application developed for managing the dealership operations of Crown Cement in the Narayanganj zone.",
      frontend: "https://github.com/hmfarid88/charu_frontend",
      backend: "https://github.com/hmfarid88/charu_backend",
      tech: ["React","Next.js","Typescript", "Node.js", "Tailwind CSS", "Spring Boot", "MySql"]
    },
   
    {
      id: 3,
      img: "/images/bakeboss.png",
      title: "Aurora Food & Beverage",
      des: "A customized solution for managing food production costs and distribution, built to meet specific client requirements.",
      frontend: "https://github.com/hmfarid88/bake_boss_frontend",
      backend: "https://github.com/hmfarid88/bake_boss_backend",
      tech: ["React","Next.js","Typescript", "Node.js", "Tailwind CSS", "Spring Boot", "MySql"]
    },
    {
      id: 4,
      img: "/images/p_portfolio.png",
      title: "Personal Portfolio Application",
      des: "A modern and responsive portfolio app to showcase skills, experience, and projects effectively.",
      frontend: "https://github.com/hmfarid88/portfolio",
      backend: "https://github.com/hmfarid88/portfolio",
      tech: ["React + Vite", "Node.js", "Tailwind CSS"]
    },
    {
      id: 5,
      img: "/images/p_school.png",
      title: "School Management Application",
      des: "An all-in-one school website and administration panel for complete institution management.",
      frontend: "https://github.com/hmfarid88/ems_app",
      backend: "https://github.com/hmfarid88/ems_app",
      tech: ["React","Next.js", "Node.js", "Typescript", "Tailwind CSS"]
    },
    {
      id: 6,
      img: "/images/blissbites.png",
      title: "Bakery & Fast Food Management System",
      des: "A comprehensive solution for managing bakery and fast food operations, including order tracking, inventory, production cost calculation, and sales reporting—tailored to meet your business needs.",
      frontend: "https://github.com/hmfarid88/bliss_bites",
      backend: "https://github.com/hmfarid88/bliss_bites",
      tech: ["React","Next.js", "Node.js", "Typescript", "Tailwind CSS"]
    },
  ];

  return (
    <section name="portfolio">
      <div className="container-2xl p-4 pt-5">
        <div className="flex items-center justify-center w-full">
          <div className="divider divider-center tracking-widest text-xl md:text-2xl font-bold text-accent divider-accent w-64">MY PORTFOLIO</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5">
          {featuresData.map((item) => (
            <div className="card w-full bg-base-100 shadow-lg shadow-slate-700">
              <figure className="hover:scale-110 duration-500 px-10 pt-10">
                < img src={item.img} />
              </figure>
              <div className="card-body hover:text-accent">
                <h2 className="card-title text-lg">{item.title}</h2>
                <p className="text-md">{item.des}</p>
                <p className="text-md font-bold mt-2">Used Tech:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {item.tech.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-gray-200 px-2 py-1 rounded-full text-gray-700">{tech}</span>
                  ))}
                </div>

                <div className="flex  gap-4 mt-4">
                  <a href={item.frontend} target="_blank" rel="noopener noreferrer" className="flex gap-2">
                  <FaGithub size={20} className="text-success" title="GitHub Repo" /> GitHub Repo (Frontend)
                  </a>
                  <a href={item.backend} target="_blank" rel="noopener noreferrer" className="flex gap-2">
                  <FaGithub size={20} className="text-success" title="GitHub Repo" /> GitHub Repo (Backend)
                  </a>

                </div>
                <div className="card-actions">
                </div>
              </div>
            </div>

          ))}
        </div>

      </div>
    </section>
  )
}

export default Portfolio