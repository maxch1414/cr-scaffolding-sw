import { Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About CR Scaffolding
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We are a newly established scaffolding company committed to
              delivering exceptional service, safety, and reliability. Our team
              of certified professionals brings years of experience to every
              project, ensuring the highest standards of quality and safety.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              From small residential projects to large commercial developments,
              we provide customized scaffolding solutions that meet your
              specific needs and budget requirements.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-gray-600">Safety Record</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-gray-600">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  Certified
                </div>
                <div className="text-sm text-gray-600">Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Free</div>
                <div className="text-sm text-gray-600">Quotes</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-200 rounded-lg p-8">
              <div className="text-center">
                <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Why Choose Us?
                </h3>
                <ul className="text-left space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Certified and insured professionals
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Competitive pricing and transparent quotes
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Quick response times and flexible scheduling
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Quality equipment and materials
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Commitment to safety and compliance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
