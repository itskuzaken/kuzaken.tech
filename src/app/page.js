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
                src="/kenbaylon_image.png"
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
