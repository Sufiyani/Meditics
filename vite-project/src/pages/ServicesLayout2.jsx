import React from 'react'

const ServicesLayout2 = () => {
  return (
   
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Services 02</h1>
          <div className="text-sm">
            <span>Home</span>
            <span className="mx-2"></span>
            <span>Services 02</span>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Clinical Pathology */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                alt="Clinical Pathology" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Clinical Pathology</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Clinical pathology involves the analysis of blood, urine, and other...
              </p>
            </div>
          </div>

          {/* Histopathology */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                alt="Histopathology" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Histopathology</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Histopathology is a branch of study that involves the microscopic examination of tissue...
              </p>
            </div>
          </div>

          {/* Biochemistry */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                alt="Biochemistry" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Biochemistry</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Biochemistry uses chemical methods to study and solve issues...
              </p>
            </div>
          </div>

          {/* Hematology (Blood Tests) */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                alt="Hematology" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Hematology (Blood Tests)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hematology tests analyze blood components to detect diseases, infections...
              </p>
            </div>
          </div>

          {/* Urine & Stool Analysis */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                alt="Urine & Stool Analysis" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Urine & Stool Analysis</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Urine and stool analysis help detect infections, digestive issues, kidney problems...
              </p>
            </div>
          </div>

          {/* Hemoglobin (Hb) */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                alt="Hemoglobin" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Hemoglobin (Hb)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hemoglobin (Hb) is a vital protein in red blood cells that carries oxygen throughout...
              </p>
            </div>
          </div>
        </div>
      </div>

     {/* Scrolling Banner */} <div className="bg-[#DBE9A1] py-4 overflow-hidden"> <div className="whitespace-nowrap animate-scroll"> <div className="inline-flex items-center space-x-8 text-black font-semibold"> <span className="flex items-center"> <span className="text-black mr-2">★</span> ORTHOPEDICS </span> <span className="flex items-center"> <span className="text-black mr-2">✚</span> NEUROLOGY </span> <span className="flex items-center"> <span className="text-black mr-2">★</span> ORTHOPEDICS </span> <span className="flex items-center"> <span className="text-black mr-2">✚</span> DERMATOLOGY </span> <span className="flex items-center"> <span className="text-black mr-2">★</span> DERMATOLOGY </span> <span className="flex items-center"> <span className="text-black mr-2">✚</span> ORTHOPEDICS </span> <span className="flex items-center"> <span className="text-black mr-2">★</span> NEUROLOGY </span> <span className="flex items-center"> <span className="text-black mr-2">✚</span> ORTHOPEDICS </span> <span className="flex items-center"> <span className="text-black mr-2">★</span> DERMATOLOGY </span> <span className="flex items-center"> <span className="text-black mr-2">✚</span> DERMATOLOGY </span> <span className="flex items-center"> <span className="text-black mr-2">★</span> ORTHOPEDICS </span> <span className="flex items-center"> <span className="text-black mr-2">✚</span> NEUROLOGY </span> <span className="flex items-center"> <span className="text-black mr-2">★</span> ORTHOPEDICS </span> </div> </div> </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};



export default ServicesLayout2
