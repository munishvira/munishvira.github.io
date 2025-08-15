import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Phone, Download } from 'lucide-react'

const profile = {
  name: "Munish Vira",
  title: "Senior Software Engineer – React Native • React • Next.js",
  location: "India (Remote)",
  email: "munishvira1999@gmail.com",
  phone: "+91-8691011931",
  links: {
    github: "https://github.com/munishvira",
    linkedin: "https://www.linkedin.com/in/munish-vira/",
    portfolio: "https://munishvira.github.io/",
    resume: "./resume.pdf",
  },
  summary:
    "Senior Software Engineer with 4+ years in React Native, React, and Next.js. Proven track record of taking apps from 0 → 1,000+ concurrent users, improving performance by 40%, leading small teams, and shipping monetized features (IAP) with high reliability.",
  skills: {
    Languages: ["JavaScript", "TypeScript", "Python"],
    Frontend: ["React Native (New Architecture)", "React", "Next.js", "Redux", "Redux-Saga", "Redux Toolkit"],
    Backend: ["Node.js", "Express.js", "REST APIs"],
    Mobile: ["In‑App Purchases", "Animations & Micro‑interactions"],
    State: ["Redux", "Context API", "Redux-Saga", "Redux Toolkit"],
    Tools: ["Git", "Postman", "Xcode", "Android Studio", "SonarQube"],
    Analytics: ["Sentry", "Mixpanel", "OneSignal", "MoEngage"],
    Cloud: ["Firebase", "CI/CD", "App Store Deployment"],
    DB: ["MySQL", "Firebase Firestore"],
    PM: ["Agile", "Jira", "Trello"],
  },
  experience: [
    {
      role: "Senior Software Engineer",
      company: "IntellectHQ (Remote)",
      period: "Apr 2025 – Aug 2025",
      bullets: [
        "Refactored a large RN app; reduced code complexity by ~30% and improved maintainability.",
        "Migrated to New Architecture, yielding ~25% performance gains.",
        "Implemented in‑app purchases to enable premium subscription monetization.",
        "Integrated Sentry, Mixpanel, OneSignal, MoEngage; reduced crash rate by ~60%.",
        "Built smooth animations and micro‑interactions that boosted engagement.",
      ],
    },
    {
      role: "Software Development Engineer",
      company: "Invictus (Remote)",
      period: "Jun 2021 – Apr 2025",
      bullets: [
        "Architected and built a cross‑platform mobile app using React Native, Next.js, and Node.js.",
        "Scaled from 0 → 1,000+ monthly concurrent users in ~18 months.",
        "Increased engagement by ~35% via advanced UI/UX and micro‑interactions.",
        "Improved performance by ~40% with API optimization and intelligent state/caching.",
        "Led a team of 3 engineers; mentored juniors and set code‑quality practices.",
      ],
    },
    {
      role: "React Native Developer (Intern)",
      company: "Expertrons",
      period: "Dec 2020 – Apr 2021",
      bullets: [
        "Built a TikTok‑style career guidance app with React Native + Firebase.",
        "Implemented Redux‑Saga for complex async flows.",
        "Shipped real‑time push notifications that increased retention by ~45%.",
      ],
    },
  ],
  education: {
    degree: "B.E. in Computer Engineering",
    school: "K.J. Somaiya Institute",
    period: "2017 – 2021",
    gpa: "GPA: 8.04 / 10",
  },
  achievements: [
    "Deep Blue Season 4 Finalist",
    "Team Lead at Invictus (mentored 3 engineers)",
    "Final Year Project Leader",
  ],
  publications: [
    {
      title: "Novel Approach to Detect Future Arising Knee Problems",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3868889",
      journal: "International Research Journal of Engineering and Technology",
    },
  ],
};

const projects = [
  { title: "Food Ordering app", description: "A food ordering app similar to Swiggy for individual retailers.", created: "2020-09-09", tech: ["JavaScript", "Java"], image: "/images/projects/project1.jpg", link:"https://github.com/munishvira/React-Native-Food-Ordering-app" },
  { title: "Tour management system", description: "Improve tourism management efficiency with a standardized solution.", created: "2020-09-09", tech: ["HTML", "CSS", "PHP"], image: "/images/projects/project2.jpg", link:"https://github.com/munishvira/Tour-management-system" },
  { title: "Bank Loan Prediction system", description: "Improve bank efficiency in loan approval/rejection.", created: "2020-09-09", tech: ["Jupyter", "Python"], image: "/images/projects/project3.jpg", link:"https://github.com/munishvira/Bank-Loan-Prediction-system" },
  { title: "Medicine Database Management system", description: "Allows a medical organization to edit and find medicine details.", created: "2020-09-09", tech: ["Python"], image: "/images/projects/project4.jpg", link:"https://github.com/munishvira/Medicine-Database-Management-system" },
  { title: "Voice Recognition and video", description: "Application for voice recognition.", created: "2020-09-09", tech: ["JavaScript", "Java"], image: "/images/projects/project5.jpg", link:"https://github.com/munishvira/Voice-Recognition-and-video" },
];

const container = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
});

const Pill = ({ text }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm">{text}</span>
)

const Section = ({ id, title, children }) => (
  <section id={id} className="py-12 md:py-16" aria-label={title}>
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">{title}</h2>
      {children}
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top gradient bar */}
      <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500" />

      {/* Sticky Header */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b">
        <div className="mx-auto max-w-6xl px-4 flex items-center justify-between h-16">
          <a href="#home" className="font-semibold tracking-tight">Munish Vira</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#experience" className="hover:opacity-70">Experience</a>
            <a href="#skills" className="hover:opacity-70">Skills</a>
            <a href="#education" className="hover:opacity-70">Education</a>
            <a href="#achievements" className="hover:opacity-70">Achievements</a>
            <a href="#projects" className="hover:opacity-70">Projects</a>
            <a href="#publications" className="hover:opacity-70">Publications</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm hover:shadow"
              href={profile.links.resume}
              download="Munish_Vira_Resume.pdf"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </div>
        </div>
      </header>

      {/* Hero / About */}
      <Section id="home" title="About Me">
        <h1 className="text-3xl md:text-5xl font-bold">{profile.name}</h1>
        <p className="mt-2 text-sm text-gray-600">{profile.title}</p>
        <p className="mt-4 text-gray-700 md:text-lg">{profile.summary}</p>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="grid gap-6">
          {profile.experience.map((exp, i) => (
            <motion.div
              key={exp.company + i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={container(i * 0.05)}
              className="rounded-2xl border p-6 hover:shadow-sm bg-white"
            >
              <h3 className="text-lg md:text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-600">{exp.company}</p>
              <span className="text-sm rounded-full bg-gray-100 px-3 py-1 w-max">{exp.period}</span>
              <ul className="mt-4 grid gap-2 text-sm text-gray-700 list-disc pl-5">
                {exp.bullets.map((b, idx) => (<li key={idx}>{b}</li>))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills & Tools">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(profile.skills).map(([group, items]) => (
            <div key={group} className="rounded-2xl border p-6 bg-gradient-to-br from-white to-gray-50">
              <h4 className="font-semibold mb-3">{group}</h4>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (<Pill key={s} text={s} />))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <div className="rounded-2xl border p-6">
          <h4 className="text-lg font-semibold">{profile.education.degree}</h4>
          <p className="text-gray-700">{profile.education.school} • {profile.education.period}</p>
          <p className="mt-1 text-gray-600">{profile.education.gpa}</p>
        </div>
      </Section>

      {/* Achievements */}
      <Section id="achievements" title="Achievements & Leadership">
        <ul className="grid md:grid-cols-2 gap-4">
          {profile.achievements.map((a) => (
            <li key={a} className="rounded-2xl border p-4 bg-white">{a}</li>
          ))}
        </ul>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <a
              key={proj.title}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={container(idx * 0.05)}
                className="rounded-2xl border p-6 bg-white transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
              >
                <h3 className="text-lg md:text-xl font-semibold">{proj.title}</h3>
                <p className="mt-2 text-gray-700 text-sm">{proj.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs bg-gray-100 rounded-full">{t}</span>
                  ))}
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </Section>

      {/* Publications */}
      <Section id="publications" title="Publications">
        <div className="grid gap-4">
          {profile.publications.map((pub) => (
            <a
              key={pub.title}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border p-4 bg-white hover:shadow-md transition-shadow duration-200 block"
            >
              <h4 className="font-semibold">{pub.title}</h4>
              <p className="text-sm text-gray-600">{pub.journal}</p>
            </a>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="rounded-2xl border p-6 bg-gradient-to-br from-white to-gray-50">
          <p className="text-gray-700 mb-4">
            Open to senior React Native / React / Full‑stack roles, freelance, and high‑impact startup projects.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:shadow">
              <Mail className="h-4 w-4" /> {profile.email}
            </a>
            <a href={`tel:${profile.phone}`} className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:shadow">
              <Phone className="h-4 w-4" /> {profile.phone}
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:shadow">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:shadow">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </Section>
    </div>
  )
}
