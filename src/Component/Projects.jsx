import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

function Tag({ label }) {
  return (
    <span className="text-[11px] font-medium text-[#555550] border border-[#E2DED6] rounded-full px-3 py-1">
      {label}
    </span>
  );
}

function ProjectImage({ image, alt }) {
  return (
    <div className="rounded-xl flex items-center justify-center h-full min-h-[160px]">
      <img src={image} alt={alt} className="rounded-2xl border border-[#555550] md:h-[220px] w-full object-cover" />
    </div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-12 border-t border-[#E2DED6]" id="projects">
      <p className="text-[11px] font-extrabold tracking-[0.25em] uppercase text-[#0D0D0D] mb-6">
        Selected Projects
      </p>

      <div className="flex flex-col gap-4">
        {/* Featured top */}
        <div className="bg-white border border-[#E2DED6] rounded-2xl p-6 flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <ProjectImage image={featured[0].image} alt={featured[0].alt} />
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
            <a href={featured[0].link} target="_blank" rel="noopener noreferrer" className="text-[13px] font-bold text-[#1B6FE8] hover:underline mt-1">
              View project →
            </a>
          </div>
        </div>

        {/* Featured bottom (reversed) */}
        <div className="bg-white border border-[#E2DED6] rounded-2xl p-6 flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2 flex flex-col justify-center gap-3">
            <span className="text-[11px] font-bold tracking-widest text-[#888882] uppercase">
              {featured[1].id} — Featured
            </span>
            <h3 className="text-[20px] font-extrabold">{featured[1].name}</h3>
            <p className="text-[13px] text-[#555550] leading-relaxed">{featured[1].desc}</p>
            <div className="flex flex-wrap gap-2">
              {featured[1].tags.map((t) => <Tag key={t} label={t} />)}
            </div>
            <a href={featured[1].link} target="_blank" rel="noopener noreferrer" className="text-[13px] font-bold text-[#1B6FE8] hover:underline mt-1">
              View project →
            </a>
          </div>
          <div className="md:w-1/2">
            <ProjectImage image={featured[1].image} alt={featured[1].alt} />
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/projects"
          className="text-[13px] font-bold text-[#0D0D0D] border border-[#0D0D0D] px-5 py-2.5 rounded-full hover:bg-[#0D0D0D] hover:text-white transition-all"
        >
          See all projects →
        </Link>
      </div>
    </section>
  );
}
