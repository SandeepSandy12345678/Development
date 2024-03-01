import { useState } from 'react';
import BannerLayout from '../components/Common/BannerLayout';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
import { HiMail, HiUser } from 'react-icons/hi'
import { BsChatTextFill } from 'react-icons/bs'
import Fiverr_Icon from '../components/Fiverr_Icon';
import Footer from '../components/Footer';
import { Modal } from 'antd';
import { CONTACTS, DETAILS, SOCIAL_LINKS } from '../constants/constants';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <BannerLayout>
            <div className=" px-4 py-2">
                <div className="my-6 text-Snow flex flex-col gap-y-5">
                    <h1 className='text-lg font-bold'>Contact Information</h1>
                    <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
                        <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Country:</span>
                                <span className='text-LightGray md:text-sm'>{DETAILS.Residence}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>City:</span>
                                <span className='text-LightGray md:text-sm'>{DETAILS.City}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Company:</span>
                                <span className='text-LightGray md:text-sm'></span>
                            </div>
                        </div>
                        <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Email:</span>
                                <span className='text-LightGray text-sm'>{CONTACTS.EMAIL}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Linkedin:</span>
                                <span className='text-LightGray text-sm'>{SOCIAL_LINKS.LINKEDIN}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Phone:</span>
                                <span className='text-LightGray text-sm'>{CONTACTS.PHONE}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
                    <a className='hover:scale-125 ease-in-out duration-700' href="" target='_blank' rel="noreferrer"><HiMail /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href={`${SOCIAL_LINKS.GITHUB}`} target='_blank' rel="noreferrer"><FaGithub /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href={`${SOCIAL_LINKS.LINKEDIN}`} target='_blank' rel="noreferrer"><FaLinkedin /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href={`${SOCIAL_LINKS.TWITTER}`} target='_blank' rel="noreferrer"><FaTwitter /></a>
                    <a className='hover:scale-125 ease-in-out duration-700 hidden sm:block' href="" target='_blank' rel="noreferrer"><Fiverr_Icon /></a>
                    <a className='hover:scale-125 ease-in-out duration-700 text-2xl sm:text-4xl mt-1' href="#" target='_blank' rel="noreferrer"><SiUpwork /></a>
                </div>


                <div className="my-12 w-full h-auto text-Snow">
                    <h1 className='text-lg font-bold'>Get In Touch</h1>
                    <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
                        <div>
                            <form 
                                action="https://formspree.io/f/mjvnrlyq"
                                method="POST"
                            >
                                <div className="flex flex-col w-full">
                                    <div className="userIcon relative mb-6">
                                        <div
                                            id="icon"
                                            className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none"
                                        >
                                            <HiUser />
                                        </div>
                                        <input
                                            type="text"
                                            className="input_stylings"
                                            placeholder="Name"
                                            name="name"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col w-full">
                                    <div className="mailIcon relative mb-6">
                                        <div
                                            id="icon"
                                            className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none"
                                        >
                                            <HiMail />
                                        </div>
                                        <input
                                            type="text"
                                            className="input_stylings"
                                            placeholder="Email"
                                            name="_replyto" // Formspree uses this for the email field
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col w-full">
                                    <div className="textIcon relative mb-6">
                                        <div
                                            id="icon"
                                            className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none"
                                        >
                                            <BsChatTextFill />
                                        </div>
                                        <textarea
                                            rows={6}
                                            cols={50}
                                            className="input_stylings"
                                            placeholder="Message"
                                            name="message"
                                        />
                                    </div>
                                </div>

                                <div className="my-4">
                                    <button type="submit" className="button">
                                        SEND MESSAGE
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* success modal */}
            <Footer />
        </BannerLayout>

    )
}

export default Contact