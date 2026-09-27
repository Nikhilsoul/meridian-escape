import { useState } from 'react';
import packages from '../data/packages';

const filters = [
  { key: 'all', label: 'All trips' },
  { key: 'india', label: 'Within India' },
  { key: 'abroad', label: 'Abroad' },
];

export default function Packages() {
  const [activeFilter, setActiveFilter] = useState('all');

  const visiblePackages = packages.filter(
    (pkg) => activeFilter === 'all' || pkg.region === activeFilter
  );

  return (
    <section className="packages" id="packages">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="section-label">Trips &amp; destinations</p>
            <h2>Pick a starting point.<br />We&apos;ll shape it around you.</h2>
          </div>
          <p className="section-note">
            Every package below is a starting itinerary — dates, pace and stays can
            all be adjusted once you talk to a planner.
          </p>
        </div>

        <div className="filter-tabs" role="tablist" aria-label="Filter packages by region">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`filter-tab${activeFilter === f.key ? ' is-active' : ''}`}
              role="tab"
              aria-selected={activeFilter === f.key}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="package-grid">
          {visiblePackages.map((pkg) => (
            <article className="package-card" key={pkg.id}>
              <div
                className="package-media"
                style={{ '--from': pkg.from, '--to': pkg.to }}
              >
                <span className="package-tag">{pkg.tag}</span>
              </div>
              <div className="package-body">
                <div className="package-top">
                  <h3>{pkg.title}</h3>
                  <span className="package-price">{pkg.price}</span>
                </div>
                <p className="package-meta">{pkg.meta}</p>
                <p className="package-desc">{pkg.desc}</p>
                <a href="#contact" className="package-link">Enquire about this trip →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
