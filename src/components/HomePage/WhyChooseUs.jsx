
const WhyChooseUs = () => {
  return (
    <section className="section-container bg-white">
      <h2 className="section-title">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div className="p-6 bg-spice-50 rounded-lg">
          <div className="w-16 h-16 mx-auto mb-4 bg-spice-500 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-center mb-3">Premium Quality</h3>
          <p className="text-gray-600 text-center">We source only the highest quality spices, ensuring authentic flavor and aroma in every batch.</p>
        </div>
        <div className="p-6 bg-spice-50 rounded-lg">
          <div className="w-16 h-16 mx-auto mb-4 bg-spice-500 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-center mb-3">Ethically Sourced</h3>
          <p className="text-gray-600 text-center">We maintain fair trade practices and work directly with farmers to ensure ethical sourcing.</p>
        </div>
        <div className="p-6 bg-spice-50 rounded-lg">
          <div className="w-16 h-16 mx-auto mb-4 bg-spice-500 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-center mb-3">Global Reach</h3>
          <p className="text-gray-600 text-center">With our extensive network, we export to over 30 countries across the globe.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
