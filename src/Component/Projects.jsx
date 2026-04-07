import tedxosogbo from '../assets/tedxosogbo.png'
import ecommerce from '../assets/ecommerce_charts.png'

const projects = [
  {
    id: "01",
    featured: true,
    initials: <img src={tedxosogbo} alt="tedxosogbo" className='rounded-2xl border border-black'/>,
    name: "TedXOsogbo",
    desc: "Built the official website for TEDxOsogbo — an independently organized TED event in Osogbo, Nigeria, connecting speakers and ideas with the local community.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "https://tedxosogbo.netlify.app/",
  },
  {
    id: "02",
    featured: false,
    initials: "EC",
    name: "Job Board Platform",
    desc: "Demo of a real job board platform to link employers to their potential employees.",
    tags: ["Javascript", "Tailwind"],
    link: "https://jobboarddemo101.netlify.app/",
  },
  {
    id: "03",
    featured: false,
    initials: <img src={ecommerce} alt="tedxosogbo" className='rounded-2xl border border-black'/>,
    name: "Ecommerce Sales Analysis",
    desc: "A Python data analysis project that explores e-commerce sales data to uncover business insights through data cleaning, metric calculation, visualizations, and a written report.",
    tags: ["NUMPY", "MATPLTLIB"],
    link: "https://github.com/nifemi2005/ecommerce-sales-analysis",
  },
  {
    id: "04",
    featured: true,
    initials: "AC",
    name: "Accessibility Component Library",
    desc: "A reusable, accessibility-first component library built for cross-project consistency and WCAG compliance.",
    tags: ["React", "Storybook", "WCAG"],
    link: "#",
    reversed: true,
  },
];

function Tag({ label }) {
  return (
    <span className="text-[11px] font-medium text-[#555550] border border-[#E2DED6] rounded-full px-3 py-1">
      {label}
    </span>
  );
}

function ImagePlaceholder({ initials }) {
  return (
    <div className="bg-[#EAF0FB] rounded-xl flex items-center justify-center h-full min-h-[160px]">
      <span className="text-[36px] font-extrabold text-[#B8C9E8]">{initials}</span>
    </div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const regular = projects.filter((p) => !p.featured);

  return (
    <section className="py-12 border-t border-[#E2DED6]" id="projects">
      <p className="text-[11px] font-extrabold tracking-[0.25em] uppercase text-[#0D0D0D] mb-6">
        Selected Projects
      </p>

      <div className="flex flex-col gap-4">
        {/* Featured top */}
        <div className="bg-white border border-[#E2DED6] rounded-2xl p-6 flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <ImagePlaceholder initials={featured[0].initials} />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center gap-3">
            <span className="text-[11px] font-bold tracking-widest text-[#888882] uppercase">
              {featured[0].id} — Featured
            </span>
            <h3 className="text-[20px] font-extrabold">{featured[0].name}</h3>
            <p className="text-[13px] text-[#555550] leading-relaxed">{featured[0].desc}</p>
            <div className="flex flex-wrap gap-2">
              {featured[0].tags.map((t) => <Tag key={t} label={t} />)}
            </div>
            <a href={featured[0].link} target='_blank' className="text-[13px] font-bold text-[#1B6FE8] hover:underline mt-1">
              View project →
            </a>
          </div>
        </div>

        {/* Two regular cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {regular.map((project) => (
            <div key={project.id} className="bg-white border border-[#E2DED6] rounded-2xl p-6 flex flex-col gap-4">
              <ImagePlaceholder initials={project.initials} />
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-bold tracking-widest text-[#888882] uppercase">
                  {project.id}
                </span>
                <h3 className="text-[17px] font-extrabold">{project.name}</h3>
                <p className="text-[13px] text-[#555550] leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => <Tag key={t} label={t} />)}
                </div>
                <a href={project.link} className="text-[13px] font-bold text-[#1B6FE8] hover:underline">
                  View →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Featured bottom (reversed) */}
        <div className="bg-white border border-[#E2DED6] rounded-2xl p-6 flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2 flex flex-col justify-center gap-3">
            <span className="text-[11px] font-bold tracking-widest text-[#888882] uppercase">
              {featured[1].id}
            </span>
            <h3 className="text-[20px] font-extrabold">{featured[1].name}</h3>
            <p className="text-[13px] text-[#555550] leading-relaxed">{featured[1].desc}</p>
            <div className="flex flex-wrap gap-2">
              {featured[1].tags.map((t) => <Tag key={t} label={t} />)}
            </div>
            <a href={featured[1].link} className="text-[13px] font-bold text-[#1B6FE8] hover:underline mt-1">
              View project →
            </a>
          </div>
          <div className="md:w-1/2">
            <ImagePlaceholder initials={featured[1].initials} />
          </div>
        </div>
      </div>
    </section>
  );
}
