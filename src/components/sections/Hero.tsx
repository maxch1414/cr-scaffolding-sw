import { Phone, Shield, CheckCircle, Users } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import { Badge } from "../ui/badge";

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-100">
              Trusted Since 2025
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Professional Scaffolding Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Safe, reliable, and efficient scaffolding services for
              construction, maintenance, and industrial projects. Licensed,
              insured, and committed to excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:07393606806"
                className={buttonVariants({ variant: "default", size: "lg" })}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 07393606806
              </a>
              <Button size="lg" variant="outline">
                Request Free Quote
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-8">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Fully Licensed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Insured</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg?height=500&width=600"
              alt="Professional scaffolding installation"
              width={600}
              height={500}
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-2 rounded-full">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">10+ Projects</p>
                  <p className="text-sm text-gray-600">
                    Completed Successfully
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
