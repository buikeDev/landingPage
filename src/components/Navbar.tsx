import React, { useState } from "react";
import { Menu, X, Search, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent py-5 w-full top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#"
              className="text-2xl font-bold text-agency-dark flex items-center gap-2"
            >
              <span className="text-agency-blue">Smart</span>SEO
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="text-agency-dark hover:text-agency-blue font-medium px-4 py-2"
                    href="#home"
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="text-agency-dark hover:text-agency-blue font-medium px-4 py-2"
                    href="#portfolio"
                  >
                    Portfolio
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="text-agency-dark hover:text-agency-blue font-medium px-4 py-2"
                    href="#about"
                  >
                    Pages
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="text-agency-dark hover:text-agency-blue font-medium px-4 py-2"
                    href="#blog"
                  >
                    Blog
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="text-agency-dark hover:text-agency-blue font-medium px-4 py-2"
                    href="#contact"
                  >
                    Contacts
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Search and Contact */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-agency-dark hover:text-agency-blue">
              <Search className="h-5 w-5" />
            </button>

            <div className="flex items-center">
              <div className="flex items-center justify-center bg-blue-500 rounded-full p-2 mr-3">
                <Phone className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-medium">1 800 458 56 97</span>
            </div>

            <a
              href="#contact"
              className="bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-800 transition-all duration-300"
            >
              Let's talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6 text-agency-dark" />
              ) : (
                <Menu className="h-6 w-6 text-agency-dark" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden fixed left-0 right-0 bg-white shadow-md transition-all duration-300 ease-in-out",
            isMenuOpen ? "opacity-100 top-16" : "opacity-0 top-[-400px]"
          )}
        >
          <div className="flex flex-col space-y-4 p-6">
            <a
              href="#home"
              className="text-agency-dark hover:text-agency-blue"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#portfolio"
              className="text-agency-dark hover:text-agency-blue"
              onClick={toggleMenu}
            >
              Portfolio
            </a>
            <a
              href="#about"
              className="text-agency-dark hover:text-agency-blue"
              onClick={toggleMenu}
            >
              Pages
            </a>
            <a
              href="#blog"
              className="text-agency-dark hover:text-agency-blue"
              onClick={toggleMenu}
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-agency-dark hover:text-agency-blue"
              onClick={toggleMenu}
            >
              Contacts
            </a>
            <div className="flex items-center pt-2">
              <div className="flex items-center justify-center bg-blue-500 rounded-full p-2 mr-3">
                <Phone className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-medium">1 800 458 56 97</span>
            </div>
            <a
              href="#contact"
              className="bg-purple-700 text-white px-6 py-2 rounded-full text-center hover:bg-purple-800"
              onClick={toggleMenu}
            >
              Let's talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
