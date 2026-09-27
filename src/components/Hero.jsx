export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow">Small-group holidays, mapped with care</p>
          <h1>Go somewhere<br />you&apos;ll actually<br />remember.</h1>
          <p className="hero-sub">
            We plan slow, well-paced holidays across India and abroad — capped at
            twelve travellers, led by people who live where you&apos;re going. No
            queues for the &ldquo;top ten sights.&rdquo; Just the real thing.
          </p>
          <div className="hero-cta">
            <a href="#packages" className="btn btn-gold">See our packages</a>
            <a href="#contact" className="btn btn-outline">Talk to a trip planner</a>
          </div>
          <dl className="hero-stats">
            <div><dt>9</dt><dd>years planning trips</dd></div>
            <div><dt>26</dt><dd>destinations covered</dd></div>
            <div><dt>12</dt><dd>max travellers per group</dd></div>
          </dl>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <svg viewBox="0 0 460 520" width="100%" height="100%">
            <path className="contour" d="M20 90 Q 140 40 260 90 T 440 90" />
            <path className="contour" d="M0 180 Q 130 130 260 180 T 460 180" />
            <path className="contour" d="M10 460 Q 140 420 260 460 T 450 460" />

            <path
              id="routeLine"
              d="M70 470 C 120 400, 60 330, 130 270 S 260 210, 230 150 S 340 90, 330 55"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeDasharray="6 8"
              strokeLinecap="round"
            />

            <g className="stop" style={{ '--d': 0 }}>
              <circle cx="70" cy="470" r="6" />
              <text x="84" y="475">Home</text>
            </g>
            <g className="stop" style={{ '--d': 1 }}>
              <circle cx="130" cy="270" r="6" />
              <text x="144" y="275">Munnar</text>
            </g>
            <g className="stop" style={{ '--d': 2 }}>
              <circle cx="230" cy="150" r="6" />
              <text x="244" y="155">Leh</text>
            </g>
            <g className="stop stop-end" style={{ '--d': 3 }}>
              <circle cx="330" cy="55" r="8" />
              <text x="346" y="60">Santorini</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
