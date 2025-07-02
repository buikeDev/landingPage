import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-blue-50 to-slate-100 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left Content - Text */}
          <div className="w-full lg:w-1/2">
            <span className="text-xs uppercase font-medium tracking-wider text-agency-blue">
              WHO WE ARE
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-agency-dark leading-tight">
              We provide best digital services
            </h2>

            <p className="text-agency-gray mb-8 text-lg">
              Our team of experienced professionals delivers comprehensive
              digital solutions designed to elevate your brand and drive
              business growth. From creative design to technical implementation,
              we ensure exceptional results that exceed expectations.
            </p>

            <div className="flex flex-wrap gap-8 mb-10">
              <div className="flex items-start gap-3">
                <div className="bg-blue-50 p-2 rounded-md mt-1">
                  <div className="w-2 h-2 bg-agency-blue rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-agency-dark">
                    Web Development
                  </h3>
                  <p className="text-agency-gray">
                    Custom websites and applications
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-50 p-2 rounded-md mt-1">
                  <div className="w-2 h-2 bg-agency-blue rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-agency-dark">
                    Design Services
                  </h3>
                  <p className="text-agency-gray">
                    Creative and responsive designs
                  </p>
                </div>
              </div>
            </div>

            <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-md transition-all px-8 py-6 h-auto group">
              <span className="mr-2">Discover Now</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Content - Images */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[500px] w-full">
              {/* Background decorative elements */}
              <div className="absolute top-12 right-12 w-4 h-4 bg-agency-blue rounded-full opacity-70"></div>
              <div className="absolute bottom-20 left-4 w-3 h-3 bg-teal-400 rounded-full opacity-70"></div>
              <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-blue-100 rounded-full opacity-70"></div>

              {/* Main image */}
              <div className="absolute top-0 right-0 w-5/6 h-4/5 rounded-xl overflow-hidden shadow-2xl z-10">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt="Digital services"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Secondary image */}
              <div className="absolute bottom-0 left-0 w-2/3 h-3/5 rounded-xl overflow-hidden shadow-xl z-0">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                  alt="Web development"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
