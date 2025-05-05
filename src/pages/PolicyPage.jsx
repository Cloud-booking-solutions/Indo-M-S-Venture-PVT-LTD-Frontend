
import React, { useState } from "react";
import { X } from "lucide-react";
import PDF1 from '../assets/1.pdf';
import PDF2 from '../assets/2.pdf';
import PDF3 from '../assets/3.pdf';
import PDF4 from '../assets/4.pdf';
import PDF5 from '../assets/5.pdf';
import PDF6 from '../assets/6.pdf';
import PDF7 from '../assets/7.pdf';
import PDF8 from '../assets/8.pdf';


const certificates = [
  {
    id: "cert-1",
    name: "Udyam Registration Certificate",
   
    image: "https://t4.ftcdn.net/jpg/08/80/04/63/360_F_880046371_1nOeuyJwLUF58oUL3viHEZEIQOuiaqLQ.jpg",
    pdfUrl: PDF1
  },
  {
    id: "cert-2",
    name: "Indo m&S Ventures PVT. LTD",
    // description: "Hazard Analysis Critical Control Point Certification",
    image: "https://t4.ftcdn.net/jpg/08/80/04/63/360_F_880046371_1nOeuyJwLUF58oUL3viHEZEIQOuiaqLQ.jpg",
    pdfUrl: PDF2
  },
  {
    id: "cert-3",
    name: "Incorporation Certification",
    // description: "USDA & EU Organic Standards Compliance",
    image: "https://t4.ftcdn.net/jpg/08/80/04/63/360_F_880046371_1nOeuyJwLUF58oUL3viHEZEIQOuiaqLQ.jpg",
    pdfUrl: PDF3
  },
  {
    id: "cert-4",
    name: "Narghil Certification",
    // description: "Compliance with Fair Trade Standards",
    image: "https://t4.ftcdn.net/jpg/08/80/04/63/360_F_880046371_1nOeuyJwLUF58oUL3viHEZEIQOuiaqLQ.jpg",
    pdfUrl: PDF4
  },
  {
    id: "cert-5",
    name: "M&C Certification",
    // description: "USDA & EU Organic Standards Compliance",
    image: "https://t4.ftcdn.net/jpg/08/80/04/63/360_F_880046371_1nOeuyJwLUF58oUL3viHEZEIQOuiaqLQ.jpg",
    pdfUrl: PDF5
  },
  {
    id: "cert-6",
    name: "Registration Certification",
    // description: "USDA & EU Organic Standards Compliance",
    image: "https://t4.ftcdn.net/jpg/08/80/04/63/360_F_880046371_1nOeuyJwLUF58oUL3viHEZEIQOuiaqLQ.jpg",
    pdfUrl: PDF6
  },
  {
    id: "cert-7",
    name: "FSSAI License",
    // description: "USDA & EU Organic Standards Compliance",
    image: "https://t4.ftcdn.net/jpg/08/80/04/63/360_F_880046371_1nOeuyJwLUF58oUL3viHEZEIQOuiaqLQ.jpg",
    pdfUrl: PDF7
  },
  {
    id: "cert-8",
    name: "Apeda Certification",
    // description: "USDA & EU Organic Standards Compliance",
    image: "https://t4.ftcdn.net/jpg/08/80/04/63/360_F_880046371_1nOeuyJwLUF58oUL3viHEZEIQOuiaqLQ.jpg",
    pdfUrl: PDF8
  },
];

const policies = [
  {
    title: "Quality Assurance",
    content: "At Spice Trade Haven, we are committed to maintaining the highest quality standards for all our products. Our quality assurance process includes rigorous testing at multiple stages, from sourcing to packaging, to ensure that our spices meet international standards for purity, aroma, and flavor."
  },
  {
    title: "Sustainability Commitment",
    content: "We believe in responsible business practices that protect our planet for future generations. Our sustainability initiatives include working with farmers who practice sustainable agriculture, reducing our carbon footprint through efficient transportation and packaging, and investing in renewable energy for our processing facilities."
  },
  {
    title: "Ethical Sourcing",
    content: "We are committed to ethical sourcing practices that ensure fair compensation for farmers and workers throughout our supply chain. We work directly with farmer cooperatives and maintain long-term relationships based on trust, transparency, and mutual benefit."
  }
];

const PolicyPage = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  
  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate);
  };
  
  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <>
      {/* Hero Section with Background */}
      <section className="relative h-[400px] md:h-[450px] flex items-center justify-center">
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1716816211590-c15a328a5ff0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwaWNlc3xlbnwwfHwwfHx8MA%3D%3D)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>
  <div className="container relative z-10 text-center">
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Policies</h1>
    <p className="text-xl text-white max-w-2xl mx-auto">
      Our commitment to quality and service
    </p>
  </div>
</section>


      {/* Certificates Section */}
      <section className="section-container bg-white">
        <h2 className="section-title">Certifications</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Our commitment to quality and standards is validated by various international certifications.
          Click on any certificate to view the details.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => openCertificate(certificate)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-spice-900 mb-1">{certificate.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{certificate.description}</p>
                <div className="flex justify-end">
                  <span className="text-spice-600 text-sm font-medium">View Certificate →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Certificate Viewer Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-xl font-bold">{selectedCertificate.name}</h3>
                <button onClick={closeCertificate} className="p-1">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="flex-1 overflow-auto p-4">
                <div className="flex flex-col items-center">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.name}
                    className="max-h-[400px] object-contain mb-6"
                  />
                  <div className="text-center mb-6">
                    <p className="text-lg text-gray-700 mb-2">{selectedCertificate.description}</p>
                    <p className="text-gray-500">
                      This is a sample certificate display. In a real implementation, this would display the actual PDF document.
                    </p>
                  </div>
                  <a
                    href={selectedCertificate.pdfUrl}
                    className="px-4 py-2 bg-spice-600 text-white rounded hover:bg-spice-700 transition-colors"
                  >
                    Download Certificate
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Policy Statements */}
      <section className="section-container bg-spice-50">
        <h2 className="section-title">Our Policies</h2>
        <div className="max-w-4xl mx-auto mt-12 space-y-8">
          {policies.map((policy, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-spice-900 mb-4">{policy.title}</h3>
              <p className="text-gray-700">{policy.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance Statement */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Regulatory Compliance</h2>
          <p className="text-lg text-gray-700 mb-8">
            Spice Trade Haven adheres to all national and international regulations regarding food safety, 
            product labeling, and import/export requirements. Our products comply with the standards set by:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-spice-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">FDA</h3>
              <p className="text-gray-600">U.S. Food and Drug Administration standards for food imports</p>
            </div>
            <div className="p-6 bg-spice-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">FSSAI</h3>
              <p className="text-gray-600">Food Safety and Standards Authority of India regulations</p>
            </div>
            <div className="p-6 bg-spice-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">EU Standards</h3>
              <p className="text-gray-600">European Union food safety and import regulations</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PolicyPage;
