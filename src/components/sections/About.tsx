import { Shield, Users, Clock, CheckCircle } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose CR Scaffolding SW?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              With over 15 years of experience in the scaffolding industry,
              we've built our reputation on safety, reliability, and exceptional
              service. Our team of certified professionals ensures every project
              meets the highest standards.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-orange-100 p-2 rounded-full">
                  <Shield className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Safety First
                  </h3>
                  <p className="text-sm text-gray-600">
                    OSHA compliant with zero-accident record
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-orange-100 p-2 rounded-full">
                  <Users className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Expert Team
                  </h3>
                  <p className="text-sm text-gray-600">
                    Certified and experienced professionals
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-orange-100 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    On-Time Delivery
                  </h3>
                  <p className="text-sm text-gray-600">
                    Reliable scheduling and quick setup
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-orange-100 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Quality Equipment
                  </h3>
                  <p className="text-sm text-gray-600">
                    Modern, well-maintained scaffolding systems
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold text-orange-600">10+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600">100%</div>
                <div className="text-sm text-gray-600">Safety Record</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Professional scaffolding team at work"
              width={500}
              height={400}
              className="rounded-lg shadow-xl"
            />
            {/* <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-gray-900">
                4.9 Customer Rating
              </p>
              <p className="text-xs text-gray-600">Based on 10+ reviews</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
