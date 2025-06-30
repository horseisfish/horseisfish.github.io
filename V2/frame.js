// Personal Academic Website in Next.js
// Core Structure: Pages + Components + Configs

// === pages/index.tsx ===
// Landing Page
export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold">Leo Ma</h1>
      <p className="mt-4 text-lg">Second-year PhD Student | HCI • Music Neuroscience • XR</p>
      <div className="mt-6 space-x-4">
        <a href="/cv.pdf" className="btn">Download CV</a>
        <a href="mailto:leo@example.com" className="btn-outline">Contact</a>
      </div>
    </main>
  );
}

// === pages/about.tsx ===
export default function About() {
  return (
    <div className="prose mx-auto p-6">
      <h1>About Me</h1>
      <p>
        I am currently a second-year PhD student in the ICS Triple PhD program. My research interests lie at the intersection of HCI, cognitive science, and music neuroscience.
      </p>
      <h2>Education</h2>
      <ul>
        <li>PhD, ICS Triple Program, 2023–present</li>
        <li>M.A. in Music Education, NTNU</li>
      </ul>
    </div>
  );
}

// === pages/research.tsx ===
import projects from "../data/projects.json";
export default function Research() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Research Projects</h1>
      <div className="grid gap-4">
        {projects.map((p) => (
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

// === pages/publications.tsx ===
import publications from "../data/publications.json";
export default function Publications() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Publications</h1>
      <ul className="list-disc ml-5 space-y-4">
        {publications.map((pub, i) => (
          <li key={i}>
            <span className="font-semibold">{pub.authors}</span>, <em>{pub.title}</em>. <br/>
            <span className="text-sm">{pub.venue}, {pub.year}</span> <br/>
            {pub.link && <a href={pub.link} className="text-blue-600 underline">[PDF]</a>}
          </li>
        ))}
      </ul>
    </div>
  );
}

// === pages/contact.tsx ===
export default function Contact() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <p>Email: <a href="mailto:leo@example.com" className="text-blue-600 underline">leo@example.com</a></p>
      <p>GitHub: <a href="https://github.com/leoma" className="text-blue-600 underline">@leoma</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/leoma" className="text-blue-600 underline">Leo Ma</a></p>
    </div>
  );
}

// === tailwind.config.ts === (short version)
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [require('@tailwindcss/typography')],
};

// === data/projects.json ===
[
  {
    "title": "XR Visualization of Chaotic Systems",
    "description": "A mixed reality tool using Vision Pro to visualize Lorenz attractor with sonification.",
    "year": 2025,
    "link": "/projects/xr-lorenz"
  }
]

// === data/publications.json ===
[
  {
    "authors": "Leo Ma, Torin White, et al.",
    "title": "Dream Mesh Party: Mixed Reality Collaboration with Generative AI",
    "venue": "UIST",
    "year": "2025",
    "link": "/papers/dreammesh2025.pdf"
  }
]

// === styles/globals.css ===
@tailwind base;
@tailwind components;
@tailwind utilities;

.btn {
  @apply bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700;
}

.btn-outline {
  @apply border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-100;
}
