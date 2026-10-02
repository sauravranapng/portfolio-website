import { useState } from 'react';
import {
  SiOpenjdk, SiCplusplus, SiGo, SiSpringboot, SiApachekafka, SiApachecassandra,
  SiDocker, SiMongodb, SiPostgresql, SiMysql, SiJenkins, SiGrafana,
  SiOpentelemetry, SiDynatrace, SiFlyway, SiJunit5,
} from 'react-icons/si';

const profile = {
  name: 'Saurav Rana',
  email: 'sauravranabhari2002@gmail.com',
  phone: '+91 7467005727',
  linkedin: 'https://www.linkedin.com/in/sauravrana0403/',
  github: 'https://github.com/sauravranapng',
  scheduler: 'https://github.com/sauravranapng/Distributed-Scheduler',
};

const experience = [
  {
    dates: 'APR 2025 — PRESENT',
    title: 'Associate Software Engineer',
    company: 'GlobalLogic',
    group: 'Hitachi Group',
    label: 'SOFTWARE ENGINEERING',
    summary: 'Developing and supporting production backend services across a 15+ microservice ecosystem.',
    highlights: [
      'Built and maintained 50+ REST APIs with Java, Spring Boot, PostgreSQL, and Cassandra.',
      'Implemented Kafka workflows across 6 services and added Resilience4j circuit breakers, retries, and fallbacks.',
      'Reduced API response latency by 25–30% through PostgreSQL query, index, and connection-pool optimization.',
      'Improved production observability with OpenTelemetry, Dynatrace, and Grafana; resolved 2,000+ SonarQube issues.',
    ],
  },
  {
    dates: 'AUG 2024 — APR 2025',
    title: 'Trainee Software Engineer',
    company: 'GlobalLogic',
    group: 'Hitachi Group',
    label: 'EARLY CAREER',
    summary: 'Delivered backend features and internal workflow improvements with a focus on secure APIs and data systems.',
    highlights: [
      'Cut Excel and PDF generation time from 30 seconds to under 2 seconds with multithreading.',
      'Designed PostgreSQL schemas, 15+ SQL scripts, repository implementations, and Flyway migrations.',
      'Built role-secured REST APIs, integrated Amazon S3, and supported delivery through Jenkins CI/CD.',
      'Added JUnit and Mockito tests; received the Spotlight of the Month award for backend performance improvements.',
    ],
  },
];

const impact = [
  { title: 'Coordinate safely', body: 'ZooKeeper leader election and dynamic segment assignment prevent duplicate work across scheduler instances.' },
  { title: 'Decouple execution', body: 'Kafka events connect scheduling and worker services in a scalable, asynchronous pipeline.' },
  { title: 'Recover consistently', body: 'Cassandra data models and Saga-style compensation support recurring schedules and consistent state.' },
];

const skills = [
  { title: 'Languages', values: ['Java', 'C++', 'SQL', 'Go'] },
  { title: 'Backend & messaging', values: ['Spring Boot', 'REST APIs', 'Microservices', 'Kafka', 'Resilience4j', 'Spring Data JPA'] },
  { title: 'Data & storage', values: ['PostgreSQL', 'Cassandra', 'MySQL', 'MongoDB'] },
  { title: 'Platform & tooling', values: ['Docker', 'Jenkins', 'ZooKeeper', 'Grafana', 'OpenTelemetry', 'Dynatrace', 'Flyway', 'JUnit', 'Mockito'] },
];

const recognition = [
  { value: '470', label: 'AIR · Meta Hacker Cup 2023' },
  { value: '189', label: 'Global rank · CodeChef Starters 61' },
  { value: '1873', label: 'LeetCode rating · Knight' },
  { value: '1435', label: 'Codeforces rating · Specialist' },
];

const technologyIcons = {
  Java: SiOpenjdk, 'C++': SiCplusplus, Go: SiGo, 'Spring Boot': SiSpringboot,
  Kafka: SiApachekafka, Cassandra: SiApachecassandra, Docker: SiDocker,
  MongoDB: SiMongodb, PostgreSQL: SiPostgresql, MySQL: SiMysql,
  Jenkins: SiJenkins, Grafana: SiGrafana, OpenTelemetry: SiOpentelemetry,
  Dynatrace: SiDynatrace, Flyway: SiFlyway, JUnit: SiJunit5,
};

const technologyColors = {
  Java: '#f89820', 'C++': '#00599c', Go: '#00add8', 'Spring Boot': '#6db33f',
  Kafka: '#231f20', Cassandra: '#1287b1', Docker: '#2496ed', MongoDB: '#47a248',
  PostgreSQL: '#4169e1', MySQL: '#4479a1', Jenkins: '#d24939', Grafana: '#f46800',
  OpenTelemetry: '#b87800', Dynatrace: '#1496ff', Flyway: '#cc0200', JUnit: '#25a162',
  ZooKeeper: '#d64e59', SQL: '#536e7a', 'REST APIs': '#315ccf', Microservices: '#7252a5',
  Resilience4j: '#47775a', 'Spring Data JPA': '#659b43', Mockito: '#527061',
};

const technologyMarks = {
  SQL: 'DB', 'REST APIs': 'API', Microservices: 'µS', Resilience4j: 'R4',
  'Spring Data JPA': 'JPA', ZooKeeper: 'ZK', Mockito: 'M',
};

function TechnologySymbol({ name, className = '' }) {
  const Icon = technologyIcons[name];
  const style = { color: technologyColors[name] ?? 'currentColor' };
  if (Icon) return <Icon className={className} aria-hidden="true" style={style} />;
  if (name === 'ZooKeeper') {
    return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" style={style}><path d="M12 5v6M12 11H6m6 0h6M6 11v7m12-7v7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="4" r="2" fill="currentColor"/><circle cx="6" cy="19" r="2" fill="currentColor"/><circle cx="18" cy="19" r="2" fill="currentColor"/><circle cx="12" cy="11" r="2" fill="currentColor"/></svg>;
  }
  return <span className={`tech-symbol-fallback ${className}`} aria-hidden="true" style={style}>{technologyMarks[name] ?? name.slice(0, 2)}</span>;
}

function TechnologyBadge({ name }) {
  return <span className="tech-badge"><TechnologySymbol name={name} className="tech-symbol" /><span>{name}</span></span>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="site-header wrap">
      <a className="brand" href="#home" aria-label="Saurav Rana, home"><span className="brand-mark">SR</span><span>SAURAV RANA<span className="brand-period">.</span></span></a>
      <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="site-nav" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen((open) => !open)}><span /><span /></button>
      <nav className={`nav${menuOpen ? ' is-open' : ''}`} id="site-nav" aria-label="Main navigation">
        <a href="#work" onClick={closeMenu}>Projects</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#about" onClick={closeMenu}>About</a><a href="#contact" className="nav-cta" onClick={closeMenu}>Get in touch <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}

function SystemsDiagram() {
  return (
    <div className="hero-visual" role="img" aria-label="Illustration of distributed services communicating through an event stream">
      <div className="visual-topline"><span>SYSTEMS / 01</span><span>BUILT TO RESILIENCE</span></div>
      <div className="diagram">
        <div className="diagram-label label-top">EVENT-DRIVEN ARCHITECTURE</div>
        <div className="node node-api"><span className="node-icon">{'{ }'}</span><b>API GATEWAY</b><small>REST · JAVA</small></div>
        <div className="node node-job"><span className="node-icon tech-icon-node"><TechnologySymbol name="Spring Boot" className="tech-symbol" /></span><b>JOB SERVICE</b><small>SPRING BOOT</small></div>
        <div className="node node-kafka"><span className="node-icon tech-icon-node"><TechnologySymbol name="Kafka" className="tech-symbol" /></span><b>EVENT STREAM</b><small>APACHE KAFKA</small></div>
        <div className="node node-worker"><span className="node-icon">⌘</span><b>WORKERS</b><small>ASYNC EXECUTION</small></div>
        <div className="node node-store"><span className="node-brand-icons"><TechnologySymbol name="PostgreSQL" className="tech-symbol" /><TechnologySymbol name="Cassandra" className="tech-symbol" /></span><b>DATA LAYER</b><small>POSTGRES · CASSANDRA</small></div>
        <svg className="connectors" viewBox="0 0 500 340" aria-hidden="true"><path d="M112 112 H185 M265 112 H332 M373 144 V207 M332 241 H265 M185 241 H112 M112 144 V208" /><circle cx="149" cy="112" r="3" /><circle cx="298" cy="112" r="3" /><circle cx="373" cy="176" r="3" /><circle cx="298" cy="241" r="3" /></svg>
        <div className="diagram-label label-bottom">RELIABLE BY DESIGN <span>●</span> OBSERVABLE IN PRODUCTION</div>
      </div>
      <div className="visual-footer"><span>JAVA ECOSYSTEM</span><span className="visual-dot" /><span>DISTRIBUTED SYSTEMS</span><span className="visual-dot" /><span>PRODUCTION READY</span></div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero wrap" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> BACKEND ENGINEER <span className="eyebrow-divider">/</span> JAVA · SPRING BOOT · KAFKA</p>
        <h1 id="hero-title">I build systems<br />that <span className="accent-text">keep moving.</span></h1>
        <p className="intro">I’m Saurav, a backend engineer focused on dependable services, event-driven architecture, and the engineering details that make systems scale.</p>
        <div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <span aria-hidden="true">↘</span></a><a className="underlined-link" href="#experience">My experience</a></div>
        <div className="hero-proof"><div><strong>15<span>+</span></strong><small>MICROSERVICES</small></div><div><strong>50<span>+</span></strong><small>REST API ENDPOINTS</small></div><div><strong>30<span>%</span></strong><small>LOWER API LATENCY</small></div></div>
      </div>
      <SystemsDiagram />
    </section>
  );
}

function SectionHeading({ eyebrow, title, index }) {
  return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div><span className="section-index">{index}</span></div>;
}

function ProjectSection() {
  return (
    <section className="section wrap" id="work" aria-labelledby="work-title">
      <SectionHeading eyebrow="SELECTED PROJECT" title="Distributed Task Scheduler" index="01 / PROJECT" />
      <article className="feature-card">
        <div className="feature-copy"><p className="project-kicker">PERSONAL PROJECT <span>·</span> NOV 2024 — ONGOING</p><h3>A fault-tolerant<br />engine for scheduled work.</h3><p className="feature-description">A distributed job scheduling platform designed to run recurring tasks reliably across multiple service instances—without duplicate execution.</p><a className="repo-link" href={profile.scheduler} target="_blank" rel="noreferrer">View source on GitHub <span aria-hidden="true">↗</span></a></div>
        <div className="architecture" aria-label="Job service publishes a Kafka event, scheduler coordinates ownership through ZooKeeper, and executor workers run tasks with Cassandra persistence">
          <div className="arch-caption"><span>EXECUTION FLOW</span><span>AT A GLANCE</span></div>
          <div className="arch-flow"><div className="arch-node"><span className="arch-node-top"><i>01</i><TechnologySymbol name="Spring Boot" className="arch-brand" /></span><b>Job Service</b><small>CREATE &amp; VALIDATE</small></div><span className="flow-arrow">→</span><div className="arch-node arch-active"><span className="arch-node-top"><i>02</i><TechnologySymbol name="Kafka" className="arch-brand" /></span><b>Kafka</b><small>JOB EXECUTION EVENT</small></div><span className="flow-arrow">→</span><div className="arch-node"><span className="arch-node-top"><i>03</i><TechnologySymbol name="ZooKeeper" className="arch-brand" /></span><b>Scheduler</b><small>LEADER + SEGMENTS</small></div><span className="flow-arrow">→</span><div className="arch-node"><span className="arch-node-top"><i>04</i><TechnologySymbol name="Docker" className="arch-brand" /></span><b>Executor</b><small>RUN &amp; PERSIST</small></div></div>
          <div className="arch-foundation"><span><span className="foundation-label"><TechnologySymbol name="ZooKeeper" className="foundation-brand" /> COORDINATION</span><b>ZooKeeper · Curator</b></span><span><span className="foundation-label"><TechnologySymbol name="Cassandra" className="foundation-brand" /> STORAGE</span><b>Apache Cassandra</b></span><span><span className="foundation-label"><TechnologySymbol name="Docker" className="foundation-brand" /> ORCHESTRATION</span><b>Docker Compose</b></span></div>
        </div>
      </article>
      <div className="impact-grid">{impact.map((item, index) => <article key={item.title}><span className="impact-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="section experience-section" id="experience" aria-labelledby="experience-title"><div className="wrap"><SectionHeading eyebrow="THE WORK SO FAR" title="Experience & education" index="2020 — NOW" />
      <div className="timeline">{experience.map((item) => <article className="timeline-item" key={item.title}><div className="timeline-date">{item.dates}</div><div className="timeline-main"><div className="timeline-title"><div><h3>{item.title}</h3><p className="timeline-company">{item.company} <span>·</span> {item.group}</p></div><span className="timeline-location">{item.label}</span></div><p className="timeline-summary">{item.summary}</p><ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div></article>)}
        <article className="timeline-item education-item"><div className="timeline-date">JUL 2020 — DEC 2024</div><div className="timeline-main"><div className="timeline-title"><div><h3>B.Tech, Electronics &amp; Communication Engineering</h3><p className="timeline-company">Birla Institute of Technology, Mesra <span>·</span> Ranchi</p></div><span className="education-score">8.7 <small>CGPA</small></span></div></div></article>
      </div>
    </div></section>
  );
}

function SkillsSection() {
  return (
    <section className="section wrap" id="about" aria-labelledby="about-title"><SectionHeading eyebrow="TOOLS OF THE TRADE" title="What I work with" index="THE TOOLKIT" />
      <div className="skills-grid">{skills.map((group, index) => <article className="skill-group" key={group.title}><div className="skill-icon">0{index + 1}</div><h3>{group.title}</h3><div className="skill-list">{group.values.map((skill) => <TechnologyBadge name={skill} key={skill} />)}</div></article>)}</div>
    </section>
  );
}

function RecognitionSection() {
  return (
    <section className="recognition-section"><div className="wrap"><SectionHeading eyebrow="OUTSIDE THE DAY JOB" title="Milestones & recognition" index="A FEW HIGHLIGHTS" /><div className="recognition-grid">{recognition.map((item) => <article className="recognition-card" key={item.label}><span className="recognition-value">{item.value}</span><p>{item.label}</p></article>)}</div><div className="credential-row"><span>ALSO</span><p>AWS Certified Developer — Associate <i>·</i> GP Birla Scholarship Awardee <i>·</i> 97.9 percentile, JEE Main 2020 <i>·</i> CodeChef rating 1713</p></div></div></section>
  );
}

function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="wrap contact-inner"><div><p className="eyebrow">OPEN TO GOOD ENGINEERING CHALLENGES</p><h2 id="contact-title">Let’s build something<br /><span>reliable.</span></h2><p className="contact-note">Have a backend problem worth solving? I’d like to hear about it.</p></div><a className="button button-lime" href={`mailto:${profile.email}`}>Start a conversation <span aria-hidden="true">↗</span></a></div><div className="wrap contact-links"><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={`tel:${profile.phone.replaceAll(' ', '')}`}>{profile.phone}</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a></div></section>
  );
}

function Footer() {
  return <footer className="site-footer"><div className="wrap footer-inner"><a className="footer-brand" href="#home">SAURAV RANA<span>.</span></a><span>BACKEND ENGINEERING · JAVA · DISTRIBUTED SYSTEMS</span><a href="#home">BACK TO TOP ↑</a><span>© {new Date().getFullYear()}</span></div></footer>;
}

export default function App() {
  return <><Header /><main id="home"><Hero /><ProjectSection /><ExperienceSection /><SkillsSection /><RecognitionSection /><ContactSection /></main><Footer /></>;
}

