import React from 'react';
import { ShoppingCart, Star, Truck, Shield, Check, Award, Wrench } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Professional Therapy Bands Set",
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.8,
      reviews: 156,
      image: "https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Complete set of resistance bands for rehabilitation and strength training.",
      features: ["5 Resistance Levels", "Door Anchor Included", "Exercise Guide", "Carrying Case"]
    },
    {
      id: 2,
      name: "Electric Muscle Stimulator",
      price: 199.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 89,
      image: "https://images.pexels.com/photos/7659555/pexels-photo-7659555.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Professional-grade electrical muscle stimulation device for pain relief and recovery.",
      features: ["8 Therapy Modes", "LCD Display", "Rechargeable Battery", "FDA Approved"]
    },
    {
      id: 3,
      name: "Balance Training Board",
      price: 129.99,
      originalPrice: 159.99,
      rating: 4.7,
      reviews: 203,
      image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Advanced balance board for proprioception training and stability improvement.",
      features: ["360° Rotation", "Non-slip Surface", "Adjustable Difficulty", "Exercise App"]
    },
    {
      id: 4,
      name: "Therapeutic Heat Pad",
      price: 59.99,
      originalPrice: 79.99,
      rating: 4.6,
      reviews: 342,
      image: "https://images.pexels.com/photos/7659426/pexels-photo-7659426.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Moist heat therapy pad for muscle relaxation and pain management.",
      features: ["4 Heat Settings", "Auto Shut-off", "Machine Washable", "Large Coverage"]
    },
    {
      id: 5,
      name: "Posture Correction Device",
      price: 79.99,
      originalPrice: null,
      rating: 4.5,
      reviews: 178,
      image: "https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Smart posture corrector with vibration feedback for spinal alignment.",
      features: ["Smart Sensors", "App Connectivity", "Comfortable Design", "Progress Tracking"]
    },
    {
      id: 6,
      name: "Recovery Massage Gun",
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.8,
      reviews: 267,
      image: "https://images.pexels.com/photos/7659603/pexels-photo-7659603.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Professional percussion massage device for muscle recovery and tension relief.",
      features: ["5 Speed Levels", "6 Massage Heads", "Long Battery Life", "Quiet Operation"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-[#EDE5D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#47624F] mb-4">Professional Equipment & Products</h2>
          <p className="text-xl text-[#3F5C4B] max-w-3xl mx-auto">
            State-of-the-art equipment and products designed to enhance your rehabilitation journey
            and improve treatment outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#F4EEDF] hover:border-[#F4A259] transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3F5C4B]/60 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#47624F] mb-2">{product.name}</h3>
                <p className="text-[#3F5C4B] mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#F7F6F2] rounded-full flex items-center justify-center mr-2">
                      <Check className="h-4 w-4 text-[#47624F]" />
                    </div>
                    <span className="text-sm text-[#3F5C4B]">In Stock</span>
                  </div>
                  <button className="bg-[#F4A259] text-white px-4 py-2 rounded-lg hover:bg-[#F4A259]/90 transition-colors text-sm font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#47624F] border border-[#F4EEDF]/20 rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F4EEDF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-[#F4EEDF]" />
              </div>
              <h4 className="font-semibold text-[#F4EEDF] mb-2">Certified Quality</h4>
              <p className="text-sm text-[#F4EEDF]/80">All equipment meets international standards</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F4EEDF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-[#F4EEDF]" />
              </div>
              <h4 className="font-semibold text-[#F4EEDF] mb-2">Safety First</h4>
              <p className="text-sm text-[#F4EEDF]/80">Regular maintenance and safety checks</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F4EEDF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-[#F4EEDF]" />
              </div>
              <h4 className="font-semibold text-[#F4EEDF] mb-2">Expert Support</h4>
              <p className="text-sm text-[#F4EEDF]/80">Professional training and assistance</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-[#3F5C4B] mb-6">
            Need help choosing the right equipment for your needs?
          </p>
          <button className="bg-[#F4A259] text-white px-8 py-3 rounded-lg hover:bg-[#F4A259]/90 transition-colors font-medium">
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;