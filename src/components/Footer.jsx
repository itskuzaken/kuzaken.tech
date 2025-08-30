import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/70 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {year} Ken Baylon. All Rights Reserved.</p>
        <div className="flex items-center gap-4">
          {/* Replace # with your actual profiles */}
          <Link className="hover:text-white" href="#" aria-label="GitHub">
            GitHub
          </Link>
          <Link className="hover:text-white" href="#" aria-label="LinkedIn">
            LinkedIn
          </Link>
          <Link className="hover:text-white" href="#" aria-label="Behance">
            Behance
          </Link>
          <Link className="hover:text-white" href="#home" aria-label="Back to top">
            ↑ Top
          </Link>
        </div>
      </div>
    </footer>
  );
}
