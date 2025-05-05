
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-spice-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Premium Indian Spices?</h2>
        <p className="text-xl mb-8">Contact us today to discuss your import/export requirements</p>
        <Link to="/contact">
          <Button className="bg-white text-spice-600 hover:bg-spice-100 px-8 py-3 text-lg font-medium rounded-md">
            Get in Touch
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
