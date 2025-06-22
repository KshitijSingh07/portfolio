export default function Resume() {
  return (
    <main className="flex flex-col min-h-screen px-4 sm:px-6 py-10 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-8 sm:mb-10">
        My Resume
      </h1>

      <div className="flex-grow w-full max-w-6xl mx-auto  rounded-xl overflow-hidden border border-gray-300 shadow-2xl">
        <iframe
          src="/Kshitij_Singh_Resume.pdf"
          className="w-full h-[75vh] sm:h-[85vh] rounded-xl"
          title="Kshitij Singh Resume"
        ></iframe>
      </div>

      <div className="mt-8 sm:mt-10 flex justify-center">
        <a
          href="/Kshitij_Singh_Resume.pdf"
          download
          className="bg-blue-600 text-white px-5 py-3 text-base sm:text-lg rounded-lg shadow-md hover:bg-blue-700 transition"
        >
           Download Resume
        </a>
      </div>
    </main>
  );
}
