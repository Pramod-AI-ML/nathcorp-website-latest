import React, { useRef, useState, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

// --- Utility + Data (unchanged) ---

const useIsAvailable = (hook: any) => typeof hook === "function";

const MotionWrapper = ({ children, animateProps, className = "", style = {}, ...rest }) => {
  const isMotionAvailable = useIsAvailable(motion);
  const Wrapper: any = isMotionAvailable ? motion.div : "div";
  const motionProps = isMotionAvailable ? animateProps : {};
  return (
    <Wrapper className={className} style={style} {...motionProps} {...rest}>
      {children}
    </Wrapper>
  );
};

const clientLogos = [
  {
    name: "3M",
    logo: "/images/3m-logo.png",
    width: 120,
    height: 60,
    description:
      "A global science and manufacturing company known for innovative products across healthcare, electronics, safety, consumer goods, and industrial solutions. Creator of Post-it, N95 masks, and advanced materials.",
  },
  {
    name: "Hawaiian Airlines",
    logo: "/images/hawaiian-airlines-logo.png",
    width: 140,
    height: 60,
    description:
      "Hawaii’s largest and longest-serving airline, operating inter-island, U.S. mainland, and international flights. Known for reliability, hospitality, and strong safety records.",
  },
  {
    name: "Technicolor",
    logo: "/images/technicolor-logo.png",
    width: 160,
    height: 60,
    description:
      "A global creative and technology company known for film color technology, VFX, animation, and post-production services. Works with major studios and entertainment brands worldwide.",
  },
  {
    name: "Toyota",
    logo: "/images/toyota-logo.png",
    width: 120,
    height: 60,
    description:
      "One of the world’s largest automotive manufacturers. Known for reliable vehicles, hybrid innovation (Prius), and pioneering lean manufacturing.",
  },
  {
    name: "Allergan",
    logo: "/images/allergan-logo.png",
    width: 140,
    height: 60,
    description:
      "A global pharmaceutical and medical aesthetics company. Known for products in eye care, neurology, gastroenterology, and aesthetics (including Botox).",
  },
  {
    name: "Intuit",
    logo: "/images/intuit-logo.png",
    width: 120,
    height: 60,
    description:
      "A leading financial-software company known for TurboTax, QuickBooks, and Mint. Provides accounting, tax, and personal finance solutions for individuals and businesses.",
  },
  // {
  //   name: "Hanson Spirits",
  //   logo: "/images/hanson-spirits-logo.png",
  //   width: 100,
  //   height: 60,
  //   description:
  //     "A craft spirits brand known for premium vodka and organic, small-batch spirits. Recognized for sustainability and clean, high-quality ingredients.",
  // },
  {
    name: "Sharp",
    logo: "/images/sharp-logo.png",
    width: 120,
    height: 60,
    description:
      "A global electronics and technology manufacturer. Known for home appliances, display technology, office electronics, and consumer devices.",
  },
  {
    name: "Universal Music Group",
    logo: "/images/Universal-Music.png",
    width: 160,
    height: 150,
    description:
      "The world’s largest music company representing global artists and labels. Provides music distribution, publishing, and entertainment services.",
  },
  {
    name: "Zions Bank",
    logo: "/images/zions-bank-logo.png",
    width: 140,
    height: 60,
    description:
      "A major U.S. regional bank providing consumer and commercial banking, lending, and financial services. Known for serving businesses in the western United States.",
  },
  {
    name: "First Hawaiian Bank",
    logo: "/images/FirstBank.png",
    width: 160,
    height: 60,
    description:
      "Hawaii’s oldest and largest bank offering personal, business, and wealth management services. Known for strong local presence and customer service.",
  },
  // {
  //   name: "Edwards",
  //   logo: "/images/edwards-logo.png",
  //   width: 140,
  //   height: 60,
  //   description:
  //     "A leading medical device company specializing in heart valve therapies and critical care technologies. Recognized for innovations in cardiovascular treatments.",
  // },
  {
    name: "Western Digital",
    logo: "/images/Westernd.png",
    width: 160,
    height: 60,
    description:
      "A global leader in data storage solutions. Produces HDDs, SSDs, and enterprise storage systems for consumers and businesses.",
  },
  {
    name: "AAA",
    logo: "/images/aaa-logo.png",
    width: 120,
    height: 60,
    description:
      "A membership-based organization providing roadside assistance, auto insurance, travel planning, and driving-safety services across the U.S.",
  },
  {
    name: "OCLC",
    logo: "/images/OCLC.png",
    width: 140,
    height: 60,
    description:
      "A global library cooperative offering cataloging, data services, and research tools. Known for WorldCat — the world’s largest library database.",
  },
    {
      name: "SanDisk",
      logo: "/images/sandisk.png",
      width: 140,
      height: 60,
     description:
  "SanDisk is a U.S. flash-memory company (Milpitas, CA) making memory cards, USB drives, and SSDs; founded in 1988 and later spun off from Western Digital in 2025.",
    },
    {
      name: "University of Washington",
      logo: "/images/UOW.png",
      width: 140,
      height: 60,
      description:
  "The University of Washington is a public research university in Seattle, founded in 1861, known for academic excellence and major contributions to science, medicine, and technology.",
    },
    {
      name: "LA Fitness",
      logo: "/images/LA-Fitness.png",
      width: 140,
      height: 60,
description:
  "LA Fitness is a privately owned U.S. health club chain (founded 1984) with 700+ clubs in the U.S. and Canada, offering classes, training, and full gym facilities.",
    },
    {
      name: "LA County Sheriff's Department",
      logo: "/images/Sheriff.png",
      width: 140,
      height: 60,
      description:
  "The Los Angeles County Sheriff's Department is the largest U.S. sheriff’s agency, providing law enforcement across Los Angeles County for unincorporated areas and contract cities.",
    },
    {
      name: "Green Dot",
      logo: "/images/GreenDot.png",
      width: 140,
      height: 60,
      description:
  "Green Dot Corporation is an Austin-based fintech and bank holding company providing prepaid debit cards, banking services, and payment solutions across the U.S.",
    },
];

const CustomButton = ({ children, href, className = "" }) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center font-semibold rounded-full px-4 py-2 transition-all duration-300 ${className}`}
  >
    {children}
  </a>
);

// --- Component ---

const PortfolioComponent = () => {
  const ref = useRef(null);
  const isUseInViewAvailable = useIsAvailable(useInView);
  const isInView = isUseInViewAvailable ? useInView(ref, { once: true, amount: 0.2 }) : true;

  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  const isMotionAvailable = useIsAvailable(motion);
  const clientsToShow = useMemo(() => clientLogos, []);

  const getMotionProps = (initialProps: any) => (isMotionAvailable ? initialProps : {});

  const renderCard = (client, index: number) => {
    const flipState = flipped[client.name];

    const cardAnimation = isMotionAvailable
      ? {
          animate: { rotateY: flipState ? 180 : 0, scale: flipState ? 1.08 : 1 },
          transition: { duration: 0.6, type: "spring", stiffness: 120, damping: 18 },
        }
      : {};

    const entranceAnimation = getMotionProps({
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay: index * 0.08 },
      viewport: { once: true },
    });

    return (
      <MotionWrapper
        key={client.name}
        className={`${flipState ? "h-auto" : "h-32 md:h-40 lg:h-48"} cursor-default`}
        onMouseEnter={() => setFlipped((prev) => ({ ...prev, [client.name]: true }))}
        onMouseLeave={() => setFlipped((prev) => ({ ...prev, [client.name]: false }))}
        onClick={() => setFlipped((prev) => ({ ...prev, [client.name]: !prev[client.name] }))}
        animateProps={entranceAnimation}
      >
        <MotionWrapper
          className="relative w-full h-full cursor-pointer rounded-xl overflow-visible"
          animateProps={cardAnimation}
          style={{
            transformStyle: "preserve-3d",
            perspective: 1000,
            zIndex: flipState ? 40 : 1,
            minHeight: flipState ? "18rem" : "8rem",
            transformOrigin: "center center",
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 bg-white rounded-xl border border-slate-200 flex items-center justify-center p-2 lg:p-4 shadow-sm hover:shadow-lg transition-all duration-300 transform"
            style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          >
            <img
              src={client.logo || "https://placehold.co/120x60/1e293b/ffffff?text=Logo"}
              alt={`${client.name} logo`}
              width={client.width}
              height={client.height}
              className={`object-contain max-h-24 transition-opacity duration-300 ${
                ['Universal Music Group', 'First Hawaiian Bank', 'Western Digital'].includes(client.name)
                  ? 'opacity-100 filter brightness-110 contrast-110'
                  : 'opacity-90 group-hover:opacity-100'
              }`}
              onError={(e: any) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/120x60/1e293b/ffffff?text=Logo";
              }}
            />
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-xl border border-cyan-500 flex flex-col justify-center p-3 lg:p-4 shadow-xl"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <h3 className="text-white font-bold text-sm mb-2 text-center border-b border-white/20 pb-1">
              {client.name}
            </h3>
            {/* IMPORTANT CHANGE: removed line-clamp so full text shows */}
            <p className="text-cyan-50 text-xs md:text-sm text-left leading-snug">
              {client.description}
            </p>
          </div>
        </MotionWrapper>
      </MotionWrapper>
    );
  };

  return (
    <section className="py-20 bg-slate-50 overflow-visible text-slate-900" ref={ref}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <MotionWrapper
          {...getMotionProps({
            initial: { opacity: 0, y: 20 },
            animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
            transition: { duration: 0.8 },
          })}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-800">Trusted by Industry Leaders</h2>
        </MotionWrapper>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4 lg:gap-5 mt-12 overflow-visible">
          {clientsToShow.map(renderCard)}
        </div>

        {/* CTA */}
        <MotionWrapper
          {...getMotionProps({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.3 },
            viewport: { once: true },
          })}
          className="flex justify-center mt-20"
        >
          <CustomButton
            href="/industries"
            className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 px-8 py-3.5 text-base font-medium shadow-lg shadow-cyan-500/50"
          >
            Explore More
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </CustomButton>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default PortfolioComponent;
