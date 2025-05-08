import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Sanjay from "../assets/sanjay-contact.png";
import Mohammad from "../assets/mohammad-contact.png";

// Validation schema using Yup
const schema = yup.object().shape({
  name: yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  message: yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
    alert("Message sent successfully!");
    reset();
  };

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
          <p className="text-xl text-white max-w-2xl mx-auto">We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-container bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <Input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="mt-1"
                  {...register("name")}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
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
                  {...register("email")}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
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
                  {...register("message")}
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
              </div>

              <Button type="submit" className="bg-spice-600 hover:bg-spice-700">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Address</h3>
                <div>
                  <b>Corporate office:</b> 401, 4th floor, Archway building sopanbaug road, Balewadi, Pune-411045, India
                </div>
                <div>
                  <b>Registered office:</b> Bhatshirgaon, Taluka-Shirala, District-Sangali, 415408, Maharashtra, India
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p>
                  <a href="mailto:indo@indianspices.com" className="text-spice-600 hover:text-spice-800">
                    indo@indianspices.com
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p>
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
    </>
  );
};

export default ContactPage;
