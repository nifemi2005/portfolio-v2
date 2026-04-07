export default function About() {
  return (
    <section className="py-12 border-t border-[#E2DED6]" id="about">
      <p className="text-[11px] font-extrabold tracking-[0.25em] uppercase text-[#0D0D0D] mb-6">
        About Me
      </p>
      <div className="bg-white border border-[#E2DED6] rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-full bg-[#C7D9F5] flex items-center justify-center shrink-0">
          <span className="text-[16px] font-extrabold text-[#1B6FE8]">YN</span>
        </div>
        {/* Content */}
        <div>
          <h3 className="text-[17px] font-extrabold text-[#0D0D0D]">Oluwanifemi Temenu</h3>
          <p className="text-[11px] font-bold tracking-widest text-[#1B6FE8] uppercase mt-0.5 mb-4">
            Frontend Developer
          </p>
          <p className="text-[13px] text-[#555550] leading-relaxed max-w-[560px]">
            A dedicated Frontend Developer with a profound passion for clean code and creating
            user-centric digital experiences. My core focus lies in modern web standards,
            performance optimization, responsive design, and ensuring full web accessibility
            for all users. I enjoy collaborating on complex challenges to deliver elegant solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
