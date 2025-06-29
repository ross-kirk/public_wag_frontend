export default function Privacy() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4 text-teal-900">
      <h1 className="text-4xl font-bold mb-4 text-teal-700">Privacy Policy</h1>
      <section className="bg-white p-6 rounded-lg shadow-md text-base space-y-4">
        <p>
          <strong>Wag On The Wild Side</strong> is committed to protecting your privacy and complying with the General Data Protection Regulation (GDPR) and other EU privacy laws.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-teal-700">Cookies & Analytics</h2>
        <p>
          We use basic cookies to remember your preferences and to collect anonymous analytics data (such as page visits) to improve our website. No personal data is collected without your consent.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-teal-700">Your Rights</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>You can request access to, correction, or deletion of your personal data.</li>
          <li>You can withdraw consent for cookies at any time by clearing your browser cookies.</li>
          <li>We do not share your data with third parties except as required by law.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2 text-teal-700">Contact</h2>
        <p>
          For privacy-related questions, please contact us at <a href="mailto:shauni@wagonthewildside.com" className="underline text-teal-600">shauni@wagonthewildside.com</a>.
        </p>
      </section>
    </main>
  );
} 