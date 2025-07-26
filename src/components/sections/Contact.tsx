"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300">
            Ready to start your project? Contact us for a free quote today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-primary mr-4" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-300">
                    <a href="tel:07393606806">07393 606806</a>
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-primary mr-4" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">
                    <a href="mailto:crscaffoldingsw@gmail.com">
                      crscaffoldingsw@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-primary mr-4" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-300">
                    <a
                      href="https://maps.app.goo.gl/mpkP6EswzDx54K1h7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Somerset, UK
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-primary mr-4" />
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p className="text-gray-300">Mon-Fri: 7:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Sat: 8:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Request a Quote</h3>

            {submitStatus === "success" && (
              <div className="mb-4 p-4 bg-green-600 text-white rounded-lg">
                Thank you! Your quote request has been sent successfully.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-4 p-4 bg-red-600 text-white rounded-lg">
                Sorry, there was an error sending your request. Please try
                again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-primary"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-primary"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-primary"
              />
              <textarea
                name="message"
                placeholder="Project Details"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-primary"
              ></textarea>
              <Button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "w-full"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Quote Request"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
