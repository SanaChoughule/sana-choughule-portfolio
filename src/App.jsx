import React, { useEffect, useState } from 'react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Sparkles,
  Layers3, Workflow, Code2, Compass, Mail, Linkedin, Github,
  FileText, MapPin, ExternalLink, ChevronRight
} from 'lucide-react';

const projects = [
  {
    number: '01', type: 'FEATURED PRODUCT CASE STUDY', name: 'Stay Context',
    subtitle: 'Helping travellers understand a stay in the context of their trip.',
    description: 'An independent accommodation-discovery concept shaped around traveller-selected arrival points and Trip Places. The work includes product discovery, user journeys, PRD, prioritised Jira stories, UX flows and an interactive Goa prototype. Distances and travel times in the demo are illustrative, not live routing data.',
    tags: ['Product strategy', 'PRD & requirements', 'Jira backlog', 'UX & prototype'],
    status: 'In progress · Interactive prototype',
    links: [
      { label: 'Open Goa prototype', url: 'https://ai.studio/apps/4a864329-8f23-4891-ad45-0ead9c81c78e' },
      { label: 'View Figma', url: 'https://www.figma.com/design/KCbPbpvyrDNGCbqHMOkUa8/Stay-Context' }
    ],
    details: [
      { heading: 'Product opportunity', body: 'Accommodation location is only one part of a trip decision. Travellers also need to understand how a property relates to their own arrival point and the places they have chosen to visit.' },
      { heading: 'Product approach', body: 'Let travellers select an arrival point and add up to 10 Trip Places, then review neutral distance and travel-time context and compare properties without an overall fit score or algorithmic winner.' },
      { heading: 'Product work', body: 'Defined the problem, product principles, PRD, user journeys, prioritised Jira epics and stories, acceptance criteria, UX flows and an interactive Goa prototype. The prototype also explores saving and switching between trip drafts.' },
      { heading: 'Current status & constraints', body: 'Independent product concept with an interactive prototype. Sample distances and travel times are illustrative, not live routing data. Functional QA validation is still pending; no production booking, payment or backend integration is claimed.' }
    ],
    visual: 'stay'
  },
  {
    number: '02', type: 'LIVE AI PROJECT', name: 'PulseDaily AI',
    subtitle: 'A persona-aware AI news wire for staying current without the noise.',
    description: 'An AI-powered news experience that organises technology and product stories into a personalised daily brief. Users choose a professional persona, explore topic feeds, review Gemini-generated summaries and role-specific takeaways, save stories, and explore additional alert and audio-briefing experiences.',
    tags: ['AI product thinking', 'Persona personalisation', 'News discovery', 'Google AI Studio'],
    status: 'Live application · Feature verification in progress',
    links: [{ label: 'Explore live application', url: 'https://pulsedaily-ai-1922.ai.studio/' }],
    details: [
      { heading: 'Product concept', body: 'PulseDaily AI explores a low-noise daily intelligence experience: instead of presenting every reader with the same generic feed, it uses a professional persona as a relevance lens for technology and AI news.' },
      { heading: '1. Persona-led onboarding', body: 'The supplied onboarding screen shows a Gmail account step followed by persona selection: Founder / Executive, Software Engineer, or Product Manager. It also presents optional desktop breaking alerts and a Gemini API key field for live model calls.' },
      { heading: '2. Personalised discovery', body: 'The dashboard organises content into For You and Following, with topic destinations for Agentic AI, Cloud & Infra, and Product & Strategy. A breaking-scoop banner and the Morning Brief create a clear entry point into the day’s stories.' },
      { heading: '3. AI-assisted story understanding', body: 'Featured dispatches show source and grounding labels, a three-bullet Gemini executive summary, and a “Why this matters” explanation tailored to the selected persona. Story actions include saving, opening the original source, and asking Gemini to explain.' },
      { heading: '4. Continuous Wire', body: 'The longer chronological feed presents additional dispatches with source, topic, timing, summaries, persona-specific takeaways, and actions to save, open the full story, or request a Gemini explanation.' },
      { heading: '5. Alerts, audio and saved stories', body: 'The supplied screens also depict a Verge Wire / Radar area for simulating breaking AI alerts and viewing active radar feeds, a VergeCast 60-second audio briefing with playback-speed choices, and a Saved Scoops queue for bookmarked stories.' },
      { heading: 'Product experience flow', body: 'Account step → choose a professional persona → scan the Morning Brief → explore topic feeds and the Continuous Wire → ask Gemini for a role-aware explanation or save a story → revisit saved scoops and explore alert or audio-briefing surfaces.' },
      { heading: 'Current status and validation', body: 'These capabilities are documented in the supplied screenshots and five-page product PDF. The live AI Studio URL is included for exploration, but its interactive behavior could not be independently loaded in this review. We should verify which alert, audio, save, and model-call actions are live before describing them as production-connected features.' }
    ],
    visual: 'pulse'
  {
    number: '03', type: 'SOCIAL-IMPACT DIGITAL EXPERIENCE', name: 'Kalamitra',
    subtitle: 'Bringing handmade creations to a wider audience.',
    description: 'A live digital storefront and storytelling experience for handmade products created through a community workshop. The initiative helps present products online and makes it easier for supporters to discover the work and enquire about orders.',
    tags: ['Social impact', 'Digital commerce', 'Product presentation', 'Community experience'],
    status: 'Live website · Independent initiative',
    links: [{ label: 'Visit Kalamitra', url: 'https://kalaamitra.netlify.app/' }],
    details: [
      { heading: 'The need', body: 'Handmade products created in a community workshop needed a simple online presence where people could discover the work beyond in-person events and seasonal stalls.' },
      { heading: 'Experience', body: 'Created a branded digital storefront and storytelling experience focused on clear product presentation and helping visitors explore the handmade collection and find an order or enquiry path.' },
      { heading: 'Current status', body: 'Live independent website. The project is presented as a digital discovery and catalogue experience; no payment or sales-performance claims are made.' }
    ],
    visual: 'kala'
  },
  {
    number: '04', type: '0-TO-1 PRODUCT CONCEPT', name: 'Quick Planner',
    subtitle: 'Turn an outing idea into a plan that fits your day.',
    description: 'A location-aware outing-planning concept that helps people explore plans around where they are, how much time they have, their budget, mood, company and preferences.',
    tags: ['Problem framing', 'Personalised planning', 'MVP definition', 'User journeys'],
    status: 'Product concept · MVP planning',
    links: [],
    details: [
      { heading: 'The problem', body: 'Planning an outing can mean jumping between maps, food, activity and event platforms before a group can agree on a plan. Quick Planner explores bringing those early decisions into one guided flow.' },
      { heading: 'The experience', body: 'People can use GPS or enter a location manually, then shape suggestions around available time, budget, mood, who they are with and their interests.' },
      { heading: 'MVP boundaries', body: 'The concept focuses on curated planning and discovery, with hand-offs to services such as BookMyShow and Zomato for the next step. The MVP is designed without in-app payments or persistent personal-data storage.' },
      { heading: 'Product and technology planning', body: 'The planning work considered a React web-based admin experience, Java 17 with Spring Boot REST APIs and a lightweight session-based approach. These are proposed MVP architecture choices, not a claim of a completed production build.' }
    ],
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
    number: '06', type: 'HATCHABLE WEB BUILD', name: 'Creator Portfolio Website',
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
          {project.links.map(link => <a key={link.label} href={link.url} target="_blank" rel="noreferrer">{link.label}<ArrowUpRight size={14}/></a>)}<button onClick={() => onOpen(project)}>{project.details?.length ? 'View case study' : 'View overview'} <ArrowRight size={14}/></button>
        </div>
      </div>
    </article>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return <div className="modal-backdrop" onClick={onClose}>
    <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={e => e.stopPropagation()}>
      <button className="modal-close" onClick={onClose} aria-label="Close"><X size={19}/></button>
      <div className="section-label"><span/>{project.type}</div>
      <h2 id="project-modal-title">{project.name}</h2>
      <p className="modal-lead">{project.subtitle}</p>
      <p>{project.description}</p>
      {project.details?.length > 0 && <div className="modal-details">
        {project.details.map(item => <section className="modal-detail" key={item.heading}>
          <h3>{item.heading}</h3>
          <p>{item.body}</p>
        </section>)}
      </div>}
      <div className="modal-note"><b>Project stage</b><span>{project.status}</span></div>
      {project.links.map(link => <a className="modal-link" key={link.label} href={link.url} target="_blank" rel="noreferrer">{link.label}<ArrowUpRight size={15}/></a>)}
    </div>
  </div>;
}
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [activeToolIndex, setActiveToolIndex] = useState(0);
  const [toolsPaused, setToolsPaused] = useState(false);

  useEffect(() => {
    if (toolsPaused) return undefined;
    const timer = window.setInterval(() => {
      setActiveToolIndex(index => (index + 1) % toolGroups.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [toolsPaused]);

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (!('IntersectionObserver' in window)) return undefined;
    const selectors = [
      '.intro-grid > *', '.section-heading', '.project-card',
      '.timeline-item', '.toolkit-carousel', '.toolkit-disclaimer',
      '.about-mark', '.about-copy', '.contact-inner > *'
    ];
    const elements = document.querySelectorAll(selectors.join(','));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    elements.forEach(element => {
      element.classList.add('scroll-reveal');
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
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
          <p>I move between product discovery, collaboration, technical validation, data and AI-assisted prototyping — choosing the tool that fits the problem.</p>
        </div>
        {(() => {
          const activeGroup = toolGroups[activeToolIndex];
          const ActiveIcon = activeGroup.icon;
          return <div className="toolkit-carousel"
            onMouseEnter={() => setToolsPaused(true)}
            onMouseLeave={() => setToolsPaused(false)}
            onFocus={() => setToolsPaused(true)}
            onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setToolsPaused(false); }}>
            <div className="toolkit-carousel-top"><span>TOOLS & METHODS</span><span>0{activeToolIndex + 1} / 0{toolGroups.length}</span></div>
            <div className="toolkit-carousel-content" key={activeGroup.title}>
              <div className="toolkit-orbit"><ActiveIcon size={36}/><span className="orbit-ring orbit-ring-one"/><span className="orbit-ring orbit-ring-two"/></div>
              <div className="toolkit-carousel-copy">
                <div className="toolkit-active-label">CURRENTLY EXPLORING</div>
                <h3>{activeGroup.title}</h3>
                <p>Tools and working methods I use across product work and hands-on experiments.</p>
                <div className="tool-list">{activeGroup.tools.map(tool => <span key={tool}>{tool}</span>)}</div>
              </div>
            </div>
            <div className="toolkit-carousel-bottom">
              <div className="toolkit-tabs" role="group" aria-label="Select toolkit category">
                {toolGroups.map((group, index) => <button key={group.title} type="button"
                  className={index === activeToolIndex ? 'active' : ''}
                  aria-label={group.title} aria-pressed={index === activeToolIndex}
                  onClick={() => setActiveToolIndex(index)}><span/></button>)}
              </div>
              <span>{toolsPaused ? 'PAUSED · SELECT A CATEGORY' : 'AUTO-ROTATING · HOVER TO PAUSE'}</span>
            </div>
          </div>;
        })()}
        <div className="tool-grid tool-grid-compact">
          {toolGroups.map(group => {
            const Icon = group.icon;
            return <div className="tool-card" key={group.title}>
              <div className="tool-icon"><Icon size={19}/></div>
              <h3>{group.title}</h3>
              <div className="tool-list">{group.tools.map(tool => <span key={tool}>{tool}</span>)}</div>
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
