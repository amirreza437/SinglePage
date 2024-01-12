import HModal from './../Components/HModal.js'
import microsoft from './../Assets/images/microsoft.png'
import bmw from './../Assets/images/bmw.png'
import crt from './../Assets/images/ctr.png'
import disney from './../Assets/images/disney.png'
import evernote from './../Assets/images/evernote.png'
import gates from './../Assets/images/gates.png'
import google from './../Assets/images/google.png'
import ie from './../Assets/images/ie.png'
import msnbc from './../Assets/images/msnbc.png'
import msr from './../Assets/images/msr.png'
import pulse from './../Assets/images/pulse.png'
import yahoo from './../Assets/images/yahoo.png'
import hamester from './../Assets/images/hamster.jpg'
import heroimage from './../Assets/images/heroimage.png'
import palm from './../Assets/images/palm.png'
import { useRef } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Login from '../Routes/Login.js'
import Free from '../Routes/Free.js'


function Page() {
    const homeRef = useRef()
    const featuredRef = useRef()
    const aboutRef = useRef()
    const contactRef = useRef()
    

    const style = {
        backgroundImage: `url(${heroimage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }

    const contactStyle = {
        backgroundImage:  `url(${palm})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }

    return (
        <>
            <div className='h-screen' style={style} ref={homeRef} id='home'>
                {/* Header */}
                <div className="bg-indigo-800 rounded-lg mr-32 ml-32 translate-y-8">
                    <div className="grid grid-cols-3 text-white p-7 items-center">
                        <div className="flex items-center">
                            <h2 className="text-4xl font-bold order-1 ml-1"><a>Lorem</a></h2>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1 text-rose-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                            </svg>
                        </div>
                        <ul className="flex space-x-6">
                            <li className="hover:text-rose-400 hover:underline hover:decoration-rose-400 hover:underline-offset-4"><a className="cursor-pointer" onClick={() => {
                                homeRef.current?.scrollIntoView({
                                    behavior: 'smooth'
                                })
                            }}>Home</a></li>
                            <li className="hover:text-rose-400 hover:underline hover:decoration-rose-400 hover:underline-offset-4"><a className="cursor-pointer" onClick={() => {
                                featuredRef.current?.scrollIntoView({
                                    behavior: 'smooth'
                                })
                            }}>Featured Work</a></li>
                            <li className="hover:text-rose-400 hover:underline hover:decoration-rose-400 hover:underline-offset-4"><a className="cursor-pointer" onClick={() => {
                                aboutRef.current?.scrollIntoView({
                                    behavior: 'smooth'
                                })
                            }}>About us</a></li>
                            <li className="hover:text-rose-400 hover:underline hover:decoration-rose-400 hover:underline-offset-4"><a className="cursor-pointer" onClick={() => {
                                contactRef.current?.scrollIntoView({
                                    behavior: 'smooth'
                                })
                            }}>Contact</a></li>
                        </ul>
                        <div>
                            <ul className="flex space-x-6 justify-end">
                                <li>
                                    <Link to="/free" className="bg-rose-400 p-2 rounded-lg hover:bg-white hover:text-rose-400 hover:scale-105 duration-150 ease-in-out">Try Lorem Free!</Link>
                                </li>
                                <li>
                                    <Link to="/login" className="bg-indigo-400 p-2 rounded-lg hover:bg-white hover:text-indigo-400 hover:scale-105 duration-150 ease-in-out">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Hero Section */}
                <div className='ml-80 mt-60 text-white'>
                    <p className='text-8xl'>Ui Design</p>
                    <p className='text-lg font-extralight ml-10'>Design your webApp with us</p>
                    <button className='text-rose-400 outline outline-rose-400 outline-offset-4 hover:bg-rose-400 hover:text-white duration-300 ease-in-out rounded-lg ml-28 mt-4 px-1'>Get Started</button>
                </div>
            </div>
            <div className="mt-10">
                {/* Featured Work Section */}
                <div className='mt-10' ref={featuredRef} id='featured'>
                    <div className='w-[170px]'>
                        <div className='text-white bg-black text-center py-3'>FEATURED WORK</div>
                    </div>
                </div>
                <div className='text-center mt-10'>
                    <h2 className='text-5xl font-semibold'>Lorem UI Design Tool</h2>
                    <p className='font-light mt-4 mb-5'>We would be honored to work with the greatest devs in the world</p>
                    <HModal/>
                </div>
                <div className='bg-zinc-800 text-white text-center mt-28 py-14'>
                    <h3 className='text-3xl font-light'>OUR CLIENTS</h3>
                    <div className='grid grid-cols-6 ml-40 mr-40 mt-20 gap-2'>
                    <img className='hover:scale-110 duration-150 ease-in-out' src={microsoft} />
                    <img className='hover:scale-110 duration-150 ease-in-out' src={bmw} />
                    <img className='hover:scale-110 duration-150 ease-in-out' src={crt} />
                    <img className='hover:scale-110 duration-150 ease-in-out' src={disney} />
                    <img className='hover:scale-110 duration-150 ease-in-out' src={evernote} />
                    <img className='hover:scale-110 duration-150 ease-in-out' src={gates} />
                    <img className='hover:scale-110 duration-150 ease-in-out' src={google} />
                    <img className='hover:scale-110 duration-150 ease-in-out' src={ie} />
                    <img className='hover:scale-110 duration-150 ease-in-out' src={msnbc} />
                    <img className='hover:scale-110 duration-150 ease-in-out' src={msr} />
                    <img className='hover:scale-110 duration-150 ease-in-out' src={pulse} />
                    <img className='hover:scale-110 duration-150 ease-in-out' src={yahoo} />
                    </div>
                </div>
                <div className='mt-10' ref={aboutRef} id='about'>
                    {/* About Us Section */}
                    <div className='w-[170px]'>
                        <div className='text-white bg-black text-center py-3'>ABOUT US</div>
                    </div>
                    <div className='text-center mx-40 mt-10'>
                        <p className='text-5xl'><span className='font-extrabold text-rose-400'>Lorem Ui</span> is an award winning design and development studio in Tehran.</p>
                    </div>
                    <div className='grid grid-cols-4 divide-solid divide-x gap-x-2 divide-black mx-40 mt-20'>
                        <div>
                            <div className='space-y-6'>
                                <h4 className='font-bold'>FOUNDED</h4>
                                <span className='text-6xl'>2008</span>
                                <p className='font-light'>We can't believe it either. Where does the time go?</p>
                            </div>
                        </div>
                        <div>
                            <div className='ml-4 space-y-6'>
                                <h4 className='font-bold'>SUCCESSFUL PROJECTS</h4>
                                <span className='text-6xl'>68</span>
                                <p className='font-light'>And these are just the big ones! Add a dozen or so open source projects and countless smaller jobs.</p>
                            </div>
                        </div>
                        <div>
                            <div className='ml-4 space-y-6'>
                                <h4 className='font-bold'>VIEWS</h4>
                                <span className='text-6xl'>90M+</span>
                                <p className='font-light'>That's what the analytics tell us... our projects have delighted over 90 million people!</p>
                            </div>
                        </div>
                        <div>
                            <div className='ml-4 space-y-6'>
                                <h4 className='font-bold'>TE  STING DEVICES</h4>
                                <span className='text-6xl'>8</span>
                                <p className='font-light'>That's the number of testing devices on my desk right now. We're pretty thorough.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center text-7xl font-extrabold mt-28'>
                        FAQ
                    </div>
                    <div className='mx-64 mt-20'>
                        <ul className='space-y-14'>
                            <li className='space-y-2'>
                                <h4 className='text-2xl font-bold'>What are your areas of expertise?</h4>
                                <p className='text-xl font-light'>Web (frontend, server, infrastructure, you name it), app development, mobile and unique form factor, marketing analytics and all things related to user experience and design. That's a big list. We've built a lot of expertise.</p>
                            </li>
                            <li className='space-y-2'>
                                <h4 className='text-2xl font-bold'>What is the right project size for you?</h4>
                                <p className='text-xl font-light'>Great question but tough answer. We're a modestly sized studio, but comfortable tackling very big projects. We do it all the time. On the other hand, some of our favorite projects have been smaller. Let's chat and see if we're a fit!</p>
                            </li>
                            <li className='space-y-2'>
                                <h4 className='text-2xl font-bold'>Are you taking on new projects right now?</h4>
                                <p className='text-xl font-light'>Yes! And we'd love to hear from you.</p>
                            </li>
                            <li className='space-y-2'>
                                <h4 className='text-2xl font-bold'>What now? How much is this going to cost? When can you start?</h4>
                                <p className='text-xl font-light'>Once we know a little more about the project, we can give you a quick estimate. We're easy to work with, up front about cost and we're proud of an impeccable history for staying within budget. The first step is to get in touch.</p>
                            </li>
                        </ul>
                    </div>
                    {/* Contact Section */}
                    <div style={contactStyle} className='bg-rose-400 pt-2 pb-32 mt-20'>
                        <div className='mt-10'>
                            <div className='w-[170px]' ref={contactRef} id='contact'>
                                <div className='text-white bg-black text-center py-3'>CONTACT</div>
                            </div>
                            <div className='flex justify-center items-center mt-10'>
                                <h3 className='text-white text-6xl font-bold'>Say Hello</h3>
                            </div>
                            <div className='flex justify-center'>
                                <form className='bg-zinc-800 w-2/4 rounded-lg grid place-items-center gap-4 mt-20 p-5'>
                                    <h3 className='text-white text-3xl font-bold'>Contact Form</h3>
                                    <p className='text-white text-sm font-light'>We would appreiciate your comments and views</p>
                                    <input className='mt-10 border p-2 w-1/3 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-rose-400 focus:ring-rose-400 focus:ring-2' placeholder='From:'/>
                                    <input className='border p-2 w-1/3 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-rose-400 focus:ring-rose-400 focus:ring-2' placeholder='Email:'/>
                                    <textarea className='p-3 rounded-lg resize-none placeholder-slate-400 focus:outline-none focus:border-rose-400 focus:ring-rose-400 focus:ring-2' placeholder='Any Thoughts? ' rows='10' cols='50'></textarea>
                                    <button className='text-white underline decoration-white underline-offset-4 hover:underline-offset-8 duration-150 text-lg'>Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* Footer */}
                    <div className='bg-zinc-800 text-white'>
                        <div className=' grid grid-cols-3 gap-10 mx-52'>
                            <ul className='mt-10'>
                                <li>
                                    <h5 className='font-bold text-sm'>CONTACT</h5>
                                    <a className='font-extralight text-rose-400 hover:text-indigo-400' href='mailto:amirrezarezaeijavidan@gmail.com'>amirrezarezaeijavidan@gmail.com</a>
                                    <p className='text-zinc-300 font-medium'>We're located in sunny <span className='text-rose-400'>Tehran, Iran</span>. Let us know if you're in town!</p>
                                </li>
                            </ul>
                            <ul className='mt-10'>
                                <li>
                                    <h5 className='font-bold text-sm'>FRIENDS & FAMILY</h5>
                                    <p className='text-zinc-300 font-medium'>The core Pixel Lab team is Robby Ingebretsen, Joel Fillmore, Kevin Moore and Adam Kinney.</p>
                                    <p className='text-zinc-300 font-medium mt-2'>Also, a big thanks to Fernanda Frick for her help with the illustrations on this page (she's the best).</p>
                                </li>
                            </ul>
                            <ul className='mt-10'>
                                <li>
                                    <h5 className='font-bold text-sm'>ELSEWHERE</h5>
                                    <p className='flex space-x-3 mt-2'>
                                        <a href='#'>
                                            <svg class="h-8 w-8 text-rose-400 hover:text-indigo-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                                        </a>
                                        <a href='#'>
                                            <svg class="h-8 w-8 text-rose-400 hover:text-indigo-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                                        </a>
                                        <a href='#'>
                                            <svg class="h-8 w-8 text-rose-400 hover:text-indigo-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                        </a>
                                        <a href='#'>
                                            <svg class="h-8 w-8 text-rose-400 hover:text-indigo-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                                        </a>
                                    </p>
                                </li>
                                <li className='mt-2'>
                                    <h5 className='font-bold text-sm'>PRESS</h5>
                                    <p className='text-zinc-300 font-medium mt-2'>Press and media inquiries? Please contact us or download a high resolution logo.</p>
                                </li>
                                <li className='mt-2'>
                                    <h5 className='font-bold text-sm'>LEGAL</h5>
                                    <p className='text-zinc-300 font-medium mt-2'>Copyright © 2023 Lorem UI, All rights reserved</p>
                                </li>
                            </ul>
                            <div>
                                <img src={hamester} className='w-28 -translate-y-32'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Page;