import projects from "../../data/projects.json";

export default function Research() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Research Projects</h1>
      <div className="grid gap-4">
        {projects.map((p: any) => (
          <div key={p.title} className="p-4 border rounded">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="text-sm text-gray-600">{p.year}</p>
            <p className="mt-2">{p.description}</p>
            {p.link && <a href={p.link} className="text-blue-600 underline">View More</a>}
          </div>
        ))}
      </div>
    </div>
  );
} 