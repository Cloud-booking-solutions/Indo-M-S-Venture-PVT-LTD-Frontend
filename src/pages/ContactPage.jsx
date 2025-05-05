import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Sanjay from '../assets/sanjay-contact.png';
import Mohammad from '../assets/mohammad-contact.png';

const ContactPage = () => {
  return (
    <>
      {/* Hero Section with Background */}
      <section className="relative h-[400px] md:h-[450px] flex items-center justify-center">
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1517646458010-ea6bd9f4a75f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BpY2VzfGVufDB8fDB8fHww)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>
  <div className="container relative z-10 text-center">
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
    <p className="text-xl text-white max-w-2xl mx-auto">
      We'd love to hear from you
    </p>
  </div>
</section>


      {/* Contact Form Section */}
      <section className="section-container bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <Input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="mt-1"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="john.doe@example.com"
                  className="mt-1"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  rows="4"
                  placeholder="Tell us what you need..."
                  className="mt-1"
                />
              </div>
              <Button className="bg-spice-600 hover:bg-spice-700">Send Message</Button>
            </form>
          </div>

          {/* Contact Information */}
{/* Contact Information */}
<div>
  <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
  <div className="space-y-4">
    <div>
      <h3 className="text-lg font-semibold">Address</h3>
      <div><b>Registered office:</b> 401, 4th floor, Archway building sopanbaug road, Balewadi, Pune-411045, India</div>
      <div><b>Corporate office:</b> Bhatshirgaon, Taluka-Shirala, District-Sangali, 415408, Maharashtra, India</div>
    </div>
    <div>
      <h3 className="text-lg font-semibold">Email</h3>
      <p className="text-gray-600">
        <a href="mailto:indo@indianspices.com" className="text-spice-600 hover:text-spice-800">
        indo@indianspices.com
        </a>
      </p>
    </div>
    <div>
      <h3 className="text-lg font-semibold">Phone</h3>
      <p className="text-gray-600">
        <a href="tel:+918600146527" className="text-spice-600 hover:text-spice-800">
        +91 8600146527
        </a>
      </p>
    </div>
  </div>

  {/* Images Below Contact Info */}
  <div className="mt-8 grid grid-cols-2 gap-4">
      <a href={Sanjay} target="_self">
        <img
          src={Sanjay}
          alt="Office 1"
          className="rounded-lg shadow-md w-full max-h-[200px] object-cover hover:opacity-90 transition"
        />
      </a>
      <a href={Mohammad} target="_self">
        <img
          src={Mohammad}
          alt="Office 2"
          className="rounded-lg shadow-md w-full max-h-[200px] object-cover hover:opacity-90 transition"
        />
      </a>
    </div>
</div>

        </div>
      </section>

      {/* Additional Support Section */}
      {/* <section className="bg-spice-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Looking for More Support?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Check out our FAQs or browse our support articles for quick answers.
          </p>
          <Button variant="outline" className="border-spice-600 text-spice-600 hover:bg-spice-50">
            Visit Support Center
          </Button>
        </div>
      </section> */}
    </>
  );
};

export default ContactPage;
