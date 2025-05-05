import React from "react";
import Narghil from '../assets/Narghil.jpg';
import Sanjay from '../assets/Sanjay.jpg';
import Mohammad from '../assets/Mohammad.jpg';

const owners = [
  {
    name: "Sanjay Gurav",
    position: "Director",
    image: Sanjay,
    bio: "Sanjay Gurav founded Indo M & S Venture PVT. LTD in 2021 with a vision to bring authentic Indian spices to global markets. With over 25 years of experience in the spice industry, Sanjay Gurav has established the company as a trusted name in quality spice exports and imports."
  },
  {
    name: "Mohammad Kheirollahi Vash",
    position: "Director",
    image: Mohammad,
    bio: "Mohammad joined Indo M & S Venture PVT. LTD as a co-founder in 2021. With his expertise in supply chain management and international trade regulations, she has been instrumental in expanding the company's global presence and ensuring operational excellence."
  }
];

const milestones = [
  { year: "2021", event: "Founded Indo M & S Venture PVT. LTD in Pune" },
  { year: "2022", event: "Expanded export operations to Europe and Middle East" },
  { year: "2023", event: "Received ISO 9001 certification for quality management" },
  { year: "2024", event: "Opened new processing facility in Pune" },
  { year: "2025", event: "Launched premium organic spice product line" },
  // { year: "2020", event: "Expanded to North American and Australian markets" },
];

const AboutPage = () => {
  return (
    <>
      {/* Hero Section with Background */}
      <section className="relative h-[400px] md:h-[450px] flex items-center justify-center">
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: "url(https://images.unsplash.com/photo-1616225273962-05c320ca73d2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwc3BpY2V8ZW58MHx8MHx8fDA%3D)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>
  <div className="container relative z-10 text-center">
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
    <p className="text-xl text-white max-w-2xl mx-auto">
      Our journey from tradition to global excellence
    </p>
  </div>
</section>


      {/* Company Story */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Our Story</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2021 in the bustling city of Pune, Indo M & S Venture PVT. LTD began as a small family business with a simple mission: to share the rich flavors of authentic Indian spices with the world.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                What started as a modest operation has now grown into a trusted name in the global spice industry, with a presence in over 30 countries across 5 continents.
              </p>
              <p className="text-lg text-gray-700">
                Our success is built on our unwavering commitment to quality, authenticity, and sustainable sourcing practices that respect both the environment and the communities we work with.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={Narghil} 
                alt="Spice warehouse" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-container bg-spice-50">
        <h2 className="section-title">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-spice-500 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Quality</h3>
            <p className="text-gray-600 text-center">
              We are committed to delivering the highest quality spices, with rigorous testing and quality control at every stage.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-spice-500 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Sustainability</h3>
            <p className="text-gray-600 text-center">
              We believe in responsible sourcing and environmentally friendly practices that protect our planet for future generations.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-spice-500 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20h-5m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20h2v-2a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Community</h3>
            <p className="text-gray-600 text-center">
              We support the farming communities we work with through fair trade practices and community development initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-container bg-white">
        <h2 className="section-title">Meet Our Leaders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {owners.map((owner, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={owner.image} 
                  alt={owner.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-spice-900">{owner.name}</h3>
                <p className="text-spice-600 mb-4">{owner.position}</p>
                <p className="text-gray-600">{owner.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section-container bg-spice-50">
        <h2 className="section-title">Our Journey</h2>
        <div className="max-w-4xl mx-auto mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-spice-500"></div>
          
          {/* Timeline events */}
          {milestones.map((milestone, index) => (
            <div 
              key={index} 
              className={`relative mb-12 ${index % 2 === 0 ? 'text-right md:pr-12' : 'md:pl-12'} md:w-1/2 ${index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'}`}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-spice-500 z-10"></div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-spice-900">{milestone.year}</h3>
                <p className="text-gray-600 mt-2">{milestone.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-container bg-spice-600 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg">
                To connect the world with authentic Indian spices while upholding the highest standards of quality, 
                sustainability, and ethical business practices. We aim to preserve traditional farming methods 
                while embracing innovation in processing and distribution.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg">
                To be the most trusted global provider of premium Indian spices, recognized for our quality, 
                authenticity, and positive impact on farming communities and the environment. We aspire to make 
                authentic Indian flavors accessible to kitchens worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
