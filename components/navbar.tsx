"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, ArrowRight, ChevronDown } from "lucide-react"; // Added ChevronDown for dropdown icon
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  {
    title: "Services",
    href: "/services",
    submenu: [
      {
        title: "App Development",
        href: "/services/app-development",
        description: "Custom mobile and web applications",
      },
      {
        title: "Digital Transformation",
        href: "/services/digital-transformation",
        description: "End-to-end business modernization",
      },
      { title: "QA & Testing", href: "/services/qa-testing", description: "Comprehensive quality assurance services" },
      { title: "Support Services", href: "/services/support", description: "24/7 technical support and maintenance" },
      {
        title: "Technology Consulting",
        href: "/services/technology-consulting",
        description: "Strategic technology guidance",
      },
      { title: "AI Services", href: "/services/ai-services", description: "Artificial intelligence solutions" },
      { title: "DevOps", href: "/services/devops", description: "Development and operations automation" },
      { title: "Cloud Services", href: "/services/cloud-services", description: "Cloud migration and management" },
      {
        title: "Active Directory",
        href: "/services/active-directory",
        description: "Excellent work environment solutions",
      },
      { title: "Security", href: "/services/security", description: "Comprehensive security services" },
      {
        title: "Modern Deployment",
        href: "/services/modern-deployment",
        description: "Efficient deployment solutions",
      },
      { title: "Data Management", href: "/services/data-management", description: "Data organization and analytics" },
      { title: "All Services", href: "/services", description: "Explore all our services" }
    ],
  },
  {
    title: "Products",
    href: "/products",
  },
  { title: "Industries", href: "/industries" },
  { title: "Careers", href: "/careers" },
  // { title: "Testimonials", href: "/testimonials" },
  { title: "Contact Us", href: "/contact" },
];

export default function Navbar({ forceSolid }: { forceSolid?: boolean } = {}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [showClickAnimation, setShowClickAnimation] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isTransparentHeader = !forceSolid;

  useEffect(() => {
    setIsScrolled(!isTransparentHeader || window.scrollY > 10);
    const handleScroll = () => setIsScrolled(window.scrollY > 10 || !isTransparentHeader);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTransparentHeader]);

  const handleNavClick = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setClickPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setShowClickAnimation(true);
    setTimeout(() => setShowClickAnimation(false), 700);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 shadow-lg backdrop-blur-md"
          : "bg-transparent text-white"
      )}
    >
      <div className="container mx-auto px-4 flex h-13 items-center justify-between">
        <Link href="/" className="flex items-center">
          <motion.img
            src="/images/logo.png"
            alt="NathCorp Logo"
            className="h-14 w-48 object-contain md:h-16 md:w-56 lg:h-20 lg:w-64"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </Link>

        <div className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6">
              {navItems.map((item) => {
                // ✅ SPECIAL CASE: Services mega menu (auto collision handling)
                if (item.title === "Services" && item.submenu) {
                  return (
                    <NavigationMenuItem key={item.title}>
                      <Popover open={servicesOpen} onOpenChange={setServicesOpen}>
                        <PopoverTrigger asChild>
                          <button
                            type="button"
                            className={cn(
                              "text-sm font-medium bg-transparent px-0 py-0 hover:text-blue-600 transition-colors cursor-pointer",
                              !isScrolled && "text-white hover:text-white/80"
                            )}
                            onClick={(e) => {
                              handleNavClick(e as any);
                            }}
                          >
                            {item.title}
                            <ChevronDown className="inline-block ml-1 h-4 w-4 align-middle transition-transform duration-200" style={{ transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                          </button>
                        </PopoverTrigger>

                        <PopoverContent
                          side="bottom"
                          align="end"                // ✅ prefers opening towards left when near right edge
                          sideOffset={12}
                          collisionPadding={16}      // ✅ keeps 16px safe area from screen edges
                          className="p-0 border-0 bg-transparent shadow-none"
                        >
                          <div className="bg-white shadow-lg border border-gray-200 rounded-lg overflow-hidden w-[min(650px,calc(100vw-2rem))]">
                            <div className="p-4 sm:p-6 max-h-[70vh] overflow-y-auto">
                              <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                {item.submenu
                                  .filter((sub) => sub.title !== "All Services")
                                  .map((sub) => (
                                    <li key={sub.title}>
                                      <Link
                                        href={sub.href}
                                        className="block p-3 rounded-md hover:bg-slate-50 transition-colors group"
                                        onClick={(e) => {
                                          handleNavClick(e as any);
                                          setServicesOpen(false); // ✅ close after click
                                        }}
                                      >
                                        <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600">
                                          {sub.title}
                                        </div>
                                        {(sub as any).description && (
                                          <p className="text-xs text-slate-500 line-clamp-2">
                                            {(sub as any).description}
                                          </p>
                                        )}
                                      </Link>
                                    </li>
                                  ))}
                              </ul>
                            </div>

                            <div className="bg-slate-50 border-t border-gray-100 p-4">
                              <Link
                                href="/services"
                                className="flex items-center justify-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
                                onClick={(e) => {
                                  handleNavClick(e as any);
                                  setServicesOpen(false);
                                }}
                              >
                                Explore All Services
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </NavigationMenuItem>
                  );
                }

                // ✅ everything else stays same
                return item.submenu ? (
                  <NavigationMenuItem key={item.title}>
                    {/* your existing submenu code for other menus (if any) */}
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.title}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          "text-sm font-medium relative cursor-pointer hover:text-blue-600 transition-colors",
                          !isScrolled && "text-white hover:text-white/80",
                          pathname === item.href && "font-bold underline decoration-2 underline-offset-4"
                        )}
                        onClick={handleNavClick}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={!isScrolled ? "text-white hover:text-white/80" : ""}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-md overflow-y-auto">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-6 py-6">
              {navItems.map((item) => (
                <div key={item.title} className="border-b pb-2">
                  {item.submenu ? (
                    <div className="space-y-3">
                      <div className="text-lg font-medium flex items-center">
                        {item.title}
                        <ChevronDown className="ml-1 h-4 w-4 align-middle" />
                      </div>
                      <div className="pl-4 space-y-2">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            className={cn(
                              "block text-sm hover:text-blue-600 transition-colors",
                              sub.title === "All Services" ? "font-bold text-blue-600 pt-2" : ""
                            )}
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "text-lg font-medium transition-colors",
                        pathname === item.href && "font-bold text-blue-700"
                      )}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}