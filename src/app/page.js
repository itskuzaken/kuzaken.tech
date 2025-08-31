import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Typewriter from "@/components/Typewriter";
import InteractiveTilt from "@/components/InteractiveTilt";
import SkillsTabs from "@/components/SkillsTabs";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6">
      {/* Home / Landing */}
      <section id="home" className="section">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] items-center gap-8 md:gap-10">
          {/* Image first on mobile */}
          <div className="order-1 md:order-2 relative max-w-xs mx-auto md:ml-auto w-full">
            <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-[#c22126]/70 via-transparent to-transparent" />
            <InteractiveTilt className="relative h-full w-full rounded-2xl border border-themic bg-soft backdrop-blur flex items-center justify-center">
              <Image
                src="/photos/kenbaylon_image.png"
                alt="Ken Francen Baylon Image"
                width={250}
                height={250}
                className="opacity-100 select-none"
                draggable={false}
                priority
              />
            </InteractiveTilt>
          </div>
          {/* Text second on mobile */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              Hi, I’m KUZAKEN —
              <span className="block text-[#c22126] text-2xl md:text-4xl">
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
            <div className="mt-6 flex flex-col items-center md:items-start">
              <div className="mb-4 flex items-center justify-center gap-4">
                <a
                  href="https://www.facebook.com/kenfgbaylon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-xl social-btn cursor-pointer"
                >
                  <Image
                    src="/social-icons/facebook.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                    className="w-6 h-6 md:w-7 md:h-7 select-none social-icon"
                  />
                </a>
                <a
                  href="https://www.instagram.com/kenfgbyln/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-xl social-btn cursor-pointer"
                >
                  <Image
                    src="/social-icons/instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="w-6 h-6 md:w-7 md:h-7 select-none social-icon"
                  />
                </a>
                <a
                  href="https://www.tiktok.com/@itskuzaken"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-xl social-btn cursor-pointer"
                >
                  <Image
                    src="/social-icons/tiktok.svg"
                    alt="TikTok"
                    width={24}
                    height={24}
                    className="w-6 h-6 md:w-7 md:h-7 select-none social-icon"
                  />
                </a>
                <a
                  href="https://github.com/itskuzaken"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-xl social-btn cursor-pointer"
                >
                  <Image
                    src="/social-icons/github.svg"
                    alt="GitHub"
                    width={24}
                    height={24}
                    className="w-6 h-6 md:w-7 md:h-7 select-none social-icon"
                  />
                </a>
              </div>
              <a
                href="#projects"
                className="inline-flex items-center rounded-xl bg-[#c22126] px-6 py-3 text-white font-medium transition-colors hover:bg-white hover:text-[#141414]"
              >
                See My Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2 className="text-2xl md:text-3xl font-semibold">About Me</h2>

        {/* Two-column: image left, text right (stacks on mobile) */}
        <div className="mt-6 grid gap-8 md:grid-cols-2 md:items-center">
          {/* Left: image with tilt, responsive height (no enforced 1:1) */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
            <InteractiveTilt className="relative w-full h-64 sm:h-72 md:h-80 rounded-2xl border border-themic bg-soft overflow-hidden">
              <Image
                src="/photos/picture1.jpg"
                alt="Portrait of Ken Francen Baylon"
                fill
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 400px"
                className="object-cover select-none"
              />
            </InteractiveTilt>
          </div>

          {/* Right: text content */}
          <div className="text-muted-80 max-w-3xl space-y-4">
            <p>
              Hello, I’m{" "}
              <span className="font-semibold">Ken Francen G. Baylon</span>, an
              IT student and tech enthusiast with a passion for both development
              and design. My work bridges three areas:{" "}
              <span className="highlight">web development</span>,{" "}
              <span className="highlight">graphic/layout design</span>, and{" "}
              <span className="highlight">live broadcast operations</span>.
            </p>
            <p>
              On the development side, I enjoy building full-stack applications
              that solve real problems, from websites to mobile apps. In design,
              I’ve created posters, layouts, and branding materials that connect
              with audiences visually. Beyond that, I also work in live
              production, where I operate esports broadcasts and manage live
              event streams.
            </p>
            <p>
              What excites me most is the mix of creativity and technical
              problem-solving. Whether I’m coding, designing, or handling a live
              show, I focus on delivering work that’s{" "}
              <span className="font-medium">clean</span>,{" "}
              <span className="font-medium">functional</span>, and{" "}
              <span className="font-medium">engaging</span>.
            </p>
          </div>
        </div>

        {/* Quick Snapshot cards: separate row below the two-column layout */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {/* Full‑Stack Development */}
          <div className="card card--accent">
            <div className="flex items-start gap-3">
              {/* Custom lightweight SVG (code brackets) */}
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 text-[#c22126] shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 18l-6-6 6-6" />
                <path d="M15 6l6 6-6 6" />
              </svg>
              <div>
                <h3 className="font-medium">Full‑Stack Development</h3>
                <ul className="mt-1 text-sm text-muted space-y-1 list-none">
                  <li>• Websites with Next.js + Tailwind</li>
                  <li>• APIs with Node.js/Express</li>
                  <li>• Mobile apps (React Native basics)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Design & Layout */}
          <div className="card card--accent">
            <div className="flex items-start gap-3">
              {/* Custom lightweight SVG (layout grid) */}
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 text-[#c22126] shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="M3 10h18" />
                <path d="M10 10v10" />
              </svg>
              <div>
                <h3 className="font-medium">Design & Layout</h3>
                <ul className="mt-1 text-sm text-muted space-y-1 list-none">
                  <li>• Posters, social graphics, layouts</li>
                  <li>• Branding and visual identity</li>
                  <li>• Tools: Photoshop, Illustrator, Figma</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Live Broadcast Ops */}
          <div className="card card--accent">
            <div className="flex items-start gap-3">
              {/* Custom lightweight SVG (broadcast/waves) */}
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 text-[#c22126] shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="2" />
                <path d="M4.9 4.9a10 10 0 010 14.2" />
                <path d="M19.1 19.1a10 10 0 000-14.2" />
                <path d="M7.8 7.8a6 6 0 010 8.4" />
                <path d="M16.2 16.2a6 6 0 000-8.4" />
              </svg>
              <div>
                <h3 className="font-medium">Live Broadcast Ops</h3>
                <ul className="mt-1 text-sm text-muted space-y-1 list-none">
                  <li>• Esports streams and event coverage</li>
                  <li>• Scene switching, overlays, monitoring</li>
                  <li>• Tools: OBS, vMix, Streamlabs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2 className="text-2xl md:text-3xl font-semibold">Skills & Tools</h2>
        <p className="mt-2 text-muted-80 text-sm">Explore by category.</p>
        <div className="mt-6">
          <SkillsTabs />
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
