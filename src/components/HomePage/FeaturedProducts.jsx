
import { Link } from "react-router-dom";

const featuredSpices = [
  {
    name: "Apple",
    image: "https://images2.alphacoders.com/719/thumb-1920-719435.jpg",
    description: "Known for its healthy and freshness properties."
  },
  {
    name: "Saffron",
    image: "https://images.healthshots.com/healthshots/en/uploads/2022/05/27213440/benefits-of-saffron.jpg",
    description: "The world's most traded spice, rich in anti-oxidants, benefits skin."
  },
  {
    name: "Turmeric",
    image: "https://static.vecteezy.com/system/resources/previews/016/758/993/non_2x/turmeric-powder-indian-spice-free-photo.jpg",
    description: "Known for its healthy and antioxidant properties"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="section-container bg-spice-50">
      <h2 className="section-title">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {featuredSpices.map((spice, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-64 overflow-hidden">
              <img 
                src={spice.image} 
                alt={spice.name} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-spice-900 mb-2">{spice.name}</h3>
              <p className="text-gray-600 mb-4">{spice.description}</p>
              <Link 
                to="/products" 
                className="inline-block bg-spice-500 hover:bg-spice-600 text-white py-2 px-4 rounded transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
