
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const exportInfo = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-spice-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Documentation",
    content: "Comprehensive guide to the necessary documentation for international spice trade, including certificates of origin, phytosanitary certificates, and quality certifications."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-spice-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Packaging",
    content: "Information on our industry-leading packaging solutions that preserve the quality and freshness of spices during transit and storage."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-spice-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Shipping",
    content: "Details about our global shipping network, including transportation methods, estimated delivery times, and tracking capabilities."
  }
];

const importProcess = [
  {
    step: "1",
    title: "Product Selection",
    description: "Browse our extensive catalog of imported spices and select the products that meet your requirements."
  },
  {
    step: "2",
    title: "Quotation Request",
    description: "Contact our sales team to request a detailed quotation for your selected products, including pricing, minimum order quantities, and delivery timelines."
  },
  {
    step: "3",
    title: "Sample Approval",
    description: "We provide samples for testing and approval to ensure the products meet your quality standards."
  },
  {
    step: "4",
    title: "Order Confirmation",
    description: "Once you approve the samples and terms, submit your purchase order to confirm the transaction."
  },
  {
    step: "5",
    title: "Delivery",
    description: "We handle all logistics and customs clearance to deliver the products to your specified location."
  }
];

const exportProcess = [
  {
    step: "1",
    title: "Initial Inquiry",
    description: "Contact us with your requirements for Indian spices, including varieties, quantities, and quality specifications."
  },
  {
    step: "2",
    title: "Quotation & Terms",
    description: "We provide a detailed quotation with pricing, packaging options, shipping methods, and payment terms."
  },
  {
    step: "3",
    title: "Order Processing",
    description: "Upon confirmation, we source the highest quality spices from our network of trusted farmers and suppliers."
  },
  {
    step: "4",
    title: "Quality Control",
    description: "All products undergo rigorous quality testing to meet international standards and your specific requirements."
  },
  {
    step: "5",
    title: "Export Documentation",
    description: "We prepare all necessary export documents, including certificates of origin, phytosanitary certificates, and customs documentation."
  },
  {
    step: "6",
    title: "Shipping & Delivery",
    description: "We coordinate with shipping partners to ensure timely delivery to your destination, with regular updates throughout the process."
  }
];

const faqItems = [
  {
    question: "What are the minimum order quantities for your products?",
    answer: "Minimum order quantities vary by product. For retail packaging, our standard MOQ is 100 kg per product. For bulk orders, we typically require 500 kg per product. Please contact our sales team for specific product inquiries."
  },
  {
    question: "How do you ensure the quality and authenticity of your spices?",
    answer: "We implement a comprehensive quality assurance process that includes sourcing from trusted farmers, rigorous testing at our state-of-the-art facilities, and compliance with international food safety standards. Every batch is tested for purity, aroma, and flavor before packaging and export."
  },
  {
    question: "What export markets do you currently serve?",
    answer: "We export to over 30 countries across North America, Europe, Middle East, Australia, and parts of Asia. Our extensive logistics network allows us to deliver to most international markets."
  },
  {
    question: "Do you offer organic certified spices?",
    answer: "Yes, we offer a wide range of organic certified spices that comply with USDA and EU organic standards. These products are sourced from certified organic farms and undergo separate processing to maintain their organic integrity."
  },
  {
    question: "What payment terms do you offer?",
    answer: "Our standard payment terms include advance payment for new customers and letter of credit or 50% advance and 50% before shipment for established customers. We can discuss alternative payment arrangements for long-term business relationships."
  }
];

const ExportsPage = () => {
  const [activeTab, setActiveTab] = useState("import");
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[450px] flex items-center justify-center">
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2670&auto=format&fit=crop)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>
  <div className="container relative z-10 text-center">
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Export & Import Process</h1>
    <p className="text-xl text-white max-w-2xl mx-auto">
      Learn about our seamless spice trading operations
    </p>
  </div>
</section>


      {/* Key Information */}
      <section className="section-container bg-white">
        <h2 className="section-title">Key Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {exportInfo.map((item, index) => (
            <div key={index} className="p-6 bg-spice-50 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-spice-900 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Tabs */}
      <section className="section-container bg-spice-50">
        <h2 className="section-title">Our Process</h2>
        
        <Tabs defaultValue="import" className="w-full max-w-4xl mx-auto mt-12">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="import" onClick={() => setActiveTab("import")}>Import Process</TabsTrigger>
            <TabsTrigger value="export" onClick={() => setActiveTab("export")}>Export Process</TabsTrigger>
          </TabsList>
          
          <TabsContent value="import" className="border rounded-lg p-6 bg-white">
            <h3 className="text-2xl font-bold text-spice-900 mb-6">How to Import Products from Us</h3>
            <div className="space-y-6">
              {importProcess.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-spice-600 text-white flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-spice-900">{step.title}</h4>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="export" className="border rounded-lg p-6 bg-white">
            <h3 className="text-2xl font-bold text-spice-900 mb-6">Our Export Process</h3>
            <div className="space-y-6">
              {exportProcess.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-spice-600 text-white flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-spice-900">{step.title}</h4>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* FAQ Section */}
      <section className="section-container bg-white">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto mt-12">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4 border border-gray-200 rounded-lg">
              <button
                className="flex justify-between w-full p-4 text-left text-lg font-medium focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span>{item.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${openFaq === index ? "transform rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all ${openFaq === index ? "max-h-96 p-4 pt-0" : "max-h-0"}`}>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-spice-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Trading?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're looking to import our premium spices or export your products, our team is ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-white text-spice-600 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/products"
              className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors"
            >
              Browse Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExportsPage;
