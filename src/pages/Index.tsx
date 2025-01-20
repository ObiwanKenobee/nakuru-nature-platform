import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Leaf, Factory, Hotel, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const modules = [
    {
      title: "Agribusiness",
      description: "Empowering farmers with modern technology and market access",
      icon: Leaf,
      color: "bg-green-500",
    },
    {
      title: "Manufacturing",
      description: "Optimizing production and promoting sustainable practices",
      icon: Factory,
      color: "bg-blue-500",
    },
    {
      title: "Tourism",
      description: "Showcasing Nakuru's natural beauty and cultural heritage",
      icon: Hotel,
      color: "bg-yellow-500",
    },
    {
      title: "Youth Empowerment",
      description: "Building skills and creating opportunities for the future",
      icon: GraduationCap,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Modules Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modules.map((module) => (
              <div
                key={module.title}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className={`${module.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <module.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                <p className="text-gray-600 mb-4">{module.description}</p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "10,000+", label: "Farmers Supported" },
              { number: "500+", label: "Businesses Empowered" },
              { number: "50,000+", label: "Lives Impacted" },
            ].map((metric) => (
              <div key={metric.label} className="animate-counter-up">
                <div className="text-4xl font-bold mb-2">{metric.number}</div>
                <div className="text-lg text-gray-200">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;