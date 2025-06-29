const dogs = [
  "/dogs/dog1.jpg",
  "/dogs/dog2.jpg",
  "/dogs/dog3.jpg",
  "/dogs/dog4.jpg",
  "/dogs/dog5.jpg",
  "/dogs/dog6.jpg",
];

export default function Gallery() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 text-teal-900">
      <h1 className="text-4xl font-bold mb-4 text-teal-700">Our Happy Clients</h1>
      <p className="mb-8 text-lg text-teal-800 bg-teal-50 p-4 rounded shadow-sm">
        Meet some of the wonderful dogs we walk! Every pup is part of our Wag On The Wild Side family.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 bg-white p-6 rounded-lg shadow-md">
        {dogs.map((src, i) => (
          <div key={i} className="aspect-square overflow-hidden rounded-lg border border-teal-100 bg-teal-50 flex items-center justify-center">
            <img src={src} alt={`Dog ${i + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
    </main>
  );
} 