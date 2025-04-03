export default function PrivacyPolicy() {
  return (
    <section className="max-w-5xl mx-auto py-16 text-center px-4 md:px-0">
      <h1 className="text-3xl md:text-4xl font-bold font-montserrat">Privacy Policy</h1>

      <div className="w-full space-y-8 text-left mt-12">
        <div>
          <h2 className="text-2xl font-bold font-montserrat">1. Introduction</h2>
          <p className="text-slate-600 w-[80%]">
            PrettyAIColors is a web application that allows users to generate, visualize, and save color palettes locally on their devices. This policy describes how we handle user privacy, considering that we do not collect personal data and that all storage is exclusively local.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold font-montserrat">2. No Collection of Personal Data</h2>
          <p className="text-slate-600 w-[80%]">PrettyAIColors does not collect, store, or transmit any personal data from users. This includes, but is not limited to, names, email addresses, IP addresses, location data, and any other information that could identify an individual.</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold font-montserrat">3. Local Storage Data</h2>
          <ul className="mt-2 text-slate-600 space-y-2">
            <li><span className="font-bold">Technology</span>: We use the browsers local storage (localStorage) to save color palettes created by the user. </li>
            <li><span className="font-bold">Scope</span>: Locally stored data is only accessible from the browser and device on which it was saved.</li>
            <li><span className="font-bold">Deletion</span>: Users can delete their locally stored data by removing the data from their browsers local storage.</li>
            <li><span className="font-bold">Security</span>: Although localStorage does not offer encryption, we consider that the non-sensitive nature of the data (color palettes) does not require additional security measures.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold font-montserrat">4. Use of AI</h2>
          <p className="text-slate-600 w-[80%]">The AI ​​used in PrettyAIColors to generate color palettes doesn&apos;t rely on user conversations for improvement. The AI ​​has no contextual window into what the user says or generates, ensuring your interactions remain private.</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold font-montserrat">5. Donations</h2>
          <p className="text-slate-600 w-[80%]">Users donations are enterily voluntary and do not affect the functionality or access to PrettyAI Colors.</p>
        </div>
      </div>
    </section>
  )
}