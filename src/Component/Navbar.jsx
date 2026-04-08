import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-5 border-b border-[#E2DED6] mb-14">
      <div className="text-[15px] font-extrabold tracking-wide">YOUR NAME</div>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-2">
        <a
          href="#projects"
          className="text-[13px] font-medium text-[#555550] px-4 py-2 rounded-full hover:bg-white hover:border hover:border-[#E2DED6] transition-all"
        >
          Projects
        </a>
        <a
          href="#about"
          className="text-[13px] font-medium text-[#555550] px-4 py-2 rounded-full hover:bg-white hover:border hover:border-[#E2DED6] transition-all"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-[13px] font-medium text-[#555550] px-4 py-2 rounded-full hover:bg-white hover:border hover:border-[#E2DED6] transition-all"
        >
          Contact
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] font-bold text-white bg-[#1B6FE8] px-4 py-2 rounded-full hover:bg-blue-700 transition-all"
        >
          Download Resume
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-[#0D0D0D]"
        onClick={() => setOpen(!open)}
      >
        {open ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-[72px] left-0 right-0 bg-[#F7F4EE] border-b border-[#E2DED6] flex flex-col px-7 py-4 gap-3 z-50 md:hidden">
          <a
            href="#projects"
            onClick={() => setOpen(false)}
            className="text-[14px] font-medium text-[#555550] py-2 border-b border-[#E2DED6]"
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="text-[14px] font-medium text-[#555550] py-2 border-b border-[#E2DED6]"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-[14px] font-medium text-[#555550] py-2 border-b border-[#E2DED6]"
          >
            Contact
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-bold text-white bg-[#1B6FE8] px-4 py-2 rounded-full text-center"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
