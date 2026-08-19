import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: "center", minHeight: "60vh", display: "grid", placeContent: "center" }}>
      <div className="container">
        <p className="kicker" style={{ margin: "0 auto 1.2rem" }}>
          404
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}>
          We couldn&apos;t find that page
        </h1>
        <p style={{ color: "var(--muted)", maxWidth: "46ch", margin: "1rem auto 2rem", fontSize: "1.1rem" }}>
          The link may be broken or the page may have moved. Let&apos;s get you back to fast,
          fair-priced WOW! internet.
        </p>
        <a className="btn btn-primary btn-lg btn-shine" href="/">
          Back to home
        </a>
      </div>
    </section>
  );
}
