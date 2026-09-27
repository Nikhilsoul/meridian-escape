const points = [
  {
    title: "Itineraries we've actually walked",
    body: "Every route is tested by our own team before it's sold, so the pace, the stays and the \u201cdon't miss this\u201d moments are real.",
  },
  {
    title: 'People on the ground',
    body: 'Local guides and homestay partners, not a call centre — help is a phone call away in the country you\u2019re standing in.',
  },
  {
    title: 'One point of contact, start to finish',
    body: 'The planner who builds your trip is the one you call if a flight shifts or plans change mid-holiday.',
  },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <div className="about-lead">
          <p className="section-label">About Meridian Escapes</p>
          <h2>We got tired of holidays that felt like a checklist.</h2>
        </div>
        <div className="about-body">
          <p>
            Meridian Escapes started in 2016 with one founder, a second-hand travel
            agent&apos;s license, and a stubborn belief that a holiday should feel like
            it was made for you — not assembled from a template. Today we&apos;re a
            small team based out of Punjab, working with a network of local guides,
            homestay owners and drivers across India, Southeast Asia, Europe and the
            Gulf.
          </p>
          <p>
            Every itinerary on this site has been travelled by someone on our team,
            not copied off a brochure. We keep groups small on purpose — usually eight
            to twelve people — so nobody&apos;s holiday is spent waiting on a bus for
            the other forty.
          </p>
          <div className="about-points">
            {points.map((point) => (
              <div className="point" key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
