import { SiReact, SiTailwindcss, SiGithub, SiGit, SiHtml5 } from "react-icons/si";
import { FaCss3Alt, FaPython } from "react-icons/fa";
import { FaR } from "react-icons/fa6";

const stack = [
  {
    icon: <SiReact size={22} className="text-[#61DAFB]" />,
    bg: "bg-[#E8F8FD]",
    name: "React",
    desc: "UI library",
  },
  {
    icon: <SiTailwindcss size={22} className="text-[#38BDF8]" />,
    bg: "bg-[#E8F6FD]",
    name: "Tailwind CSS",
    desc: "Styling",
  },
  {
    icon: <SiGithub size={22} className="text-[#0D0D0D]" />,
    bg: "bg-[#F0F0F0]",
    name: "GitHub",
    desc: "Version control",
  },
  {
    icon: <SiGit size={22} className="text-[#F05032]" />,
    bg: "bg-[#FEF0EE]",
    name: "Git",
    desc: "Source control",
  },
  {
    icon: <SiHtml5 size={22} className="text-[#E34F26]" />,
    bg: "bg-[#FEF0EE]",
    name: "HTML & CSS",
    desc: "Foundation",
  },
  {
    icon: <FaPython size={22} className="text-[#1572B6]" />,
    bg: "bg-[#EEF4FD]",
    name: "Python",
    desc: "Data Analysis",
  },
  {
    icon: <FaR size={22} className="text-[#0D0D0D]" />,
    bg: "bg-[#F0F0F0]",
    name: "R",
    desc: "Data Analysis",
  },
];

export default function Stack() {
  return (
    <section className="py-12 border-t border-[#E2DED6]" id="stack">
      <p className="text-[11px] font-extrabold tracking-[0.25em] uppercase text-[#0D0D0D] mb-6">
        Technical Stack
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {stack.map((item) => (
          <div
            key={item.name}
            className="bg-white border border-[#E2DED6] rounded-2xl p-5 flex flex-col gap-3"
          >
            <div className={`w-9 h-9 rounded-lg ${item.bg} flex items-center justify-center`}>
              {item.icon}
            </div>
            <div>
              <div className="text-[14px] font-bold text-[#0D0D0D]">{item.name}</div>
              <div className="text-[12px] text-[#888882]">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
