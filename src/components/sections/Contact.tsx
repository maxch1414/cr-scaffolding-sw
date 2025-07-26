"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema } from "@/lib/schemas/contactForm";

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
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

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">First Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="First Name"
                            className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Last Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Last Name"
                            className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Email Address"
                          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="Phone Number"
                          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Project Details
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Project Details"
                          rows={4}
                          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-primary resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Quote Request"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
