// services.tsx - FULL UPDATED CODE

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import {
  Cloud,
  Globe,
  Database,
  ArrowRight,
  Smartphone,
  Zap,
  X,
  Play,
  ArrowUpRight,
  Users,
  Calendar, // Added Calendar icon
} from "lucide-react";

import { ContactServiceModal } from "@/components/ContactServiceModal"; 
// Assuming Button component is needed if you don't want to use a simple button
import { Button } from "@/components/ui/button"; 


// --- Service Data (Keep existing) ---
const services = [
  // ... (Existing services array) ...
    {
        title: "Intelligent Automation & AI",
        description: "Building custom AI models and automating key workflows for improved efficiency and insight.",
        icon: Zap,
        href: "/services/ai-services",
    },
    {
        title: "Cloud Migration & Infrastructure",
        description: "Secure, scalable migration and optimization of your entire infrastructure to leading cloud providers.",
        icon: Cloud,
        href: "/services/cloud-services",
    },
    // {
    //     title: "Digital Transformation Strategy",
    //     description: "Driving business evolution through strategic technology implementation, from planning to execution.",
    //     icon: Globe,
    //     href: "/services/digital-transformation",
    // },
    {
        title: "Custom Application Development",
        description: "Designing and deploying high-performance, user-centric web and mobile applications.",
        icon: Smartphone,
        href: "/services/app-development",
    },
    {
        title: "All Services & Solutions",
        description: "Explore our full range of services tailored to your business needs.",
        icon: Zap,
        href: "/services",
    },
];

// ----------------------------------------------------------------------
// *** NEW: Floating Consultation Popup Component ***
// ----------------------------------------------------------------------

interface ConsultationPopupProps {
    onScheduleClick: () => void;
    onClose: () => void;
}

const ConsultationPopup: React.FC<ConsultationPopupProps> = ({ onScheduleClick, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 right-4 z-[55] w-72 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-2xl border border-blue-100/50"
            onClick={(e) => e.stopPropagation()} // Prevent event bubbling
        >
            <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-bold text-blue-700 flex items-center">
                    <Calendar className="w-4 h-4 mr-1 shrink-0" />
                    Ready to Talk?
                </h4>
                <button
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent event bubbling
                        onClose();
                    }}
                    className="text-slate-500 hover:text-slate-800 p-1 transition-colors rounded-full"
                    aria-label="Close popup"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
            <p className="text-xs text-slate-600 mb-3">
                Schedule a consultation to discuss your vision after watching the video.
            </p>
            <Button 
                onClick={(e) => {
                    e.stopPropagation(); // Prevent event bubbling
                    onScheduleClick();
                }}
                className="w-full h-auto py-2 text-xs bg-blue-600 hover:bg-blue-700 shadow-md"
            >
                Schedule Consultation Now
            </Button>
        </motion.div>
    );
}

// ----------------------------------------------------------------------
// *** UPDATED: ModalVideo Component ***
// ----------------------------------------------------------------------

// A simple component to handle the video popup modal
const ModalVideo = ({ open, onClose, videoSrc, poster, onVideoPopupOpen }) => {
    
    // State to control the floating consultation popup
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    
    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;
        
        if (open) {
            // Reset state every time the modal opens
            setIsPopupVisible(false);
            
            // Set a timer to show the popup after 3 seconds (3000ms)
            timer = setTimeout(() => {
                setIsPopupVisible(true);
            }, 3000); 
        } else {
            // Clear the timer and hide the popup when the modal closes
            if (timer) clearTimeout(timer);
            setIsPopupVisible(false);
        }

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [open]);

    if (!open) return null;

    // Function to handle clicking the "Schedule" button on the floating popup
    const handleScheduleClick = () => {
        setIsPopupVisible(false); // Close the popup first
        onClose(); // Close the video modal
        onVideoPopupOpen(); // Open the contact form modal
    };

    // Function to handle closing just the popup (not the video modal)
    const handlePopupClose = () => {
        setIsPopupVisible(false);
    };
    
    return (
        <>
            <div 
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-pointer"
                onClick={onClose} // Close on backdrop click
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full max-w-4xl aspect-video bg-slate-900 rounded-2xl shadow-2xl cursor-default"
                    onClick={(e) => e.stopPropagation()} // Prevent closing on modal content click
                >
                    <video
                        src={videoSrc}
                        poster={poster}
                        controls
                        autoPlay
                        playsInline
                        className="w-full h-full object-cover rounded-2xl"
                    />
                    <button
                        type="button"
                        onClick={onClose}
                        className="absolute -top-12 right-0 p-3 text-white rounded-full bg-black/30 hover:bg-black/50 transition-colors"
                        aria-label="Close video"
                    >
                        <X size={28} /> 
                    </button>
                </motion.div>
            </div>
            
            {/* Render the floating consultation popup OUTSIDE the video modal to prevent event bubbling */}
            <AnimatePresence>
                {isPopupVisible && (
                    <ConsultationPopup 
                        onScheduleClick={handleScheduleClick} 
                        onClose={handlePopupClose} 
                    />
                )}
            </AnimatePresence>
        </>
    );
};

// ----------------------------------------------------------------------
// --- Main Component ---
// ----------------------------------------------------------------------

const ServicesApp = () => { 
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  // New state to track the source of the contact form open event
  const [contactSource, setContactSource] = useState('Custom Requirement Discussion'); 
  
  const videoSrc ="/images/NathCorp-HA.mp4"; 
  const poster = "/images/Daryl.png";
  const placeholderImage = "/images/Daryl.png"; 

  // Function to handle opening the contact modal from the main page CTA
  const openCustomContact = () => {
      setContactSource('Custom Requirement Discussion');
      setIsContactOpen(true);
  }

  // Function to handle opening the contact modal from the video popup CTA
  const openVideoContact = () => {
      setContactSource('Video Consultation Request');
      setIsContactOpen(true);
  }
  
  // Function to ensure body scroll is locked when modal is open
  useEffect(() => {
    document.body.style.overflow = (isVideoOpen || isContactOpen) ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVideoOpen, isContactOpen]); 

  const serviceItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const ServiceItem = ({ service, index }) => (
    <motion.a
      href={service.href}
      className="group block py-4 sm:py-6 px-3 sm:px-4 -mx-3 sm:-mx-4 rounded-lg sm:rounded-xl transition-all duration-300 border-b border-white/10 last:border-b-0 hover:bg-white/5 hover:shadow-md hover:border-white/20"
      custom={index}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={serviceItemVariants}
    >
      <div className="flex items-start gap-3 sm:gap-6">
        {/* ... (Service Item Content) ... */}
        <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 font-extrabold text-sm sm:text-xl transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
          {`0${index + 1}`} 
        </div>
        
        <div className="flex-grow min-w-0">
          <h3 className="text-lg sm:text-2xl font-bold text-white transition-colors group-hover:text-blue-300 leading-tight">
            {service.title}
          </h3>
          <p className="text-xs sm:text-base text-white/70 mt-1 line-clamp-2 sm:line-clamp-none">
            {service.description}
          </p>
        </div>
        
        <div className="ml-2 sm:ml-4 pt-1 flex-shrink-0">
          <ArrowRight className="h-4 w-4 sm:h-6 sm:w-6 text-blue-400 group-hover:text-blue-300 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </motion.a>
  );

  return (
    <section 
      ref={ref}
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-inter selection:bg-blue-100"
      aria-label="Our Expertise and Services"
    >
      {/* ... (Background setup) ... */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#141A25] via-[#141A25] to-slate-50" />
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: "radial-gradient(#475569 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto relative z-10 px-2 sm:px-4">
        
        {/* ... (Header Section) ... */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-blue-400" />
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-xs">
              Our Expertise
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
              Comprehensive Solutions
            </span>
          </h2>
        </motion.div>

        {/* Two-column Layout: Services List (Left) + Video Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* Left: Services List (Single Column) */}
          <div className="lg:col-span-1 space-y-0 p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 shadow-xl shadow-slate-900/20">
            {services.map((service, i) => (
              <ServiceItem key={service.title} service={service} index={i} />
            ))}
            
            {/* Contact CTA at the bottom of the list container */}
            <motion.div
              className="mt-4 sm:mt-6 pt-4 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: services.length * 0.1 }}
            >
              <p className="text-base sm:text-lg font-medium text-white/80 mb-4">
                Need a specific service not listed?
              </p>
              <button 
                type="button"
                onClick={openCustomContact} // Use the new function to set source and open modal
                className="inline-flex items-center px-5 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-full font-medium text-sm sm:text-base shadow-lg shadow-blue-500/40 hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Discuss Custom Requirements
                <ArrowUpRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </motion.div>
          </div>

          {/* Right: Modern Video Preview / Featured CTA (Sticky on lg+) */}
          <div className="lg:col-span-1 flex items-start justify-center lg:justify-end lg:sticky lg:top-16 self-start w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full p-3 sm:p-4 bg-slate-800 rounded-xl sm:rounded-2xl shadow-2xl shadow-slate-900/40 text-white"
            >
                <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden group shadow-xl">
                    {/* ... (Image and Play Button) ... */}
                    <img
                        src={placeholderImage} 
                        alt="Featured Case Study Preview"
                        className="w-full h-full object-contain block transition-opacity duration-500 group-hover:opacity-70" 
                        onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src = poster; 
                        }}
                    />
                    <button
                      type="button"
                      onClick={() => setIsVideoOpen(true)}
                      aria-label="Open full video case study"
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 transform scale-100 group-hover:scale-105 group-hover:bg-white/30 ring-4 ring-white/30"
                    >
                      <Play className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 ml-1" fill="currentColor" />
                    </button>
                   
                </div>

                {/* Caption/Description */}
                <div className="mt-4 sm:mt-6">
                    <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                        Enterprise Digital Transformation Success
                    </h4>
                    <p className="text-slate-300 text-sm sm:text-base mt-2">
                        Discover how our comprehensive digital solutions—from cloud migration to AI automation—helped enterprises accelerate growth, reduce operational costs, and gain competitive advantage in their digital transformation journey.
                    </p>
                    <button 
                        onClick={() => setIsVideoOpen(true)}
                        className="mt-4 sm:mt-6 inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors group text-sm sm:text-base"
                    >
                        View Full Video
                        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ModalVideo component definition/usage - NOW PASSES THE OPEN CONTACT HANDLER */}
      <ModalVideo 
        open={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
        videoSrc={videoSrc} 
        poster={poster} 
        onVideoPopupOpen={openVideoContact} // <-- NEW PROP
      />

      {/* NEW CONTACT MODAL USAGE - Passes the dynamically set subject */}
      <ContactServiceModal 
        open={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        defaultSubject={contactSource} // <-- NEW PROP
      />
    </section>
  );
};

export default ServicesApp;