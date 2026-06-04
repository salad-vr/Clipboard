import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>Welcome to My Website</h1>
      <p>This is a Tanstack Start TypeScript application ready for Vercel deployment.</p>
    </div>
  );
}
