import React, { useState, useEffect } from 'react'
import { Mail, Github, Linkedin, Phone, Download, ExternalLink, ChevronDown, Menu, X, ArrowUp, Code2, Sparkles, Zap, Layers3 } from 'lucide-react'

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
  { title: "React Native Face Detection", description: "The app tracks facial landmarks to estimate eye openness, mouth movements, and head orientation for detecting states like drowsiness, distraction, and talking.", created: "2020-09-09", tech: ["JavaScript"], image: "/images/projects/project1.jpg", link:"https://github.com/munishvira/react-native-face-detection" },
  { title: "React Native Proximity Alert", description: "ProximityAlert is a React Native app that uses Vision Camera and react-native-fast-tflite with TensorFlow Lite to detect obstacles in real time.", created: "2020-09-09", tech: ["JavaScript"], image: "/images/projects/project1.jpg", link:"https://github.com/munishvira/react-native-proximity-alert" },
  { title: "React Native Reels Demo", description: "A simple Instagram Reels–like vertical video feed built with React Native. This project demonstrates smooth video playback, vertical swiping, and interactive overlays.", created: "2020-09-09", tech: ["JavaScript"], image: "/images/projects/project1.jpg", link:"https://github.com/munishvira/react-native-reels-demo" },
  { title: "Food Ordering app", description: "A food ordering app similar to Swiggy for individual retailers.", created: "2020-09-09", tech: ["JavaScript", "Java"], image: "/images/projects/project1.jpg", link:"https://github.com/munishvira/React-Native-Food-Ordering-app" },
  { title: "Tour management system", description: "Improve tourism management efficiency with a standardized solution.", created: "2020-09-09", tech: ["HTML", "CSS", "PHP"], image: "/images/projects/project2.jpg", link:"https://github.com/munishvira/Tour-management-system" },
  { title: "Bank Loan Prediction system", description: "Improve bank efficiency in loan approval/rejection.", created: "2020-09-09", tech: ["Jupyter", "Python"], image: "/images/projects/project3.jpg", link:"https://github.com/munishvira/Bank-Loan-Prediction-system" },
  { title: "Medicine Database Management system", description: "Allows a medical organization to edit and find medicine details.", created: "2020-09-09", tech: ["Python"], image: "/images/projects/project4.jpg", link:"https://github.com/munishvira/Medicine-Database-Management-system" },
  { title: "Voice Recognition and video", description: "Application for voice recognition.", created: "2020-09-09", tech: ["JavaScript", "Java"], image: "/images/projects/project5.jpg", link:"https://github.com/munishvira/Voice-Recognition-and-video" },
];

const apps = {
  ios: [
    { name: "Intellect", link: "https://apps.apple.com/in/app/intellect-create-a-better-you/id1483308512" },
    { name: "Reach for Sure", link: "https://apps.apple.com/in/app/reach-for-sure/id6444655537" },
  ],
  android: [
    { name: "Intellect", link: "https://play.google.com/store/apps/details?id=co.intellect.app" },
    { name: "Reach for Sure", link: "https://play.google.com/store/apps/details?id=com.invictus.jra" },
    { name: "SpaceAgent", link: "https://play.google.com/store/apps/details?id=com.spaceagent" },
  ],
};

// Floating particles animation
const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1,
    }));
    setParticles(newParticles);
    
    const interval = setInterval(() => {
      setParticles(prev => prev.map(p => ({
        ...p,
        y: p.y <= -5 ? 105 : p.y - p.speed * 0.1,
        x: p.x + Math.sin(Date.now() * 0.001 + p.id) * 0.1,
      })));
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            transform: `scale(${Math.sin(Date.now() * 0.002 + particle.id) * 0.5 + 1})`,
          }}
        />
      ))}
    </div>
  );
};

// Animated background grid
const AnimatedGrid = () => (
  <div className="fixed inset-0 pointer-events-none opacity-30">
    <div className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
          linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        animation: 'grid-move 20s linear infinite',
      }}
    />
    <style jsx>{`
      @keyframes grid-move {
        0% { transform: translate(0, 0); }
        100% { transform: translate(50px, 50px); }
      }
    `}</style>
  </div>
);

// Glowing pill component
const GlowPill = ({ text, delay = 0 }) => (
  <div 
    className="relative group cursor-default"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur-sm" />
    <span className="relative inline-flex items-center rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700 px-4 py-2 text-sm font-medium text-gray-100 group-hover:text-white transition-all duration-300 transform group-hover:scale-105">
      {text}
    </span>
  </div>
);

// Enhanced project card with 3D hover effect
const ProjectCard = ({ proj, index }) => (
  <a
    href={proj.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group block"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 animate-fade-in-up">
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(45deg, #f06292, #ba68c8, #64b5f6, #4fc3f7)',
          padding: '2px',
          animation: 'border-spin 3s linear infinite',
        }}
      >
        <div className="h-full w-full rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800" />
      </div>
      
      {/* Content */}
      <div className="relative p-6 h-full">
        <div className="flex items-center justify-between mb-4">
          <Code2 className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-all duration-300 transform group-hover:scale-110" />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
          {proj.title}
        </h3>
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
          {proj.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {proj.tech.map((tech, i) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-gray-800 text-blue-300 rounded-full border border-gray-600 group-hover:bg-blue-500/20 group-hover:border-blue-400 transition-all duration-300"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
    
    <style jsx>{`
      @keyframes border-spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .animate-fade-in-up {
        animation: fade-in-up 0.6s ease-out forwards;
        opacity: 0;
      }
    `}</style>
  </a>
);

// Modern section component
const Section = ({ id, title, children, icon: Icon }) => (
  <section id={id} className="py-20 relative" aria-label={title}>
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex items-center gap-4 mb-12">
        {Icon && <Icon className="w-8 h-8 text-blue-400" />}
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          {title}
        </h2>
      </div>
      {children}
    </div>
  </section>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      {/* Animated background elements */}
      <FloatingParticles />
      <AnimatedGrid />
      
      {/* Hero background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-pink-900/20 pointer-events-none" />

      {/* Enhanced Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/90 backdrop-blur-lg border-b border-gray-700/50' : 'bg-transparent'
      }`}>
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-lg font-bold">MV</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Munish Vira
            </span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8">
            {['experience', 'skills', 'education', 'achievements', 'projects', 'publications', 'apps', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-300 hover:text-white transition-colors duration-300 capitalize relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              href={profile.links.resume}
              download="Munish_Vira_Resume.pdf"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-700/50">
            <div className="px-6 py-4 space-y-4">
              {['experience','apps', 'skills', 'projects', 'achievements', 'education', 'publications',  'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="block py-2 text-gray-300 hover:text-white transition-colors duration-200 capitalize"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6 pt-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Available for exciting opportunities</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '600ms' }}>
            {profile.title}
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '800ms' }}>
            {profile.summary}
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: '1000ms' }}>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
            >
              Get In Touch <ChevronDown className="w-5 h-5" />
            </a>
            
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-gray-600 hover:border-gray-400 bg-gray-800/50 backdrop-blur-sm font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              View Projects <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Experience Section */}
      <Section id="experience" title="Experience" icon={Layers3}>
        <div className="grid gap-8">
          {profile.experience.map((exp, i) => (
            <div
              key={exp.company + i}
              className="relative group"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <div className="absolute -left-4 top-6 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white" />
              </div>
              
              <div className="ml-12 p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 group-hover:border-gray-600 transition-all duration-300 transform group-hover:scale-[1.02] animate-fade-in-up">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="inline-block mt-2 lg:mt-0 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-3 text-gray-300">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Apps Section */}
      <Section id="apps" title="Published Apps">
        <div className="grid md:grid-cols-2 gap-12">
          {/* iOS Apps */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/30 to-blue-800/30 backdrop-blur-sm border border-blue-700/50 animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">iOS</span>
              </div>
              <h3 className="text-2xl font-bold text-white">iOS Apps</h3>
            </div>
            <div className="space-y-4">
              {apps.ios.map((app) => (
                <a
                  key={app.name}
                  href={app.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-500/20 transition-all duration-300 group"
                >
                 <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">iOS</span>
                </div>
                  <span className="font-medium text-white group-hover:text-blue-300 transition-colors duration-300">{app.name}</span>
                  <ExternalLink className="w-4 h-4 text-blue-400 ml-auto group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Android Apps */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-green-900/30 to-emerald-800/30 backdrop-blur-sm border border-green-700/50 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">AND</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Android Apps</h3>
            </div>
            <div className="space-y-4">
              {apps.android.map((app) => (
                <a
                  key={app.name}
                  href={app.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20 hover:border-green-500/40 hover:bg-green-500/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">AND</span>
                  </div>
                  <span className="font-medium text-white group-hover:text-green-300 transition-colors duration-300">{app.name}</span>
                  <ExternalLink className="w-4 h-4 text-green-400 ml-auto group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Skills & Tools" icon={Code2}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(profile.skills).map(([group, items], groupIndex) => (
            <div
              key={group}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${groupIndex * 100}ms` }}
            >
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                {group}
              </h4>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <GlowPill key={skill} text={skill} delay={i * 50} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Featured Projects" icon={Sparkles}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 6).map((proj, idx) => (
            <ProjectCard key={proj.title} proj={proj} index={idx} />
          ))}
        </div>
      </Section>

      {/* Achievements Section */}
      <Section id="achievements" title="Achievements & Leadership" icon={Sparkles}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profile.achievements.map((achievement, index) => (
            <div
              key={achievement}
              className="group p-8 rounded-2xl bg-gradient-to-br from-yellow-900/20 to-orange-800/20 backdrop-blur-sm border border-yellow-700/30 hover:border-yellow-600/50 hover:bg-yellow-900/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-white group-hover:text-yellow-300 transition-colors duration-300 leading-tight">
                {achievement}
              </h3>
              
              <div className="mt-4 h-1 w-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ animationDelay: `${index * 200 + 300}ms` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" title="Education" icon={Layers3}>
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-900/30 to-purple-800/30 backdrop-blur-sm border border-indigo-700/50 hover:border-indigo-600/70 transition-all duration-300 transform hover:scale-[1.02] animate-fade-in-up">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">🎓</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{profile.education.degree}</h3>
                    <p className="text-indigo-300 font-medium text-lg">{profile.education.school}</p>
                    <p className="text-gray-400 mt-1">{profile.education.period}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 lg:mt-0 lg:ml-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  <span className="text-white font-semibold">{profile.education.gpa}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Publications Section */}
      <Section id="publications" title="Publications" icon={Code2}>
        <div className="max-w-4xl mx-auto">
          {profile.publications.map((pub, index) => (
            <a
              key={pub.title}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-900/30 to-teal-800/30 backdrop-blur-sm border border-emerald-700/50 hover:border-emerald-600/70 hover:bg-emerald-900/40 transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">📄</span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300 leading-tight">
                        {pub.title}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-emerald-400 flex-shrink-0 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                    </div>
                    
                    <p className="text-emerald-200 font-medium mb-4">{pub.journal}</p>
                    
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-medium">
                        Research Paper
                      </span>
                      <span className="px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-sm font-medium">
                        Published
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Animated progress bar */}
                <div className="mt-6 h-1 w-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Let's Connect">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 animate-fade-in-up">
            <div className="text-center mb-12">
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Open to senior React Native / React / Full‑stack roles, freelance projects, 
                and high‑impact startup opportunities. Let's build something amazing together!
              </p>
              
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-300 font-medium">Available for new opportunities</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-500/20 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">Email</div>
                  <div className="text-gray-400 text-sm">{profile.email}</div>
                </div>
                <ExternalLink className="w-5 h-5 text-blue-400 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </a>
              
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-500/40 hover:bg-green-500/20 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white group-hover:text-green-300 transition-colors duration-300">Phone</div>
                  <div className="text-gray-400 text-sm">{profile.phone}</div>
                </div>
                <ExternalLink className="w-5 h-5 text-green-400 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </a>
              
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-gray-700/50 to-gray-800/50 border border-gray-600/50 hover:border-gray-500 hover:bg-gray-700/70 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Github className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white group-hover:text-gray-300 transition-colors duration-300">GitHub</div>
                  <div className="text-gray-400 text-sm">View my code</div>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </a>
              
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-blue-600/10 to-blue-700/10 border border-blue-600/20 hover:border-blue-600/40 hover:bg-blue-600/20 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">LinkedIn</div>
                  <div className="text-gray-400 text-sm">Professional profile</div>
                </div>
                <ExternalLink className="w-5 h-5 text-blue-400 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-lg font-bold">MV</span>
              </div>
              <div>
                <div className="font-semibold text-white">{profile.name}</div>
                <div className="text-gray-400 text-sm">Senior Software Engineer</div>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <a href={profile.links.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Github className="w-6 h-6" />
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href={`mailto:${profile.email}`} className="text-gray-400 hover:text-white transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            
            <div className="text-gray-400 text-sm text-center md:text-right">
              <div>© 2025 {profile.name}</div>
              <div>Built with React & ❤️</div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-blue-500/40 z-40 animate-bounce-in"
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Global styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgb(17, 24, 39);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, rgb(59, 130, 246), rgb(147, 51, 234));
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, rgb(37, 99, 235), rgb(126, 34, 206));
        }
      `}</style>
    </div>
  )
}