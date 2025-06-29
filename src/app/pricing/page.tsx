export default function Pricing() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4 text-teal-900">
      <h1 className="text-4xl font-bold mb-4 text-teal-700">Pricing</h1>
      <p className="mb-6 text-lg text-teal-800 bg-teal-50 p-4 rounded shadow-sm">
        Simple, transparent pricing for every pup! Custom packages available—just ask!
      </p>
      <table className="w-full bg-white rounded-lg shadow-md mb-6">
        <thead>
          <tr className="bg-teal-100 text-teal-800">
            <th className="py-2 px-4 text-left">Service</th>
            <th className="py-2 px-4 text-left">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4">Group Walk (1hr)</td>
            <td className="py-2 px-4">$25</td>
          </tr>
          <tr className="bg-teal-50">
            <td className="py-2 px-4">Solo Walk (30min)</td>
            <td className="py-2 px-4">$30</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Puppy Visit (30min)</td>
            <td className="py-2 px-4">$22</td>
          </tr>
          <tr className="bg-teal-50">
            <td className="py-2 px-4">Adventure Hike (2hr)</td>
            <td className="py-2 px-4">$50</td>
          </tr>
        </tbody>
      </table>
      <p className="text-teal-800 text-center">
        Need something special? <a href="/contact" className="text-teal-600 underline hover:text-teal-800">Contact us</a> for custom packages!
      </p>
    </main>
  );
} 