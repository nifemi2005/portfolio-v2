import tedxosogbo from '../assets/tedxosogbo.png'
import hawkeye from '../assets/hawkeye.png'
import invoice from '../assets/invoice.png'
import crappo from '../assets/crappo.png'
import metabnb from '../assets/metabnb.png'
import pwa from '../assets/pwa.png'
import summarizer from '../assets/summarizer.png'

export const projects = [
  {
    id: "01",
    featured: true,
    image: tedxosogbo,
    alt: "tedxosogbo",
    name: "TedXOsogbo",
    desc: "Collaborated to build the official website for TEDxOsogbo — an independently organized TED event in Osogbo, Nigeria, connecting speakers and ideas with the local community.",
    tags: ["React", "TypeScript", "Tailwind", "SEO optimization", "Next.js"],
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
    link: "https://invoicetracker01.netlify.app/",
  },
  {
    id: "03",
    featured: true,
    image: hawkeye,
    alt: "hawkeye",
    name: "HawkEye",
    desc: "A real-time monitoring dashboard that streams live service metrics via WebSocket. Features animated line, bar, and area charts, a virtualized activity feed, and interactive controls including pause/resume, time-range filtering, and per-service data toggling.",
    tags: ["Vue 3", "TypeScript", "ECharts", "Pinia", "Tailwind CSS"],
    link: "https://hawkeyedemo.netlify.app/",
  },
  {
    id: "04",
    featured: false,
    image: crappo,
    alt: "crappo",
    name: "CRAPPO",
    desc: "A reusable, accessibility-first component library built for cross-project consistency and WCAG compliance.",
    tags: ["React", "Tailwind"],
    link: "https://crappo-01.netlify.app/",
    reversed: true,
  },
  {
    id: "05",
    featured: false,
    image: metabnb,
    alt: "metabnb",
    name: "METABNB",
    desc: "An Airbnb-inspired property rental platform with browsable listings, detailed property pages, and an intuitive booking interface — built to replicate the core rental discovery experience.",
    tags: ["React", "Tailwind"],
    link: "https://task-metabnb.netlify.app/",
  },
  {
    id: "06",
    featured: false,
    image: pwa,
    alt: "tracker",
    name: "Habit Tracker PWA",
    desc: "A Progressive Web App for building and maintaining daily habits. Installable on any device, works offline, and tracks streaks with a clean visual dashboard.",
    tags: ["TypeScript", "Tailwind"],
    link: "https://pwa-habit-tracker.netlify.app/",
  },
  {
    id: "07",
    featured: false,
    image: summarizer,
    alt: "Summarizer",
    name: "AI Page Summarizer",
    desc: "Chrome extension (Manifest V3) that extracts content from any webpage and returns a structured AI summary with key insights and estimated reading time.",
    tags: ["TypeScript", "Tailwind", "Claude API"],
    link: "https://github.com/nifemi2005/AI-summarizer-extension",
  },
];
