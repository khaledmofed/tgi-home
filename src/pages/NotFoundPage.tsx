import { Button } from "../components/ui/Button";

export default function NotFoundPage() {
  return (
    <section className="section-pad">
      <div className="container" style={{ textAlign: "center" }}>
        <span className="eyebrow">Error 404</span>
        <h1 className="section-title" style={{ fontSize: "var(--fs-h1)" }}>
          Page not found
        </h1>
        <p className="section-desc" style={{ marginInline: "auto" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div style={{ marginTop: "var(--space-6)" }}>
          <Button to="/" variant="primary">
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}