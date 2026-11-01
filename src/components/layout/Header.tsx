import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { mainNav } from "../../data/navigation";
import { profile } from "../../data/profile";
import { ThemeToggle } from "../common/ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="wordmark" aria-label="Salma — home">
          SALMA<span className="wordmark-dot">.</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {mainNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                "nav-link" + (isActive ? " is-active" : "")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <a
            href={profile.github}
            className="icon-btn"
            aria-label="GitHub profile"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithub size={18} />
          </a>
          <button
            type="button"
            className="icon-btn mobile-only"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <div className="container">
            {mainNav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  "mobile-nav-link" + (isActive ? " is-active" : "")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}