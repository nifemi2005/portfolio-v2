import { motion as Motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

export default function Footer() {
  return (
    <Motion.footer
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex justify-between items-center py-5 border-t border-[#E2DED6]"
    >
      <span className="text-[13px] font-extrabold tracking-wide">Oluwanifemi Temenu</span>
      <span className="text-[12px] text-[#888882]">copyright © 2026</span>
    </Motion.footer>
  );
}
