import publications from "../../data/publications.json";

export default function Publications() {
  const selectedPublications = publications.filter((pub: any) => pub.selected);
  const otherPublications = publications.filter((pub: any) => !pub.selected);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Publications</h1>
      
      {selectedPublications.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">Selected Publications</h2>
          <ul className="list-disc ml-5 space-y-4">
            {selectedPublications.map((pub: any, i: number) => (
              <li key={i} className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <span className="font-semibold">{pub.authors}</span>, <em>{pub.title}</em>. <br/>
                <span className="text-sm text-gray-600 dark:text-gray-400">{pub.venue}, {pub.year}</span> <br/>
                {pub.link && <a href={pub.link} className="text-blue-600 underline text-sm">[PDF]</a>}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {otherPublications.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Other Publications</h2>
          <ul className="list-disc ml-5 space-y-4">
            {otherPublications.map((pub: any, i: number) => (
              <li key={i}>
                <span className="font-semibold">{pub.authors}</span>, <em>{pub.title}</em>. <br/>
                <span className="text-sm text-gray-600 dark:text-gray-400">{pub.venue}, {pub.year}</span> <br/>
                {pub.link && <a href={pub.link} className="text-blue-600 underline text-sm">[PDF]</a>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
} 