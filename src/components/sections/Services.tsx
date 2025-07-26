import { Shield, Truck, Users } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive scaffolding solutions for residential,
            commercial, and industrial projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Residential Scaffolding
            </h3>
            <p className="text-gray-600 mb-4">
              Safe and reliable scaffolding solutions for home renovations,
              repairs, and maintenance projects.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• House painting and repairs</li>
              <li>• Roof work and maintenance</li>
              <li>• Window and siding installation</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Truck className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Commercial Scaffolding
            </h3>
            <p className="text-gray-600 mb-4">
              Professional scaffolding services for office buildings, retail
              spaces, and commercial developments.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Office building maintenance</li>
              <li>• Retail store renovations</li>
              <li>• Multi-story construction</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Industrial Scaffolding
            </h3>
            <p className="text-gray-600 mb-4">
              Heavy-duty scaffolding solutions for industrial facilities,
              factories, and large-scale projects.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Factory maintenance</li>
              <li>• Industrial equipment access</li>
              <li>• Large-scale construction</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
