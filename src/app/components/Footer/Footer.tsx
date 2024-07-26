import React from "react"
import Band from "./Band"
import Link from "next/link"
import { FaAngleRight, FaFacebook, FaFacebookSquare, FaTwitter, FaTwitterSquare } from "react-icons/fa"
import { Open_Sans } from "next/font/google" 
import { MdPhone } from "react-icons/md"

const open_sans = Open_Sans({ subsets: ["latin"], weight: "500" })

const Footer = () => {
  return (
    <div>
        <Band />
        <div className="py-10 bg-[#283136] pb-5">
            <div className="max-w-7xl lg:max-w-6xl mx-auto px-4">
                <div className="lg:flex gap-10">
                    <div className="lg:w-3/12">
                    <Link href="/">
                        <img
                            src="https://raccoelec.fr/wp-content/uploads/2024/06/template-2-1-1024x164.png"
                            alt="Logo"
                            className="w-[200px] mb-5"
                        />
                    </Link>
                    <p className="text-white text-sm mb-1">Raccoelec est un portail d&#39;informations légales et financières sur les entreprises françaises inscrites au registre du commerce et des sociétés. Consultez les bilans, les dirigeants et les données publiques des entreprises en toute simplicité.</p>
                    </div>
                    <div className="lg:w-2/12">
                        <ul className="space-y-4">
                            <li className={`${open_sans.className} text-white text-[13px] uppercase hover:text-[#18a974] transition-all`}><Link href="/"><FaAngleRight className="text-[#18a974] inline-block" /> Home</Link></li>
                            <li className={`${open_sans.className} text-white text-[13px] uppercase hover:text-[#18a974] transition-all`}><Link href="/"><FaAngleRight className="text-[#18a974] inline-block" /> Contact From</Link></li>
                            <li className={`${open_sans.className} text-white text-[13px] uppercase hover:text-[#18a974] transition-all`}><Link href="/"><FaAngleRight className="text-[#18a974] inline-block" /> Video Widgets</Link></li>
                            <li className={`${open_sans.className} text-white text-[13px] uppercase hover:text-[#18a974] transition-all`}><Link href="/"><FaAngleRight className="text-[#18a974] inline-block" /> Home</Link></li>
                            <li className={`${open_sans.className} text-white text-[13px] uppercase hover:text-[#18a974] transition-all`}><Link href="/"><FaAngleRight className="text-[#18a974] inline-block" /> Contact From</Link></li>
                            <li className={`${open_sans.className} text-white text-[13px] uppercase hover:text-[#18a974] transition-all`}><Link href="/"><FaAngleRight className="text-[#18a974] inline-block" /> Video Widgets</Link></li>
                        </ul>
                    </div>
                    <div className="lg:w-2/12">
                        <ul className="space-y-4">
                            <li className={`${open_sans.className} text-white text-[13px] uppercase hover:text-[#18a974] transition-all`}><Link href="/"><FaAngleRight className="text-[#18a974] inline-block" /> Home</Link></li>
                            <li className={`${open_sans.className} text-white text-[13px] uppercase hover:text-[#18a974] transition-all`}><Link href="/"><FaAngleRight className="text-[#18a974] inline-block" /> Contact From</Link></li>
                            <li className={`${open_sans.className} text-white text-[13px] uppercase hover:text-[#18a974] transition-all`}><Link href="/"><FaAngleRight className="text-[#18a974] inline-block" /> Video Widgets</Link></li>
                            <li className={`${open_sans.className} text-white text-[13px] uppercase hover:text-[#18a974] transition-all`}><Link href="/"><FaAngleRight className="text-[#18a974] inline-block" /> Home</Link></li>
                            <li className={`${open_sans.className} text-white text-[13px] uppercase hover:text-[#18a974] transition-all`}><Link href="/"><FaAngleRight className="text-[#18a974] inline-block" /> Contact From</Link></li>
                            <li className={`${open_sans.className} text-white text-[13px] uppercase hover:text-[#18a974] transition-all`}><Link href="/"><FaAngleRight className="text-[#18a974] inline-block" /> Video Widgets</Link></li>
                        </ul>
                    </div>
                    <div className="lg:w-2/12">
                        <ul className="space-y-4">
                            <li className={`${open_sans.className} text-white text-[13px] uppercase hover:text-[#18a974] transition-all`}><Link href="/"><FaAngleRight className="text-[#18a974] inline-block" /> Home</Link></li>
                            <li className={`${open_sans.className} text-white text-[13px] uppercase hover:text-[#18a974] transition-all`}><Link href="/"><FaAngleRight className="text-[#18a974] inline-block" /> Contact From</Link></li>
                            <li className={`${open_sans.className} text-white text-[13px] uppercase hover:text-[#18a974] transition-all`}><Link href="/"><FaAngleRight className="text-[#18a974] inline-block" /> Video Widgets</Link></li>
                            <li className={`${open_sans.className} text-white text-[13px] uppercase hover:text-[#18a974] transition-all`}><Link href="/"><FaAngleRight className="text-[#18a974] inline-block" /> Home</Link></li>
                            <li className={`${open_sans.className} text-white text-[13px] uppercase hover:text-[#18a974] transition-all`}><Link href="/"><FaAngleRight className="text-[#18a974] inline-block" /> Contact From</Link></li>
                            <li className={`${open_sans.className} text-white text-[13px] uppercase hover:text-[#18a974] transition-all`}><Link href="/"><FaAngleRight className="text-[#18a974] inline-block" /> Video Widgets</Link></li>
                        </ul>
                    </div>
                    <div className="lg:w-3/12">
                        <Link href="tel:+212707029991">
                            <button className={`${open_sans.className} bg-white rounded-full text-sm font-semibold py-2 px-5 flex justify-center items-center`}><MdPhone className="inline-block text-xl" /> <span>+212 7 07 02 99 91</span></button>
                        </Link>
                        <p className="text-gray-300 text-sm max-w-[150px] mt-8">Du lundi au vendredi De 9h à 19h</p>
                        <div className="mt-8 flex justify-start items-center gap-1">
                            <Link href="https://www.facebook.com/raccoelec">
                                <FaFacebookSquare className="text-white text-3xl cursor-pointer hover:text-[#18a974] transition-all" />
                            </Link>
                            <Link href="https://www.twitter.com/raccoelec">
                                <FaTwitterSquare className="text-white text-3xl cursor-pointer hover:text-[#18a974] transition-all" />
                            </Link>
                            <Link href="https://www.facebook.com/raccoelec">
                                <FaFacebookSquare className="text-white text-3xl cursor-pointer hover:text-[#18a974] transition-all" />
                            </Link>
                            <Link href="https://www.twitter.com/raccoelec">
                                <FaTwitterSquare className="text-white text-3xl cursor-pointer hover:text-[#18a974] transition-all" />
                            </Link>
                            <Link href="https://www.facebook.com/raccoelec">
                                <FaFacebookSquare className="text-white text-3xl cursor-pointer hover:text-[#18a974] transition-all" />
                            </Link>
                            <Link href="https://www.twitter.com/raccoelec">
                                <FaTwitterSquare className="text-white text-3xl cursor-pointer hover:text-[#18a974] transition-all" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-zinc-50 text-xs font-semibold uppercase text-center mt-12">© Copyright Raccoeleec 2024. by berros</div>
        </div>
    </div>
  )
}

export default Footer