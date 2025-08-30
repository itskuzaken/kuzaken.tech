import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Typewriter from "@/components/Typewriter";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6">
      {/* Home / Landing */}
      <section id="home" className="section">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] items-center gap-8 md:gap-10">
          {/* Image first on mobile */}
          <div className="order-1 md:order-2 relative max-w-sm mx-auto md:ml-auto w-full">
            <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-[#c22126]/70 via-transparent to-transparent" />
            <div className="relative h-full w-full rounded-2xl border border-themic bg-soft backdrop-blur flex items-center justify-center">
              <Image
                src="/kenbaylon_image.png"
                alt="Ken Baylon"
                width={300}
                height={300}
                className="opacity-100"
              />
            </div>
          </div>
          {/* Text second on mobile */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              Hi, I’m KUZAKEN —
              <span className="block text-[#c22126]">
                <Typewriter
                  words={[
                    "Web Developer",
                    "Layout Artist",
                    "Broadcast Operator",
                  ]}
                />
              </span>
            </h1>
            <p className="mt-4 text-muted-80 text-base md:text-lg max-w-2xl md:max-w-2xl mx-auto md:mx-0">
              I build digital experiences, create visuals that tell stories, and
              operate live broadcasts for esports events.
            </p>
            <a
              href="#projects"
              className="mt-8 inline-flex items-center rounded-xl bg-[#c22126] px-6 py-3 text-white font-medium transition-colors hover:bg-white hover:text-[#141414]"
            >
              See My Work
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2 className="text-2xl md:text-3xl font-semibold">About Me</h2>
        <p className="mt-4 text-muted-80 max-w-3xl">
          I’m an IT student and a multidisciplinary creator who thrives at the
          intersection of code and design. I enjoy building responsive web apps,
          crafting brand visuals, and bringing esports broadcasts to life
          through clean visuals and smooth live operation.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2 className="text-2xl md:text-3xl font-semibold">Skills & Tools</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="card card--accent">
            <h3 className="text-lg font-semibold accent-title">
              Web Development
            </h3>
            <p className="mt-2 text-muted text-sm">
              React, Tailwind CSS, HTML, CSS, JavaScript, Node.js, Express,
              MySQL, PostgreSQL, Firebase, Vercel, Railway
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "React",
                "Tailwind",
                "Node.js",
                "Express",
                "MySQL",
                "PostgreSQL",
                "Firebase",
                "Vercel",
                "Railway",
              ].map((t) => (
                <span key={t} className="pill">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="card card--accent">
            <h3 className="text-lg font-semibold accent-title">
              Graphics & Layout Design
            </h3>
            <p className="mt-2 text-muted text-sm">
              Posters, branding, layouts | Photoshop, Illustrator, Figma, Canva
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Photoshop", "Illustrator", "Figma", "Canva"].map((t) => (
                <span key={t} className="pill">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="card card--accent">
            <h3 className="text-lg font-semibold accent-title">
              Broadcast Operations
            </h3>
            <p className="mt-2 text-muted text-sm">
              Esports event coverage | OBS Studio, vMix, Streamlabs | Roles:
              overlays, switching, monitoring
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["OBS Studio", "vMix", "Streamlabs"].map((t) => (
                <span key={t} className="pill">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>

        <div className="mt-8 space-y-10">
          <div>
            <h3 className="text-lg font-semibold text-[#c22126]">
              Web Development
            </h3>
            <div className="mt-4 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "RedVault",
                  desc: "Blockchain-based volunteer management system",
                  tech: "Next.js, Tailwind, Solidity",
                },
                {
                  title: "Task Management App",
                  desc: "React Native mobile app",
                  tech: "React Native, Expo",
                },
                {
                  title: "Fitness Tracking App",
                  desc: "React Native app with progress tracking",
                  tech: "React Native, Firebase",
                },
              ].map((p) => (
                <article key={p.title} className="card card--accent">
                  <div className="h-36 rounded-md bg-soft border border-themic" />
                  <h4 className="mt-4 font-medium">{p.title}</h4>
                  <p className="mt-1 text-sm text-muted">{p.desc}</p>
                  <p className="mt-2 text-xs text-muted-50">{p.tech}</p>
                  <a
                    href="#"
                    className="mt-3 inline-block text-sm text-[#c22126] hover:underline"
                  >
                    Learn More →
                  </a>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#c22126]">
              Design Projects
            </h3>
            <div className="mt-4 grid gap-6 md:grid-cols-3">
              {["Posters", "Event Graphics", "Branding Layouts"].map((t) => (
                <article key={t} className="card card--accent">
                  <div className="h-36 rounded-md bg-soft border border-themic" />
                  <h4 className="mt-4 font-medium">{t}</h4>
                  <p className="mt-1 text-sm text-muted">
                    Selected works in visual design and branding.
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#c22126]">
              Broadcasting Experience
            </h3>
            <div className="mt-4 grid gap-6 md:grid-cols-3">
              {[
                "Mobile Legends Streams",
                "Tournament Coverage",
                "Live Switching",
              ].map((t) => (
                <article key={t} className="card card--accent">
                  <div className="h-36 rounded-md bg-soft border border-themic" />
                  <h4 className="mt-4 font-medium">{t}</h4>
                  <p className="mt-1 text-sm text-muted">
                    Esports event livestream operations and monitoring.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="section">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Resume / Experience
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="card card--accent">
            <h3 className="font-semibold accent-title">Education</h3>
            <p className="mt-2 text-muted-80">
              BSIT – STI West Negros University (Expected 2025)
            </p>
          </div>
          <div className="card card--accent">
            <h3 className="font-semibold accent-title">Notable Work</h3>
            <ul className="mt-2 text-muted-80 list-disc pl-5 space-y-1 text-sm">
              <li>Capstone: RedVault</li>
              <li>Freelance design projects</li>
              <li>Esports broadcast operations</li>
            </ul>
          </div>
        </div>
        <a
          href="/Ken-Baylon-Resume.pdf"
          className="mt-6 inline-flex items-center rounded-full bg-[#c22126] px-6 py-3 text-white font-medium transition-colors hover:bg-white hover:text-[#141414]"
        >
          Download Resume (PDF)
        </a>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
        <p className="mt-2 text-muted-80 max-w-2xl">
          Interested in working together or learning more about my projects?
          Let’s connect.
        </p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="space-y-3 text-sm text-muted-80">
            <p>
              📧 Email:{" "}
              <a
                className="text-[#c22126] hover:underline"
                href="mailto:youremail@example.com"
              >
                youremail@example.com
              </a>
            </p>
            <p>
              🔗 LinkedIn:{" "}
              <a className="text-[#c22126] hover:underline" href="#">
                linkedin.com/in/your-handle
              </a>
            </p>
            <p>
              💻 GitHub:{" "}
              <a className="text-[#c22126] hover:underline" href="#">
                github.com/your-handle
              </a>
            </p>
            <p>
              🎨 Behance/Dribbble:{" "}
              <a className="text-[#c22126] hover:underline" href="#">
                behance.net/your-handle
              </a>
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
