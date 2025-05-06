import Narghil from '../../assets/Narghil.jpg';

const WelcomeSection = () => {
  return (
    <>
      <section aria-label="Welcome Section" className="section-container bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Welcome to Indo M & S Venture PVT. LTD</h2>
          <p className="mt-8 text-lg text-gray-700">
            At Indo M & S Venture PVT. LTD, we connect the world with the rich flavors of authentic Indian spices. 
            Since our establishment in 1995, we have been dedicated to sourcing the finest quality spices 
            directly from farmers across India and delivering them to global markets.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Our passion for quality and authenticity has made us one of the leading import-export companies 
            specializing in premium Indian spices, herbs, and agricultural products.
          </p>
        </div>
      </section>

      <section aria-label="Brand Section" className="section-container bg-white">
        <h2 className="section-title">Our Brand</h2>
        <div className="mt-12 flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <img 
              src={Narghil}
              alt="NARGHIL" 
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <h3 className="text-3xl font-bold text-spice-900 mb-4">NARGHIL</h3>
            <p className="text-gray-700 text-lg mb-6">
              Premium coconut products sourced from tropical regions with exceptional quality. 
              Our NARGHIL brand represents the finest coconut-based products available in the market today.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              Each NARGHIL product undergoes rigorous quality control to ensure that you receive 
              only the best nature has to offer. From coconut oil to coconut-based snacks, 
              our product line is diverse and caters to all your coconut needs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeSection;
