import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
} from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { Label } from "../ui/label";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-gray-600">
            Contact us for professional scaffolding solutions tailored to your
            project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Request a Quote</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24
                  hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="firstName"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      First Name
                    </Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label
                      htmlFor="lastName"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Last Name
                    </Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 mb-2 block"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700 mb-2 block"
                  >
                    Phone
                  </Label>
                  <Input id="phone" type="tel" placeholder="07393606806" />
                </div>
                <div>
                  <Label
                    htmlFor="projectDetails"
                    className="text-sm font-medium text-gray-700 mb-2 block"
                  >
                    Project Details
                  </Label>
                  <Textarea
                    id="projectDetails"
                    placeholder="Please describe your scaffolding needs, project timeline, and location..."
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Request Free Quote
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-orange-600" />
                  </div>
                  <a href="tel:07393606806">
                    <p className="font-medium text-gray-900">07393606806</p>
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-orange-600" />
                  </div>
                  <a href="mailto:info@crscaffoldingsw.co.uk">
                    <p className="font-medium text-gray-900">
                      info@crscaffoldingsw.co.uk
                    </p>
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Martock, Somerset
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span className="font-medium text-gray-900">
                    7:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="font-medium text-gray-900">
                    8:00 AM - 4:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
