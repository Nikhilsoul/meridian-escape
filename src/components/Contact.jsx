import { useState } from 'react';

const destinations = [
  'Backwaters & Spice Hills — Kerala',
  'High Passes of Ladakh',
  'Forts & Desert Camps — Rajasthan',
  'The Cycladic Coast — Greece',
  'Kyoto & the Inland Sea — Japan',
  'The Alpine Traverse — Switzerland',
  'A custom trip',
];

const initialForm = { name: '', email: '', phone: '', destination: '', message: '' };

const validators = {
  name: (v) => (v.trim().length >= 2 ? true : 'Please enter your full name.'),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? true : 'Please enter a valid email address.'),
  phone: (v) => (/^[0-9+\-\s()]{7,15}$/.test(v.trim()) ? true : 'Please enter a valid phone number.'),
  message: (v) => (v.trim().length >= 10 ? true : 'Tell us a little more — at least 10 characters.'),
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', text: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateField = (field, value) => {
    const check = validators[field];
    if (!check) return true;
    const result = check(value);
    setErrors((prev) => ({ ...prev, [field]: result === true ? '' : result }));
    return result === true;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const results = Object.keys(validators).map((field) => validateField(field, form[field]));
    const allValid = results.every(Boolean);

    if (!allValid) {
      setStatus({ type: 'is-error', text: 'Please fix the highlighted fields and try again.' });
      return;
    }

    // Demo submission: in production, replace this block with a real request,
    // e.g. POST to your backend, or a form service such as Formspree/EmailJS:
    //
    // await fetch('https://formspree.io/f/your-id', {
    //   method: 'POST',
    //   headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form),
    // });

    console.log('Enquiry submitted:', form);
    setSubmitting(true);

    setTimeout(() => {
      setStatus({
        type: 'is-success',
        text: `Thanks, ${form.name.split(' ')[0]} — we've received your enquiry and will reply within one working day.`,
      });
      setForm(initialForm);
      setSubmitting(false);
    }, 700);
  };

  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-info">
          <p className="section-label">Get in touch</p>
          <h2>Tell us where you&apos;re dreaming of.</h2>
          <p className="contact-lede">
            Fill in the form and a trip planner will reply within one working day —
            or reach us directly below.
          </p>

          <ul className="contact-details">
            <li>
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.5 21 3 13.5 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z" /></svg>
              </span>
              <a href="tel:+911614000000">+91 161 400 0000</a>
            </li>
            <li>
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.01L12 12l8-5.99V6H4Zm16 2.24-7.4 5.55a1 1 0 0 1-1.2 0L4 8.24V18h16V8.24Z" /></svg>
              </span>
              <a href="mailto:hello@meridianescapes.example">hello@meridianescapes.example</a>
            </li>
            <li>
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.2 6.1 12 6.4 12.3a.8.8 0 0 0 1.2 0C13 21 19 14.2 19 9a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" /></svg>
              </span>
              <span>Model Town, Ludhiana, Punjab 141002</span>
            </li>
          </ul>

          <div className="social-row">
            <a href="#" aria-label="Instagram" className="social-icon"><svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 2c2.7 0 3 0 4.1.06 1.1.05 1.8.22 2.5.47a5 5 0 0 1 1.8 1.17 5 5 0 0 1 1.17 1.8c.25.7.42 1.4.47 2.5.06 1.1.06 1.4.06 4.1s0 3-.06 4.1c-.05 1.1-.22 1.8-.47 2.5a5 5 0 0 1-1.17 1.8 5 5 0 0 1-1.8 1.17c-.7.25-1.4.42-2.5.47C15 22 14.7 22 12 22s-3 0-4.1-.06c-1.1-.05-1.8-.22-2.5-.47a5 5 0 0 1-1.8-1.17 5 5 0 0 1-1.17-1.8c-.25-.7-.42-1.4-.47-2.5C2 15 2 14.7 2 12s0-3 .06-4.1c.05-1.1.22-1.8.47-2.5a5 5 0 0 1 1.17-1.8 5 5 0 0 1 1.8-1.17c.7-.25 1.4-.42 2.5-.47C9 2 9.3 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm5.25-3.25a1.15 1.15 0 1 0 0 2.3 1.15 1.15 0 0 0 0-2.3Z" /></svg></a>
            <a href="#" aria-label="Facebook" className="social-icon"><svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M13.5 22v-8.4h2.8l.4-3.3h-3.2V8.1c0-.95.26-1.6 1.62-1.6H17V3.5C16.5 3.44 15.6 3.36 14.5 3.36c-2.4 0-4 1.46-4 4.15v2.85H7.7v3.3h2.8V22Z" /></svg></a>
            <a href="#" aria-label="X" className="social-icon"><svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M3 3h4.6l4 5.6L16.4 3H21l-6.9 8.6L21.4 21h-4.6l-4.4-6.1L7 21H2.5l7.3-9.1Z" /></svg></a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className={`field${errors.name ? ' has-error' : ''}`}>
              <label htmlFor="name">Full name</label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <span className="field-error">{errors.name}</span>
            </div>
            <div className={`field${errors.email ? ' has-error' : ''}`}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <span className="field-error">{errors.email}</span>
            </div>
          </div>

          <div className="form-row">
            <div className={`field${errors.phone ? ' has-error' : ''}`}>
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                autoComplete="tel"
                value={form.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <span className="field-error">{errors.phone}</span>
            </div>
            <div className="field">
              <label htmlFor="destination">Interested in</label>
              <select
                id="destination"
                name="destination"
                value={form.destination}
                onChange={handleChange}
              >
                <option value="">Not sure yet</option>
                {destinations.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>

          <div className={`field${errors.message ? ' has-error' : ''}`}>
            <label htmlFor="message">Tell us a bit about the trip you have in mind</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <span className="field-error">{errors.message}</span>
          </div>

          <button type="submit" className="btn btn-gold btn-wide" disabled={submitting}>
            {submitting ? 'Sending…' : 'Send enquiry'}
          </button>
          <p className={`form-status ${status.type}`} role="status" aria-live="polite">
            {status.text}
          </p>
        </form>
      </div>
    </section>
  );
}
