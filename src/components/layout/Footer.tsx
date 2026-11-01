import { Link } from "react-router-dom";
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { mainNav } from "../../data/navigation";
import { profile } from "../../data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="footer-statement">{profile.closing}</p>
          <p className="text-muted footer-sub">
            {profile.name} — {profile.title}
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {mainNav.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="footer-social">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          )}
          {profile.email && (
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {year} {profile.name}. All rights reserved.</span>
        <button
          type="button"
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp size={14} /> Back to top
        </button>
      </div>
    </footer>
  );
}