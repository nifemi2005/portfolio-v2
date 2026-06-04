import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

function Tag({ label }) {
  return (
    <span className="text-[11px] font-medium text-[#555550] border border-[#E2DED6] rounded-full px-3 py-1">
      {label}
    </span>
  );
}

export default function ProjectsPage() {
  return (
    <section className="py-1">
      <Link
        to="/"
        className="text-[13px] font-medium text-[#555550] hover:text-[#0D0D0D] inline-flex items-center gap-1 mb-8"
      >
        ← Back to home
      </Link>

      <p className="text-[11px] font-extrabold tracking-[0.25em] uppercase text-[#0D0D0D] mb-6">
        All Projects
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white border border-[#E2DED6] rounded-2xl p-6 flex flex-col gap-4">
            <img
              src={project.image}
              alt={project.alt}
              className="rounded-2xl border border-[#555550] w-full object-cover h-[200px]"
            />
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-bold tracking-widest text-[#888882] uppercase">
                {project.id}{project.featured ? ' — Featured' : ''}
              </span>
              <h3 className="text-[17px] font-extrabold">{project.name}</h3>
              <p className="text-[13px] text-[#555550] leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => <Tag key={t} label={t} />)}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-bold text-[#1B6FE8] hover:underline"
              >
                View project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
