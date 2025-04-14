import React from "react";
import { ShoppingCart, MessageSquare, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Main Heading */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <h6 className="text-xs uppercase tracking-wider font-medium text-gray-700 mb-3">
                CREATIVE SOLUTIONS
              </h6>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1F2C] leading-tight">
                We make unique &<br /> memorable brands
              </h2>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              <p className="text-gray-600 text-lg">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque lorem in
                voluptate velit iusto odio dignissimos duci esse.
              </p>
              <p className="text-gray-600 text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae.
              </p>
              <div className="pt-4">
                <Button
                  variant="link"
                  className="text-gray-800 font-medium p-0 h-auto hover:no-underline"
                >
                  <span className="border-b border-gray-800">Read More</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
