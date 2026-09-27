import { useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#packages', label: 'Packages' },
  { href: '#process', label: 'How it works' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header" id="top">
      <div className="wrap header-inner">
        <a href="#top" className="brand" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" width="30" height="30">
              <circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="M20 7 L23.5 18.5 L20 33 L16.5 18.5 Z" fill="currentColor" />
            </svg>
          </span>
          <span className="brand-name">Meridian Escapes</span>
        </a>

        <nav className="main-nav" aria-label="Primary">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a href="#contact" className="btn btn-small btn-gold">Plan my trip</a>
          <button
            className="nav-toggle"
            aria-expanded={isOpen}
            aria-controls="mobileNav"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      <nav
        className={`mobile-nav${isOpen ? ' is-open' : ''}`}
        id="mobileNav"
        aria-label="Mobile"
      >
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
