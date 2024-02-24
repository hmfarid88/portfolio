import { Typewriter } from 'react-simple-typewriter'
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";

const Hero = () => {
    return (
        <section name="hero">
            <div className="container-2xl pt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
                    <div className="px-4 md:px-24 order-last md:order-first">
                        <p className='text-md md:text-lg font-bold tracking-widest pt-4' >WELCOME TO MY WORLD</p>
                        <h1 className='font-bold font-sans text-lg md:text-4xl pt-4'>
                            Hi, I'm <a className='text-accent'>HM Farid Uddin</a> {' '}<br />
                            <span style={{ color: '#ffff' }}>
                                <Typewriter
                                    words={['A Full Stack Web Developer', 'React & Spring Boot']}
                                    loop={20}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}

                                />
                            </span>
                        </h1>
                        <p className='text-xl pt-4'>
                            I make elegantly professional web appplication and design user experience. If you want me to do any one of these for you, get in touch with me here.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:items-center pt-24">

                            <div className="div w-full">
                                <div className="div">
                                    <p className='text-md md:text-lg font-bold tracking-widest'>FIND WITH ME</p>
                                </div>
                                <div className="flex gap-5 pt-4">
                                    <div className="hover:translate-y-0.5 duration-500 btn-outline btn-ghost shadow shadow-slate-300 rounded-md items-center border-collapse justify-center avatar w-12 h-12">
                                        <FiFacebook className=' size-8' />
                                    </div>
                                    <div className="hover:translate-y-0.5 duration-500 btn-outline btn-ghost shadow shadow-slate-300 rounded-md items-center border-collapse justify-center avatar w-12 h-12">
                                        <FiLinkedin className=' size-8' />
                                    </div>
                                    <div className="hover:translate-y-0.5 duration-500 btn-outline btn-ghost shadow shadow-slate-300 rounded-md items-center border-collapse justify-center avatar w-12 h-12">
                                        <FiGithub className=' size-8' />
                                    </div>
                                </div>
                            </div>
                            <div className="div pt-4 md:pt-0 md:px-10 w-full">
                                <div className="div">
                                    <p className='text-md md:text-lg font-bold tracking-widest'>BEST SKILL ON</p>
                                </div>
                                <div className="flex gap-5 pt-4">
                                    <div className="hover:translate-y-0.5 duration-500 btn-outline btn-ghost shadow shadow-slate-300 rounded-md items-center border-collapse justify-center avatar w-12 h-12">
                                        <FaReact className='size-8' />
                                    </div>
                                    <div className="hover:translate-y-0.5 duration-500 btn-outline  btn-ghost shadow shadow-slate-300 rounded-md items-center border-collapse justify-center avatar w-12 h-12">
                                        <TbBrandNextjs className=' size-8' />
                                    </div>
                                    <div className="hover:translate-y-0.5 duration-500 btn-outline btn-ghost shadow shadow-slate-300 rounded-md items-center border-collapse justify-center avatar w-12 h-12">
                                        <BiLogoSpringBoot className=' size-8' />
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