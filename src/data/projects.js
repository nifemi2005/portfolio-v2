import tedxosogbo from '../assets/tedxosogbo.png'
import hawkeye from '../assets/hawkeye.png'
import invoice from '../assets/invoice.png'
import crappo from '../assets/crappo.png'

export const projects = [
  {
    id: "01",
    featured: true,
    image: tedxosogbo,
    alt: "tedxosogbo",
    name: "TedXOsogbo",
    desc: "Collaborated to build the official website for TEDxOsogbo — an independently organized TED event in Osogbo, Nigeria, connecting speakers and ideas with the local community.",
    tags: ["React", "TypeScript", "Tailwind", "SEO optimization"],
    link: "https://tedxosogbo.netlify.app/",
  },
  {
    id: "02",
    featured: false,
    image: invoice,
    alt: "invoice",
    name: "Invoice Application",
    desc: "A frontend invoice management application for creating, editing, and tracking invoices across their full lifecycle. Built with a clean dashboard that displays all invoices with real-time status updates across pending, draft, and paid states. Supports full CRUD operations with form validation, etc",
    tags: ["React", "Tailwind"],
    link: "https://jobboarddemo101.netlify.app/",
  },
  {
    id: "03",
    featured: false,
    image: hawkeye,
    alt: "hawkeye",
    name: "HawkEye",
    desc: "A real-time monitoring dashboard that streams live service metrics via WebSocket. Features animated line, bar, and area charts, a virtualized activity feed, and interactive controls including pause/resume, time-range filtering, and per-service data toggling.",
    tags: ["Vue 3", "TypeScript", "ECharts", "Pinia", "Tailwind CSS"],
    link: "https://hawkeyedemo.netlify.app/",
  },
  {
    id: "04",
    featured: true,
    image: crappo,
    alt: "crappo",
    name: "CRAPPO",
    desc: "A reusable, accessibility-first component library built for cross-project consistency and WCAG compliance.",
    tags: ["React", "Tailwind"],
    link: "https://crappo-01.netlify.app/",
    reversed: true,
  },
];
