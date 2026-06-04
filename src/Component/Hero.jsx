import { FaGears } from "react-icons/fa6";
import { motion as Motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/motion";

const statVariant = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <Motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="pb-16"
      id="hero"
    >
      {/* Badge */}
      <Motion.div variants={fadeUp} className="inline-flex items-center gap-2 border border-[#E2DED6] rounded-full px-4 py-1.5 mb-3">
        <FaGears className="text-[#1B6FE8]" size={19} />
        <span className="text-[13px] text-[#555550]">From Figma to Production</span>
      </Motion.div>

      {/* Name block */}
      <Motion.div variants={fadeUp} className="mb-4">
        <span
          className="block font-extrabold leading-none pointer-events-none"
          style={{ fontSize: "clamp(60px, 12vw, 110px)", color: "#CDC7BC" }}
        >
          Temenu
        </span>
        <h1
          className="italic text-[#1B6FE8] leading-none"
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: "clamp(42px, 8vw, 76px)",
            marginTop: "-0.35em",
          }}
        >
          Oluwanifemi
        </h1>
      </Motion.div>

      <Motion.p variants={fadeUp} className="text-[11px] font-extrabold tracking-[0.25em] uppercase text-[#0D0D0D] mb-3">
        Building for the web
      </Motion.p>

      <Motion.div variants={fadeUp} className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left: description + buttons */}
        <div className="w-full md:w-[260px] shrink-0">
          <p className="text-[13px] text-[#555550] leading-relaxed mb-6">
            Crafting high performance, accessible, and elegant user interfaces
            for the modern web. Specialized in scalable web apps with seamless UX.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="#projects"
              className="text-[13px] font-bold text-white bg-[#0D0D0D] px-5 py-2.5 rounded-full hover:bg-[#333] transition-all"
            >
              View my work
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-bold text-[#0D0D0D] border border-[#0D0D0D] px-5 py-2.5 rounded-full hover:bg-[#0D0D0D] hover:text-white transition-all"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right: stats grid */}
        <Motion.div variants={staggerContainer} className="grid grid-cols-2 gap-3 flex-1">
          <Motion.div variants={statVariant} className="bg-[#F5C518] rounded-2xl p-5">
            <div className="text-[32px] font-extrabold leading-none">2+</div>
            <div className="text-[12px] mt-1">years experience</div>
          </Motion.div>
          <Motion.div variants={statVariant} className="bg-white border border-[#E2DED6] rounded-2xl p-5">
            <div className="text-[32px] font-extrabold leading-none">10+</div>
            <div className="text-[12px] text-[#555550] mt-1">Projects shipped</div>
          </Motion.div>
          <Motion.div variants={statVariant} className="bg-[#1B6FE8] text-white rounded-2xl p-5">
            <div className="text-[32px] font-extrabold leading-none">6+</div>
            <div className="text-[12px] opacity-75 mt-1">Skill Sets</div>
          </Motion.div>
          <Motion.div variants={statVariant} className="bg-[#ABEFC6] rounded-2xl p-5">
            <div className="text-[28px] font-extrabold text-[#067647] leading-none">Open</div>
            <div className="text-[12px] text-[#067647] mt-1">To opportunities</div>
          </Motion.div>
        </Motion.div>
      </Motion.div>
    </Motion.section>
  );
}
