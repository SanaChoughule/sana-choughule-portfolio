import React, { useState } from 'react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Sparkles,
  Layers3, Workflow, Code2, Compass, Mail, Linkedin, Github,
  FileText, MapPin, ExternalLink, ChevronRight
} from 'lucide-react';

const projects = [
  {
    number: '01', type: 'FLAGSHIP CASE STUDY', name: 'Stay Context',
    subtitle: 'Helping travellers understand a stay in the context of their trip.',
    description: 'An independent product concept exploring how accommodation discovery could become more contextual through traveller-selected places, factual travel information and privacy-aware location experiences.',
    tags: ['Product strategy', 'Discovery', 'UX flows', 'Prototype'],
    status: 'Interactive prototype',
    links: [
      { label: 'Explore prototype', url: 'https://ai.studio/apps/4a864329-8f23-4891-ad45-0ead9c81c78e' },
      { label: 'View Figma', url: 'https://www.figma.com/design/KCbPbpvyrDNGCbqHMOkUa8/Stay-Context' }
    ],
    visual: 'stay'
  },
  {
    number: '02', type: 'LIVE AI EXPERIMENT', name: 'Pulse Daily AI',
    subtitle: 'An AI-powered daily information experience.',
    description: 'A live AI Studio project exploring how an AI-led interface can make daily information easier to access and engage with.',
    tags: ['AI product thinking', 'Prototyping', 'Google AI Studio'],
    status: 'Live application',
    links: [{ label: 'Open live app', url: 'https://pulsedaily-ai-1922.ai.studio/' }],
    visual: 'pulse'
  },
  {
    number: '03', type: 'AI WORKSHOP PROJECT', name: 'News AI Agent',
    subtitle: 'Exploring AI-assisted news discovery and synthesis.',
    description: 'An agent concept developed during a Build with AI workshop. The portfolio will be updated with its demo link and exact capabilities when available.',
    tags: ['AI agents', 'Workflow design', 'Experimentation'],
    status: 'Workshop project',
    links: [],
    visual: 'news'
  },
  {
    number: '04', type: '0-TO-1 PRODUCT CONCEPT', name: 'PlanIt',
    subtitle: 'A quicker way to turn an outing idea into a plan.',
    description: 'A location-aware outing planner concept shaped around time, budget, mood, company and activity preferences, with a focused MVP and third-party booking hand-offs.',
    tags: ['Problem framing', 'Journey mapping', 'MVP definition', 'Figma'],
    status: 'Product concept',
    links: [],
    visual: 'plan'
  },
  {
    number: '05', type: 'AI WORKFLOW PROTOTYPE', name: 'Portfolio Automation Agent',
    subtitle: 'Reducing repetitive work in a photographer’s portfolio workflow.',
    description: 'A prototype workflow that takes social video links or media uploads, organises content into photographer-defined categories, generates metadata and updates portfolio grids while keeping creative control with the user.',
    tags: ['Workflow automation', 'AI-assisted metadata', 'Product prototyping'],
    status: 'Prototype concept',
    links: [],
    visual: 'automation'
  },
  {
    number: '06', type: 'SOCIAL-IMPACT INITIATIVE', name: 'Kalamitra',
    subtitle: 'Bringing handmade creations to a wider audience.',
    description: 'A digital commerce and storytelling initiative supporting handmade products created through a community workshop. Focus areas include product presentation, catalogues and a simple online ordering experience.',
    tags: ['Digital experience', 'Content strategy', 'Commerce concept'],
    status: 'Initiative',
    links: [],
    visual: 'kala'
  },
  {
    number: '07', type: 'HATCHABLE WEB BUILD', name: 'Creator Portfolio Website',
    subtitle: 'A digital home for an automotive creator’s work.',
    description: 'Built a responsive creator portfolio for a family member using Hatchable, bringing together featured reels, audience highlights, an about story, creative process and collaboration contact paths.',
    tags: ['Hatchable', 'Responsive web experience', 'Content presentation'],
    status: 'Live website · Independent build',
    links: [{ label: 'Visit live website', url: 'https://siddharth-creator.hatchable.site' }],
    visual: 'creator'
  }
];

const toolGroups = [
  { title: 'AI & Agent Development', icon: Sparkles, tools: ['ChatGPT', 'Claude', 'Google AI Studio', 'Google Antigravity', 'Google Stitch', 'Cursor'] },
  { title: 'Product & Collaboration', icon: Layers3, tools: ['Jira', 'Confluence', 'Notion', 'Figma', 'Miro'] },
  { title: 'API Testing & Technical Validation', icon: Code2, tools: ['Postman', 'REST APIs', 'JSON', 'Request / response validation'] },
  { title: 'Data & Analytics', icon: Workflow, tools: ['SQL', 'Power BI', 'Advanced Excel', 'Python basics', 'KPI tracking'] },
  { title: 'Engineering & Delivery', icon: Compass, tools: ['Java', 'Spring Boot', 'Microservices', 'Kafka', 'GitHub', 'Jenkins', 'Azure DevOps'] },
  { title: 'Web Building & Deployment', icon: Layers3, tools: ['Hatchable', 'Vercel', 'GitHub'] }
];

const experience = [
  { date: 'AUG 2025 — JAN 2026', role: 'Product Owner – Platform Delivery', company: 'J.P. Morgan Chase Bank', domain: 'Financial Services', points: ['Owned platform capabilities through requirement clarification, solution definition, validation and production delivery.', 'Partnered with business and engineering stakeholders to surface dependencies, security considerations and implementation trade-offs.', 'Used production monitoring insights to identify platform performance issues and improvement opportunities.'] },
  { date: 'FEB 2023 — AUG 2025', role: 'Associate – Product & Platform Delivery', company: 'RXO Inc.', domain: 'Logistics Technology', points: ['Translated stakeholder needs into functional requirements, user stories, acceptance criteria and Jira delivery workflows.', 'Worked with business, engineering and QA teams to clarify scope, dependencies and priorities.', 'Contributed to platform and workflow improvements associated with an 8% increase in system efficiency.'] },
  { date: 'SEP 2021 — DEC 2022', role: 'Associate – Product Delivery', company: 'Accelya Group', domain: 'Airline Revenue Accounting', points: ['Converted business requirements into delivery-ready functional changes for airline revenue accounting workflows.', 'Collaborated across teams on feature delivery, issue resolution, system integrations and release readiness.'] }
];

function SectionLabel({ children }) {
  return <div className="section-label"><span />{children}</div>;
}

function ProjectCard({ project, onOpen }) {
  return (
    <article className={`project-card ${project.visual}`}>
      <div className="project-card-top">
        <span className="project-number">{project.number}</span>
        <span className="project-type">{project.type}</span>
      </div>
      <div className={`project-art art-${project.visual}`}>
        {project.visual === 'stay' && <><div className="map-lines" /><div className="map-pin">✳</div><div className="map-label">YOUR TRIP, IN CONTEXT</div></>}
        {project.visual === 'pulse' && <><div className="pulse-orb" /><div className="pulse-bars"><i/><i/><i/><i/><i/></div><div className="art-caption">PULSE / DAILY</div></>}
        {project.visual === 'news' && <><div className="news-card"><b>THE DAILY BRIEF</b><span/><span/><span/><small>AI · SIGNAL · CONTEXT</small></div></>}
        {project.visual === 'plan' && <><div className="plan-circle">PLAN<br/>YOUR<br/>DAY</div><div className="plan-dot p1"/><div className="plan-dot p2"/><div className="plan-dot p3"/></>}
        {project.visual === 'automation' && <><div className="node n1">INPUT</div><div className="node n2">AI</div><div className="node n3">PUBLISH</div><div className="node-line"/></>}
        {project.visual === 'kala' && <><div className="kala-sun">✳</div><div className="kala-word">made<br/>with care.</div></>}
        {project.visual === 'creator' && <><div className="creator-frame"><span>SID·DDG</span><b>BUILT ON<br/><em>HORSEPOWER.</em></b><small>CREATOR PORTFOLIO / MUMBAI</small></div><div className="creator-wheel"/></>}
      </div>
      <div className="project-content">
        <div className="project-status">{project.status}</div>
        <h3>{project.name}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.description}</p>
        <div className="tag-row">{project.tags.map(t => <span key={t}>{t}</span>)}</div>
        <div className="project-actions">
          {project.links.length ? project.links.map(link => <a key={link.label} href={link.url} target="_blank" rel="noreferrer">{link.label}<ArrowUpRight size={14}/></a>) : <button onClick={() => onOpen(project)}>View overview <ArrowRight size={14}/></button>}
        </div>
      </div>
    </article>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return <div className="modal-backdrop" onClick={onClose}>
    <div className="project-modal" onClick={e => e.stopPropagation()}>
      <button className="modal-close" onClick={onClose} aria-label="Close"><X size={19}/></button>
      <div className="section-label"><span/>{project.type}</div>
      <h2>{project.name}</h2>
      <p className="modal-lead">{project.subtitle}</p>
      <p>{project.description}</p>
      <div className="modal-note"><b>Current status</b><span>{project.status}. Additional artefacts and validation details will be added as the case study is developed.</span></div>
      {project.links.map(link => <a className="modal-link" key={link.label} href={link.url} target="_blank" rel="noreferrer">{link.label}<ArrowUpRight size={15}/></a>)}
    </div>
  </div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const closeMenu = () => setMenuOpen(false);
  const nav = [['Work','#work'],['Journey','#journey'],['Toolkit','#toolkit'],['About','#about']];
  return <>
    <header className="site-header">
      <a className="brand" href="#top" onClick={closeMenu}>SC<span>.</span></a>
      <nav className={menuOpen ? 'nav open' : 'nav'}>
        {nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s connect <ArrowUpRight size={14}/></a>
      </nav>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main id="top">
      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="availability-dot"/> PRODUCT OWNER · PLATFORM & AI</div>
          <h1>Turning complex<br/><em>problems</em> into<br/>thoughtful products<span className="accent">.</span></h1>
          <p className="hero-intro">I’m Sana — a product and platform professional with an engineering foundation, curious about the space where technology, customer experience and AI meet.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17}/></a>
            <a className="text-link" href="/assets/Sana-Choughule-Resume.pdf" target="_blank">View resume <ArrowUpRight size={15}/></a>
          </div>
          <div className="hero-meta"><span><MapPin size={14}/> Mumbai, India</span><span>4.5+ YEARS EXPERIENCE</span></div>
        </div>
        <div className="hero-visual">
          <div className="photo-frame"><img src="/assets/sana-portrait.jpg" alt="Sana Choughule, Product Owner"/></div>
          <div className="photo-index">FIG. 01 <span>THE PERSON BEHIND THE PRODUCTS</span></div>
          <div className="hero-stamp"><Sparkles size={17}/><span>Curiosity<br/>in motion.</span></div>
        </div>
        <div className="hero-bottom-note">SCROLL TO EXPLORE <ArrowDownRight size={15}/></div>
      </section>

      <section className="intro-strip">
        <div className="wrap intro-grid">
          <SectionLabel>THE THROUGH-LINE</SectionLabel>
          <p>From understanding how systems work to shaping <em>why they should exist</em> — I bring technical depth, structured product thinking and a bias toward making ideas tangible.</p>
        </div>
      </section>

      <section className="section wrap" id="work">
        <div className="section-heading">
          <div><SectionLabel>SELECTED WORK · 2024—2026</SectionLabel><h2>Ideas, experiments<br/> & <em>things in motion.</em></h2></div>
          <p>A mix of product concepts, AI experiments and platform work. Each project is labelled by its current stage, so the thinking and the maturity are clear.</p>
        </div>
        <div className="project-grid">
          {projects.map(p => <ProjectCard key={p.number} project={p} onOpen={setSelected}/>)}
        </div>
      </section>

      <section className="journey-section" id="journey">
        <div className="wrap journey-layout">
          <div className="journey-heading">
            <SectionLabel>THE JOURNEY</SectionLabel>
            <h2>Grounded in<br/><em>engineering.</em><br/>Growing through<br/>product.</h2>
            <p>My technical background helps me connect business intent with implementation realities — and collaborate closely with the people building the product.</p>
            <a className="text-link" href="https://linkedin.com/in/sana-choughule" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={15}/></a>
          </div>
          <div className="timeline">
            {experience.map((item, i) => <div className="timeline-item" key={item.company}>
              <div className="timeline-marker">{String(i+1).padStart(2,'0')}</div>
              <div className="timeline-body">
                <div className="timeline-date">{item.date}</div>
                <h3>{item.role}</h3><div className="timeline-company">{item.company} <span>· {item.domain}</span></div>
                <ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul>
              </div>
            </div>)}
          </div>
        </div>
      </section>

      <section className="section wrap" id="toolkit">
        <div className="section-heading toolkit-heading">
          <div><SectionLabel>MY TOOLKIT</SectionLabel><h2>Fluent across<br/><em>the product stack.</em></h2></div>
          <p>I enjoy working across disciplines — from product discovery and collaboration to API validation, data and AI-assisted prototyping.</p>
        </div>
        <div className="tool-grid">
          {toolGroups.map(group => {
            const Icon = group.icon;
            return <div className="tool-card" key={group.title}>
              <div className="tool-icon"><Icon size={19}/></div>
              <h3>{group.title}</h3>
              <div className="tool-list">{group.tools.map(t => <span key={t}>{t}</span>)}</div>
            </div>;
          })}
        </div>
        <p className="tool-disclaimer">Tools shown reflect experience and working familiarity across projects; depth varies by tool and use case.</p>
      </section>

      <section className="about-section" id="about">
        <div className="wrap about-grid">
          <div className="about-mark">A NOTE<br/>ABOUT<br/><em>HOW I WORK.</em></div>
          <div className="about-copy">
            <SectionLabel>BEYOND THE TITLE</SectionLabel>
            <h2>Curious by nature.<br/><em>Practical by design.</em></h2>
            <p>I’m interested in the details that make a product useful: the user need behind a request, the trade-off behind a roadmap decision, the edge case hidden in a workflow and the small interaction that makes an experience feel clear.</p>
            <p>My path through engineering and platform delivery has shaped how I approach product work: ask better questions, make constraints visible, collaborate early and keep learning through prototypes and feedback.</p>
            <div className="about-signoff">Sana Choughule <span>PRODUCT · TECHNOLOGY · AI</span></div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="wrap contact-inner">
          <SectionLabel>HAVE A PRODUCT CHALLENGE?</SectionLabel>
          <h2>Let’s make<br/><em>something matter.</em></h2>
          <p>Open to conversations around Product Owner, Product Manager and platform-focused opportunities.</p>
          <a className="button button-light" href="mailto:choughulesana@gmail.com">Get in touch <ArrowUpRight size={17}/></a>
          <div className="contact-links">
            <a href="mailto:choughulesana@gmail.com"><Mail size={16}/> Email</a>
            <a href="https://linkedin.com/in/sana-choughule" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
            <a href="https://github.com/SanaChoughule" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
            <a href="/assets/Sana-Choughule-Resume.pdf" target="_blank"><FileText size={16}/> Resume</a>
          </div>
        </div>
      </section>
    </main>
    <footer className="site-footer"><div className="wrap"><span>© {new Date().getFullYear()} Sana Choughule</span><span>BUILT WITH CURIOSITY <span className="footer-star">✳</span></span><a href="#top">BACK TO TOP ↑</a></div></footer>
    <ProjectModal project={selected} onClose={() => setSelected(null)}/>
  </>;
}
