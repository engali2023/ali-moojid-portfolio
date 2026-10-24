'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, Github, Linkedin, Instagram, Code2, ChartNoAxesCombined, Clapperboard, Cpu, Sparkles, Database, Workflow } from 'lucide-react';

const photo = '/images/ali-moojid.jpg';
const projects = [
  { n: '01', title: 'AI Visual Studio', type: 'Generative AI · Creative Production', desc: 'A cinematic content workflow turning concepts into storyboards, visual prompts, and polished short-form video.', images: ['photo-1536240478700-b869070f9279','photo-1516035069371-29a1b244cc32','photo-1518770660439-4636190af475','photo-1519389950473-47ba0277781c'] },
  { n: '02', title: 'Data & Insights', type: 'Python · Analytics · Reporting', desc: 'A data-focused toolkit for transforming raw social and business metrics into clear, decision-ready insights.', images: ['photo-1460925895917-afdab827c52f','photo-1551288049-bebda4e38f71','photo-1454165804606-c3d57bc86b40'] },
  { n: '03', title: 'Smart Web Tools', type: 'Web · Automation · Applied AI', desc: 'Practical digital products that connect intelligent APIs, automated workflows, and thoughtful interface design.', images: ['photo-1498050108023-c5249f4df085','photo-1519389950473-47ba0277781c','photo-1559028012-481c04fa702d','photo-1558655146-d09347e92766'] },
];
const img = (id: string, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
const fade = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: .65, ease: [0.22, 1, 0.36, 1] as const } } };
function Reveal({ children, className = '', id }: { children: React.ReactNode; className?: string; id?: string }) {
  return <motion.section id={id} className={`card ${className}`} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: .12 }} whileHover={{ y: -5 }} transition={{ duration: .25 }}>{children}</motion.section>;
}
function Script({ children }: { children: React.ReactNode }) { return <span className="script">{children}</span>; }
function ProjectImages({ ids }: { ids: string[] }) { return <div className={`project-images count-${ids.length}`}>{ids.map((id, i) => <div key={id} className={`project-image p${i}`} style={{ backgroundImage: `url('${img(id, 700)}')` }} />)}</div>; }

export default function Home() {
  const nav = ['Home','About','Experience','Education','Projects','Testimonials','Contact'];
  const ids = ['home','about','experience','education','projects','testimonials','contact'];
  return <main className="site-shell">
    <nav className="dot-nav" aria-label="Page sections">{ids.map((id, i) => <a key={id} href={`#${id}`} aria-label={nav[i]} title={nav[i]}><span /></a>)}</nav>
    <div className="portfolio-grid">
      <Reveal id="home" className="hero red-card">
        <div className="hero-copy"><Script>Engineer · Developer · Creator</Script><h1><span>PORT</span><em>FOLIO</em></h1><div className="hero-bottom"><span>ENG. ALI MOOJID ABBAS</span><span>Creative Technologist</span></div></div>
        <div className="hero-portrait"><Image src={photo} alt="Portrait of Engineer Ali Moojid Abbas" fill priority sizes="(max-width: 700px) 70vw, 330px" /></div>
        <div className="hero-index">PORTFOLIO / 2026</div>
      </Reveal>

      <Reveal id="about" className="about paper-card">
        <div className="section-index">01 / ABOUT</div><h2>ABOUT<br/>ME<span className="period">.</span></h2>
        <div className="about-content"><Script>Eng. Ali Moojid Abbas</Script><p className="lead">Bridging engineering, data-driven automation, and AI-powered visual production.</p><p>Versatile Electronics Engineer and Python Developer combining technical logic with visual storytelling. I build digital solutions through data analysis, software automation, applied AI, and cinematic content production.</p><div className="expertise"><b>CORE EXPERTISE</b><div className="tag-list"><span>Python Development</span><span>Data Analysis</span><span>Generative AI</span><span>Motion Design</span><span>Creative Technology</span></div></div></div>
        <div className="arabic-copy" dir="rtl">مهندس ومطور يجمع بين الدقة الهندسية والإبداع الرقمي، متخصص في تطوير حلول Python وتحليل البيانات وتوظيف الذكاء الاصطناعي لصناعة تجارب رقمية وبصرية مؤثرة.</div>
      </Reveal>

      <Reveal id="experience" className="experience paper-card">
        <div className="experience-copy"><div className="section-index">02 / WHAT I DO</div><Script>My</Script><h2>EXPERIENCE<span className="period">.</span></h2><p>I turn complex ideas into useful tools and compelling visual experiences, from the first sketch to the final delivery.</p><ul className="check-list"><li>Python apps, scripts & workflow automation</li><li>Data analysis, visualization & reporting</li><li>Generative AI content and prompt pipelines</li><li>Video editing, motion graphics & storytelling</li><li>Creative production and digital communication</li></ul></div>
        <div className="experience-visual"><Image src={photo} alt="Ali Moojid portrait" fill sizes="(max-width: 700px) 100vw, 350px"/><span className="vertical-label">TECHNICAL PRECISION / CREATIVE VISION</span></div>
      </Reveal>

      <Reveal id="education" className="education paper-card">
        <div className="education-photo"><div className="red-disc"/><Image src={photo} alt="Ali Moojid" fill sizes="(max-width: 700px) 100vw, 300px"/></div>
        <div className="education-content"><div className="section-index">03 / FOUNDATION</div><Script>Learning never stops</Script><h2>EDUCATION<span className="period">.</span></h2><div className="timeline"><div><span className="year">ENGINEERING</span><b>Electronics Engineering</b><p>Engineering mindset, systems thinking, and technical problem-solving.</p></div><div><span className="year">CONTINUOUS</span><b>AI & Data Specialization</b><p>Generative AI, Python, analytics, and practical digital tools.</p></div><div><span className="year">ONGOING</span><b>Creative Technology</b><p>Motion graphics, visual production, and AI-assisted workflows.</p></div></div></div>
      </Reveal>

      <Reveal id="projects" className="projects-header red-card"><div className="section-index light">04 / SELECTED WORK</div><Script>Ideas into impact</Script><h2>SELECTED<br/><span>PROJECTS</span></h2><div className="polaroid polaroid-one" style={{backgroundImage:`url('${img('photo-1518770660439-4636190af475',300)}')`}}/><div className="polaroid polaroid-two" style={{backgroundImage:`url('${img('photo-1498050108023-c5249f4df085',300)}')`}}/><div className="project-counter">03 <span>CASE STUDIES</span></div></Reveal>

      {projects.map((project, i) => <Reveal key={project.n} className={`project-card paper-card project-${i+1}`}><div className="project-info"><div className="section-index">CASE STUDY / {project.n}</div><Script>{['First','Second','Third'][i]} project</Script><h2>{project.title}<span className="period">.</span></h2><div className="project-type">{project.type}</div><p>{project.desc}</p><a href="#contact" className="text-link">Discuss a project <ArrowUpRight size={16}/></a></div><ProjectImages ids={project.images}/></Reveal>)}

      <Reveal id="testimonials" className="testimonials paper-card"><div className="section-index">05 / TRUST & COLLABORATION</div><Script>Kind words</Script><h2>WHAT I BRING<span className="period">.</span></h2><p className="testimonial-intro">A thoughtful blend of technical rigor, creative problem-solving, and reliable delivery.</p><div className="quote-grid"><article><div className="quote-mark">“</div><div className="stars">★★★★★</div><p>Clear thinking, careful execution, and an eye for the details that make the work stand out.</p><b>Creative Collaboration</b><span>Design & Production</span></article><article><div className="quote-mark">“</div><div className="stars">★★★★★</div><p>Turns complex requirements into a practical workflow with a strong sense of purpose.</p><b>Technical Problem Solving</b><span>Development & Automation</span></article><article><div className="quote-mark">“</div><div className="stars">★★★★★</div><p>Combines analytical insight with an engaging visual language and a polished finish.</p><b>Data to Storytelling</b><span>Analytics & Media</span></article><article><div className="quote-mark">“</div><div className="stars">★★★★★</div><p>Curious, adaptable, and committed to using emerging tools to create meaningful results.</p><b>Future-focused Mindset</b><span>AI & Digital Products</span></article></div><p className="note">Sample capability statements — replace with verified client testimonials when available.</p></Reveal>

      <Reveal id="contact" className="contact red-card"><div className="contact-photo"><Image src={photo} alt="Ali Moojid Abbas" fill sizes="(max-width: 700px) 60vw, 280px"/></div><div className="contact-content"><Script>Let's build something meaningful</Script><h2>THANK<br/>YOU<span className="white-period">.</span></h2><p>Have an idea, a challenge, or a project in mind? Let's turn it into something remarkable.</p><div className="contact-pills"><a href="mailto:ali.moojid@gmail.com"><Mail size={15}/> Email me <ArrowUpRight size={13}/></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={15}/> LinkedIn <ArrowUpRight size={13}/></a></div><div className="socials"><a href="https://github.com/" aria-label="GitHub"><Github size={17}/></a><a href="https://www.instagram.com/" aria-label="Instagram"><Instagram size={17}/></a><a href="mailto:ali.moojid@gmail.com" aria-label="Email"><Mail size={17}/></a></div></div><div className="contact-footer"><span>ENG. ALI MOOJID ABBAS</span><span>BUILT WITH CURIOSITY © 2026</span></div></Reveal>
    </div>
    <footer className="site-footer"><span>ALI MOOJID ABBAS</span><span>ENGINEERING × DATA × AI × VISUAL STORYTELLING</span><a href="#home">BACK TO TOP ↑</a></footer>
  </main>;
}
