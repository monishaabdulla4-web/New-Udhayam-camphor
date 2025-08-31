import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 via-yellow-100 to-white p-6">
      {/* Hero Section with Sunrise Logo */}
      <header className="text-center py-16 bg-gradient-to-r from-orange-500 via-yellow-400 to-red-400 rounded-2xl shadow-lg">
        <div className="flex justify-center items-center space-x-3">
          <Sun className="w-20 h-20 text-yellow-200 drop-shadow-md" />
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">New Udhayam Camphor</h1>
        </div>
        <p className="text-xl text-white font-medium mt-4 drop-shadow-md">Pure Energy • Awaken with Purity</p>
      </header>

      {/* About Section */}
      <main className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12">
        <Card className="shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-700 leading-relaxed">
              At <strong>New Udhayam Camphor</strong>, we are committed to providing
              pure camphor products that are free from harmful chemicals and synthetic
              fragrances. Our camphor is crafted to invoke divine consciousness,
              spreading positivity, serenity, and purity wherever it is used.
            </p>
          </CardContent>
        </Card>

        {/* Products Section */}
        <Card className="shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Premium Pure Camphor Tablets</li>
              <li>Round Camphor Blocks</li>
              <li>Event & Festival Packaging</li>
              <li>Wholesale Supply</li>
            </ul>
          </CardContent>
        </Card>
      </main>

      {/* Contact Section */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          Manufactured by: <strong>RH Agencies</strong><br />
          Bodhidharman Nagar, Villupuram 605602 <br />
          Phone: <a href="tel:+919524781249" className="text-green-700 font-medium">+91 95247 81249</a>
        </p>
        <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
          Call Now
        </Button>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-12">
        © {new Date().getFullYear()} New Udhayam Camphor. All rights reserved.
      </footer>
    </div>
  );
}
