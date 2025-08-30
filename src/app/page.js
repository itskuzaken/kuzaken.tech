import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6">
      {/* Home / Landing */}
      <section id="home" className="section">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] items-center gap-10">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              Hi, I’m Ken Baylon —
              <span className="block text-[#c22126]">Web Developer, Designer, and Broadcast Operator.</span>
            </h1>
            <p className="mt-4 text-white/80 text-base md:text-lg max-w-2xl">
              I build digital experiences, create visuals that tell stories, and operate live broadcasts for esports
              events.
            </p>
            <a href="#projects" className="mt-8 inline-flex items-center rounded-full bg-[#c22126] px-6 py-3 text-white font-medium transition-colors hover:bg-white hover:text-black">
              See My Work
            </a>
          </div>
          <div className="relative aspect-square max-w-sm md:ml-auto">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#c22126]/70 via-transparent to-transparent" />
            <div className="relative h-full w-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur flex items-center justify-center">
              <Image src="/avatar.png" alt="Ken Baylon" width={200} height={200} className="opacity-90" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2 className="text-2xl md:text-3xl font-semibold">About Me</h2>
        <p className="mt-4 text-white/80 max-w-3xl">
          I’m an IT student and a multidisciplinary creator who thrives at the intersection of code and design. I enjoy
          building responsive web apps, crafting brand visuals, and bringing esports broadcasts to life through clean
          visuals and smooth live operation.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2 className="text-2xl md:text-3xl font-semibold">Skills & Tools</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="card">
            <h3 className="text-lg font-semibold">Web Development</h3>
            <p className="mt-2 text-white/70 text-sm">React, Tailwind CSS, HTML, CSS, JavaScript, Node.js, Express, MySQL, PostgreSQL, Firebase, Vercel, Railway</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["React", "Tailwind", "Node.js", "Express", "MySQL", "PostgreSQL", "Firebase", "Vercel", "Railway"].map((t) => (
                <span key={t} className="pill">{t}</span>
              ))}
            </div>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold">Graphics & Layout Design</h3>
            <p className="mt-2 text-white/70 text-sm">Posters, branding, layouts | Photoshop, Illustrator, Figma, Canva</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Photoshop", "Illustrator", "Figma", "Canva"].map((t) => (
                <span key={t} className="pill">{t}</span>
              ))}
            </div>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold">Broadcast Operations</h3>
            <p className="mt-2 text-white/70 text-sm">Esports event coverage | OBS Studio, vMix, Streamlabs | Roles: overlays, switching, monitoring</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["OBS Studio", "vMix", "Streamlabs"].map((t) => (
                <span key={t} className="pill">{t}</span>
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
            <h3 className="text-lg font-semibold text-[#c22126]">Web Development</h3>
            <div className="mt-4 grid gap-6 md:grid-cols-3">
              {[
                { title: "RedVault", desc: "Blockchain-based volunteer management system", tech: "Next.js, Tailwind, Solidity" },
                { title: "Task Management App", desc: "React Native mobile app", tech: "React Native, Expo" },
                { title: "Fitness Tracking App", desc: "React Native app with progress tracking", tech: "React Native, Firebase" },
              ].map((p) => (
                <article key={p.title} className="card">
                  <div className="h-36 rounded-md bg-white/5 border border-white/10" />
                  <h4 className="mt-4 font-medium">{p.title}</h4>
                  <p className="mt-1 text-sm text-white/70">{p.desc}</p>
                  <p className="mt-2 text-xs text-white/50">{p.tech}</p>
                  <a href="#" className="mt-3 inline-block text-sm text-[#c22126] hover:underline">Learn More →</a>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#c22126]">Design Projects</h3>
            <div className="mt-4 grid gap-6 md:grid-cols-3">
              {["Posters", "Event Graphics", "Branding Layouts"].map((t) => (
                <article key={t} className="card">
                  <div className="h-36 rounded-md bg-white/5 border border-white/10" />
                  <h4 className="mt-4 font-medium">{t}</h4>
                  <p className="mt-1 text-sm text-white/70">Selected works in visual design and branding.</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#c22126]">Broadcasting Experience</h3>
            <div className="mt-4 grid gap-6 md:grid-cols-3">
              {["Mobile Legends Streams", "Tournament Coverage", "Live Switching"].map((t) => (
                <article key={t} className="card">
                  <div className="h-36 rounded-md bg-white/5 border border-white/10" />
                  <h4 className="mt-4 font-medium">{t}</h4>
                  <p className="mt-1 text-sm text-white/70">Esports event livestream operations and monitoring.</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="section">
        <h2 className="text-2xl md:text-3xl font-semibold">Resume / Experience</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="card">
            <h3 className="font-semibold">Education</h3>
            <p className="mt-2 text-white/80">BSIT – STI West Negros University (Expected 2025)</p>
          </div>
          <div className="card">
            <h3 className="font-semibold">Notable Work</h3>
            <ul className="mt-2 text-white/80 list-disc pl-5 space-y-1 text-sm">
              <li>Capstone: RedVault</li>
              <li>Freelance design projects</li>
              <li>Esports broadcast operations</li>
            </ul>
          </div>
        </div>
        <a href="/Ken-Baylon-Resume.pdf" className="mt-6 inline-flex items-center rounded-full bg-[#c22126] px-6 py-3 text-white font-medium transition-colors hover:bg-white hover:text-black">
          Download Resume (PDF)
        </a>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
        <p className="mt-2 text-white/80 max-w-2xl">
          Interested in working together or learning more about my projects? Let’s connect.
        </p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="space-y-3 text-sm text-white/80">
            <p>📧 Email: <a className="text-[#c22126] hover:underline" href="mailto:youremail@example.com">youremail@example.com</a></p>
            <p>🔗 LinkedIn: <a className="text-[#c22126] hover:underline" href="#">linkedin.com/in/your-handle</a></p>
            <p>💻 GitHub: <a className="text-[#c22126] hover:underline" href="#">github.com/your-handle</a></p>
            <p>🎨 Behance/Dribbble: <a className="text-[#c22126] hover:underline" href="#">behance.net/your-handle</a></p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
