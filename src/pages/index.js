import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2 className="text-4xl font-bold">Checking my fonts - Header</h2>
        <p className="text-xl font-semibold">Checking Fonts - Body</p>
        <button className="btn btn-active">Default</button>
        <button className="btn btn-active btn-neutral">Neutral</button>
        <button className="btn btn-active btn-primary">Primary</button>
        <button className="btn btn-active btn-secondary">Secondary</button>
        <button className="btn btn-active btn-accent">Accent</button>
        <button className="btn btn-active btn-ghost">Ghost</button>
        <button className="btn btn-active btn-link">Link</button>
        <ThemeToggle />
        <button className="btn btn-info">Info</button>
        <button className="btn btn-success">Success</button>
        <button className="btn btn-warning">Warning</button>
        <button className="btn btn-error">Error</button>
      </main>
    </div>
  );
}
