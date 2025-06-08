import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Recent Projects
          </h2>
          <p className="text-xl text-gray-600">
            See our scaffolding solutions in action
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="/placeholder.svg?height=200&width=400"
              alt="Commercial building scaffolding project"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Downtown Office Complex
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Complete scaffolding solution for 15-story office building
                renovation
              </p>
              <Badge variant="secondary">Commercial</Badge>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="/placeholder.svg?height=200&width=400"
              alt="Industrial facility scaffolding"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Manufacturing Plant Maintenance
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Heavy-duty scaffolding for industrial equipment maintenance
              </p>
              <Badge variant="secondary">Industrial</Badge>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="/placeholder.svg?height=200&width=400"
              alt="Residential scaffolding project"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Historic Home Restoration
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Careful scaffolding setup for delicate restoration work
              </p>
              <Badge variant="secondary">Residential</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
