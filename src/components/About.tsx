import React from "react";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-slate-100 relative"
    >
      {/* Curved top shape */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-white rounded-t-[80px] transform -translate-y-19"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left side - Overlapping Images */}
          <div className="relative h-[500px] mb-10 md:mb-0">
            {/* Main image */}
            <div className="absolute top-0 left-0 w-[80%] h-[80%] z-10">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="Creative Team Meeting"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>

            {/* Second overlapping image */}
            <div className="absolute bottom-0 right-0 w-[70%] h-[65%] z-20">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Digital Design Work"
                className="w-full h-full object-cover rounded-lg shadow-xl  border-none"
              />
            </div>

            {/* Experience badge */}
          </div>

          {/* Right side - Content */}
          <div>
            <h6 className="text-agency-blue font-semibold mb-2 tracking-wider uppercase">
              CREATIVE AGENCY
            </h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-agency-dark">
              We help your business grow and stand out
            </h2>
            <p className="text-agency-gray mb-8">
              Founded in 2013, our agency has been at the forefront of digital
              innovation, helping businesses transform their online presence
              with cutting-edge design and development solutions that engage
              audiences and drive results.
            </p>

            {/* Features with icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-50 rounded-full">
                  <CheckCircle className="h-6 w-6 text-agency-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-agency-dark mb-1">
                    Creative Design
                  </h4>
                  <p className="text-sm text-agency-gray">
                    Eye-catching visuals that captivate your audience
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-50 rounded-full">
                  <CheckCircle className="h-6 w-6 text-agency-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-agency-dark mb-1">
                    Web Development
                  </h4>
                  <p className="text-sm text-agency-gray">
                    Robust solutions built for performance
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-50 rounded-full">
                  <CheckCircle className="h-6 w-6 text-agency-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-agency-dark mb-1">
                    Digital Marketing
                  </h4>
                  <p className="text-sm text-agency-gray">
                    Strategies that drive conversions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-50 rounded-full">
                  <CheckCircle className="h-6 w-6 text-agency-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-agency-dark mb-1">
                    Support & Maintenance
                  </h4>
                  <p className="text-sm text-agency-gray">
                    Always there when you need us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
