import { FaRegHandshake } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
const Contact = () => {
    return (
        <section name="contact">
        <div className="container-2xl p-4">
            <div className="flex items-center justify-center w-full">
            <div className="divider divider-center tracking-widest text-xl md:text-2xl font-bold text-accent divider-accent w-96">CONTACT WITH ME</div>
      </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 p-2">
                <div className="card rounded-md shadow-lg shadow-slate-500 items-center w-full">
                    <div className="">
                        <FaRegHandshake className="size-16 md:size-36 hover:scale-110 duration-500" />
                    </div>
                    <div className="div">
                        <h1 className="text-2xl font-bold mx-2 mt-2">HM Farid Uddin</h1>
                        <p className="tracking-widest text-lg font-bold px-2">Software Engineer</p>
                        <p className="text-lg tracking-widest font-bold pt-4 px-2">I am available for freelance work. Connect with me via and call in to my account.</p>
                        <p className="text-lg px-2 pt-4">Phone : +8801676182277</p>
                        <p className="text-lg px-2">Email : hmfariduddin189@gmail.com</p>
                    </div>
                    <div className="div p-2 pt-8">
                            <div className="div">
                                <p className='text-xs md:text-sm tracking-widest'>FIND WITH ME</p>
                            </div>
                            <div className="flex gap-5 pt-4">
                                <div className="hover:translate-y-0.5 duration-500  btn-ghost shadow shadow-slate-300 rounded-md items-center border-collapse justify-center avatar w-8 h-8">
                                    <FiFacebook className=' size-5' />
                                </div>
                                <div className="hover:translate-y-0.5 duration-500  btn-ghost shadow shadow-slate-300 rounded-md items-center border-collapse justify-center avatar w-8 h-8">
                                    <FiLinkedin className=' size-5' />
                                </div>
                                <div className="hover:translate-y-0.5 duration-500  btn-ghost shadow shadow-slate-300 rounded-md items-center border-collapse justify-center avatar w-8 h-8">
                                    <FiGithub className=' size-5' />
                                </div>
                            </div>
                        </div>
                </div>
                <div className="card shadow-lg shadow-slate-500  items-center w-full rounded-md p-2">
                    <div className="flex w-80 p-2">
                        <label className="w-full max-w-xl">
                            <div className="label">
                                <span className="label-text">YOUR NAME</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full" />
                        </label>
                    </div>
                    <div className="flex w-80 p-2">
                        <label className="form-control w-full max-w-xl">
                            <div className="label">
                                <span className="label-text">PHONE NUMBER</span>
                            </div>
                            <input type="number" placeholder="Type here" className="input input-bordered input-accent w-full" />
                        </label>
                    </div>
                    <div className="flex w-80 p-2">
                        <label className="form-control w-full max-w-xl">
                            <div className="label">
                                <span className="label-text">EMAIL</span>
                            </div>
                            <input type="email" placeholder="Type here" className="input input-bordered input-accent w-full" />
                        </label>
                    </div>
                    <div className="flex w-80  p-2">
                        <label className="form-control w-full max-w-xl">
                            <div className="label">
                                <span className="label-text">SUBJECT</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full" />
                        </label>
                    </div>
                    <div className="flex w-80  p-2">
                        <label className="form-control w-full max-w-xl">
                            <div className="label">
                                <span className="label-text">MESSAGE</span>
                            </div>
                            <textarea className="textarea w-full textarea-accent" placeholder="Type here"></textarea>
                        </label>
                    </div>
                    <div className="flex w-80 items-center justify-center max-w-xl p-2 mt-4">
                        <input type="submit" className="btn btn-block btn-ghost text-accent shadow-md shadow-slate-500 tracking-widest" value={"SEND MESSAGE"} />
                    </div>
                </div>
            </div>
        </div >
        </section>
    )
}

export default Contact