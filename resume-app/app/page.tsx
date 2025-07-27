export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Pratham Pradhan - Resume
        </h1>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://docs.google.com/document/d/1_0XQ2pTMfnK-3G1Q3XHEkL9zVqJSBRAuNEbN43-i6-8/preview"
            width="100%"
            height="800px"
            frameBorder="0"
            title="Pratham Pradhan Resume"
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
} 