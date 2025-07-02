import React, { useState, useEffect } from "react";
import { Linkedin, Twitter, Facebook } from "lucide-react";
import "../styles/testimonials.css";

const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    position: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 2,
    name: "Sarah Williams",
    position: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    position: "Marketing Manager",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
  },
];

const TeamMember = ({ member }: { member: (typeof teamMembers)[0] }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="aspect-w-4 aspect-h-5 relative group">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-72 object-cover object-center"
        />
        <div className="absolute inset-0 bg-agency-blue bg-opacity-0 group-hover:bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex space-x-3">
            <a
              href="#"
              className="bg-white p-3 rounded-full text-agency-blue hover:bg-agency-dark hover:text-white transition-all duration-300"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="bg-white p-3 rounded-full text-agency-blue hover:bg-agency-dark hover:text-white transition-all duration-300"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="bg-white p-3 rounded-full text-agency-blue hover:bg-agency-dark hover:text-white transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-agency-dark">{member.name}</h3>
        <p className="text-agency-blue">{member.position}</p>
      </div>
    </div>
  );
};

const testimonials = [
  {
    id: 1,
    image: "/profile/john doe.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "John Doe",
    position: "Expert",
  },
  {
    id: 2,
    image: "/paul freeman.jpg",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Jane Smith",
    position: "Specialist",
  },
  {
    id: 3,
    image: "/profile/sandy williams.jpg",
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Mike Johnson",
    position: "Consultant",
  },
];

const Team = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isEntering, setIsEntering] = useState(false);

  const nextSlide = () => {
    setIsEntering(true);
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIsEntering(true);
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (isEntering) {
      const timer = setTimeout(() => {
        setIsEntering(false);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isEntering]);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-100 mt-[5rem] mb-[5rem]">
      <div className="container mx-auto px-4 min-w-full flex items-center justify-center">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="nav-arrow  left-0 top-1/2  w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* Testimonial Content */}
        <div
          className={`testimonial-slide ${
            !isEntering ? "active" : ""
          } max-w-[80%] mx-auto gap-3`}
        >
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="testimonial-image w-24 h-24 rounded-full overflow-hidden mx-auto">
              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="mx-auto px-7">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              aliquam quasi iure temporibus voluptatem et porro tempore ex
              deleniti, qui odio quae distinctio libero quisquam perspiciatis
              cumque reiciendis illo autem.
            </span>
            {/* Quotation Mark */}
            <div className="mx auto text-center ">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-cyan-400"
              >
                <path
                  d="M14.4 28H19.2L16.8 36H12L14.4 28ZM26.4 28H31.2L28.8 36H24L26.4 28Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsEntering(true);
                  setCurrentSlide(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-violet-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="nav-arrow  right-0 top-1/2  w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Team;
