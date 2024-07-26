import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import CTA from './CTA'

const Navbar = () => {
  return (
    <div>
      <div className="bg-white py-3 shadow fixed top-0 w-full z-40">
        <div className="max-w-7xl lg:max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-8">
              <Logo />
              <Menu />
            </div>
            <div className="hidden md:flex">
              <div className="flex justify-center items-center gap-4">
                <Link href="#">
                  <button className="py-2.5 animate__animated animate__slideInDown px-4 text-md font-bold text-[#4F7483] border border-[#4F7483] hover:text-white hover:bg-[#1523dc] hover:border-[#1523dc] transition-all rounded-full flex justify-center items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>+212707029991</span>
                  </button>
                </Link>
                <Link href="#">
                  <button
                    className="py-2.5 animate__animated animate__slideInRight px-4 text-md font-bold bg-[#1523dc] text-white border border-[#1523dc] rounded-full"
                    id="cta-button"
                  >
                    <span>Commencer ma demande</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('scroll', function() {
              const button = document.getElementById('cta-button');
              if (window.scrollY > 50) {
                button.classList.add('scrolled');
              } else {
                button.classList.remove('scrolled');
              }
            });
          `,
        }}
      />
    </div>
  )
}

export default Navbar
