import React, { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "Mobile App Design",
    category: "UX/UI Design",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    id: 2,
    title: "E-commerce Website",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
  },
  {
    id: 3,
    title: "Brand Identity",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80",
  },
  {
    id: 4,
    title: "Marketing Campaign",
    category: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 5,
    title: "Dashboard Interface",
    category: "UX/UI Design",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 6,
    title: "Mobile Banking App",
    category: "App Development",
    image:
      "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

const PortfolioItem = ({ item }: { item: (typeof portfolioItems)[0] }) => {
  return (
    <div className="portfolio-item group relative overflow-hidden rounded-lg shadow-md">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-64 object-cover transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-agency-blue bg-opacity-0 group-hover:bg-opacity-80 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
        <div className="text-center text-white p-4">
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="mb-3">{item.category}</p>
          <button className="inline-flex items-center text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-agency-blue transition-all duration-300">
            View Project <ExternalLink className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (sliderRef.current) {
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    if (sliderRef.current) {
      const x = e.pageX - sliderRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-br from-blue-50 to-slate-100"
    >
      <div className="container mx-auto px-4">
        <div
          ref={sliderRef}
          className={`
            overflow-x-hidden relative
            cursor-[url('/cursor-grab.png'),_grab]
            ${
              isDragging ? "cursor-[url('/cursor-grabbing.png'),_grabbing]" : ""
            }
          `}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="flex gap-6 p-4">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className={`flex-shrink-0 w-80 bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 ${
                  index % 2 === 1 ? "h-[20rem]" : "h-[15rem]"
                }`}
              >
                <div className="relative h-full object-fill">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
