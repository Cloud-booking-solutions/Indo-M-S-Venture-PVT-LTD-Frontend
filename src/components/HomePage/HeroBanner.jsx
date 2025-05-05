
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const bannerImages = [
  {
    url: "https://png.pngtree.com/background/20230611/original/pngtree-several-bowls-of-fresh-spiced-herbs-and-spices-picture-image_3143893.jpg",
    title: "Premium Indian Spices",
    subtitle: "Sourced directly from farmers across India",
  },
  {
    url: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=2670&auto=format&fit=crop",
    title: "Global Export Network",
    subtitle: "Delivering authentic flavors worldwide",
  },
  {
    url: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=2670&auto=format&fit=crop",
    title: "Quality Guaranteed",
    subtitle: "Certified pure and authentic spices",
  },
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === bannerImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? bannerImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {bannerImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-3xl px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-in">{image.title}</h1>
              <p className="text-xl md:text-2xl mb-8 animate-slide-in">{image.subtitle}</p>
              <Link to="/products">
                <Button className="bg-spice-500 hover:bg-spice-600 text-white px-8 py-6 text-lg rounded-md">
                  Explore Our Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <ArrowLeft />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <ArrowRight />
      </button>
      
      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
