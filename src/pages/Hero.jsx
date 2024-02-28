import { Typewriter } from 'react-simple-typewriter'
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section name="hero">
            <div className="container-2xl pt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
                    <div className="px-4 md:px-4 order-last md:order-first">
                        <p className='text-sm md:text-md font-bold tracking-widest pt-4' >WELCOME TO MY WORLD</p>
                        <h1 className='font-bold font-sans text-lg md:text-2xl pt-4'>
                            Hi, I'm <a className='text-accent'>HM Farid Uddin</a> {' '}<br />
                            <span>
                                <Typewriter
                                    words={['A Full Stack Developer', 'React & Spring Boot']}
                                    loop={20}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}

                                />
                            </span>
                        </h1>
                        <p className='text-md md:text-lg pt-4'>
                            I am a passionate software developer with expertise in web development and a keen interest in building scalable and user-friendly applications. I have experience working with a variety of technologies and frameworks, and I thrive in collaborative team environments.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 pt-24">

                            <div className="div w-full">
                                <div className="div">
                                    <p className='text-sm md:text-md text-center md:text-left font-bold tracking-widest'>FIND WITH ME</p>
                                </div>
                                <div className="flex gap-2 pt-4 items-center md:items-start justify-center md:justify-start">
                                    <div className="hover:translate-y-0.5 duration-500 btn-outline btn-ghost shadow shadow-slate-300 rounded-md items-center border-collapse justify-center avatar w-9 h-9">
                                        <Link to="https://www.facebook.com/hmfarid.uddin?mibextid=ZbWKwL" target="_blank"><FiFacebook className='size-6' /></Link>
                                    </div>
                                    <div className="hover:translate-y-0.5 duration-500 btn-outline btn-ghost shadow shadow-slate-300 rounded-md items-center border-collapse justify-center avatar w-9 h-9">
                                        <Link to="https://www.linkedin.com/in/hmfariduddin/" target="_blank"> <FiLinkedin className=' size-6' /></Link>
                                    </div>
                                    <div className="hover:translate-y-0.5 duration-500 btn-outline btn-ghost shadow shadow-slate-300 rounded-md items-center border-collapse justify-center avatar w-9 h-9">
                                        <Link to="https://github.com/hmfarid88/" target="_blank">  <FiGithub className='size-6' /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="div pt-4 md:pt-0 md:px-3 w-full">
                                <div className="div">
                                    <p className='text-sm md:text-md font-bold text-center tracking-widest'>BEST SKILL ON</p>
                                </div>
                                <div className="flex gap-1 pt-4 items-center justify-center">
                                    <div className='flex flex-col gap-2'>
                                        <button className='btn btn-xs rounded-badge bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>React</button>
                                        <button className='btn btn-xs rounded-badge bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Java</button>
                                        <button className='btn btn-xs rounded-badge bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>MongoDB</button>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <button className='btn btn-xs rounded-badge bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Next.js</button>
                                        <button className='btn btn-xs rounded-badge bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Spring Boot</button>
                                        <button className='btn btn-xs rounded-badge bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>MySQL</button>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <button className='btn btn-xs rounded-badge bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Typescript</button>
                                        <button className='btn btn-xs rounded-badge bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>TaiwindCSS</button>
                                        <button className='btn btn-xs rounded-badge bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>GitHub</button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="pt-24 order-first md:order-last">
                        <div className="shadow-2xl shadow-slate-500  h-64 w-64 md:h-96 md:w-96 hover:scale-105 duration-500 relative">
                            <img className='absolute inset-x-0 bottom-0' alt='HM Farid Uddin' src='/images/farid_portfolio_1.png' />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero