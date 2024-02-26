/* eslint-disable react/jsx-key */
const Portfolio = () => {
  const featuresData = [
    {
      id: 1,
      img: "/images/p_charu.png",
      title: "Crown Cement Delearship Management System",
      des: "This web application developed for maintaining delearship system for Crown Cement Narayanganj Zone."
    },
    {
      id: 2,
      img: "/images/p_kotha.png",
      title: "Shop Management System",
      des: "This application is excellent for billing system and shop management."
    },
    {
      id: 3,
      img: "/images/p_levelup.png",
      title: "Delearship Management System",
      des: "This is customized products delearship management system built as per as client's need."
    },
    {
      id: 4,
      img: "/images/p_portfolio.png",
      title: "Portfolio Application",
      des: "This is awesome personal portfolio application and it is enough to focus wonshelf."
    },
    {
      id: 5,
      img: "/images/p_school.png",
      title: "School Management Applicaion",
      des: "This is at a time school website and management system to handle total institution."
    },
    {
      id: 6,
      img: "/images/p_sms.png",
      title: "Message sending Application",
      des: "This application is great for sending message to any mobile number through internet."
    },
  ]
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
              <div className="card-body items-center text-center hover:text-accent">
                <h2 className="card-title text-lg">{item.title}</h2>
                <p className="text-md">{item.des}</p>
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