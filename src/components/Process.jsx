const steps = [
  {
    title: 'Tell us roughly what you want',
    body: "Budget, dates, who's coming, and whether you want mountains, coast or somewhere you can't spell yet.",
  },
  {
    title: 'We build a first draft',
    body: 'A planner puts together a real day-by-day itinerary within 48 hours, priced honestly, no hidden add-ons later.',
  },
  {
    title: "You tweak it until it's right",
    body: "Swap a stop, add a day, drop the museum nobody wanted to see. It's your trip until you say it's final.",
  },
  {
    title: 'We travel it with you',
    body: 'Your planner stays reachable for the whole trip — not just until the booking confirmation lands in your inbox.',
  },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="wrap">
        <p className="section-label">How it works</p>
        <h2>From &ldquo;where should we go&rdquo; to boarding pass.</h2>
        <div className="process-grid">
          {steps.map((step, i) => (
            <div className="process-step" key={step.title}>
              <span className="process-num">{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
