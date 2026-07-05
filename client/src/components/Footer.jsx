import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaBrain } from "react-icons/fa";

const socialLinks = [
  {
    Icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/LogicVortex123",
    external: true,
  },
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anushka-dudhe-22549b369/",
    external: true,
  },
  {
    Icon: FaEnvelope,
    label: "Email",
    href: "mailto:anushkadudhe9@gmail.com",
    external: false,
  },
];

const Footer = () => {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#07080f] text-white">
      <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-2.5 md:justify-start">
              <img src="/logo.png" alt="AptiNexa Logo" className="h-10 w-10 object-contain" />
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Apti<span className="text-violet-400">Nexa</span>
              </h2>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#9499ad] sm:text-base">
              AI Powered Interview Readiness Platform — prepare smarter, interview with confidence.
            </p>
            <div className="mt-6 flex justify-center gap-3 md:justify-start">
              <Link
                to="/signup"
                className="btn-primary rounded-xl px-5 py-2.5 text-sm font-semibold"
              >
                Get Started Free
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 md:items-end">
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, label, href, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#2f3649] bg-[#141824] text-lg text-[#c4c8d8] transition-all hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-300"
                >
                  <Icon />
                </a>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#9499ad] md:justify-end">
              <a href="#home" className="transition-colors hover:text-white">Home</a>
              <a href="#features" className="transition-colors hover:text-white">Features</a>
              <a href="#howitworks" className="transition-colors hover:text-white">How It Works</a>
              <a href="#about" className="transition-colors hover:text-white">About</a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#1c2130] pt-8">
          <p className="text-center text-sm text-[#6b7084]">
            &copy; 2026 AptiNexa. Built by{" "}
            <a
              href="https://github.com/LogicVortex123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 transition-colors hover:text-violet-300"
            >
              Anushka Dudhe
            </a>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
