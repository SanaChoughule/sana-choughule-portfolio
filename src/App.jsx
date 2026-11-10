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
    description: 'An independent accommodation-discovery concept shaped around traveller-selected arrival points and Trip Places. The case study documents the product opportunity, user journeys, PRD, prioritised Jira stories, UX flows and key product decisions.',
    tags: ['Product strategy', 'PRD & requirements', 'Jira backlog', 'User journeys'],
    status: 'Independent case study · Product discovery & PRD',
    links: [],
    details: [
      { heading: 'Product opportunity', body: 'Accommodation location is only one part of a trip decision. Travellers also need to understand how a property relates to their own arrival point and the places they have chosen to visit.' },
      { heading: 'Product approach', body: 'Let travellers select an arrival point and add up to 10 Trip Places, then review neutral distance and travel-time context and compare properties without an overall fit score or algorithmic winner.' },
      { heading: 'Product work', body: 'Defined the problem, product principles, PRD, user journeys, prioritised Jira epics and stories, acceptance criteria and UX flows. The case study focuses on the reasoning behind the product decisions and the scope of the proposed experience.' },
      { heading: 'Current status & constraints', body: 'Independent product discovery case study. The proposed experience and its dependencies are documented here; no launched product, live routing, booking, payment or backend integration is being claimed.' }
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
  },
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
    number: '04', type: 'UNIFIED PLANNING PRODUCT · CASE STUDY', name: 'PlanIt — Quick Planner',
    subtitle: 'One planning space for outings, daily schedules and everything you want to make time for.',
    description: 'A unified planning concept that brings outing planning and everyday productivity into one experience. It combines context-aware outing ideas with task scheduling, prioritisation, focus sessions, habit tracking and weekly insights—helping people organise both where they want to go and how they want to use their time.',
    tags: ['Product discovery', 'Outing planning', 'Time blocking', 'Priority management', 'Focus & habits'],
    status: 'Unified product concept · Two interactive flow previews',
    links: [
      { label: 'Explore outing planning flow', url: '/planit-outing.html' },
      { label: 'Explore daily planning flow', url: '/quick-planner.html' },
      { label: 'View GitHub repository', url: 'https://github.com/SanaChoughule/quick-planner' }
    ],
    details: [
      { heading: 'The opportunity', body: 'Planning a date or outing often means moving between maps, restaurant discovery, movie listings, activity options, weather and booking platforms before a group can settle on a plan. PlanIt explores bringing the planning decisions together in one simple mobile experience, so people can move from an idea to a practical itinerary with less effort.' },
      { heading: 'Product vision and objective', body: 'Build an Android and iOS app that creates a single curated, step-by-step outing plan based on the person’s current or manually entered location, available time, budget, mood, company and activity preferences. The plan is intended to connect several complementary stops, such as a cafe or restaurant, a movie or activity, and a final dessert, walk, gallery or seaside visit.' },
      { heading: 'Onboarding and preference setup', body: 'The proposed four-screen onboarding flow asks what kinds of outings users enjoy (food and cafes, movies, adventure, art and culture, gaming, nature or seaside), which Mumbai areas they visit most often, how frequently they go out (weekly, monthly or occasionally), and whether they prefer indoor, outdoor or mixed activities. Answers are held locally or in the session and used to personalise the dashboard.' },
      { heading: 'Personalised dashboard', body: 'The dashboard brings suggested outing plans into one place and offers four entry points: Plan a Date, Plan with Friends, Solo Plan and Custom Plan. Users can refine discovery with budget, time, mood, distance and indoor/outdoor filters. The onboarding preferences provide an initial relevance lens rather than locking users into a fixed type of outing.' },
      { heading: 'Location and planning inputs', body: 'Users can grant permission to use live GPS or enter a location manually. Before generating a plan, they can set a budget range, available time window, mood (romantic, relaxed, fun or adventurous), company type (friends, partner, family or solo), maximum travel distance and indoor/outdoor preference. Location is then used to discover nearby places and present distance, estimated travel time and directions.' },
      { heading: 'The curated outing plan', body: 'The core experience generates one multi-step plan rather than a disconnected list of places. A sample sequence could include a cafe or restaurant, a movie, gaming or another activity, followed by dessert, a walk, gallery or seaside stop. Each place is intended to show its name, short description, distance, best time to visit, opening hours, map directions and relevant third-party booking or information link.' },
      { heading: 'Supported discovery categories', body: 'The proposed categories include restaurants and cafes, movies, gaming zones, adventure activities, seaside locations, art galleries and cultural spaces. The concept is designed to extend to additional cities and categories over time, while keeping the plan organised around the user’s selected context.' },
      { heading: 'Custom Plan mode and user control', body: 'Users can replace an activity, reorder stops, switch between indoor and outdoor options, and change budget or available time without restarting the entire planning journey. This makes the generated plan an editable starting point, not a fixed recommendation that users have to accept as-is.' },
      { heading: 'Favorites and session-level suggestions', body: 'Users can mark places as favourites. Those selections are intended to influence suggestions during later planning sessions using local or session storage. The brief also proposes anonymised session-level signals—such as preferred activity types, budget ranges and time preferences—to refine suggestions while clearing that information when the session expires.' },
      { heading: 'Season and context awareness', body: 'The concept uses time-of-day, season and weather context to adjust the types of plans surfaced. For example, rainy conditions could make indoor options more relevant, while evening plans could place greater emphasis on cafes and movies. These contextual suggestions depend on reliable live data sources and are part of the proposed experience, not verified integrations.' },
      { heading: 'Booking and navigation hand-off', body: 'PlanIt is not intended to process payments or store bookings. Booking and navigation actions redirect users to external services such as Zomato, BookMyShow and Google Maps, or other relevant providers. The third-party service remains responsible for the booking, payment and navigation transaction.' },
      { heading: 'Privacy and data boundaries', body: 'The product brief explicitly excludes a permanent user database and permanent storage of personal user data. Onboarding answers, favourites and session preferences are intended to remain in local, session or in-memory storage and be cleared when the session expires. Location access requires user permission, with manual location entry available as an alternative.' },
      { heading: 'Proposed platform and architecture', body: 'The mobile frontend is planned for React Native (preferred) or Flutter, with a Java Spring Boot backend exposing REST APIs. The architecture is intended to use session-based or in-memory data only, with no persistent user database. The final choice between React Native and Flutter, and the exact live-data providers, remains to be confirmed.' },
      { heading: 'Non-functional requirements', body: 'The stated plan-generation target is under three seconds. The experience should provide smooth mobile interactions, use a modular and maintainable architecture, protect user privacy and be straightforward to extend to additional cities. These are requirements and targets; no measured performance or production outcome is being claimed here.' },
      { heading: 'Dependencies and validation still required', body: 'The intended experience depends on reliable place discovery, distance and travel-time estimates, map directions, current opening hours, weather and third-party redirect links. Provider selection, API coverage, accuracy, rate limits, availability of real-time data and graceful behaviour when a provider is unavailable still need validation. The exact retention behaviour for locally stored favourites and session preferences also needs a final product decision.' },
      { heading: 'Project status', body: 'This case study documents the product vision, user flows, functional scope, privacy boundaries and proposed technology from the planning brief. An interactive browser prototype is available to explore the planning journey and basic itinerary editing. It is a concept preview, not the native Android/iOS app: live place discovery, route estimates, weather, opening hours and booking integrations are not connected, and sample recommendations, costs and timings are illustrative.' },
      { heading: 'Everyday planning and time blocking', body: 'The daily-planning side adds a seven-day timeline, task capture and time-blocked scheduling. Users can inspect their day, move between dates, mark planned blocks complete and auto-schedule unscheduled tasks into open time.' },
      { heading: 'Priorities, focus and habits', body: 'The workspace also includes an Eisenhower priority matrix with Kanban and list views, timed focus and rest cycles, and habit check-ins with streak tracking. These tools complement the outing flow by helping users organise commitments and protect time for the plans they make.' },
      { heading: 'Weekly insights and prototype scope', body: 'A velocity view summarises task completion, focus time and habit consistency, with copyable summaries and JSON export. The two browser previews demonstrate the outing-planning and daily-planning flows as parts of one product concept. They use illustrative/sample data and do not represent a single connected production service.' },
    ],
    visual: 'quickplanner'
  },
  {
    number: '05', type: 'STAKEHOLDER CONTEXT · PRODUCT CASE STUDY',
    name: 'PortfolioPilot',
    subtitle: 'Reducing the invisible work behind keeping a creative portfolio current.',
    description: 'A photographer-focused product case study exploring how creators can move new work into a structured, up-to-date professional portfolio with less repetitive administration. The work focuses on stakeholder needs, problem framing, product decisions and MVP priorities—not a launched product.',
    tags: ['Stakeholder context', 'Problem discovery', 'Product strategy', 'MVP prioritisation'],
    status: 'Independent case study · Product discovery & PRD',
    links: [{ label: 'Open interactive prototype', url: '/portfolio-agent.html' }],
    details: [
      { heading: '01 — Stakeholder context', body: 'The primary stakeholder is an independent photographer or videographer who manages their own professional website alongside a steady stream of new creative work. Their latest projects are often shared on social platforms because publishing there is quick, while the portfolio website—the place prospective clients use to review their work—can become outdated. They need a professional presence that stays current without taking time away from shooting, editing and client work. Secondary stakeholders include creative teams and agencies managing multiple portfolios, and prospective clients who need to browse work clearly and confidently.' },
      { heading: '02 — The problem to solve', body: 'Publishing a new project in one place does not automatically update a creator’s professional portfolio. A creator may still need to locate the original media, upload it to a website CMS, create a thumbnail, write a title and description, add tags, select a category, adjust the grid, check mobile presentation, publish and verify the result. The same administrative sequence repeats for each new project and creates context switching, duplicated effort and inconsistent portfolio freshness.' },
      { heading: '03 — Product opportunity', body: 'The opportunity is to connect content creation with portfolio maintenance through one guided workflow. Instead of treating each portfolio update as a separate website-editing task, the product would turn a new media asset into a review-ready portfolio entry, while keeping the creator’s editorial choices and visual identity intact. The concept is an intelligent portfolio management workflow—not another social scheduling tool.' },
      { heading: '04 — Product vision and intended value', body: 'PortfolioPilot aims to help creative professionals keep their best work organised and presentable with less manual effort. A creator can bring in new work, receive suggested metadata and categorisation, review the presentation and publish it to the portfolio. The intended value is a more current professional website, less repetitive administration and more control over how creative work is represented. These are product hypotheses to validate with users, not measured outcomes.' },
      { heading: '05 — Key product decisions', body: 'Direct media upload is the dependable primary ingestion path; an Instagram URL is a convenience only when retrieval is supported and authorised, with direct upload offered as a fallback. AI should recommend titles, descriptions, tags and categories rather than silently taking over the portfolio. Categories should come from the creator’s own taxonomy. Portfolio content should remain separate from website presentation so new work can be added without unexpectedly changing the established design. Human review and approval should remain available before publishing.' },
      { heading: '06 — MVP focus and prioritisation', body: 'The first release should focus on the smallest complete workflow: create a portfolio workspace, configure a small set of creator-defined categories, upload an image or video, validate and process the media, generate a thumbnail and metadata suggestions, review and edit those suggestions, publish or save as a draft, and manage the resulting portfolio items. Advanced agency workspaces, multi-portfolio management, custom domains, deep analytics and broader social publishing can follow after the core workflow is validated.' },
      { heading: '07 — Stakeholder needs and success measures', body: 'Creators need time savings without losing control of their work or brand. Prospective clients need a clear, current and easy-to-navigate portfolio. A product or operations owner needs dependable processing, understandable failure states and protection against duplicate or incomplete publishing. Proposed measures include upload-to-publish time, successful processing rate, acceptance of AI category suggestions, metadata correction rate, manual steps per upload, website update latency and duplicate-publish rate. These are validation measures and targets to establish—not achieved results.' },
      { heading: '08 — Risks and open questions', body: 'Instagram media access is restricted and cannot be assumed; file size, format and processing time need clear limits; AI suggestions need confidence checks and a simple correction path; storage, privacy and retention rules need to be explicit; and different portfolio website stacks may require different publishing integrations. These dependencies should be tested before committing to production scope or promising full automation.' },
      { heading: '09 — Learning and current status', body: 'The central product insight is that the problem is not simply creating captions or generating thumbnails. It is the gap between producing creative work and maintaining the professional portfolio that represents it. Automation is valuable only when it removes repetitive administration while preserving the creator’s ownership of selection, categorisation and presentation. This is an independent product discovery and PRD case study; it does not claim a completed, launched or production-integrated product.' }
    ],
    visual: 'automation'
  },
  {
    number: '06', type: 'LIVE CREATOR WEBSITE · HATCHABLE BUILD', name: 'Creator Portfolio Website',
    subtitle: 'A digital home for an automotive engineer, motorcycle enthusiast and content creator.',
    description: 'Designed and built a live portfolio website for an automotive creator, bringing his motorcycle and automotive video work, audience highlights, personal story, creative process, photography and collaboration information into one focused experience.',
    tags: ['Hatchable build', 'Creator portfolio', 'Content architecture', 'Responsive website'],
    status: 'Live website · Delivered independent build',
    links: [{ label: 'Visit Siddharth’s portfolio', url: 'https://siddharth-creator.hatchable.site' }],
    details: [
      { heading: 'The brief', body: 'Create a dedicated online home for an automotive engineer and motorcycle-focused Instagram creator whose work includes automotive reels, rider awareness, motorcycle parts and accessories, restoration stories, product and service features, and visual experiments.' },
      { heading: 'Positioning and first impression', body: 'The site opens with the positioning “Built on horsepower. Driven by stories.” and introduces the creator through automotive culture, storytelling and Mumbai. The hero leads visitors towards the selected work and Instagram profile.' },
      { heading: 'Selected work and content discovery', body: 'A featured work grid links directly to seven original Instagram reels, including a high-performing automotive reel, Splendor restoration, BikersDNA service content, a custom workshop feature, a film-inspired visual experiment, an automotive explainer and a creator showreel.' },
      { heading: 'Creator profile and credibility', body: 'The About section introduces Siddharth as an automobile engineer, motorcycle enthusiast, videographer, editor and scriptwriter. The website also displays profile views, a featured-reel view count, follower count and post count as creator-provided audience highlights.' },
      { heading: 'Creative process and capabilities', body: 'A four-step approach explains how he finds a real story, writes the hook, shoots with intention and edits for attention. The toolkit section highlights short-form video, videography, editing, scriptwriting, storytelling, camera framing, automotive knowledge, product promotion and Reels strategy.' },
      { heading: 'Photography and collaboration', body: 'A dedicated photo gallery showcases automotive photography and riding-gear details. The contact section provides paths for content creation, videography, editing, scripting and brand collaborations, alongside Instagram, YouTube and direct contact options.' },
      { heading: 'My contribution and delivery', body: 'I created the website structure and presentation using Hatchable, bringing the creator’s positioning, selected work, personal story, process, visual assets and contact paths into a single responsive portfolio. This is a delivered, live website build, separate from the unfinished photographer Portfolio Automation Agent concept.' },
      { heading: 'Project status', body: 'Live website: siddharth-creator.hatchable.site. The audience figures displayed on the website are presented as creator-supplied highlights; they have not been independently audited as part of this portfolio case study.' }
    ],
    visual: 'creator'
  },

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
        {project.visual === 'stay' && <><div className="stay-case-map" aria-hidden="true"><span className="route route-one"/><span className="route route-two"/><span className="map-point point-arrival">A</span><span className="map-point point-stay">S</span><span className="map-point point-place">P</span></div><div className="stay-case-study-mark"><small>PRODUCT CASE STUDY</small><strong>STAY<br/>CONTEXT</strong><span>ARRIVAL · ACCOMMODATION · TRIP PLACES</span></div><div className="visual-label stay-visual-label">STAY CONTEXT · PRODUCT DISCOVERY</div></>}
        {project.visual === 'pulse' && <><img className="pulse-cover" src="/images/pulsedaily-dashboard.webp" alt="PulseDaily AI personalised Morning Brief dashboard"/><div className="pulse-cover-label">PULSE // DAILY · THE AI WIRE</div></>}
        {project.visual === 'news' && <><div className="news-card"><b>THE DAILY BRIEF</b><span/><span/><span/><small>AI · SIGNAL · CONTEXT</small></div></>}
        {project.visual === 'plan' && <><div className="plan-circle">PLAN<br/>YOUR<br/>DAY</div><div className="plan-dot p1"/><div className="plan-dot p2"/><div className="plan-dot p3"/></>}
        {project.visual === 'quickplanner' && <><img className="quickplanner-cover" src="/images/quick-planner-thumbnail.svg" alt="QuickPlanner midnight neon productivity planner logo and project thumbnail" loading="lazy"/><div className="visual-label quickplanner-visual-label">QUICKPLANNER · PRODUCTIVITY WORKSPACE</div></>}
        {project.visual === 'automation' && <><img className="automation-cover automation-logo-cover" src="/images/portfolio-pilot-thumbnail.svg" alt="PortfolioPilot AI portfolio automation agent thumbnail" loading="lazy"/><div className="visual-label automation-visual-label">PORTFOLIOPILOT · AI PORTFOLIO AGENT</div></>}
        {project.visual === 'kala' && <><img className="kalamitra-cover kalamitra-logo-cover" src="/images/kalamitra-logo-thumbnail.webp" alt="KalaMitra logo in English and Marathi, centred on a warm neutral background" loading="lazy"/><div className="visual-label kala-visual-label">KALAMITRA · HANDMADE WITH HEART</div></>}
        {project.visual === 'creator' && <><img className="creator-cover" src="/images/creator-portfolio-hero.webp" alt="Siddharth's live creator portfolio homepage featuring the Built on Horsepower, Driven by Stories hero and motorcycle rider photograph" loading="lazy"/><div className="visual-label creator-visual-label">LIVE CREATOR WEBSITE · MUMBAI</div></>}
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
      {project.name === 'PulseDaily AI' && <section className="pulse-gallery" aria-label="PulseDaily AI product screenshots">
        <div className="pulse-gallery-heading"><span>SELECTED PRODUCT SCREENS</span><small>Open an image to view it larger</small></div>
        <div className="pulse-gallery-grid">
          <a className="pulse-shot pulse-shot-dashboard" href="/images/pulsedaily-dashboard.webp" target="_blank" rel="noreferrer">
            <img src="/images/pulsedaily-dashboard.webp" alt="PulseDaily AI Morning Brief dashboard showing the personalised feed, featured dispatches and breaking radar" loading="lazy"/>
            <span>02 / THE MORNING BRIEF</span>
          </a>
          <a className="pulse-shot pulse-shot-persona" href="/images/pulsedaily-persona.webp" target="_blank" rel="noreferrer">
            <img src="/images/pulsedaily-persona.webp" alt="PulseDaily AI onboarding screen for selecting a professional persona" loading="lazy"/>
            <span>01 / PERSONA ONBOARDING</span>
          </a>
        </div>
      </section>}
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
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const updateScroll = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const root = document.documentElement;
        const maxScroll = Math.max(1, root.scrollHeight - window.innerHeight);
        const currentScroll = Math.max(0, window.scrollY || 0);
        setScrollProgress(Math.min(1, currentScroll / maxScroll));
        root.style.setProperty('--scroll-parallax-a', `${Math.round(currentScroll * -0.035)}px`);
        root.style.setProperty('--scroll-parallax-b', `${Math.round(currentScroll * 0.022)}px`);
      });
    };
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
      if (frame) window.cancelAnimationFrame(frame);
      document.documentElement.style.removeProperty('--scroll-parallax-a');
      document.documentElement.style.removeProperty('--scroll-parallax-b');
    };
  }, []);

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
    elements.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${(index % 4) * 85}ms`);
      element.classList.add('scroll-reveal');
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  const closeMenu = () => setMenuOpen(false);
  const nav = [['Work','#work'],['Journey','#journey'],['Toolkit','#toolkit'],['About','#about']];
  return <>
    <div className="scroll-progress" role="progressbar" aria-label="Page scroll progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow={Math.round(scrollProgress * 100)}>
      <span style={{ transform: `scaleX(${scrollProgress})` }}/>
    </div>
    <header className="site-header">
      <a className="brand" href="#top" onClick={closeMenu} aria-label="Sana Choughule — home">Sana Choughule<span>.</span></a>
      <nav className={menuOpen ? 'nav open' : 'nav'}>
        {nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s connect <ArrowUpRight size={14}/></a>
      </nav>
      <div className="header-socials" aria-label="Quick contact links">
        <a href="https://linkedin.com/in/sana-choughule" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" title="LinkedIn"><Linkedin size={16}/></a>
        <a href="https://github.com/SanaChoughule" target="_blank" rel="noreferrer" aria-label="GitHub profile" title="GitHub"><Github size={16}/></a>
        <a href="mailto:choughulesana@gmail.com" aria-label="Email Sana" title="Email"><Mail size={16}/></a>
        <a href="/assets/Sana-Choughule-Resume.pdf" target="_blank" rel="noreferrer" aria-label="Open résumé" title="Résumé"><FileText size={16}/></a>
      </div>
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
