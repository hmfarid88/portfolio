/* eslint-disable react/jsx-key */

const Resume = () => {
  const resumeData = [
    {
      id: 1,
      title: "Diploma in Software Engineering",
      subTitle: "Daffodil International Professional Training Institute (2016)",
      point: "4.0/5",
      des: "I have successfully completed DSE from DIPTI in 2016 based on JAVA, HTML, CSS, javascript, JSP, Servlet, React Js, Next Js, Spring Boot(Framework), SQL, mySql, MongoDB etc."
    },
    {
      id: 2,
      title: "M.A in English",
      subTitle: "National University (2011)",
      point: "2nd Class",
      des: "I have successfully completed Masters in English from National University in 2011."
    },
    {
      id: 3,
      title: "B.A Hon's in English",
      subTitle: "National University (2010)",
      point: "2nd Class",
      des: "I have successfully completed B.A Hon's in English from National University in 2011."
    },
    {
      id: 4,
      title: "H.S.C (Business Studies)",
      subTitle: "Salimullah Degree College, Dhaka. (2006)",
      point: "4.30/5",
      des: "I have successfully completed H.S.C from Salimullah Degree College, Dhaka in 2006 from Business Studies group."
    },
    {
      id: 5,
      title: "S.S.C (Science)",
      subTitle: "Aliganj High School (2004)",
      point: "3.44/5",
      des: "I have successfully completed S.S.C from Aliganj High School in 2004 from Science group."
    },
  ]
  const devData = [
    {
      id: 1,
      title: "HTML, CSS",
      subtitle1: "HTML",
      subtitle2: "CSS",
      svalue1: "90",
      svalue2: "80",
    },
    {
      id: 2,
      title: "FIGMA, TAILWINDCSS",
      subtitle1: "FIGMA",
      subtitle2: "TAILWINDCSS",
      svalue1: "70",
      svalue2: "80",
    },
    {
      id: 3,
      title: "JAVASCRIPT, TYPESCRIPT",
      subtitle1: "JAVASCRIPT",
      subtitle2: "TYPESCRIPT",
      svalue1: "70",
      svalue2: "60",
    },
    {
      id: 4,
      title: "REACT JS, NEXT JS",
      subtitle1: "REACT JS",
      subtitle2: "NEXT JS",
      svalue1: "80",
      svalue2: "70",
    },
    {
      id: 5,
      title: "JAVA, SPRING BOOT",
      subtitle1: "JAVA",
      subtitle2: "SPRING BOOT",
      svalue1: "80",
      svalue2: "70",
    },
  ]
  return (
    <section name="resume">
      <div className="container-2xl mt-10 pt-10">
        <div className="flex w-full items-center justify-center">
          <div className="flex flex-col gap-4 w-52">
            <div className="flex gap-4 items-center">
              <div className="skeleton w-16 h-16 rounded-full text-center text-lg font-bold text-designColor hover:text-accent p-5 shrink-0">7+</div>
              <div className="flex flex-col gap-4">
                <div className="skeleton text-center text-lg text-designColor hover:text-accent p-1 h-10 w-20">Years</div>
                <div className="skeleton text-center text-lg text-designColor hover:text-accent p-1 h-10 w-28">Experience</div>
              </div>
            </div>
            <div className="skeleton text-xl font-bold tracking-widest text-center text-accent h-16 w-full pt-4">MY RESUME</div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
          <div className="flex m-4">
            <div className="w-full mx-5">
              <h1 className="text-3xl text-center font-bold tracking-widest p-4">Education</h1>
              <ul className="steps steps-vertical">
                {resumeData.map((item) => (
                  <li className="step step-primary hover:step-error p-2">
                    <div className="card border shadow-lg hover:translate-x-1 duration-500 shadow-slate-700 h-60 w-full p-4 overflow-hidden">
                      <h1 className="text-lg md:text-xl font-bold">{item.title}</h1>
                      <p className="text-md md:text-lg fond-bold p-2">{item.subTitle}</p><p className=" text-designColor">{item.point}</p>
                      {/* <p className="w-full absolute text-xs md:text-sm text-right p-6"><button className="btn btn-md btn-ghost text-designColor">{item.point}</button></p> */}
                      <p className="text-sm md:text-md fond-bold pt-5">{item.des}</p>
                    </div>
                  </li>
                ))}

              </ul>
            </div>
          </div>
          <div className="flex pt-4">
            <div className="w-full">
              <h1 className="text-3xl text-center font-bold tracking-widest p-4">Development Skills</h1>
              <ul className="steps steps-vertical w-full px-4">
                {devData.map((item) => (
                  <li className="step step-primary hover:step-error p-2">
                    <div className="card border shadow-lg hover:translate-x-1 duration-500 shadow-slate-700 h-60 w-full pt-5 p-5">
                      <h1 className="text-lg font-bold">{item.title}</h1>
                      <label className="form-control w-full p-2">
                        <div className="label justify-between">
                          <span className="label-text">{item.subtitle1}</span>
                          <span className="label-text">{item.svalue1}%</span>
                        </div>
                        <progress className="progress progress-success h-4 w-full" value={item.svalue1} max="100"></progress>
                      </label>
                      <label className="form-control w-full p-2">
                        <div className="label justify-between">
                          <span className="label-text">{item.subtitle2}</span>
                          <span className="label-text">{item.svalue2}%</span>
                        </div>
                        <progress className="progress progress-success h-4 w-full" value={item.svalue2} max="100"></progress>
                      </label>
                    </div>
                  </li>
                ))}

              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume