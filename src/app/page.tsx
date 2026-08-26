import {
  awards,
  education,
  navLinks,
  profile,
  projects,
  publicLinks,
  roles,
  skills,
  type Metric,
  type Project,
  type Role,
  type SkillGroup,
} from "@/data/cv";
import { ContactCopyButton } from "./contact-copy-button";

function Badge({ label }: { label: string }) {
  return <span className="badge">{label}</span>;
}

function TechList({ items, label }: { items: string[]; label: string }) {
  return (
    <div className="tech-list" aria-label={label}>
      {items.map((t) => (
        <Badge key={t} label={t} />
      ))}
    </div>
  );
}

function Section(p: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={p.id} className="section">
      <div className="section-inner">
        <h2>{p.title}</h2>
        {p.children}
      </div>
    </section>
  );
}

function SkillCard({ group }: { group: SkillGroup }) {
  return (
    <article className="skill-card">
      <div className="skill-card-top">
        <i className={group.icon} aria-hidden="true" />
        <h3>{group.title}</h3>
      </div>
      <p>{group.items.join(", ")}</p>
    </article>
  );
}

function MetricCard({ metric }: { metric: Metric }) {
  return (
    <article className="metric-card">
      <strong>{metric.value}</strong>
      <span>{metric.label}</span>
      <p>{metric.note}</p>
    </article>
  );
}

function RoleItem({
  role,
  isMinswap = false,
}: {
  role: Role;
  isMinswap?: boolean;
}) {
  return (
    <article
      className={isMinswap ? "role-card role-card-featured" : "role-card"}
    >
      <div className="item-top">
        <div>
          <h3>{role.company}</h3>
          <p>{role.title}</p>
        </div>
        <span>{role.period}</span>
      </div>

      {isMinswap ? (
        <div className="metric-grid" aria-label="Minswap impact metrics">
          {role.metrics?.map((m) => (
            <MetricCard key={m.label} metric={m} />
          ))}
        </div>
      ) : null}

      <ul className="point-list">
        {role.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <TechList items={role.tech} label={`${role.company} tech stack`} />
    </article>
  );
}

function ProjectItem({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="item-top">
        <div>
          <h3>{project.name}</h3>
          <p>{project.title}</p>
        </div>
      </div>
      <ul className="point-list">
        {project.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <TechList items={project.tech} label={`${project.name} tech stack`} />
    </article>
  );
}

function ContactRow(p: {
  href: string;
  icon: string;
  label: string;
  value?: string;
  copyLabel?: string;
  external?: boolean;
}) {
  return (
    <div className="contact-row">
      <a
        href={p.href}
        target={p.external ? "_blank" : undefined}
        rel={p.external ? "noopener noreferrer" : undefined}
      >
        <i className={p.icon} aria-hidden="true" />
        <span>{p.label}</span>
      </a>
      {p.copyLabel ? (
        <ContactCopyButton label={p.copyLabel} value={p.value ?? p.label} />
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Back to top">
          {profile.handle}
        </a>
        <div>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <header className="hero">
        <div id="top" className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{profile.title}</p>
            <p className="handle">{profile.handle}</p>
            <h1>{profile.displayName}</h1>
            <p className="intro">{profile.intro}</p>
            <div className="actions" aria-label="CV actions">
              <a className="btn primary" href={`mailto:${profile.email}`}>
                <i className="ri-send-plane-line" aria-hidden="true" />
                Email Me
              </a>
              <a className="btn" href={profile.cvHref}>
                View CV Online
                <i className="ri-external-link-line" aria-hidden="true" />
              </a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Public contact links">
            <p>
              Available in Hanoi, Vietnam for senior product engineering roles.
            </p>
            <div className="contact-list">
              <ContactRow
                href={`mailto:${profile.email}`}
                icon="ri-mail-line"
                label={profile.email}
                copyLabel="Copy email"
              />
              <ContactRow
                href={`tel:${profile.phone.replaceAll(" ", "")}`}
                icon="ri-phone-line"
                label={profile.phone}
                value={profile.phone.replaceAll(" ", "")}
                copyLabel="Copy phone number"
              />
              {publicLinks
                .filter((link) => link.label !== profile.email)
                .map((link) => (
                  <ContactRow
                    key={link.href}
                    href={link.href}
                    icon={link.icon}
                    label={link.label}
                    external
                  />
                ))}
            </div>
          </aside>
        </div>
      </header>

      <Section id="skills" title="Skills">
        <div className="skill-grid">
          {skills.map((g) => (
            <SkillCard key={g.title} group={g} />
          ))}
        </div>
      </Section>

      <Section id="experience" title="Work Experience">
        <div className="stack">
          {roles.map((role) => (
            <RoleItem
              key={role.company}
              role={role}
              isMinswap={role.company === "Minswap"}
            />
          ))}
        </div>
      </Section>

      <Section id="projects" title="Personal Projects">
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectItem key={project.name} project={project} />
          ))}
        </div>
      </Section>

      <Section id="education" title="Education, Honors & Awards">
        <div className="education-grid">
          <article className="role-card">
            <div className="item-top">
              <div>
                <h3>{education.school}</h3>
                <p>{education.major}</p>
              </div>
              <span>{education.period}</span>
            </div>
            <p className="gpa">GPA: {education.gpa}</p>
          </article>

          <article className="role-card">
            <h3>Certifications - Honors & Awards</h3>
            <div className="award-list">
              {awards.map((a) => (
                <div key={a.name}>
                  <p>{a.name}</p>
                  <span>{a.period}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="contact-section">
          <div>
            <p className="eyebrow">Next Step</p>
            <h3>Build reliable products with senior full-stack ownership.</h3>
          </div>
          <a className="btn primary" href={`mailto:${profile.email}`}>
            <i className="ri-mail-send-line" aria-hidden="true" />
            {profile.email}
          </a>
        </div>
      </Section>
    </main>
  );
}
