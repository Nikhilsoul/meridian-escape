export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <a href="#top" className="brand">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 40 40" width="26" height="26">
                <circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <path d="M20 7 L23.5 18.5 L20 33 L16.5 18.5 Z" fill="currentColor" />
              </svg>
            </span>
            <span className="brand-name">Meridian Escapes</span>
          </a>
          <p>Small-group holidays across India and abroad, planned by people who&apos;ve been there.</p>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="#about">About us</a></li>
            <li><a href="#packages">Packages</a></li>
            <li><a href="#process">How it works</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Destinations</h4>
          <ul>
            <li><a href="#packages">Kerala</a></li>
            <li><a href="#packages">Ladakh</a></li>
            <li><a href="#packages">Rajasthan</a></li>
            <li><a href="#packages">Greece &amp; Japan</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+911614000000">+91 161 400 0000</a></li>
            <li><a href="mailto:hello@meridianescapes.example">hello@meridianescapes.example</a></li>
            <li>Model Town, Ludhiana, Punjab</li>
          </ul>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p>© {year} Meridian Escapes. All rights reserved.</p>
        <p className="footer-note">Built as a sample project for a recruitment task.</p>
      </div>
    </footer>
  );
}
