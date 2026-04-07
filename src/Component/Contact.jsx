import { SiGithub } from "react-icons/si";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const links = [
  {
    icon: <FaLinkedinIn size={16} />,
    label: "LinkedIn",
    value: "Oluwanifemi Temenu",
    href: "https://www.linkedin.com/in/oluwanifemi-temenu-031a92321/",
  },
  {
    icon: <SiGithub size={16} />,
    label: "GitHub",
    value: "github.com/nifemi2005",
    href: "https://github.com/nifemi2005",
  },
  {
    icon: <FaEnvelope size={16} />,
    label: "Email",
    value: "temenuoluwanifemi2005@gmail.com",
    href: "mailto:temenuoluwanifemi2005@gmail.com",
  },
];

export default function Contact() {
  return (
    <section className="bg-[#0D0D0D] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10 justify-between items-start my-12" id="contact">
      {/* Left */}
      <div>
        <h2 className="text-[36px] md:text-[48px] font-extrabold text-white leading-tight">
          Let's<br />collaborate
        </h2>
        <p className="text-[13px] text-[#888882] mt-3 max-w-[220px] leading-relaxed">
          Open to freelance projects, full-time roles, and interesting ideas.
        </p>
      </div>

      {/* Right: social links */}
      <div className="flex flex-col gap-3 w-full md:w-auto md:min-w-[260px]">
        {links.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-3 hover:border-[#444] transition-all group"
          >
            <div className="text-[#888882] group-hover:text-white transition-colors">
              {item.icon}
            </div>
            <div>
              <div className="text-[11px] text-[#555550] uppercase tracking-wider">{item.label}</div>
              <div className="text-[13px] font-medium text-white">{item.value}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
