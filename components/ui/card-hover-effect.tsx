// @/components/ui/card-hover-effect.tsx - REVISED
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Award, Trophy, Globe, CheckCircle, Clock, Users, Shield, Zap } from "lucide-react";

// Icon mapping utility for achievements (Ensure this is available)
export const IconMap = {
    Trophy: Trophy,
    Globe: Globe,
    Zap: Zap,
    Shield: Shield,
    CheckCircle: CheckCircle,
    Clock: Clock,
    Handshake: Users,
    Award: Award,
    Lightbulb: Zap,
};

// --- MAIN HOVER EFFECT COMPONENT (Revised for Unified Content and Dark Theme) ---
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string; // Member Name
    description: string; // Member Bio (used in hover overlay)
    link: string;
    member: { // The custom data structure from page.tsx
        name: string;
        title: string;
        bio: string;
        image: string;
        achievements: { icon: keyof typeof IconMap, label: string }[];
        roleType: string;
    };
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={idx}
          className="relative group block p-2 w-full"
          style={{ height: '350px' }}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Fills the whole card area with a blurred gradient on hover */}
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-pink-400/30 block rounded-xl blur-lg"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          
          {/* Card Component: Dark background and shadow on hover */}
          <Card className="bg-slate-800 group-hover:shadow-2xl group-hover:shadow-blue-900/50 transition-shadow duration-300 relative h-full">
            
            {/* ------------------------------------------------------------- */}
            {/* MAIN CARD CONTENT (Always Visible - Dark Theme) */}
            {/* ------------------------------------------------------------- */}
            <div className="flex flex-col items-center p-6 sm:p-8">
                {/* Image */}
                <div className={cn("relative w-32 h-32 rounded-full overflow-hidden mb-4 border-[3px]", item.member.roleType === 'CEO' ? 'w-40 h-40 border-rose-500' : 'border-blue-500')}>
                    <Image
                        src={item.member.image}
                        alt={item.member.name}
                        fill
                        sizes="160px"
                        className="object-cover"
                    />
                </div>
                {/* Title and Role */}
                <CardTitle className="text-white mt-0 text-xl text-center">{item.member.name}</CardTitle>
                <CardSubtitle className={cn("text-center text-blue-400 dark:text-blue-400 mb-2", item.member.roleType === 'CEO' && 'text-rose-400 font-semibold')}>
                    {item.member.title}
                </CardSubtitle>

                {/* Achievements block - Primary Content */}
                <div className="flex space-x-3 mt-2 justify-center">
                    {item.member.achievements.slice(0, 2).map((achievement, a_idx) => {
                        const Icon = IconMap[achievement.icon as keyof typeof IconMap] || Award;
                        return (
                            <div key={a_idx} className="flex items-center space-x-1" title={achievement.label}>
                                <Icon className="h-4 w-4 text-amber-300" aria-label={achievement.label} />
                            </div>
                        )
                    })}
                </div>
            </div>
            
            {/* ------------------------------------------------------------- */}
            {/* HOVER OVERLAY: Detailed Bio (Back of card effect) */}
            {/* ------------------------------------------------------------- */}
            <div className="absolute inset-0 bg-slate-700/90 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-start text-left shadow-2xl z-30">
                <p className="text-lg font-bold mb-2 text-blue-300">
                    {item.member.title}
                </p>
                <p className="text-slate-200 italic leading-snug mb-4">
                    {item.member.bio}
                </p>
                
                {item.member.achievements.length > 0 && (
                    <div className="border-t border-slate-600 pt-2 space-y-1">
                        {item.member.achievements.map((achievement, a_idx) => {
                            const Icon = IconMap[achievement.icon as keyof typeof IconMap] || Award;
                            return (
                                <div key={a_idx} className="flex items-center text-xs text-slate-300">
                                    <Icon className="h-3 w-3 mr-1 text-green-400 flex-shrink-0" />
                                    <span>{achievement.label}</span>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};

// --- CARD COMPONENTS (Revised for Dark Theme) ---

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // Base dark card style
        "rounded-xl h-full w-full relative z-20 shadow-xl overflow-hidden border border-slate-700",
        className
      )}
    >
      <div className="relative z-10 h-full">
        <div className="p-0 h-full">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    // text-white for dark background
    <h4 className={cn("text-white font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardSubtitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    // text-blue-400 for a lighter primary color on dark background
    <p className={cn("text-sm text-blue-400 font-medium mb-3", className)}>
      {children}
    </p>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        // Light grey text for better contrast on dark theme
        "mt-2 text-slate-300 tracking-wide leading-relaxed text-sm line-clamp-4",
        className
      )}
    >
      {children}
    </p>
  );
};