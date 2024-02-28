import { FaRegHandshake } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react"
import toast from "react-hot-toast";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

const Contact = () => {
    const [userName, setUserName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [messages, setMessages] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [err, setErr] = useState("");

    const handleSubmit = () => {
        if (userName === "") {
            setErr("Please Enter your name");
        } else if (phone === "") {
            setErr("Please enter your phone number!");
        } else if (email === "") {
            setErr("Please enter your email!");
        } else if (subject === "") {
            setErr("Please enter the subject!");
        } else if (messages === "") {
            setErr("Please enter your messages!");
        } else {
            setLoading(true);
            axios
                .post("https://getform.io/f/1aK0rJbQ", {
                    name: userName,
                    phone: phone,
                    email: email,
                    subject: subject,
                    messages: messages,
                })
                .then((res) => {
                    if (res?.status === 200) {
                        toast.success("Message send succesfully!");
                        setErr("");
                        setUserName("");
                        setPhone("");
                        setEmail("");
                        setSubject("");
                        setMessages("");
                        setLoading(false);
                        setSuccess(true);
                    } else {
                        setLoading(true);
                    }
                });
        }
    };
    return (
        <section name="contact">
            <div className="container-2xl p-4 pt-5">
                <div className="flex items-center justify-center w-full">
                    <div className="divider divider-center tracking-widest text-xl md:text-2xl font-bold text-accent divider-accent w-96">CONTACT WITH ME</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 p-2">
                    <div className="card rounded-md shadow-lg shadow-slate-700 items-center w-full">
                        <div className="">
                            <FaRegHandshake className="size-16 md:size-36 hover:scale-110 duration-500" />
                        </div>
                        <div className="div">
                            <h1 className="text-2xl text-center md:text-left font-bold px-4 mt-2">HM Farid Uddin</h1>
                            <p className="text-md md:text-lg text-center md:text-left tracking-widest px-4">Software Engineer</p>
                            <p className="text-md md:text-lg text-center md:text-left tracking-widest pt-4 px-4">I am available for freelance work. Connect with me via and call in to my account.</p>
                            <p className="text-md md:text-lg text-center md:text-left px-4 pt-4">Phone : +8801676182277</p>
                            <p className="text-md md:text-lg text-center md:text-left px-4">Email : hmfariduddin189@gmail.com</p>
                        </div>
                        <div className="div p-2 pt-8">
                            <div className="div">
                                <p className='text-xs md:text-sm text-center font-bold tracking-widest'>FIND WITH ME</p>
                            </div>
                            <div className="flex gap-5 pt-4">
                                <div className="hover:translate-y-0.5 duration-500  btn-ghost shadow shadow-slate-300 rounded-md items-center border-collapse justify-center avatar w-8 h-8">
                                    <Link to="https://www.facebook.com/hmfarid.uddin?mibextid=ZbWKwL" target="_blank">  <FiFacebook className=' size-5' /></Link>
                                </div>
                                <div className="hover:translate-y-0.5 duration-500  btn-ghost shadow shadow-slate-300 rounded-md items-center border-collapse justify-center avatar w-8 h-8">
                                    <Link to="https://www.linkedin.com/in/hmfariduddin/" target="_blank"> <FiLinkedin className=' size-5' /></Link>
                                </div>
                                <div className="hover:translate-y-0.5 duration-500  btn-ghost shadow shadow-slate-300 rounded-md items-center border-collapse justify-center avatar w-8 h-8">
                                    <Link to="https://github.com/hmfarid88/" target="_blank"> <FiGithub className=' size-5' /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-lg shadow-slate-700  items-center w-full rounded-md p-2">

                        {!loading && success && (
                            <div className="h-full flex flex-col items-center justify-center">
                                <p className="text-xl text-accent font-semibold">
                                    {`Your messages sent successfully.Thank you!`}
                                </p>
                            </div>
                        )}
                        {loading ? (
                            <div className="flex flex-col items-center justify-center h-full">
                                <RotatingLines
                                    visible={true}
                                    height="96"
                                    width="96"
                                    color="grey"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    ariaLabel="rotating-lines-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                />
                                <p className="text-lg font-semibold text-white">
                                    Your messages is sending ...
                                </p>
                            </div>
                        ) : (
                            <div className="flex flex-col">
                                {err && (
                                    <div className="text-error rounded-lg bg-black m-2 p-4 font-semibold">
                                        <p>{err}</p>
                                    </div>
                                )}
                                <div className="flex w-80 p-2">
                                    <label className="w-full max-w-xl">
                                        <div className="label">
                                            <span className="label-text">YOUR NAME</span>
                                        </div>
                                        <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full" onChange={(e) => setUserName(e.target.value)} value={userName} />
                                    </label>
                                </div>
                                <div className="flex w-80 p-2">
                                    <label className="form-control w-full max-w-xl">
                                        <div className="label">
                                            <span className="label-text">PHONE NUMBER</span>
                                        </div>
                                        <input type="number" placeholder="Type here" className="input input-bordered input-accent w-full" onChange={(e) => setPhone(e.target.value)} value={phone} />
                                    </label>
                                </div>
                                <div className="flex w-80 p-2">
                                    <label className="form-control w-full max-w-xl">
                                        <div className="label">
                                            <span className="label-text">EMAIL</span>
                                        </div>
                                        <input type="email" placeholder="Type here" className="input input-bordered input-accent w-full" onChange={(e) => setEmail(e.target.value)} value={email} />
                                    </label>
                                </div>
                                <div className="flex w-80  p-2">
                                    <label className="form-control w-full max-w-xl">
                                        <div className="label">
                                            <span className="label-text">SUBJECT</span>
                                        </div>
                                        <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full" onChange={(e) => setSubject(e.target.value)} value={subject} />
                                    </label>
                                </div>
                                <div className="flex w-80  p-2">
                                    <label className="form-control w-full max-w-xl">
                                        <div className="label">
                                            <span className="label-text">MESSAGE</span>
                                        </div>
                                        <textarea className="textarea w-full textarea-accent" placeholder="Type here" onChange={(e) => setMessages(e.target.value)} value={messages}></textarea>
                                    </label>
                                </div>
                                <div className="flex w-80 items-center justify-center max-w-xl p-2 mt-4">
                                    <input type="submit" onClick={handleSubmit} className="btn btn-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md shadow-slate-500 tracking-widest" value={"SEND MESSAGE"} />
                                </div>
                            </div>
                        )}
                    </div>
                </div >
            </div>
        </section>
    )
}

export default Contact